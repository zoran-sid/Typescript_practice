import { summarizeStudent } from "./student-tools.js";

type Student = {
  name: string;
  completed: number;
  track: "beginner" | "advanced";
};

const student: Student = {
  name: "Ada",
  completed: 0,
  track: "advanced",
};

console.log(summarizeStudent(student));
