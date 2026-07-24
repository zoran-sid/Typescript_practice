// 解题结构提示：本文件不是完整答案，请沿 TODO 自己补全。
type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };
function parsePort(text: string): number {
  const port = Number(text);
  // TODO：检查整数、最小值和最大值；失败时抛标准 RangeError。
  return port;
}
function savePort(port: number): Result<number> {
  // TODO：分别返回“端口不可用”的失败成员与成功成员。
  // 当前固定失败只是类型安全占位，不是题目答案。
  return { ok: false, error: "TODO：尚未实现保存逻辑" };
}
function errorMessage(error: unknown): string {
  // TODO：先用 instanceof Error 收窄，再读取 message。
  return "未知错误";
}
const inputs = ["3000", "13", "abc"];
for (const input of inputs) {
  // TODO：在 try 中依次调用 parsePort、savePort，并按 result.ok 分支输出；
  // catch 参数保持 unknown，再交给 errorMessage。
}
