type Task = { title: string; minutes: number; status: "todo" | "done" };

function plannedByDuration(tasks: readonly Task[]): Task[] {
  // TODO：只留下 todo，再按 minutes 从小到大排序；不能修改 tasks。
  return [...tasks];
}

const tasks: Task[] = [
  { title: "Variables", minutes: 20, status: "done" },
  { title: "Modules", minutes: 45, status: "todo" },
  { title: "Types", minutes: 30, status: "todo" },
];
const planned = plannedByDuration(tasks);

console.log(`Order: ${planned.map((task) => task.title).join(", ")}`);
console.log(`Original first: ${tasks[0]?.title}`);
