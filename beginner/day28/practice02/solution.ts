// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type DeliveryPair = readonly [channel: "email" | "sms", recipient: string];
function describeDelivery(pair: DeliveryPair): string {
  // TODO 1：按固定位置取出 channel 与 recipient，组成“渠道 -> 地址”。
  // 下面的空字符串没有使用元组中的两个值，只是 string 占位。
  return "";
}
// TODO 2：把 declare 替换成真正实现；同一个 Args 同时连接 fn 参数与 ...args，
// 函数体只调用 fn(...args) 并交回 Result。declare 本身不会生成运行时代码。
declare function invoke<Args extends unknown[], Result>(fn: (...args: Args) => Result, ...args: Args): Result;
function normalizeRecipients(value: string): string;
function normalizeRecipients(value: readonly string[]): string[];
function normalizeRecipients(value: string | readonly string[]): string | string[] {
  // TODO 3：单地址返回 trim + 小写后的 string；数组输入用 map 返回新的 string[]。
  // 两条公开重载必须保留各自精确结果；空字符串只是尚未实现两个分支的占位。
  return "";
}
type BillingContext = { prefix: string };
function formatNotice(this: BillingContext, message: string): string {
  // TODO 4：this 由 formatNotice.call 的第一个参数提供，不属于普通实参数组；
  // 读取 this.prefix 与 message，组成“[前缀] 消息”。空字符串是临时返回值。
  return "";
}
console.log(describeDelivery(["email", "learner@example.com"]));
// TODO 5：实现 invoke 后，用一个接收 quantity、unitPrice、discount 的账单函数，
// 把 3、80、24 作为同一参数元组转发，并将计算结果按“Invoice: 金额”输出。
console.log(normalizeRecipients(" Learner@Example.com "));
// TODO 6：上面一行增加“Single: ”标签；再把带空格的 A/B 两个地址交给数组重载，
// 用逗号和空格连接新数组并输出“Batch: ...”，不能把规范化结果写死。
console.log(formatNotice.call({ prefix: "billing" }, "paid"));
