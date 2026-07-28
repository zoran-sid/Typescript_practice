// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type TaskStatus = "todo" | "doing" | "done";
type StudyTask = { readonly id: string; title: string; minutes: number; status: TaskStatus };
type Report = { counts: Record<TaskStatus, number>; totalMinutes: number };
function updateById<T extends { readonly id: string }>(items: readonly T[], id: string, update: (item: T) => T): T[] {
  // TODO 1：让 map 逐项比较 item.id 与目标 id；命中时把当前 item 交给 update，
  // 未命中时原样返回该 item。结果存进 map 创建的新数组。
  // 下面只复制数组的写法没有调用 update，是保持类型通过的临时占位。
  return [...items];
}
function completeTask(tasks: readonly StudyTask[], id: string): StudyTask[] {
  // TODO 2：把 tasks、目标 id 和更新函数交给 updateById；
  // 更新函数要为命中任务创建新对象并把 status 改为 done，不能改原 task。
  // 下面的浅数组副本没有完成指定任务，是占位结果。
  return [...tasks];
}
function plannedByDuration(tasks: readonly StudyTask[]): StudyTask[] {
  // TODO 3：从 tasks 只保留 status 为 todo 的项，再按 minutes 从小到大排列，
  // 返回结果数组且不对传入的 tasks 调用原地 sort。下面的 [] 会暂时丢掉全部任务。
  return [];
}
function buildReport(tasks: readonly StudyTask[]): Report {
  // TODO 4：为 todo/doing/done 初始化计数，并从 0 开始累计 totalMinutes；
  // 遍历每个 task 时按 task.status 增加对应计数，同时加上 task.minutes，最后返回 Report。
  // 下面的全 0 对象只是初始形状，当前还没有使用 tasks。
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
// TODO 5：补齐题目要求的新旧首项状态、未命中项引用比较、带标签计数和总分钟输出。
