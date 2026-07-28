// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
import type { StudyTask } from "../models.js";
import { buildReport } from "../report.js";
import { completeTask } from "../task-service.js";
const original: StudyTask[] = [
  { id: "a", title: "Types", minutes: 30, status: "todo" },
  { id: "b", title: "Modules", minutes: 45, status: "doing" },
  { id: "c", title: "Validation", minutes: 30, status: "done" },
];
// TODO 1：把 original 和目标 id "a" 交给 completeTask，将返回的新数组存进 updated。
// 下面的数组副本没有改变任何状态，只是暂时满足 StudyTask[] 类型，完成时要替换。
const updated: StudyTask[] = [...original];
// TODO 2：把 updated 交给 buildReport，把返回值存进 report；
// 再从 report.counts 读取 done/todo，并从 report.totalMinutes 读取总分钟，按题目格式输出。
console.log(`Original first status: ${original[0]?.status}`);
console.log(`Updated first status: ${updated[0]?.status}`);
