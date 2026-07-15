import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = fileURLToPath(new URL("..", import.meta.url));
const manifest = path.join(root, "current-day.json");
const days = Array.from(
  { length: 21 },
  (_, index) => `day${String(index + 1).padStart(2, "0")}`,
);

function git(args, capture = false) {
  const result = spawnSync("git", ["-c", `safe.directory=${root}`, ...args], {
    cwd: root,
    encoding: capture ? "utf8" : undefined,
    stdio: capture ? "pipe" : "inherit",
    shell: false,
  });
  if (result.status !== 0) {
    const detail = capture ? String(result.stderr || result.stdout).trim() : "";
    throw new Error(
      `git ${args.join(" ")} failed${detail ? `: ${detail}` : ""}`,
    );
  }
  return capture ? String(result.stdout).trim() : "";
}

function writeCurrent(day, mode) {
  writeFileSync(
    manifest,
    `${JSON.stringify({ day, mode }, null, 2)}\n`,
    "utf8",
  );
}

const repositoryRoot = path.resolve(
  git(["rev-parse", "--show-toplevel"], true),
);
if (repositoryRoot.toLowerCase() !== path.resolve(root).toLowerCase()) {
  throw new Error(
    "Run this command inside the standalone typescript_practice repository.",
  );
}
if (git(["branch", "--show-current"], true) !== "main") {
  throw new Error(
    "Switch to the main branch before generating learning branches.",
  );
}
if (git(["status", "--porcelain"], true)) {
  throw new Error(
    "Commit or stash all changes before generating learning branches.",
  );
}

const existing = new Set(
  git(["branch", "--format=%(refname:short)"], true)
    .split(/\r?\n/)
    .filter(Boolean),
);
const targets = days.flatMap((day) => [day, `solution/${day}`]);
const conflicts = targets.filter((branch) => existing.has(branch));
if (conflicts.length > 0) {
  throw new Error(
    `Refusing to overwrite existing branches: ${conflicts.join(", ")}`,
  );
}

try {
  for (const day of days) {
    git(["switch", "--create", day, "main"]);
    writeCurrent(day, "practice");
    git(["add", "current-day.json"]);
    git(["commit", "-m", `chore: activate ${day} practice`]);
    git(["switch", "main"]);

    git(["switch", "--create", `solution/${day}`, "main"]);
    writeCurrent(day, "solution");
    git(["add", "current-day.json"]);
    git(["commit", "-m", `chore: activate ${day} solution`]);
    git(["switch", "main"]);
  }
} finally {
  try {
    git(["switch", "main"]);
  } catch {
    // Preserve the original failure if recovery is not possible.
  }
}

console.log(
  `Created ${targets.length} learning branches. Review with: git branch --list`,
);
