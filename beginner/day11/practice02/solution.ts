// 解题结构提示：本文件不是完整答案，请沿 TODO 自己补全。
type LoadState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; items: string[] }
  | { status: "error"; message: string };
// TODO：实现穷尽检查失败时的处理；这里只保留输入必须为 never 的签名。
// 提示：declare 在这里只保存签名；正式作答时要删除 declare，并写出函数体。
declare function assertNever(value: never): never;
function describeLoadState(state: LoadState): string {
  switch (state.status) {
    case "idle":
      // TODO：返回等待状态文字。
      return "";
    case "loading":
      // TODO：返回加载中文字。
      return "";
    case "success":
      // TODO：利用收窄后的 items 生成数量与列表。
      return "";
    case "error":
      // TODO：利用收窄后的 message 生成失败文字。
      return "";
    default:
      return assertNever(state);
  }
}
const states: LoadState[] = [
  { status: "idle" },
  { status: "loading" },
  { status: "success", items: ["变量", "联合"] },
  { status: "error", message: "网络不可用" },
];
for (const state of states) {
  // TODO：调用描述函数并输出结果。
}
