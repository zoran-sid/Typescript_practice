// 这是教学脚手架，不是完整答案。请完成所有 TODO。
const prices = [15, 80, 120, 45];
const discountedPrices = prices.map((price) => {
  // TODO：返回当前 price 对应的折后新值。
  return 0;
});
const affordablePrices = discountedPrices.filter((price) => {
  // TODO：返回“折后价格低于边界”的 boolean。
  return false;
});
const firstLargePrice = prices.find((price) => {
  // TODO：返回“原价至少达到边界”的 boolean。
  return false;
});
console.log(`打折后: ${discountedPrices.join(", ")}`);
console.log(`低于 50: ${affordablePrices.join(", ")}`);
console.log(`第一个至少 100: ${firstLargePrice}`);
