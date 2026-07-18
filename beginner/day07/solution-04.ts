const orders = [
  { id: "A1", amount: 40, status: "completed" },
  { id: "B2", amount: 50, status: "pending" },
  { id: "C3", amount: 60, status: "completed" },
];

const completedOrders = orders.filter((order) => order.status === "completed");
const completedIds = completedOrders.map((order) => order.id);

let completedTotal = 0;
for (const order of completedOrders) {
  completedTotal += order.amount;
}

console.log(`已完成订单: ${completedIds.join(", ")}`);
console.log(`完成总额: ${completedTotal}`);

export {};
