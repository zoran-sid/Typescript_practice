import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";
import ts from "typescript";

const beginnerRoot = fileURLToPath(new URL("..", import.meta.url));
const validModes = new Set(["practice", "example", "solution"]);
const mode = process.argv[2] ?? "practice";
const day = normalizeDay(process.argv[3] ?? "");
const requestedExercise = process.argv[4] ?? "";

try {
  process.exitCode = await main();
} catch (error) {
  console.error("课程运行器发生了未预期的错误。");
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}

async function main() {
  const days = discoverDays();
  if (!validModes.has(mode) || !day || process.argv[5] !== undefined) {
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

  if (mode === "example") {
    if (requestedExercise) {
      console.error("example.ts 不需要练习编号。");
      printUsage(days);
      return 1;
    }
    return runSource({
      source: path.join(beginnerRoot, day, "example.ts"),
      label: `${displayDay(day)} Example`,
      expected: check.exampleExpected,
      success: `Example 运行完成。请回到 docs/${day}/README.md 查看流程图，再选择独立 practice 文档。`,
      printPass: false,
    }) ? 0 : 1;
  }

  const exerciseId = normalizeExercise(requestedExercise || "practice01");
  const exercise = check.exercises.find((item) => item.id === exerciseId);
  if (!exercise) {
    console.error(`${displayDay(day)} 没有 ${requestedExercise || exerciseId}。`);
    console.error(`可用练习：${check.exercises.map((item) => item.id).join("、")}。`);
    return 1;
  }
  const source = path.join(beginnerRoot, day, exercise.id, `${mode}.ts`);
  if (mode === "solution") {
    return checkScaffold({
      source,
      label: `${displayDay(day)} ${exercise.id} 解题结构`,
      compilerOptions: exercise.compilerOptions ?? {},
    }) ? 0 : 1;
  }
  return runSource({
    source,
    label: `${displayDay(day)} ${exercise.id} 独立练习`,
    expected: exercise.expected,
    success: exercise.success,
    hints: exercise.hints,
    typeHints: exercise.typeHints ?? exercise.hints,
    runtimeHints: exercise.runtimeHints ?? exercise.hints,
    compilerOptions: exercise.compilerOptions ?? {},
    printPass: true,
  }) ? 0 : 1;
}

function checkScaffold({ source, label, compilerOptions }) {
  if (!existsSync(source)) {
    courseError(`缺少源文件 ${relative(source)}。`);
    return false;
  }
  const diagnostics = getDiagnostics(source, compilerOptions);
  if (diagnostics.length > 0) {
    console.error(`${label} 类型检查未通过。\n`);
    diagnostics.slice(0, 3).forEach((item) => console.error(formatDiagnostic(item)));
    return false;
  }
  const scaffold = readFileSync(source, "utf8");
  if (!/\bTODO\b/.test(scaffold)) {
    courseError(`${relative(source)} 必须保留至少一个 TODO，不能成为完整答案。`);
    return false;
  }
  console.log(`PASS ${label}：主结构可通过类型检查，核心实现仍由你完成。`);
  console.log(`请打开 ${relative(source)}，沿 TODO 补全后再运行自己的 practice.ts。`);
  return true;
}

function runSource(options) {
  const { source, label, expected, success, hints = [], typeHints = hints, runtimeHints = hints, compilerOptions = {}, printPass } = options;
  if (!existsSync(source)) {
    courseError(`缺少源文件 ${relative(source)}。`);
    return false;
  }
  const diagnostics = getDiagnostics(source, compilerOptions);
  if (diagnostics.length > 0) {
    console.error(`${label} 类型检查未通过。\n`);
    diagnostics.slice(0, 3).forEach((item) => console.error(formatDiagnostic(item)));
    if (diagnostics.length > 3) console.error(`还有 ${diagnostics.length - 3} 条类型提示暂未显示。`);
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
  if (!sameLines(actual, expected)) {
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
  try { tsx = fileURLToPath(import.meta.resolve("tsx/cli")); }
  catch { return { ok: false, kind: "无法启动", message: "没有找到 tsx。请先在项目根目录运行 npm install。" }; }
  const result = spawnSync(process.execPath, [tsx, source], { cwd: beginnerRoot, encoding: "utf8", timeout: 5_000, maxBuffer: 256 * 1024, windowsHide: true });
  if (result.error?.code === "ETIMEDOUT") return { ok: false, kind: "运行超过 5 秒，已自动停止", message: "请检查循环是否会结束。" };
  if (result.error?.code === "ENOBUFS") return { ok: false, kind: "输出过多，已自动停止", message: "请检查是否在循环中不断输出。" };
  if (result.error) return { ok: false, kind: "无法启动", message: result.error.message };
  if (result.status !== 0) {
    const detail = (result.stderr || result.stdout || "").trim().split(/\r?\n/).slice(0, 8).join("\n");
    return { ok: false, kind: "运行时出错", message: detail || "程序提前结束，但没有返回错误详情。" };
  }
  return { ok: true, stdout: result.stdout ?? "" };
}

function getDiagnostics(filename, overrides) {
  const configPath = path.join(beginnerRoot, "tsconfig.json");
  const configFile = ts.readConfigFile(configPath, ts.sys.readFile);
  if (configFile.error) return [configFile.error];
  const parsed = ts.parseJsonConfigFileContent(configFile.config, ts.sys, beginnerRoot, undefined, configPath);
  const converted = ts.convertCompilerOptionsFromJson(overrides, beginnerRoot);
  if (parsed.errors.length || converted.errors.length) return [...parsed.errors, ...converted.errors];
  const program = ts.createProgram({ rootNames: [filename], options: { ...parsed.options, ...converted.options, noEmit: true } });
  return ts.getPreEmitDiagnostics(program);
}

function validateCheck(check) {
  const errors = [];
  if (!isRecord(check)) return ["检查文件必须默认导出对象。"];
  if (typeof check.title !== "string" || !check.title.trim()) errors.push("title 必须是非空字符串。");
  if (!isStringArray(check.exampleExpected)) errors.push("exampleExpected 必须是字符串数组。");
  if (!Array.isArray(check.exercises) || check.exercises.length < 1 || check.exercises.length > 3) return [...errors, "exercises 必须包含 1–3 道练习。"];
  check.exercises.forEach((exercise, index) => {
    if (!isRecord(exercise)) return errors.push(`exercises[${index}] 必须是对象。`);
    const expectedId = `practice${String(index + 1).padStart(2, "0")}`;
    if (exercise.id !== expectedId) errors.push(`第 ${index + 1} 道练习 id 必须是 ${expectedId}。`);
    if (typeof exercise.title !== "string" || !exercise.title.trim()) errors.push(`${expectedId}.title 必须是非空字符串。`);
    if (!isStringArray(exercise.expected)) errors.push(`${expectedId}.expected 必须是字符串数组。`);
    if (typeof exercise.success !== "string" || !exercise.success.trim()) errors.push(`${expectedId}.success 必须是非空字符串。`);
    for (const key of ["hints", "typeHints", "runtimeHints"]) if (exercise[key] !== undefined && !isStringArray(exercise[key])) errors.push(`${expectedId}.${key} 必须是字符串数组。`);
    if (exercise.compilerOptions !== undefined && !isRecord(exercise.compilerOptions)) errors.push(`${expectedId}.compilerOptions 必须是对象。`);
  });
  return errors;
}

function discoverDays() { try { return readdirSync(beginnerRoot,{withFileTypes:true}).filter((entry)=>entry.isDirectory()&&/^day\d{2}$/.test(entry.name)).map((entry)=>entry.name).sort(); } catch { return []; } }
function normalizeDay(input) { const match=/^(?:day)?(\d{1,2})$/i.exec(input.trim()); return match?`day${match[1].padStart(2,"0")}`:""; }
function normalizeExercise(input) { const match=/^(?:practice)?(\d{1,2})$/i.exec(input.trim()); return match?`practice${match[1].padStart(2,"0")}`:""; }
function formatDiagnostic(diagnostic) { const message=ts.flattenDiagnosticMessageText(diagnostic.messageText,"\n"),code=diagnostic.code?`（TS${diagnostic.code}）`:""; if(!diagnostic.file||diagnostic.start===undefined)return `TypeScript 提示${code}：${message}\n`; const p=diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start); return [`位置：${relative(diagnostic.file.fileName)}:${p.line+1}:${p.character+1}`,`TypeScript 提示${code}：${message}`,""] .join("\n"); }
function normalizeOutput(output){const trimmed=output.trim();return trimmed?trimmed.split(/\r?\n/).map((line)=>line.trimEnd()):[];}
function sameLines(actual,expected){return actual.length===expected.length&&actual.every((line,index)=>line===expected[index]);}
function printLines(lines){lines.forEach((line)=>console.log(`  ${line}`));}
function printHints(hints=[]){if(!Array.isArray(hints)||hints.length===0)return;console.log("\n提示：");hints.forEach((hint,index)=>console.log(`  ${index+1}. ${hint}`));}
function printUsage(days){console.error("用法：npm run beginner -- day10 practice02");console.error("解题结构：npm run beginner:solution -- day10 practice02");console.error("example：npm run beginner:example -- day10");console.error("也可直接右击 example.ts、practice.ts；右击 solution.ts 只检查结构提示，不会运行完整答案。");printAvailableDays(days);}
function printAvailableDays(days){if(days.length===0)return console.error("当前没有发现课程目录。");console.error(`当前课程：${days[0]} 至 ${days.at(-1)}（共 ${days.length} 天）。`);}
function courseError(message){console.error(`课程结构错误：${message}`);console.error("这属于课程文件问题，不是你的练习答案造成的。");return 1;}
function relative(filename){return path.relative(beginnerRoot,filename).replaceAll("\\","/");}
function displayDay(value){return value.replace("day","Day ");}
function isRecord(value){return value!==null&&typeof value==="object"&&!Array.isArray(value);}
function isStringArray(value){return Array.isArray(value)&&value.every((item)=>typeof item==="string");}
