import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const beginnerRoot = fileURLToPath(new URL("..", import.meta.url));
const workspaceRoot = path.dirname(beginnerRoot);
const runner = fileURLToPath(new URL("./run.mjs", import.meta.url));
const candidate = process.argv.slice(2).findLast((value) => /\.ts$/i.test(value));

if (!candidate) {
  fail("没有收到要运行的 TypeScript 文件。请在课程文件上右击并选择 Run Code。");
}

const target = path.resolve(candidate);
if (!existsSync(target)) fail(`找不到文件：${target}`);

const relative = path.relative(beginnerRoot, target);
if (relative.startsWith("..") || path.isAbsolute(relative)) {
  fail("只能用此入口运行 beginner 课程中的文件。");
}

const normalized = relative.replaceAll("\\", "/");
const match = /^(day\d{2})\/(example|practice|solution)\.ts$/i.exec(normalized);
if (!match) {
  fail(
    "请右击当天的 example.ts、practice.ts 或 solution.ts；辅助模块不作为独立入口运行。",
  );
}

const [, day, mode] = match;
const result = spawnSync(process.execPath, [runner, mode.toLowerCase(), day], {
  cwd: workspaceRoot,
  stdio: "inherit",
  windowsHide: true,
});

if (result.error) fail(result.error.message);
process.exitCode = result.status ?? 1;

function fail(message) {
  console.error(`右键运行失败：${message}`);
  process.exit(1);
}
