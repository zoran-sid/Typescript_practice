// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
const orders = [
  { id: "A1", amount: 40, status: "done" },
  { id: "B2", amount: 80, status: "pending" },
  { id: "C3", amount: 60, status: "done" },
  { id: "D4", amount: 120, status: "pending" },
];
const completedOrders = orders.filter((order) => {
  // TODO：当前输入是 order；判断 order.status 是否为 "done"。
  // filter 收到 true 会保留当前 order，收到 false 会丢弃它。下面的 false 只是 boolean 占位，完成时要替换为字段比较结果。
  return false;
});
const completedIds = completedOrders.map((order) => {
  // TODO：当前输入是 completedOrders 中的一笔 order；交回它的 id，让 map 把所有编号收集到 completedIds。
  // 下面的空字符串只是 string 占位，完成时要替换为从 order 读取的编号。
  return "";
});
const firstLargeOrder = orders.find((order) => {
  // TODO：题目把“大额”定义为 order.amount 大于或等于 100；返回这项比较的 boolean 结果。
  // find 收到 true 会停止并交回当前 order，收到 false 会继续下一项。下面整句 return false 只是占位，完成时要替换。
  return false;
});
let completedTotal = 0;
for (const order of completedOrders) {
  // TODO：当前输入是 completedOrders 中的一笔 order；读取旧 completedTotal，加上 order.amount，再把新总额赋值回 completedTotal。
}
let firstLargeId = "未找到";
if (firstLargeOrder !== undefined) {
  // 此分支中 firstLargeOrder 已收窄为订单对象。
  // TODO：此时 firstLargeOrder 已确定存在；读取它的 id，并用该编号替换 firstLargeId 中的“未找到”。
}
console.log(`已完成订单: ${completedIds.join(", ")}`);
console.log(`完成总额: ${completedTotal}`);
console.log(`第一笔大额订单: ${firstLargeId}`);
