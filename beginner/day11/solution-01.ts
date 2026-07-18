type OrderState =
  | { status: "pending"; orderId: number }
  | { status: "paid"; orderId: number; amount: number }
  | { status: "cancelled"; orderId: number; reason: string };

function describeOrder(state: OrderState): string {
  switch (state.status) {
    case "pending":
      return "订单 " + state.orderId + "：等待付款";
    case "paid":
      return "订单 " + state.orderId + "：已付款 " + state.amount + " 元";
    case "cancelled":
      return "订单 " + state.orderId + "：已取消（" + state.reason + "）";
  }
}

const orders: OrderState[] = [
  { status: "pending", orderId: 101 },
  { status: "paid", orderId: 102, amount: 88 },
  { status: "cancelled", orderId: 103, reason: "重复下单" },
];

for (const order of orders) {
  console.log(describeOrder(order));
}
