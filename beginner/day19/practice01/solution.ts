// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };
function parsePort(text: string): number {
  const port = Number(text);
  // TODO：检查 port 是否为整数且处于 1 到 65535；任一条件不满足时抛出题目指定消息的 RangeError。
  // 下方 return port 是所有检查通过后的成功路径，不是失败时使用的默认值。
  return port;
}
function savePort(port: number): Result<number> {
  // TODO：port === 13 时返回 ok: false 和“端口 13 不可用”；其他端口返回 ok: true，并把原 port 放入 value。
  // 当前固定失败对象只是类型安全占位，会让所有端口都失败，完成时必须替换。
  return { ok: false, error: "TODO：尚未实现保存逻辑" };
}
function errorMessage(error: unknown): string {
  // TODO：error 是 unknown；若它是 Error，返回 error.message，否则返回“未知错误”。
  // 当前固定返回“未知错误”只代表非 Error 的回退分支，还缺少 Error 分支。
  return "未知错误";
}
const inputs = ["3000", "13", "abc"];
for (const input of inputs) {
  // TODO：在 try 中把当前 input 交给 parsePort，再把合法 port 交给 savePort。
  // result.ok 为 true 时读取 value 并输出成功；为 false 时读取 error 并输出业务失败。
  // catch 参数保持 unknown，交给 errorMessage 后输出解析错误；不要让异常输入继续进入 savePort。
}
