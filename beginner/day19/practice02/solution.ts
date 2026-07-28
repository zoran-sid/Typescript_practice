// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };
function parsePort(text: string): number {
  const port = Number(text);
  // TODO：确认 port 不是 NaN、是整数，并处于 1 到 65535；失败时抛带“端口必须是 1 到 65535 的整数”消息的标准错误对象。
  // 下方 return port 只用于全部检查通过后的成功路径。
  return port;
}
function errorMessage(error: unknown): string {
  // TODO：error 是 unknown；是 Error 时返回 error.message，否则返回“未知错误”。
  // 当前固定字符串只代表非 Error 的回退分支，不能代替完整收窄。
  return "未知错误";
}
function savePort(port: number): Result<number> {
  // TODO：port === 13 时返回 ok: false 和“端口 13 不可用”；其他已验证端口返回 ok: true，并把当前 port 放入 value。
  // 本题固定传入 3000，所以会走成功分支；13 是题面明确给出的保存失败规则，不要另造边界。
  // 当前固定失败对象只是临时占位，会使预期的“保存结果: 成功”无法出现，完成时要替换。
  return { ok: false, error: "TODO：尚未实现保存逻辑" };
}
let portToSave: number | undefined;
// undefined 表示“目前还没有拿到合法端口”，这是程序的真实初始状态，不是需要替换的答案占位值。
for (const text of ["3000", "abc"]) {
  // TODO：把当前 text 交给 parsePort；成功时输出得到的端口，并把这个数字保存到 portToSave；
  // 异常时把 unknown 错误交给 errorMessage 后输出，失败的文本不能覆盖已经得到的合法端口。
}
if (portToSave !== undefined) {
  // TODO：把 portToSave 交给 savePort；result.ok 为 true 时读取 value 并输出成功状态，
  // 为 false 时读取 error 并输出失败原因。
}
