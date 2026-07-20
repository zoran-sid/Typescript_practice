import { courseTitle, lessonCount } from "./course-data.js";
import formatScore, { passingScore } from "./score-tools.js";
import type { Student } from "./student-types.js";
import { summarizeStudent } from "./student-tools.js";

const student: Student = {
  name: "Ada",
  completed: 12,
  track: "beginner",
};

const scores: readonly number[] = [55, 80];

console.log(`课程：${courseTitle}（${lessonCount} 课）`);
console.log(summarizeStudent(student));

for (const score of scores) {
  console.log(formatScore(score));
}

console.log(`及格线：${passingScore}`);
