// 解题结构提示：本文件不是完整答案，请沿 TODO 自己补全。
type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };
function parsePort(text: string): number {
  const port = Number(text);
  // TODO：验证 NaN、小数与范围，失败时抛标准错误对象。
  return port;
}
function errorMessage(error: unknown): string {
  // TODO：收窄 unknown 后返回错误消息。
  return "未知错误";
}
function savePort(port: number): Result<number> {
  // TODO：根据业务规则构造成功或失败联合成员。
  return { ok: false, error: "TODO：尚未实现保存逻辑" };
}
for (const text of ["3000", "abc"]) {
  // TODO：用 try/catch 分开成功解析与异常路径。
}
// TODO：调用 savePort 后先检查 ok，再访问 value 或 error。
