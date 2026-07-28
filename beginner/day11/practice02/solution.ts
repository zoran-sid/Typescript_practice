// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type LoadState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; items: string[] }
  | { status: "error"; message: string };
// TODO：删除 declare 并实现 assertNever：参数保持 never；若运行时意外到达这里，抛出包含该值的错误。
// never 用来检查四种 LoadState 是否都已有 case；新增状态却漏写分支时应在这里报类型错误。
declare function assertNever(value: never): never;
function describeLoadState(state: LoadState): string {
  switch (state.status) {
    case "idle":
      // TODO：当前 state 是 idle，返回题目要求的“等待开始”。
      // 下面的 "" 只是临时的 string 占位，完成时要替换。
      return "";
    case "loading":
      // TODO：当前 state 是 loading，返回题目要求的“正在加载”。
      // 下面的 "" 只是临时占位，不能保留为答案。
      return "";
    case "success":
      // TODO：当前 state 是 success；读取 state.items 的长度，并把数组内容连接成列表，组成“已加载 … 项：…”。
      // 下面的 "" 是临时占位，完成时要替换为生成的字符串。
      return "";
    case "error":
      // TODO：当前 state 是 error；用 state.message 组成“加载失败：…”。
      // 下面的 "" 是临时占位，完成时要替换。
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
  // TODO：把当前 state 传给 describeLoadState，再输出返回的描述；不要直接写死四行结果。
}
