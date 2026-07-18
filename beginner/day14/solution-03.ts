import type { Student } from "./student-types.js";
import { summarizeStudent } from "./student-tools.js";

const student: Student = {
  name: "Ada",
  completed: 12,
  track: "beginner",
};

console.log(summarizeStudent(student));
