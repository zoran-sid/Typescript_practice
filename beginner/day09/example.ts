type TaskId = string;

interface Task {
  readonly id: TaskId;
  title: string;
  done: boolean;
  note?: string;
}

interface TaskSummary {
  mainText: string;
  noteText: string;
}

function createTaskSummary(task: Task): TaskSummary {
  const status = task.done ? "已完成" : "未完成";
  const note = task.note ?? "无";
  return {
    mainText: `${task.id} | ${task.title} | ${status}`,
    noteText: `备注: ${note}`,
  };
}

const task: Task = {
  id: "T-01",
  title: "学习 type 和 interface",
  done: false,
};

const tags: ReadonlyArray<string> = ["TypeScript", "基础"];
const summary = createTaskSummary(task);

console.log(summary.mainText);
console.log(summary.noteText);
console.log(`标签: ${tags.join(", ")}`);

export {};
