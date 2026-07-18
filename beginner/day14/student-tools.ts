import type { Student } from "./student-types.js";

export function summarizeStudent(student: Student): string {
  return (
    student.name +
    "：完成 " +
    student.completed +
    " 课（" +
    student.track +
    "）"
  );
}
