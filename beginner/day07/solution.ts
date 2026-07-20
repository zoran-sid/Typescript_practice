const orders = [
  { id: "A1", amount: 40, status: "done" },
  { id: "B2", amount: 80, status: "pending" },
  { id: "C3", amount: 60, status: "done" },
  { id: "D4", amount: 120, status: "pending" },
];

const completedOrders = orders.filter(
  (order) => order.status === "done",
);

const completedIds = completedOrders.map((order) => order.id);

const firstLargeOrder = orders.find(
  (order) => order.amount >= 100,
);

let completedTotal = 0;

for (const order of completedOrders) {
  completedTotal = completedTotal + order.amount;
}

let firstLargeId = "未找到";

if (firstLargeOrder !== undefined) {
  firstLargeId = firstLargeOrder.id;
}

console.log(`已完成订单: ${completedIds.join(", ")}`);
console.log(`完成总额: ${completedTotal}`);
console.log(`第一笔大额订单: ${firstLargeId}`);

export {};
