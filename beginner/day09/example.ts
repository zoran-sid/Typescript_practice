type TaskId = string;

interface Task {
  readonly id: TaskId;
  title: string;
  done: boolean;
  note?: string;
}

function describeTask(task: Task): string {
  const status = task.done ? "已完成" : "未完成";
  const note = task.note ?? "无";
  return `${task.id} | ${task.title} | ${status}\n备注: ${note}`;
}

const task: Task = {
  id: "T-01",
  title: "学习 type 和 interface",
  done: false,
};

const tags: ReadonlyArray<string> = ["TypeScript", "基础"];

console.log(describeTask(task));
console.log(`标签: ${tags.join(", ")}`);

export {};
