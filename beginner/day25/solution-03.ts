type Status = "todo" | "doing" | "done";
type Task = { status: Status; minutes: number };

function summarize(tasks: readonly Task[]): {
  counts: Record<Status, number>;
  minutes: number;
} {
  const counts: Record<Status, number> = { todo: 0, doing: 0, done: 0 };
  let minutes = 0;

  for (const task of tasks) {
    counts[task.status] += 1;
    minutes += task.minutes;
  }

  return { counts, minutes };
}

const report = summarize([
  { status: "todo", minutes: 20 },
  { status: "doing", minutes: 30 },
  { status: "done", minutes: 40 },
  { status: "done", minutes: 10 },
]);

console.log(`Counts: todo=${report.counts.todo}, doing=${report.counts.doing}, done=${report.counts.done}`);
console.log(`Minutes: ${report.minutes}`);
