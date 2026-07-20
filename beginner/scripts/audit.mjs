import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";
import ts from "typescript";

const beginnerRoot = fileURLToPath(new URL("..", import.meta.url));
const errors = [];
const days = readdirSync(beginnerRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && /^day\d{2}$/.test(entry.name))
  .map((entry) => entry.name)
  .sort();

const expectedDays = Array.from(
  { length: 33 },
  (_, index) => `day${String(index).padStart(2, "0")}`,
);

if (days.join(",") !== expectedDays.join(",")) {
  errors.push("课程目录必须从 day00 连续到 day32。");
}

for (const day of expectedDays) {
  const directory = path.join(beginnerRoot, day);
  if (!existsSync(directory)) continue;

  for (const filename of [
    "README.md",
    "example.ts",
    "practice.ts",
    "solution.ts",
    "SOLUTION.md",
  ]) {
    if (!existsSync(path.join(directory, filename))) {
      errors.push(`${day} 缺少 ${filename}。`);
    }
  }

  const numberedFiles = readdirSync(directory).filter(
    (filename) =>
      /^(?:practice|solution)-\d+\.ts$/i.test(filename) ||
      /^practice-.+/i.test(filename),
  );
  if (numberedFiles.length > 0) {
    errors.push(`${day} 仍有旧多题文件：${numberedFiles.join("、")}。`);
  }

  const practicePath = path.join(directory, "practice.ts");
  if (existsSync(practicePath)) {
    const source = readFileSync(practicePath, "utf8");
    const parsed = ts.createSourceFile(
      practicePath,
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TS,
    );
    if (parsed.statements.length > 0) {
      errors.push(`${day}/practice.ts 必须只含注释，不能提供起始代码。`);
    }
    const nonEmptyLines = source.split(/\r?\n/).filter((line) => line.trim()).length;
    if (nonEmptyLines < 2 || nonEmptyLines > 8) {
      errors.push(`${day}/practice.ts 应只有 2–8 行简短注释。`);
    }
  }

  const readmePath = path.join(directory, "README.md");
  if (existsSync(readmePath)) {
    const readme = readFileSync(readmePath, "utf8");
    if (headingCount(readme, "独立练习") !== 1) {
      errors.push(`${day}/README.md 必须且只能有一个“独立练习”二级标题。`);
    }
    if (headingCount(readme, "拓展思考") !== 1) {
      errors.push(`${day}/README.md 必须且只能有一个“拓展思考”二级标题。`);
    }
  }

  const checkPath = path.join(beginnerRoot, "checks", `${day}.mjs`);
  if (!existsSync(checkPath)) {
    errors.push(`${day} 缺少检查配置。`);
    continue;
  }
  const check = (await import(pathToFileURL(checkPath).href)).default;
  if (!check || typeof check !== "object" || Array.isArray(check)) {
    errors.push(`${day} 的检查配置必须导出对象。`);
    continue;
  }
  if ("exercises" in check) errors.push(`${day} 的检查配置仍包含 exercises。`);
  if (!isStringArray(check.expected)) errors.push(`${day} 的 expected 不是字符串数组。`);
  if (typeof check.success !== "string" || !check.success.trim()) {
    errors.push(`${day} 缺少 success。`);
  }
}

if (errors.length > 0) {
  console.error("课程结构审计未通过：");
  errors.forEach((error) => console.error(`  - ${error}`));
  process.exitCode = 1;
} else {
  console.log("PASS：Day00–32 均为单题、空白 practice，并包含一道拓展思考。");
}

function headingCount(markdown, title) {
  return markdown
    .split(/\r?\n/)
    .filter((line) => new RegExp(`^##\\s+${title}(?:\\s|（|$)`).test(line.trim()))
    .length;
}

function isStringArray(value) {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}
