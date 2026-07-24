// 这是教学脚手架，不是完整答案。请完成所有 TODO。
type TaskId = string;
interface Task {
  readonly id: TaskId;
  title: string;
  done: boolean;
  note?: string;
}
function describeTask(task: Task): string {
  const status = ""; // TODO：根据 done 选择状态文字。
  const note = ""; // TODO：使用 ?? 处理可选属性。
  const description = ""; // TODO：读取任务属性并组合两行摘要。
  return description;
}
const task: Task = {
  id: "T-01",
  title: "学习 type 和 interface",
  done: false,
};
const tags: ReadonlyArray<string> = ["TypeScript", "基础"];
const tagsText = ""; // TODO：只读取只读数组并连接标签。
console.log(describeTask(task));
console.log(`标签: ${tagsText}`);
