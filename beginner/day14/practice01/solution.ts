import { courseTitle, lessonCount } from "../course-data.js";
import formatScore, { passingScore } from "../score-tools.js";
import { summarizeStudent } from "../student-tools.js";
import type { Student } from "../student-types.js";

const student: Student = {
  name: "Ada",
  completed: 12,
  track: "beginner",
};
const scores: readonly number[] = [55, 80];

// 调用关系：课程模块的两个运行时值 -> 课程概况输出。
console.log(`课程：${courseTitle}（${lessonCount} 课）`);
// 调用关系：student -> summarizeStudent(student) -> 学生摘要输出。
console.log(summarizeStudent(student));

for (const score of scores) {
  // 调用关系：当前 score -> formatScore(score) -> 本条成绩输出。
  const scoreText = formatScore(score);
  console.log(scoreText);
}

// 调用关系：score-tools 的 passingScore -> 及格线输出。
console.log(`及格线：${passingScore}`);
