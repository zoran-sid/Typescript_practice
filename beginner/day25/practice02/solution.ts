// 解题结构提示：模块边界已接好，调用顺序与输出请完成 TODO。
import type { StudyTask } from "../models.js";
import { buildReport } from "../report.js";
import { completeTask } from "../task-service.js";
const original: StudyTask[] = [
  { id: "a", title: "Types", minutes: 30, status: "todo" },
  { id: "b", title: "Modules", minutes: 45, status: "doing" },
  { id: "c", title: "Validation", minutes: 30, status: "done" },
];
// TODO 1：调用 completeTask 得到 updated；不要修改 original。
const updated: StudyTask[] = [...original];
// TODO 2：把 updated 交给 buildReport，并输出各状态与总分钟。
console.log(`Original first status: ${original[0]?.status}`);
console.log(`Updated first status: ${updated[0]?.status}`);
