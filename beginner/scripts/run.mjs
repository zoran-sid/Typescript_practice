import { spawnSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";
import ts from "typescript";

const beginnerRoot = fileURLToPath(new URL("..", import.meta.url));
const validModes = new Set(["practice", "example", "solution"]);
const mode = process.argv[2] ?? "practice";
const day = normalizeDay(process.argv[3] ?? "");

try {
  process.exitCode = await main();
} catch (error) {
  console.error("课程运行器发生了未预期的错误。");
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}

async function main() {
  const days = discoverDays();
  if (!validModes.has(mode) || !day || process.argv[4] !== undefined) {
    printUsage(days);
    return 1;
  }
  if (!days.includes(day)) {
    console.error(`没有找到 ${day} 的课程目录。`);
    printAvailableDays(days);
    return 1;
  }

  const checkPath = path.join(beginnerRoot, "checks", `${day}.mjs`);
  if (!existsSync(checkPath)) return courseError(`缺少检查文件 checks/${day}.mjs。`);

  const check = (await import(pathToFileURL(checkPath).href)).default;
  const errors = validateCheck(check);
  if (errors.length > 0) {
    console.error(`${displayDay(day)} 的课程检查结构不完整：`);
    errors.forEach((message) => console.error(`  - ${message}`));
    console.error("这属于课程文件问题，不是你的练习答案造成的。");
    return 1;
  }

  const isExample = mode === "example";
  const source = path.join(beginnerRoot, day, `${mode}.ts`);
  const label = isExample ? `${displayDay(day)} 示例` : `${displayDay(day)} 独立练习`;
  return runSource({
    source,
    label: mode === "solution" ? `${displayDay(day)} \u53c2\u8003\u7b54\u6848` : label,
    expected: isExample ? check.exampleExpected : check.expected,
    success: isExample
      ? `示例运行完成。接下来阅读 ${day}/README.md，再从空白 practice.ts 开始。`
      : check.success,
    hints: isExample ? [] : check.hints,
    typeHints: isExample ? [] : check.typeHints ?? check.hints,
    runtimeHints: isExample ? [] : check.runtimeHints ?? check.hints,
    compilerOptions: isExample ? {} : check.compilerOptions ?? {},
    printPass: !isExample,
  })
    ? 0
    : 1;
}

function runSource(options) {
  const {
    source,
    label,
    expected,
    success,
    hints = [],
    typeHints = hints,
    runtimeHints = hints,
    compilerOptions = {},
    printPass,
  } = options;

  if (!existsSync(source)) {
    courseError(`缺少源文件 ${relative(source)}。`);
    return false;
  }

  const diagnostics = getDiagnostics(source, compilerOptions);
  if (diagnostics.length > 0) {
    console.error(`${label} 类型检查未通过。\n`);
    diagnostics.slice(0, 3).forEach((item) => console.error(formatDiagnostic(item)));
    if (diagnostics.length > 3) {
      console.error(`还有 ${diagnostics.length - 3} 条类型提示暂未显示。`);
    }
    printHints(typeHints);
    return false;
  }

  const execution = execute(source);
  if (!execution.ok) {
    console.error(`${label} ${execution.kind}。`);
    console.error(execution.message);
    printHints(runtimeHints);
    return false;
  }

  const actual = normalizeOutput(execution.stdout);
  if (expected !== undefined && !sameLines(actual, expected)) {
    console.log(`${label} 尚未通过。\n`);
    console.log("期望输出：");
    printLines(expected);
    console.log("\n实际输出：");
    printLines(actual.length > 0 ? actual : ["（没有输出）"]);
    printHints(hints);
    return false;
  }

  if (execution.stdout.trim()) console.log(execution.stdout.trimEnd());
  console.log(printPass ? `\nPASS ${label}：${success}` : `\n${success}`);
  return true;
}

function execute(source) {
  let tsx;
  try {
    tsx = fileURLToPath(import.meta.resolve("tsx/cli"));
  } catch {
    return {
      ok: false,
      kind: "无法启动",
      message: "没有找到 tsx。请先在项目根目录运行 npm install。",
    };
  }

  const result = spawnSync(process.execPath, [tsx, source], {
    cwd: beginnerRoot,
    encoding: "utf8",
    timeout: 5_000,
    maxBuffer: 256 * 1024,
    windowsHide: true,
  });
  if (result.error?.code === "ETIMEDOUT") {
    return {
      ok: false,
      kind: "运行超过 5 秒，已自动停止",
      message: "请检查循环是否会结束，或程序是否在等待不会到来的结果。",
    };
  }
  if (result.error?.code === "ENOBUFS") {
    return {
      ok: false,
      kind: "输出过多，已自动停止",
      message: "请检查是否在循环中不断输出相同内容。",
    };
  }
  if (result.error) return { ok: false, kind: "无法启动", message: result.error.message };
  if (result.status !== 0) {
    const detail = (result.stderr || result.stdout || "")
      .trim()
      .split(/\r?\n/)
      .slice(0, 8)
      .join("\n");
    return {
      ok: false,
      kind: "运行时出错",
      message: detail || "程序提前结束，但没有返回错误详情。",
    };
  }
  return { ok: true, stdout: result.stdout ?? "" };
}

function getDiagnostics(filename, overrides) {
  const configPath = path.join(beginnerRoot, "tsconfig.json");
  const configFile = ts.readConfigFile(configPath, ts.sys.readFile);
  if (configFile.error) return [configFile.error];
  const parsed = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    beginnerRoot,
    undefined,
    configPath,
  );
  const converted = ts.convertCompilerOptionsFromJson(overrides, beginnerRoot);
  if (parsed.errors.length || converted.errors.length) {
    return [...parsed.errors, ...converted.errors];
  }
  const program = ts.createProgram({
    rootNames: [filename],
    options: { ...parsed.options, ...converted.options, noEmit: true },
  });
  return ts.getPreEmitDiagnostics(program);
}

function validateCheck(check) {
  const errors = [];
  if (!isRecord(check)) return ["检查文件必须默认导出对象。"];
  if (check.exercises !== undefined) errors.push("每天只能保留一道独立练习，不能包含 exercises。");
  if (check.title !== undefined && (typeof check.title !== "string" || !check.title.trim())) {
    errors.push("title 如果存在，必须是非空字符串。");
  }
  if (!isStringArray(check.expected)) errors.push("expected 必须是字符串数组。");
  if (typeof check.success !== "string" || !check.success.trim()) {
    errors.push("success 必须是非空字符串。");
  }
  if (check.exampleExpected !== undefined && !isStringArray(check.exampleExpected)) {
    errors.push("exampleExpected 必须是字符串数组。");
  }
  for (const key of ["hints", "typeHints", "runtimeHints"]) {
    if (check[key] !== undefined && !isStringArray(check[key])) {
      errors.push(`${key} 必须是字符串数组。`);
    }
  }
  if (check.compilerOptions !== undefined && !isRecord(check.compilerOptions)) {
    errors.push("compilerOptions 必须是对象。");
  }
  return errors;
}

function discoverDays() {
  try {
    return readdirSync(beginnerRoot, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && /^day\d{2}$/.test(entry.name))
      .map((entry) => entry.name)
      .sort();
  } catch {
    return [];
  }
}

function normalizeDay(input) {
  const match = /^(?:day)?(\d{1,2})$/i.exec(input.trim());
  return match ? `day${match[1].padStart(2, "0")}` : "";
}

function formatDiagnostic(diagnostic) {
  const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
  const code = diagnostic.code ? `（TS${diagnostic.code}）` : "";
  if (!diagnostic.file || diagnostic.start === undefined) {
    return `TypeScript 提示${code}：${message}\n`;
  }
  const position = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
  return [
    `位置：${relative(diagnostic.file.fileName)}:${position.line + 1}:${position.character + 1}`,
    `TypeScript 提示${code}：${message}`,
    "",
  ].join("\n");
}

function normalizeOutput(output) {
  const trimmed = output.trim();
  return trimmed ? trimmed.split(/\r?\n/).map((line) => line.trimEnd()) : [];
}

function sameLines(actual, expected) {
  return actual.length === expected.length && actual.every((line, index) => line === expected[index]);
}

function printLines(lines) {
  lines.forEach((line) => console.log(`  ${line}`));
}

function printHints(hints = []) {
  if (!Array.isArray(hints) || hints.length === 0) return;
  console.log("\n提示：");
  hints.forEach((hint, index) => console.log(`  ${index + 1}. ${hint}`));
}

function printUsage(days) {
  console.error("用法：npm run beginner -- day10");
  console.error("现在每天只有一道练习，不需要再填写题号或 all。");
  console.error("也可以直接右击 example.ts、practice.ts 或 solution.ts，选择 Run Code。");
  printAvailableDays(days);
}

function printAvailableDays(days) {
  if (days.length === 0) return console.error("当前没有发现课程目录。");
  console.error(`当前课程：${days[0]} 至 ${days.at(-1)}（共 ${days.length} 天）。`);
}

function courseError(message) {
  console.error(`课程结构错误：${message}`);
  console.error("这属于课程文件问题，不是你的练习答案造成的。");
  return 1;
}

function relative(filename) {
  return path.relative(beginnerRoot, filename).replaceAll("\\", "/");
}

function displayDay(value) {
  return value.replace("day", "Day ");
}

function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function isStringArray(value) {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}
