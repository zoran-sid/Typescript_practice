type TaskStatus = "todo" | "doing" | "done";
type StudyTask = { readonly id: string; title: string; minutes: number; status: TaskStatus };
type Report = { counts: Record<TaskStatus, number>; totalMinutes: number };

function updateById<T extends { readonly id: string }>(
  items: readonly T[], id: string, update: (item: T) => T,
): T[] {
  return items.map((item) => (item.id === id ? update(item) : item));
}

function completeTask(tasks: readonly StudyTask[], id: string): StudyTask[] {
  return updateById(tasks, id, (task) => ({ ...task, status: "done" }));
}

function plannedByDuration(tasks: readonly StudyTask[]): StudyTask[] {
  return tasks.filter((task) => task.status === "todo")
    .sort((left, right) => left.minutes - right.minutes);
}

function buildReport(tasks: readonly StudyTask[]): Report {
  const counts: Record<TaskStatus, number> = { todo: 0, doing: 0, done: 0 };
  let totalMinutes = 0;
  for (const task of tasks) {
    counts[task.status] += 1;
    totalMinutes += task.minutes;
  }
  return { counts, totalMinutes };
}

const original: StudyTask[] = [
  { id: "a", title: "Types", minutes: 30, status: "todo" },
  { id: "b", title: "Modules", minutes: 45, status: "doing" },
  { id: "c", title: "Validation", minutes: 20, status: "todo" },
  { id: "d", title: "Variables", minutes: 50, status: "todo" },
];
const updated = completeTask(original, "a");
const planned = plannedByDuration(updated);
const report = buildReport(updated);

console.log(`Original first: ${original[0]?.status}`);
console.log(`Updated first: ${updated[0]?.status}`);
console.log(`Same array: ${original === updated}`);
console.log(`Same untouched task: ${original[1] === updated[1]}`);
console.log(`Planned: ${planned.map((task) => task.title).join(", ")}`);
console.log(`Counts: todo=${report.counts.todo}, doing=${report.counts.doing}, done=${report.counts.done}`);
console.log(`Minutes: ${report.totalMinutes}`);
