import type { StudyTask } from "./models.js";
import { buildReport } from "./report.js";
import { completeTask } from "./task-service.js";

const original: StudyTask[] = [
  { id: "a", title: "Types", minutes: 30, status: "todo" },
  { id: "b", title: "Modules", minutes: 45, status: "doing" },
  { id: "c", title: "Validation", minutes: 30, status: "done" },
];

const updated = completeTask(original, "a");
const report = buildReport(updated);

console.log(`Original first status: ${original[0]?.status}`);
console.log(`Updated first status: ${updated[0]?.status}`);
console.log(`Done: ${report.counts.done}`);
console.log(`Todo: ${report.counts.todo}`);
console.log(`Total minutes: ${report.totalMinutes}`);
