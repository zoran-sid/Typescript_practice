// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
import type { Student } from "../student-types.js";
// TODO：从 ../course-data.js 具名导入 courseTitle、lessonCount；从 ../score-tools.js 默认导入 formatScore 并具名导入 passingScore。
// TODO：从 ../student-tools.js 具名导入 summarizeStudent。以上都是运行时值；Student 只用于类型位置，所以保留 import type。
const student: Student = {
  name: "Ada",
  completed: 12,
  track: "beginner",
};
// TODO：用课程名和课数组成第一行；把分数 80 交给 formatScore；再输出 passingScore 与 summarizeStudent(student) 的结果，共四行。
