import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";
import ts from "typescript";

const beginnerRoot = fileURLToPath(new URL("..", import.meta.url));
const workspaceRoot = path.dirname(beginnerRoot);
const docsRoot = path.join(beginnerRoot, "docs");
const errors = [];
const allowAnswers = process.argv.includes("--allow-answers");
const daysWithPreviewSection = new Set([
  "day00",
  "day02",
  "day03",
  "day06",
  "day07",
  "day08",
  "day10",
  "day11",
  "day12",
  "day19",
  "day20",
  "day21",
  "day22",
  "day24",
  "day26",
  "day27",
  "day28",
  "day29",
  "day30",
  "day31",
  "day32",
]);
const expectedDays = Array.from({ length: 33 }, (_, index) =>
  `day${String(index).padStart(2, "0")}`,
);

const beginnerReadmePath = path.join(beginnerRoot, "README.md");
if (existsSync(beginnerReadmePath)) {
  const beginnerReadme = readFileSync(beginnerReadmePath, "utf8");
  if (
    !beginnerReadme.includes("## 代码符号和输出文字的标点不一样") ||
    !beginnerReadme.includes('"email" | "sms" | "push"') ||
    !beginnerReadme.includes("弯引号 `“sms”`")
  ) {
    errors.push(
      "beginner/README.md 必须分清代码语法与输出文字中的中英文括号、冒号和引号。",
    );
  }
}

const rootReadmePath = path.join(workspaceRoot, "README.md");
if (existsSync(rootReadmePath)) {
  const rootReadme = readFileSync(rootReadmePath, "utf8");
  if (
    rootReadme.includes("不只围绕学生系统") ||
    rootReadme.includes("你个人答案")
  ) {
    errors.push(
      "项目 README 应使用适合所有 GitHub 学习者的通用说明，不保留对单一案例或个人目录的描述。",
    );
  }
}

for (const file of ["README.md", "OFFICIAL-READING.md", "VALUE-CHECKS.md"]) {
  if (!existsSync(path.join(docsRoot, file))) {
    errors.push(`beginner/docs/${file} 文档中心资料不存在。`);
  }
}

for (const file of [
  "build-official-reader.mjs",
  "sync-official-docs.mjs",
]) {
  if (!existsSync(path.join(beginnerRoot, "scripts", file))) {
    errors.push(`beginner/scripts/${file} 官方文档工具不存在。`);
  }
}

const officialReadingIndexPath = path.join(
  docsRoot,
  "OFFICIAL-READING.md",
);
if (existsSync(officialReadingIndexPath)) {
  const officialReadingIndex = readFileSync(officialReadingIndexPath, "utf8");
  if (
    !officialReadingIndex.includes("../../official-reference/reader/") ||
    officialReadingIndex.includes(
      "../../official-reference/typescript-website/",
    ) ||
    officialReadingIndex.includes(
      "../../official-reference/typescript-localizations/",
    )
  ) {
    errors.push(
      "beginner/docs/OFFICIAL-READING.md 的本地链接必须指向自动生成的 reader 阅读版。",
    );
  }
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
  const exampleFlow = readSection(dayReadme, "## Example 代码流程图");
  const flowNodeCount =
    exampleFlow.match(/\b[A-Z][A-Z0-9]*\s*(?:\[|\{)/g)?.length ?? 0;
  if (
    countText(dayReadme, "```mermaid") !== 1 ||
    !exampleFlow.includes("flowchart TD") ||
    flowNodeCount < 5 ||
    !/(console\.log|输出)/.test(exampleFlow)
  ) {
    errors.push(
      `docs/${day}/README.md 必须有且只有一个至少包含 5 个实际代码步骤的 Example Mermaid 流程图。`,
    );
  }
  const exampleOutput = readSection(dayReadme, "## Example 实际输出");
  if (
    countText(dayReadme, "## Example 实际输出") !== 1 ||
    !exampleOutput.includes("```text")
  ) {
    errors.push(`docs/${day}/README.md 必须有且只有一个 Example 实际输出文本块。`);
  }
  const designReason = readSection(dayReadme, "## 为什么要这样设计").trim();
  if (
    countText(dayReadme, "## 为什么要这样设计") !== 1 ||
    designReason.length < 120 ||
    !/(问题|避免|因为|负责|交给)/.test(designReason)
  ) {
    errors.push(
      `docs/${day}/README.md 必须有且只有一个具体解释“解决什么问题、谁负责什么”的设计原因章节。`,
    );
  }
  const interviewAnswer = readSection(dayReadme, "## 面试时怎么回答").trim();
  if (
    countText(dayReadme, "## 面试时怎么回答") !== 1 ||
    interviewAnswer.length < 180 ||
    !interviewAnswer.includes("**问：")
  ) {
    errors.push(
      `docs/${day}/README.md 必须有且只有一个结合当天知识、包含具体问答与边界的面试章节。`,
    );
  }
  const officialReading = readSection(
    dayReadme,
    "## 官方手册扩展阅读（可选）",
  ).trim();
  if (
    countText(dayReadme, "## 官方手册扩展阅读（可选）") !== 1 ||
    !officialReading.includes(`../OFFICIAL-READING.md#${day.replace("day", "day-")}`)
  ) {
    errors.push(
      `docs/${day}/README.md 必须有且只有一个指向当天官方阅读索引的可选章节。`,
    );
  }
  if (countText(dayReadme, "## 官方资料") > 0) {
    errors.push(`docs/${day}/README.md 不应再保留与统一索引重复的“官方资料”列表。`);
  }
  if (dayReadme.includes("今天第一次见到的 JavaScript 工具")) {
    errors.push(
      `docs/${day}/README.md 不应再使用容易被误解为 JavaScript 实例的旧标题。`,
    );
  }
  if (daysWithPreviewSection.has(day)) {
    const previewHeading = "## 写 Example 前先认识这些写法";
    const previewSection = readSection(dayReadme, previewHeading).trim();
    const exampleOutputIndex = dayReadme.indexOf("## Example 实际输出");
    if (
      countText(dayReadme, previewHeading) !== 1 ||
      previewSection.length < 180 ||
      !previewSection.includes("```text") ||
      dayReadme.indexOf(previewHeading) > exampleOutputIndex
    ) {
      errors.push(
        `docs/${day}/README.md 必须在 Example 前解释代码里即将使用的新写法，并给出实际输出。`,
      );
    }
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
      const dataFlow = readSection(practiceReadme, "## 数据流");
      if (
        countText(practiceReadme, "## 数据流") !== 1 ||
        !dataFlow.includes("```text") ||
        !dataFlow.includes("──>") ||
        practiceReadme.includes("```mermaid")
      ) {
        errors.push(`docs/${day}/${id}/README.md 必须有且只有一个变量关系清楚的数据流文本块。`);
      }
      const background = readSection(practiceReadme, "## 场景背景").trim();
      if (countText(practiceReadme, "## 场景背景") !== 1 || background.length < 30) {
        errors.push(`docs/${day}/${id}/README.md 必须有且只有一个完整的场景背景。`);
      }
      const selfCheck = readSection(practiceReadme, "## 写完后自检").trim();
      const selfCheckQuestions = selfCheck.match(/[？?]/g) ?? [];
      if (
        countText(practiceReadme, "## 写完后自检") !== 1 ||
        selfCheck.length < 60 ||
        selfCheckQuestions.length < 2
      ) {
        errors.push(
          `docs/${day}/${id}/README.md 必须有且只有一个包含至少两个具体问题的“写完后自检”。`,
        );
      }
      if (id === "practice02") {
        const difference = readSection(
          practiceReadme,
          "## 和 Practice 01 的区别",
        ).trim();
        const designDimensions = [
          "业务",
          "输入",
          "数据",
          "类型",
          "状态",
          "分支",
          "控制",
          "调用",
          "模块",
          "阶段",
          "实现",
          "运行时",
          "失败",
          "边界",
          "返回",
          "输出",
          "函数",
          "流程",
        ].filter((word) => difference.includes(word));
        if (
          countText(practiceReadme, "## 和 Practice 01 的区别") !== 1 ||
          difference.length < 50 ||
          designDimensions.length < 2
        ) {
          errors.push(
            `docs/${day}/${id}/README.md 必须具体说明它与 Practice 01 在至少两个设计维度上的区别。`,
          );
        }
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
      if (
        !scaffold.includes("TODO") ||
        !scaffold.includes("占位值") ||
        !scaffold.includes("完成时要替换或删除")
      ) {
        errors.push(
          `${day}/${id}/solution.ts 必须说明 TODO 旁的类型占位值不是答案，完成时要替换或删除。`,
        );
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
      if (!allowAnswers) {
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
      } else {
        const practiceReadmePath = path.join(
          docsRoot,
          day,
          id,
          "README.md",
        );
        if (existsSync(practiceReadmePath)) {
          const practiceReadme = readFileSync(practiceReadmePath, "utf8");
          for (const expectedLine of exercise.expected) {
            if (!practiceReadme.includes(expectedLine)) {
              errors.push(
                `docs/${day}/${id}/README.md 缺少检查器中的期望输出：${expectedLine}`,
              );
            }
          }
          if (
            exercise.expected.some((line) => /[（）()]/.test(line)) &&
            !practiceReadme.includes("先看清输出标点")
          ) {
            errors.push(
              `docs/${day}/${id}/README.md 的输出含括号，必须解释中文全角与英文半角符号的区别。`,
            );
          }
        }
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
    `PASS：Day00–32 的 33 份课程文档与 69 道独立练习已集中到 docs，且均有设计原因、Example 前置写法说明、详细代码流程图、官方扩展索引、面试问答、场景背景、关联数据流、输出标点说明、迁移自检、${allowAnswers ? "可保留作答的练习入口" : "空白作答入口"}、明确的 TODO 占位说明和匹配检查。`,
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
  const headingLevel = heading.match(/^#+/)?.[0].length ?? 2;
  const next = rest.search(new RegExp(`\\n#{1,${headingLevel}} `));
  return next < 0 ? rest : rest.slice(0, next);
}

function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function isStringArray(value) {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}
