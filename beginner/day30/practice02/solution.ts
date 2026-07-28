// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
import { total, version } from "../legacy-score.js";
interface LessonInfo { title: string; }
interface LessonInfo { minutes: number; }
const Status = { Draft: "draft", Published: "published" } as const;
type Status = (typeof Status)[keyof typeof Status];
// TODO 1：LessonInfo 由两段同名 interface 合并，所以 lesson 必须同时提供 title 和 minutes；
// 用题目指定的 Declarations 与 40 替换下面的空字符串和 0 占位值。
const lesson: LessonInfo = { title: "", minutes: 0 };
// TODO 2：从 Status 对象选择题目要求输出的 published；
// 当前 Draft 只是可通过类型检查的占位状态，不要改回 enum。
const status: Status = Status.Draft;
// TODO 3：对照 legacy-score.js 核实真实导出，再检查 .d.ts 是否声明了同名 total/version、
// total 是否接收数字数组并返回 number；声明只供检查，不会替代 JS 实现或验证求和业务。
console.log(`Legacy total: ${total([10, 20, 30])}`);
console.log(`Legacy version: ${version}`);
console.log(`Merged: ${lesson.title}/${lesson.minutes}`);
console.log(`Modern status: ${status}`);
