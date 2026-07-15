import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = fileURLToPath(new URL("..", import.meta.url));
const current = JSON.parse(
  readFileSync(path.join(root, "current-day.json"), "utf8"),
);

if (current.mode === "index" || !current.day) {
  console.log("main is the course index branch.");
  console.log("Run `git switch day01`, then `npm run current`.");
  process.exit(0);
}

const source =
  current.mode === "solution"
    ? path.join(root, "solutions", `${current.day}.ts`)
    : path.join(root, "days", current.day, "practice.ts");
const tsx = fileURLToPath(import.meta.resolve("tsx/cli"));
const result = spawnSync(process.execPath, [tsx, source], {
  cwd: root,
  stdio: "inherit",
});

process.exitCode = result.status ?? 1;
