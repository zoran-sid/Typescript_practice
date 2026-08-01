import type { StudyTask } from "../models.js";
import { buildReport } from "../report.js";
import { completeTask } from "../task-service.js";

const original: StudyTask[] = [
  { id: "a", title: "Types", minutes: 30, status: "todo" },
  { id: "b", title: "Modules", minutes: 45, status: "doing" },
  { id: "c", title: "Validation", minutes: 30, status: "done" },
];

// 调用关系：original + "a" -> completeTask -> updated -> buildReport -> report。
const updated = completeTask(original, "a");
const report = buildReport(updated);
console.log(`Original first status: ${original[0]?.status}`);
console.log(`Updated first status: ${updated[0]?.status}`);
console.log(`Done: ${report.counts.done}`);
console.log(`Todo: ${report.counts.todo}`);
console.log(`Total minutes: ${report.totalMinutes}`);

// 调用关系：missing 不命中任何项；some 回调检查是否有对象引用被替换。
const missing = completeTask(original, "missing");
const changedItem = missing.some((task, index) => task !== original[index]);
console.log(`Missing id changed item: ${changedItem}`);
