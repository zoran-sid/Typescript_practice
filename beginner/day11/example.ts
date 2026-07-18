type LoadState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; items: string[] }
  | { status: "error"; message: string };

function assertNever(value: never): never {
  throw new Error("未处理的状态：" + JSON.stringify(value));
}

function describeLoadState(state: LoadState): string {
  switch (state.status) {
    case "idle":
      return "等待开始";
    case "loading":
      return "正在加载";
    case "success":
      return "已加载 " + state.items.length + " 项：" + state.items.join("、");
    case "error":
      return "加载失败：" + state.message;
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
  console.log(describeLoadState(state));
}
