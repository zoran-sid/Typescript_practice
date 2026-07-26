import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";
import ts from "typescript";

const beginnerRoot = fileURLToPath(new URL("..", import.meta.url));
const docsRoot = path.join(beginnerRoot, "docs");
const errors = [];
const expectedDays = Array.from({ length: 33 }, (_, index) =>
  `day${String(index).padStart(2, "0")}`,
);

if (!existsSync(path.join(docsRoot, "README.md"))) {
  errors.push("beginner/docs/README.md 文档中心入口不存在。");
}

const codeDays = directoryNames(beginnerRoot, /^day\d{2}$/);
const docDays = directoryNames(docsRoot, /^day\d{2}$/);
if (codeDays.join(",") !== expectedDays.join(",")) {
  errors.push("代码目录必须从 day00 连续到 day32。");
}
if (docDays.join(",") !== expectedDays.join(",")) {
  errors.push("文档目录必须从 docs/day00 连续到 docs/day32。");
}

for (const day of expectedDays) {
  const codeDayDir = path.join(beginnerRoot, day);
  const docDayDir = path.join(docsRoot, day);
  if (!existsSync(codeDayDir) || !existsSync(docDayDir)) continue;

  requireFiles(codeDayDir, ["example.ts"], day);
  requireFiles(docDayDir, ["README.md"], `docs/${day}`);

  for (const legacy of ["README.md", "practice.ts", "solution.ts", "SOLUTION.md"]) {
    if (existsSync(path.join(codeDayDir, legacy))) {
      errors.push(`${day} 代码根目录仍有旧入口 ${legacy}。`);
    }
  }

  const dayReadmePath = path.join(docDayDir, "README.md");
  const dayReadme = readFileSync(dayReadmePath, "utf8");
  if (countText(dayReadme, "```mermaid") !== 1 || !dayReadme.includes("flowchart TD")) {
    errors.push(`docs/${day}/README.md 必须有且只有一个 Example Mermaid 流程图。`);
  }

  const badExample = readSection(dayReadme, "### 错误代码示例");
  const goodExample = readSection(dayReadme, "### 正确写法");
  if (
    countText(dayReadme, "### 错误代码示例") !== 1 ||
    !badExample.includes("```ts") ||
    !badExample.includes("// ❌")
  ) {
    errors.push(`docs/${day}/README.md 必须有且只有一个带 // ❌ 注释的 TypeScript 错误代码示例。`);
  }
  if (
    countText(dayReadme, "### 正确写法") !== 1 ||
    !goodExample.includes("```ts") ||
    !goodExample.includes("// ✅")
  ) {
    errors.push(`docs/${day}/README.md 必须有且只有一个与错误示例对应的 TypeScript 正确写法。`);
  }
  if (!dayReadme.includes("## 独立练习导航")) {
    errors.push(`docs/${day}/README.md 缺少独立练习导航。`);
  }

  const codePractices = directoryNames(codeDayDir, /^practice\d{2}$/);
  const docPractices = directoryNames(docDayDir, /^practice\d{2}$/);
  if (codePractices.length < 1 || codePractices.length > 3) {
    errors.push(`${day} 必须有 1–3 个 practiceXX 代码目录。`);
  }
  if (codePractices.join(",") !== docPractices.join(",")) {
    errors.push(`${day} 的代码与文档 practice 目录不一致。`);
  }

  codePractices.forEach((id, index) => {
    const expectedId = `practice${String(index + 1).padStart(2, "0")}`;
    if (id !== expectedId) {
      errors.push(`${day} 练习目录必须连续，缺少 ${expectedId}。`);
    }

    const codePracticeDir = path.join(codeDayDir, id);
    const docPracticeDir = path.join(docDayDir, id);
    requireFiles(codePracticeDir, ["practice.ts", "solution.ts"], `${day}/${id}`);
    requireFiles(docPracticeDir, ["README.md", "SOLUTION.md"], `docs/${day}/${id}`);

    for (const oldDoc of ["README.md", "SOLUTION.md"]) {
      if (existsSync(path.join(codePracticeDir, oldDoc))) {
        errors.push(`${day}/${id} 代码目录中不应再保存 ${oldDoc}。`);
      }
    }
    for (const misplacedCode of ["practice.ts", "solution.ts"]) {
      if (existsSync(path.join(docPracticeDir, misplacedCode))) {
        errors.push(`docs/${day}/${id} 文档目录中不应保存 ${misplacedCode}。`);
      }
    }

    const practiceReadmePath = path.join(docPracticeDir, "README.md");
    if (existsSync(practiceReadmePath)) {
      const practiceReadme = readFileSync(practiceReadmePath, "utf8");
      if (
        countText(practiceReadme, "```mermaid") !== 1 ||
        !practiceReadme.includes("flowchart TD")
      ) {
        errors.push(`docs/${day}/${id}/README.md 必须有且只有一个 Mermaid 流程图。`);
      }
      const background = readSection(practiceReadme, "## 场景背景").trim();
      if (countText(practiceReadme, "## 场景背景") !== 1 || background.length < 30) {
        errors.push(`docs/${day}/${id}/README.md 必须有且只有一个完整的场景背景。`);
      }
      if (!dayReadme.includes(`./${id}/README.md`)) {
        errors.push(`docs/${day}/README.md 缺少 ${id} 文档链接。`);
      }
      if (!practiceReadme.includes("[返回当天课程](../README.md)")) {
        errors.push(`docs/${day}/${id}/README.md 缺少返回当天课程的链接。`);
      }
      const expectedPracticeLink = `[practice.ts](../../../${day}/${id}/practice.ts)`;
      const expectedSolutionLink = `[solution.ts](../../../${day}/${id}/solution.ts)`;
      if (!practiceReadme.includes(expectedPracticeLink)) {
        errors.push(`docs/${day}/${id}/README.md 缺少可点击的 practice.ts 作答链接。`);
      }
      if (!practiceReadme.includes(expectedSolutionLink)) {
        errors.push(`docs/${day}/${id}/README.md 缺少可点击的 solution.ts 结构链接。`);
      }
      if (!practiceReadme.includes("[SOLUTION.md](./SOLUTION.md)")) {
        errors.push(`docs/${day}/${id}/README.md 缺少可点击的方案说明链接。`);
      }
    }

    const solutionPath = path.join(codePracticeDir, "solution.ts");
    if (existsSync(solutionPath)) {
      const scaffold = readFileSync(solutionPath, "utf8");
      if (!/\bTODO\b/.test(scaffold)) {
        errors.push(`${day}/${id}/solution.ts 必须保留 TODO，不能提供完整答案。`);
      }
    }

    const guidePath = path.join(docPracticeDir, "SOLUTION.md");
    if (existsSync(guidePath)) {
      const guide = readFileSync(guidePath, "utf8");
      if (!guide.includes("本文件不提供完整答案")) {
        errors.push(`docs/${day}/${id}/SOLUTION.md 必须明确说明不提供完整答案。`);
      }
      if (!guide.includes("[返回题目](./README.md)")) {
        errors.push(`docs/${day}/${id}/SOLUTION.md 缺少返回题目的链接。`);
      }
      const expectedGuideCodeLink = `[打开 solution.ts](../../../${day}/${id}/solution.ts)`;
      if (!guide.includes(expectedGuideCodeLink)) {
        errors.push(`docs/${day}/${id}/SOLUTION.md 缺少打开 solution.ts 的链接。`);
      }
    }

    const practicePath = path.join(codePracticeDir, "practice.ts");
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
        errors.push(`${day}/${id}/practice.ts 必须只含注释，不能提供实现。`);
      }
      const lines = source.split(/\r?\n/).filter((line) => line.trim()).length;
      if (lines < 2 || lines > 8) {
        errors.push(`${day}/${id}/practice.ts 应只有 2–8 行简短注释。`);
      }
      const expectedDocReference = `../../docs/${day}/${id}/README.md`;
      if (!source.includes(expectedDocReference)) {
        errors.push(`${day}/${id}/practice.ts 缺少集中式题目文档路径 ${expectedDocReference}。`);
      }
    }
  });

  const checkPath = path.join(beginnerRoot, "checks", `${day}.mjs`);
  if (!existsSync(checkPath)) {
    errors.push(`${day} 缺少检查配置。`);
    continue;
  }

  const check = (await import(pathToFileURL(checkPath).href)).default;
  if (!isRecord(check)) {
    errors.push(`${day} 检查配置必须是对象。`);
    continue;
  }
  if (typeof check.title !== "string" || !check.title.trim()) {
    errors.push(`${day} 缺少 title。`);
  }
  if (!isStringArray(check.exampleExpected)) {
    errors.push(`${day} exampleExpected 必须是字符串数组。`);
  }
  if (!Array.isArray(check.exercises) || check.exercises.length !== codePractices.length) {
    errors.push(`${day} 检查题数与练习目录数不一致。`);
  } else {
    check.exercises.forEach((exercise, index) => {
      const id = codePractices[index];
      if (!isRecord(exercise) || exercise.id !== id) {
        errors.push(`${day} 第 ${index + 1} 个检查 id 必须是 ${id}。`);
      }
      if (!isStringArray(exercise?.expected)) {
        errors.push(`${day}/${id} expected 必须是字符串数组。`);
      }
      if (typeof exercise?.success !== "string" || !exercise.success.trim()) {
        errors.push(`${day}/${id} 缺少 success。`);
      }
    });
  }
}

if (errors.length) {
  console.error("课程结构审计未通过：");
  errors.forEach((error) => console.error(`  - ${error}`));
  process.exitCode = 1;
} else {
  console.log(
    "PASS：Day00–32 的 33 份课程文档与 69 道独立练习已集中到 docs，且均有场景背景、流程图、空白作答入口、TODO 解题结构和匹配检查。",
  );
}

function directoryNames(parent, pattern) {
  if (!existsSync(parent)) return [];
  return readdirSync(parent, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && pattern.test(entry.name))
    .map((entry) => entry.name)
    .sort();
}

function requireFiles(directory, files, label) {
  for (const file of files) {
    if (!existsSync(path.join(directory, file))) {
      errors.push(`${label} 缺少 ${file}。`);
    }
  }
}

function countText(text, needle) {
  return text.split(needle).length - 1;
}

function readSection(text, heading) {
  const start = text.indexOf(heading);
  if (start < 0) return "";
  const bodyStart = start + heading.length;
  const rest = text.slice(bodyStart);
  const next = rest.search(/\n#{1,3} /);
  return next < 0 ? rest : rest.slice(0, next);
}

function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function isStringArray(value) {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}