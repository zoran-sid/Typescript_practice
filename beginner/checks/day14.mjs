export default {
  title: "现代 ES Modules 与类型导入",
  exampleExpected: [
    "课程：TypeScript 零基础课（21 课）",
    "80：通过",
    "及格线：60",
    "Ada：完成 12 课（beginner）",
  ],
  exercises: [
    {
      id: "01",
      title: "具名导入",
      expected: ["课程：TypeScript 零基础课", "课数：21"],
      success: "两个具名值都来自同一个模块。",
      hints: [
        "lessonCount 已由 course-data.ts 导出。",
        "在现有花括号中加入 lessonCount，并删除本地占位声明。",
      ],
      typeHints: [
        "如果提示 lessonCount 重复声明，说明导入后还没有删除本地 const。",
      ],
    },
    {
      id: "02",
      title: "默认导入与具名导入",
      expected: ["55：未通过", "80：通过", "及格线：60"],
      success: "默认函数与具名常量已从同一模块正确导入。",
      hints: [
        "目标形式是 import formatScore, { passingScore } from ...。",
        "导入后删除本地的占位 formatScore 函数。",
      ],
      typeHints: [
        "默认导入不放在花括号中；同一作用域也不能保留同名本地函数。",
      ],
    },
    {
      id: "03",
      title: "只导入类型",
      expected: ["Ada：完成 12 课（beginner）"],
      success: "类型与运行时函数使用了不同的导入形式。",
      hints: [
        '删除本地 Student，写 import type { Student } from "./student-types.js"。',
        "completed 应为 12，track 应为 beginner。",
        "summarizeStudent 是值，保留普通 import。",
      ],
      typeHints: [
        "共享 Student 的 track 只接受 beginner 或 advanced。",
      ],
    },
  ],
};
