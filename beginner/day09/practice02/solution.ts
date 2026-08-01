type TaskId = string;

interface Task {
  readonly id: TaskId;
  title: string;
  done: boolean;
  note?: string;
}

function describeTask(task: Task): string {
  // done 是 boolean，条件表达式会在两段状态文字中选择一段。
  const status = task.done ? "已完成" : "未完成";
  const note = task.note ?? "无";
  // return 把两行任务摘要交回 describeTask(task) 的调用位置。
  return `${task.id} | ${task.title} | ${status}\n备注: ${note}`;
}

const task: Task = {
  id: "T-01",
  title: "学习 type 和 interface",
  done: false,
};
const tags: ReadonlyArray<string> = ["TypeScript", "基础"];
const tagsText = tags.join(", ");

// 调用关系：task -> describeTask -> 两行摘要；tags -> join -> tagsText。
console.log(describeTask(task));
console.log(`标签: ${tagsText}`);
