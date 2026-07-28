// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
import type { Student } from "../student-types.js";
// TODO：从 ../course-data.js 具名导入运行时值 courseTitle 和 lessonCount。
// TODO：从 ../score-tools.js 默认导入 formatScore，并在同一条导入中具名导入 passingScore。
// TODO：从 ../student-tools.js 具名导入运行时函数 summarizeStudent。
// 注意：NodeNext 源码中的相对路径仍保留 .js 扩展名。
const student: Student = {
  name: "Ada",
  completed: 12,
  track: "beginner",
};
const scores: readonly number[] = [55, 80];
// TODO：先用 courseTitle、lessonCount 和 summarizeStudent(student) 输出课程与学生摘要；再逐项把 scores 交给 formatScore；最后输出 passingScore。
