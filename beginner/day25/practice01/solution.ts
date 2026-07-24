// 解题结构提示：保留不可变更新、排序和报告函数边界。
type TaskStatus = "todo" | "doing" | "done";
type StudyTask = { readonly id: string; title: string; minutes: number; status: TaskStatus };
type Report = { counts: Record<TaskStatus, number>; totalMinutes: number };
function updateById<T extends { readonly id: string }>(items: readonly T[], id: string, update: (item: T) => T): T[] {
  // TODO 1：用 map 命中 id；命中项交给 update，其他项复用旧引用。
  return [...items];
}
function completeTask(tasks: readonly StudyTask[], id: string): StudyTask[] {
  // TODO 2：调用 updateById，并为命中任务创建 status=done 的新对象。
  return [...tasks];
}
function plannedByDuration(tasks: readonly StudyTask[]): StudyTask[] {
  // TODO 3：筛 todo 后按分钟升序；不得排序原参数数组。
  return [];
}
function buildReport(tasks: readonly StudyTask[]): Report {
  // TODO 4：初始化完整 Record，遍历累加状态数量和分钟。
  return { counts: { todo: 0, doing: 0, done: 0 }, totalMinutes: 0 };
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
console.log(`Same array: ${original === updated}`);
console.log(`Planned: ${planned.map((task) => task.title).join(", ")}`);
console.log(`Counts: ${report.counts.todo}/${report.counts.doing}/${report.counts.done}`);
