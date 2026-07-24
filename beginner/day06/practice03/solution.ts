// 这是教学脚手架，不是完整答案。请完成所有 TODO。
type Cart = { customer: { name: string }; prices: number[] };
function copyPrices(source: number[]): number[] {
  const result: number[] = [];
  for (const price of source) {
    // TODO：把当前 price 加入函数局部数组 result。
  }
  return result;
}
function totalPrices(prices: number[]): number {
  let total = 0;
  for (const price of prices) {
    // TODO：使用旧 total 与当前 price 完成累加。
  }
  return total;
}
const originalCart: Cart = {
  customer: { name: "Lin" },
  prices: [10, 20],
};
const copiedCart: Cart = {
  customer: { name: "" }, // TODO：复制名称，同时创建独立的嵌套对象。
  prices: copyPrices(originalCart.prices),
};
// TODO：只向 copiedCart.prices 追加题目指定的新价格。
console.log(`Original items: ${originalCart.prices.length}`);
console.log(`Copied items: ${copiedCart.prices.length}`);
console.log(`Copied total: ${totalPrices(copiedCart.prices)}`);
console.log(`Customer: ${copiedCart.customer.name}`);
