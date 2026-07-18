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
const requestedExercise = process.argv[4] ?? "01";

try {
  process.exitCode = await main();
} catch (error) {
  console.error("课程运行器发生了未预期的错误。");
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}

async function main() {
  const days = discoverDays();
  if (!validModes.has(mode) || !day) {
    printUsage(days);
    return 1;
  }
  if (!days.includes(day)) {
    console.error(`没有找到 ${day} 的课程目录。`);
    printAvailableDays(days);
    return 1;
  }

  const checkPath = path.join(beginnerRoot, "checks", `${day}.mjs`);
  if (!existsSync(checkPath)) {
    return courseError(`缺少检查文件 checks/${day}.mjs。`);
  }

  const check = (await import(pathToFileURL(checkPath).href)).default;
  const schemaErrors = validateCheck(check, Number(day.slice(3)));
  if (schemaErrors.length > 0) {
    console.error(`${displayDay(day)} 的课程检查结构不完整：`);
    schemaErrors.forEach((message) => console.error(`  - ${message}`));
    console.error("这属于课程文件问题，不是你的练习答案造成的。");
    return 1;
  }

  if (mode === "example") {
    const ok = runSource({
      source: path.join(beginnerRoot, day, "example.ts"),
      label: `${displayDay(day)} 示例`,
      expected: check.exampleExpected,
      success: `示例运行完成。接下来阅读 ${day}/README.md，再开始练习。`,
      hints: check.typeHints ?? check.hints,
      printPass: false,
    });
    return ok ? 0 : 1;
  }

  const isMulti = Array.isArray(check.exercises);
  const exercises = isMulti
    ? [...check.exercises].sort((left, right) => left.id.localeCompare(right.id))
    : [{ id: "01", title: "", ...check }];
  const selection = selectExercises(exercises, requestedExercise);
  if (!selection) {
    console.error(`没有找到练习“${requestedExercise}”。`);
    printExercises(exercises);
    return 1;
  }

  let passed = 0;
  for (const [index, exercise] of selection.entries()) {
    if (index > 0) console.log("");
    const suffix = isMulti ? `-${exercise.id}` : "";
    const label = isMulti
      ? `${displayDay(day)} · 练习 ${exercise.id}（${exercise.title}）`
      : displayDay(day);
    const ok = runSource({
      source: path.join(beginnerRoot, day, `${mode}${suffix}.ts`),
      label,
      expected: exercise.expected,
      success: exercise.success,
      hints: exercise.hints,
      typeHints: exercise.typeHints,
      runtimeHints: exercise.runtimeHints,
      typeOnly: exercise.typeOnly,
      compilerOptions: exercise.compilerOptions,
      printPass: true,
    });
    if (ok) passed += 1;
  }

  if (requestedExercise.trim().toLowerCase() === "all") {
    if (passed === selection.length) {
      const kind = mode === "solution" ? "参考答案" : "练习";
      console.log(
        `\nPASS ${displayDay(day)}：${selection.length} 道${kind}全部通过。`,
      );
    } else {
      console.log(`\n${displayDay(day)}：${passed}/${selection.length} 道通过。`);
    }
  }
  return passed === selection.length ? 0 : 1;
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
    typeOnly = false,
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
    diagnostics
      .slice(0, 3)
      .forEach((diagnostic) => console.error(formatDiagnostic(diagnostic)));
    if (diagnostics.length > 3) {
      console.error(`还有 ${diagnostics.length - 3} 条类型提示暂未显示。`);
    }
    printHints(typeHints);
    return false;
  }

  if (typeOnly) {
    console.log(`PASS ${label}：${success}`);
    return true;
  }

  const execution = execute(source);
  if (!execution.ok) {
    console.error(`${label} ${execution.kind}。`);
    console.error(execution.message);
    printHints(runtimeHints);
    return false;
  }

  const actual = normalizeOutput(execution.stdout);
  if (expected && !sameLines(actual, expected)) {
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
  if (result.error) {
    return { ok: false, kind: "无法启动", message: result.error.message };
  }
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

function validateCheck(check, dayNumber) {
  const errors = [];
  if (!isRecord(check)) return ["检查文件必须默认导出对象。"];
  if (check.exampleExpected !== undefined && !isStringArray(check.exampleExpected)) {
    errors.push("exampleExpected 必须是字符串数组。");
  }
  const multi = Array.isArray(check.exercises);
  if (dayNumber <= 3 && multi) errors.push("Day 00–03 应使用兼容的单练习格式。");
  if (dayNumber >= 4 && !multi) errors.push("Day 04 以后必须提供 exercises 数组。");
  const exercises = multi ? check.exercises : [check];
  if (multi && (typeof check.title !== "string" || !check.title.trim())) {
    errors.push("课程需要非空 title。");
  }
  if (exercises.length === 0) errors.push("至少需要一道练习。");

  const ids = new Set();
  for (const [index, exercise] of exercises.entries()) {
    if (!isRecord(exercise)) {
      errors.push(`练习 ${index + 1} 必须是对象。`);
      continue;
    }
    const label = exercise.id ?? index + 1;
    if (multi && (typeof exercise.id !== "string" || !/^\d{2}$/.test(exercise.id))) {
      errors.push(`练习 ${index + 1} 的 id 必须是两位数字。`);
    }
    if (multi && ids.has(exercise.id)) errors.push(`练习 id ${exercise.id} 重复。`);
    ids.add(exercise.id);
    if (multi && (typeof exercise.title !== "string" || !exercise.title.trim())) {
      errors.push(`练习 ${label} 缺少 title。`);
    }
    if (!isStringArray(exercise.expected)) {
      errors.push(`练习 ${label} 的 expected 必须是字符串数组。`);
    }
    if (typeof exercise.success !== "string" || !exercise.success.trim()) {
      errors.push(`练习 ${label} 缺少 success。`);
    }
    for (const key of ["hints", "typeHints", "runtimeHints"]) {
      if (exercise[key] !== undefined && !isStringArray(exercise[key])) {
        errors.push(`练习 ${label} 的 ${key} 必须是字符串数组。`);
      }
    }
  }
  if (multi && !ids.has("01")) errors.push("多练习课程必须包含 01。");
  return errors;
}

function selectExercises(exercises, input) {
  if (input.trim().toLowerCase() === "all") return exercises;
  const match = /^(?:exercise)?(\d{1,2})$/i.exec(input.trim());
  if (!match) return null;
  const id = match[1].padStart(2, "0");
  const exercise = exercises.find((item) => item.id === id);
  return exercise ? [exercise] : null;
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
  return (
    actual.length === expected.length &&
    actual.every((line, index) => line === expected[index])
  );
}

function printLines(lines) {
  lines.forEach((line) => console.log(`  ${line}`));
}

function printHints(hints = []) {
  if (!Array.isArray(hints) || hints.length === 0) return;
  console.log("\n提示：");
  hints.forEach((hint, index) => console.log(`  ${index + 1}. ${hint}`));
}

function printExercises(exercises) {
  console.log("\n可用练习：");
  exercises.forEach((item) => console.log(`  ${item.id}  ${item.title ?? ""}`));
  console.log(`\n示例：npm run beginner -- ${day} 01`);
  console.log(`批量：npm run beginner -- ${day} all`);
}

function printUsage(days) {
  console.error("用法：npm run beginner -- day04 01");
  console.error("批量检查：npm run beginner -- day04 all");
  console.error("示例/答案分别使用 beginner:example 与 beginner:solution。");
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
