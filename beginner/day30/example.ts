import { total, version } from "./legacy-score.js";

interface LessonInfo {
  title: string;
}

interface LessonInfo {
  minutes: number;
}

const Status = {
  Draft: "draft",
  Published: "published",
} as const;
type Status = (typeof Status)[keyof typeof Status];

const lesson: LessonInfo = { title: "Declarations", minutes: 40 };
const status: Status = Status.Published;

console.log(`Legacy total: ${total([10, 20, 30])}`);
console.log(`Legacy version: ${version}`);
console.log(`Merged: ${lesson.title}/${lesson.minutes}`);
console.log(`Modern status: ${status}`);
