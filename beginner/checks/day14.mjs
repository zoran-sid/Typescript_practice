export default {
  title: "现代 ES Modules 与类型导入",
  exampleExpected: [
    "课程：TypeScript 零基础课（21 课）",
    "80：通过",
    "及格线：60",
    "Ada：完成 12 课（beginner）",
  ],
  expected: [
    "课程：TypeScript 零基础课（21 课）",
    "Ada：完成 12 课（beginner）",
    "55：未通过",
    "80：通过",
    "及格线：60",
  ],
  success: "具名值、默认值、类型和运行时函数已从正确模块组合到唯一入口。",
  hints: [
    "courseTitle 与 lessonCount 使用同一个具名导入。",
    "目标形式是 import formatScore, { passingScore } from './score-tools.js'。",
    "Student 使用 import type；summarizeStudent 使用普通具名导入。",
    "不要修改或复制辅助模块，所有相对路径保留 .js。",
  ],
  typeHints: [
    "如果出现重复声明，请删除入口中的同名本地占位值或重复类型。",
  ],
};
