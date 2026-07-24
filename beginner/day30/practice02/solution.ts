// 解题结构提示：先核对 legacy-score.js 与 .d.ts，再补调用数据。
import { total, version } from "../legacy-score.js";
interface LessonInfo { title: string; }
interface LessonInfo { minutes: number; }
const Status = { Draft: "draft", Published: "published" } as const;
type Status = (typeof Status)[keyof typeof Status];
// TODO 1：填入有意义的课程标题和分钟，确认声明合并要求两个字段。
const lesson: LessonInfo = { title: "", minutes: 0 };
// TODO 2：选择题目要求的现代状态；不要改回 enum。
const status: Status = Status.Draft;
// TODO 3：核对 total 的参数与返回类型是否和真实 JS 一致，再观察输出。
console.log(`Legacy total: ${total([10, 20, 30])}`);
console.log(`Legacy version: ${version}`);
console.log(`Merged: ${lesson.title}/${lesson.minutes}`);
console.log(`Modern status: ${status}`);
