type OrderState =
  | { status: "pending"; orderId: number }
  | { status: "paid"; orderId: number; amount: number }
  | { status: "cancelled"; orderId: number; reason: string };

function describeOrder(state: OrderState): string {
  return "订单状态待处理：" + state.orderId;
}

const orders: OrderState[] = [
  { status: "pending", orderId: 101 },
  { status: "paid", orderId: 102, amount: 88 },
  { status: "cancelled", orderId: 103, reason: "重复下单" },
];

for (const order of orders) {
  console.log(describeOrder(order));
}
