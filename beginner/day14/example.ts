import { courseTitle, lessonCount } from "./course-data.js";
import formatScore, { passingScore } from "./score-tools.js";
import type { Student } from "./student-types.js";
import { summarizeStudent } from "./student-tools.js";

const student: Student = {
  name: "Ada",
  completed: 12,
  track: "beginner",
};

console.log("课程：" + courseTitle + "（" + lessonCount + " 课）");
console.log(formatScore(80));
console.log("及格线：" + passingScore);
console.log(summarizeStudent(student));
