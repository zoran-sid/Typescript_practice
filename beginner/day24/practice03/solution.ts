type Order = { readonly id: string; quantity: number; unitPrice: number };

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object";
}

function isOrder(value: unknown): value is Order {
  return isRecord(value)
    && typeof value.id === "string"
    && typeof value.quantity === "number"
    && Number.isFinite(value.quantity)
    && value.quantity > 0
    && typeof value.unitPrice === "number"
    && Number.isFinite(value.unitPrice)
    && value.unitPrice >= 0;
}

const text = JSON.stringify([
  { id: "A", quantity: 2, unitPrice: 30 },
  { id: "B", quantity: 1, unitPrice: 100 },
  { id: "C", quantity: "2", unitPrice: 20 },
]);

// 调用关系：JSON 文字 -> JSON.parse -> unknown -> 数组检查 -> filter(isOrder)。
const parsed: unknown = JSON.parse(text);
const values: unknown[] = Array.isArray(parsed) ? parsed : [];
const orders = values.filter(isOrder);
// 回调关系：reduce 只累计已经通过 isOrder 的订单金额。
const total = orders.reduce((sum, order) => sum + order.quantity * order.unitPrice, 0);

console.log(`Accepted orders: ${orders.length}`);
console.log(`Rejected orders: ${values.length - orders.length}`);
console.log(`Order total: ${total}`);
