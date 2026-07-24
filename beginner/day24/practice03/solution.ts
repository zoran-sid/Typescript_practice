// 解题结构提示：从 unknown JSON 中筛选订单，核心验证与统计留给 TODO。
type Order = { readonly id: string; quantity: number; unitPrice: number };
function isRecord(value: unknown): value is Record<string, unknown> {
  // TODO 1：检查非 null 对象。
  return false;
}
function isOrder(value: unknown): value is Order {
  // TODO 2：验证 id、正数量与非负单价。
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
// TODO 3：用 reduce 计算合法订单总额。
const total = 0;
console.log(`Accepted orders: ${orders.length}`);
console.log(`Rejected orders: ${values.length - orders.length}`);
console.log(`Order total: ${total}`);
