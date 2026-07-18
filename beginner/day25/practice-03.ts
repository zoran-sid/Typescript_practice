type Status = "todo" | "doing" | "done";
type Task = { status: Status; minutes: number };

function summarize(tasks: readonly Task[]): {
  counts: Record<Status, number>;
  minutes: number;
} {
  // TODO：每种状态都要统计；minutes 是所有任务的总分钟数。
  void tasks;
  return { counts: { todo: 0, doing: 0, done: 0 }, minutes: 0 };
}

const report = summarize([
  { status: "todo", minutes: 20 },
  { status: "doing", minutes: 30 },
  { status: "done", minutes: 40 },
  { status: "done", minutes: 10 },
]);

console.log(`Counts: todo=${report.counts.todo}, doing=${report.counts.doing}, done=${report.counts.done}`);
console.log(`Minutes: ${report.minutes}`);
