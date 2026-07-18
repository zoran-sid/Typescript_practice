type Task = {
  readonly id: number;
  readonly title: string;
  readonly done: boolean;
};

const tasks: readonly Task[] = [
  { id: 1, title: "阅读", done: false },
  { id: 2, title: "练习", done: false },
];

const updatedTasks = tasks.map((task) =>
  task.id === 2 ? { ...task, done: true } : task,
);
const completedCount = updatedTasks.filter((task) => task.done).length;

console.log("原状态：" + tasks.map((task) => task.done).join(","));
console.log("新状态：" + updatedTasks.map((task) => task.done).join(","));
console.log("已完成：" + completedCount);
