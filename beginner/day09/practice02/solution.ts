// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type TaskId = string;
interface Task {
  readonly id: TaskId;
  title: string;
  done: boolean;
  note?: string;
}
function describeTask(task: Task): string {
  const status = ""; // TODO：空字符串只是占位；根据 task.done 选择 "已完成" 或 "未完成"，并保存到 status。
  const note = ""; // TODO：空字符串只是占位；读取 task.note，缺失时用 ?? 选择 "无"，并保存到 note。
  const description = ""; // TODO：空字符串只是占位；读取 task.id、task.title，再使用 status 和 note 组合题目要求的两行摘要。
  return description;
}
const task: Task = {
  id: "T-01",
  title: "学习 type 和 interface",
  done: false,
};
const tags: ReadonlyArray<string> = ["TypeScript", "基础"];
const tagsText = ""; // TODO：空字符串只是占位；只读取 tags，用 join 和 ", " 连接标签，并把结果保存到 tagsText。
console.log(describeTask(task));
console.log(`标签: ${tagsText}`);
