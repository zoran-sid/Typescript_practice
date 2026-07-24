// 解题结构提示：本文件不是完整答案，请沿 TODO 自己补全。
type StudyTask =
  | { status: "waiting"; title: string }
  | { status: "studying"; title: string; minutes: number }
  | { status: "completed"; title: string; score?: number }
  | { status: "failed"; title: string; reason: string };
// TODO：实现穷尽检查失败时的处理；这里只保留输入必须为 never 的签名。
// 提示：declare 在这里只保存签名；正式作答时要删除 declare，并写出函数体。
declare function assertNever(value: never): never;
function describeTask(task: StudyTask): string {
  switch (task.status) {
    case "waiting":
      // TODO：返回“待开始”文字，并使用当前分支共有的 title。
      return "";
    case "studying":
      // TODO：此处已收窄，可安全读取 minutes。
      return "";
    case "completed":
      // TODO：score 仍可能是 undefined，请分别组织“待评分”和具体分数。
      return "";
    case "failed":
      // TODO：此处已收窄，可安全读取 reason。
      return "";
    default:
      return assertNever(task);
  }
}
const tasks: StudyTask[] = [
  { status: "waiting", title: "联合类型" },
  { status: "studying", title: "函数", minutes: 45 },
  { status: "completed", title: "对象", score: 92 },
  { status: "completed", title: "复习" },
  { status: "failed", title: "提交", reason: "网络中断" },
];
for (const task of tasks) {
  // TODO：调用 describeTask，并输出每次调用交回的字符串。
}
