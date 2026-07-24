import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const beginnerRoot = fileURLToPath(new URL("..", import.meta.url));
const workspaceRoot = path.dirname(beginnerRoot);
const runner = fileURLToPath(new URL("./run.mjs", import.meta.url));
const candidate = process.argv.slice(2).findLast((value) => /\.ts$/i.test(value));
if (!candidate) fail("没有收到 TypeScript 文件。请在 example.ts 或 practiceXX 目录中的文件上右击 Run Code。");
const target = path.resolve(candidate);
if (!existsSync(target)) fail(`找不到文件：${target}`);
const relative = path.relative(beginnerRoot, target);
if (relative.startsWith("..") || path.isAbsolute(relative)) fail("只能运行 beginner 课程文件。");
const normalized = relative.replaceAll("\\", "/");
const exampleMatch = /^(day\d{2})\/example\.ts$/i.exec(normalized);
const exerciseMatch = /^(day\d{2})\/(practice\d{2})\/(practice|solution)\.ts$/i.exec(normalized);
let args;
if (exampleMatch) args = [runner, "example", exampleMatch[1].toLowerCase()];
else if (exerciseMatch) args = [runner, exerciseMatch[3].toLowerCase(), exerciseMatch[1].toLowerCase(), exerciseMatch[2].toLowerCase()];
else fail("请右击 dayXX/example.ts 或 practiceXX/practice.ts；也可右击 solution.ts 检查带 TODO 的解题结构，辅助模块不单独运行。");
const result = spawnSync(process.execPath, args, { cwd: workspaceRoot, stdio: "inherit", windowsHide: true });
if (result.error) fail(result.error.message);
process.exitCode = result.status ?? 1;
function fail(message) { console.error(`右键运行失败：${message}`); process.exit(1); }
