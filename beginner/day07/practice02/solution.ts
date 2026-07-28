// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
const prices = [15, 80, 120, 45];
const discountedPrices = prices.map((price) => {
  // TODO：当前输入是 prices 中的原价 price；计算它的九折新值，让 map 收集到 discountedPrices。
  // 下面的 0 只是 number 类型占位，完成时要替换为折后价格。
  return 0;
});
const affordablePrices = discountedPrices.filter((price) => {
  // TODO：当前输入是 discountedPrices 中的折后 price；判断它是否严格低于 50。
  // filter 收到 true 会保留当前 price，收到 false 会丢弃它。下面的 false 只是 boolean 占位，完成时要替换。
  return false;
});
const firstLargePrice = prices.find((price) => {
  // TODO：当前输入是原数组中的 price；判断它是否大于或等于 100。
  // find 收到 true 会停止并交回当前 price，收到 false 会继续下一项。下面的 false 只是 boolean 占位，完成时要替换。
  return false;
});
console.log(`打折后: ${discountedPrices.join(", ")}`);
console.log(`低于 50: ${affordablePrices.join(", ")}`);
console.log(`第一个至少 100: ${firstLargePrice}`);
