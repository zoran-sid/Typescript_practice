const orders = [
  { id: "A1", amount: 40, status: "done" },
  { id: "B2", amount: 80, status: "pending" },
  { id: "C3", amount: 60, status: "done" },
  { id: "D4", amount: 120, status: "pending" },
];

// 调用关系：orders -> filter 回调逐项判断 -> completedOrders。
const completedOrders = orders.filter((order) => {
  // return true 时保留当前订单，false 时丢弃当前订单。
  return order.status === "done";
});

// 调用关系：completedOrders -> map 回调读取 id -> completedIds。
const completedIds = completedOrders.map((order) => {
  return order.id;
});

// 调用关系：orders -> find 回调逐项判断金额 -> firstLargeOrder。
const firstLargeOrder = orders.find((order) => {
  // 达到 100 就返回 true，find 随即停止并交回当前订单。
  return order.amount >= 100;
});

let completedTotal = 0;
for (const order of completedOrders) {
  completedTotal = completedTotal + order.amount;
}

let firstLargeId = "未找到";
if (firstLargeOrder !== undefined) {
  firstLargeId = firstLargeOrder.id;
}

// 调用关系：三个结果变量 -> console.log -> 订单统计报告。
console.log(`已完成订单: ${completedIds.join(", ")}`);
console.log(`完成总额: ${completedTotal}`);
console.log(`第一笔大额订单: ${firstLargeId}`);
