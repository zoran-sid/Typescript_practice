// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type Order = { readonly id: string; quantity: number; unitPrice: number };
function isRecord(value: unknown): value is Record<string, unknown> {
  // TODO 1：检查 value 不是 null 且 typeof 为 object。
  // true 承诺可以按 Record 读取字段，false 表示检查未通过；下面的 false 是全拒绝占位。
  return false;
}
function isOrder(value: unknown): value is Order {
  // TODO 2：先确认 value 是对象，再检查 id 是 string、quantity 是大于 0 的 number、
  // unitPrice 是不小于 0 的有限 number。true 才承诺当前值是 Order；下面的 false 要替换。
  return false;
}
const text = JSON.stringify([
  { id: "A", quantity: 2, unitPrice: 30 },
  { id: "B", quantity: 1, unitPrice: 100 },
  { id: "C", quantity: "2", unitPrice: 20 },
]);
const parsed: unknown = JSON.parse(text);
const values: unknown[] = Array.isArray(parsed) ? parsed : [];
const orders = values.filter(isOrder);
// TODO 3：只遍历已通过 isOrder 的 orders；每项金额是 quantity 与 unitPrice 的乘积，
// 把各项金额累加后存进 total。下面的 0 只是临时总额，不是固定答案。
const total = 0;
console.log(`Accepted orders: ${orders.length}`);
console.log(`Rejected orders: ${values.length - orders.length}`);
console.log(`Order total: ${total}`);
