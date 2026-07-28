import { existsSync, mkdirSync, renameSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const workspaceRoot = fileURLToPath(new URL("../..", import.meta.url));
const cacheRoot = path.join(workspaceRoot, "official-reference");

const repositories = [
  {
    name: "TypeScript 英文官方文档",
    url: "https://github.com/microsoft/TypeScript-Website.git",
    branch: "v2",
    directory: path.join(cacheRoot, "typescript-website"),
    sparsePaths: [
      "packages/documentation/copy/en",
      "packages/tsconfig-reference/copy/en",
      "packages/tsconfig-reference/data",
    ],
  },
  {
    name: "TypeScript 官方中文本地化",
    url: "https://github.com/microsoft/TypeScript-Website-Localizations.git",
    branch: "main",
    directory: path.join(cacheRoot, "typescript-localizations"),
    sparsePaths: ["docs/documentation/zh", "docs/tsconfig/zh"],
  },
];

mkdirSync(cacheRoot, { recursive: true });

for (const repository of repositories) {
  const gitDirectory = path.join(repository.directory, ".git");

  if (existsSync(repository.directory) && !existsSync(gitDirectory)) {
    const backupDirectory = `${repository.directory}.incomplete-${Date.now()}`;
    renameSync(repository.directory, backupDirectory);
    console.warn(
      `发现不是 Git 仓库的残留目录，已保留为：${backupDirectory}`,
    );
  }

  if (!existsSync(gitDirectory)) {
    run("git", [
      "clone",
      "--depth",
      "1",
      "--filter=blob:none",
      "--sparse",
      "--branch",
      repository.branch,
      repository.url,
      repository.directory,
    ]);
  } else {
    runGit(repository.directory, ["pull", "--ff-only"]);
  }

  runGit(repository.directory, [
    "sparse-checkout",
    "set",
    ...repository.sparsePaths,
  ]);

  const revision = captureGit(repository.directory, [
    "rev-parse",
    "--short=12",
    "HEAD",
  ]);
  console.log(`✓ ${repository.name}: ${revision}`);
}

run(process.execPath, [
  path.join(workspaceRoot, "beginner", "scripts", "build-official-reader.mjs"),
]);

console.log("");
console.log(`本地资料：${cacheRoot}`);
console.log("该目录已被 .gitignore 排除，不会让练习仓库或 GitHub 提交变大。");
console.log("官方文档内容遵循 CC BY 4.0；仓库代码遵循 MIT。");

function runGit(directory, args) {
  run("git", [
    "-c",
    `safe.directory=${toGitPath(directory)}`,
    "-C",
    directory,
    ...args,
  ]);
}

function captureGit(directory, args) {
  const result = spawnSync(
    "git",
    [
      "-c",
      `safe.directory=${toGitPath(directory)}`,
      "-C",
      directory,
      ...args,
    ],
    {
      cwd: workspaceRoot,
      encoding: "utf8",
      windowsHide: true,
    },
  );

  if (result.status !== 0) {
    process.stderr.write(result.stderr ?? "");
    process.exit(result.status ?? 1);
  }

  return result.stdout.trim();
}

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: workspaceRoot,
    stdio: "inherit",
    windowsHide: true,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function toGitPath(value) {
  return value.replaceAll("\\", "/");
}
