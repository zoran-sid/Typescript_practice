type TaskStatus = "todo" | "doing" | "done";
type Task = { readonly id: string; title: string; status: TaskStatus };

function completeTask(tasks: readonly Task[], id: string): Task[] {
  return tasks.map((task) =>
    task.id === id ? { ...task, status: "done" } : task,
  );
}

const original: Task[] = [
  { id: "a", title: "Types", status: "todo" },
  { id: "b", title: "Arrays", status: "doing" },
];
const updated = completeTask(original, "a");

console.log(`Original: ${original[0]?.status}`);
console.log(`Updated: ${updated[0]?.status}`);
console.log(`Same array: ${original === updated}`);
console.log(`Same untouched task: ${original[1] === updated[1]}`);
