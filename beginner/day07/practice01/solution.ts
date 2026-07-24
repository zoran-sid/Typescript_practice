// 这是教学脚手架，不是完整答案。请完成所有 TODO。
const orders = [
  { id: "A1", amount: 40, status: "done" },
  { id: "B2", amount: 80, status: "pending" },
  { id: "C3", amount: 60, status: "done" },
  { id: "D4", amount: 120, status: "pending" },
];
const completedOrders = orders.filter((order) => {
  // TODO：返回一个 boolean，决定当前完整订单是否保留。
  return false;
});
const completedIds = completedOrders.map((order) => {
  // TODO：返回当前订单的编号，而不是整个对象。
  return "";
});
const firstLargeOrder = orders.find((order) => {
  // TODO：返回“金额达到边界”的比较结果。
  return false;
});
let completedTotal = 0;
for (const order of completedOrders) {
  // TODO：把当前已完成订单的金额累加到旧总额。
}
let firstLargeId = "未找到";
if (firstLargeOrder !== undefined) {
  // 此分支中 firstLargeOrder 已收窄为订单对象。
  // TODO：读取 id 并更新 firstLargeId。
}
console.log(`已完成订单: ${completedIds.join(", ")}`);
console.log(`完成总额: ${completedTotal}`);
console.log(`第一笔大额订单: ${firstLargeId}`);
