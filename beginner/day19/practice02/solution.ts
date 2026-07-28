// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };
function parsePrice(text: string): number {
  const price = Number(text);
  // TODO：先确认 text.trim() 不是空字符串；再确认 price 是有限数字且 price >= 0。
  // 任一检查失败时抛 RangeError("价格必须是非负数字")。
  // 下方 return price 只属于全部检查通过的成功路径。
  return price;
}
function errorMessage(error: unknown): string {
  // TODO：error 是 unknown；是 Error 时返回 error.message，否则返回“未知错误”。
  // 当前固定字符串只代表非 Error 的回退分支，不能代替完整收窄。
  return "未知错误";
}
function toPriceResult(text: string): Result<number> {
  // TODO：在 try 中调用 parsePrice(text)；成功时把数字放入 ok:true Result。
  // catch 参数保持 unknown，经 errorMessage 转成 ok:false Result。
  // 下面固定失败对象只让脚手架编译，会让所有输入失败，完成时必须替换。
  return { ok: false, error: "TODO：尚未解析价格" };
}
const priceTexts = ["19.9", "free", "0"];
let validCount = 0;
for (const text of priceTexts) {
  // TODO：只调用 toPriceResult(text)。result.ok 为 true 时输出 value 并增加 validCount；
  // 为 false 时输出 error。不要在循环里重新 try/catch 或用 value 的真假值判断成功。
}
// TODO：输出最终 validCount。上面的 0 是真实初始计数，不是要替换的答案占位。
