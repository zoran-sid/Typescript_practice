type Task = { title: string; minutes: number; status: "todo" | "done" };

function plannedByDuration(tasks: readonly Task[]): Task[] {
  return tasks
    .filter((task) => task.status === "todo")
    .sort((left, right) => left.minutes - right.minutes);
}

const tasks: Task[] = [
  { title: "Variables", minutes: 20, status: "done" },
  { title: "Modules", minutes: 45, status: "todo" },
  { title: "Types", minutes: 30, status: "todo" },
];
const planned = plannedByDuration(tasks);

console.log(`Order: ${planned.map((task) => task.title).join(", ")}`);
console.log(`Original first: ${tasks[0]?.title}`);
