// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type Cart = { customer: { name: string }; prices: number[] };
function copyPrices(source: number[]): number[] {
  const result: number[] = [];
  // 上面的 [] 是本次调用用来收集价格副本的真实空数组，不是占位答案。
  for (const price of source) {
    // TODO：本轮输入是 source 中的 price；把它追加到函数局部数组 result，最后由 return 交回完整副本。
  }
  return result;
}
function totalPrices(prices: number[]): number {
  let total = 0;
  for (const price of prices) {
    // TODO：本轮输入是 prices 中的 price；读取旧 total，加上 price，再把新总和赋值回 total。
  }
  return total;
}
const originalCart: Cart = {
  customer: { name: "Lin" },
  prices: [10, 20],
};
const copiedCart: Cart = {
  customer: { name: "" }, // TODO：空字符串只是占位；读取 originalCart.customer.name，并保存在这个新建的 customer 对象中。
  prices: copyPrices(originalCart.prices),
};
// TODO：只向 copiedCart.prices 追加新价格 30，使副本有三项；不要修改 originalCart.prices。
console.log(`Original items: ${originalCart.prices.length}`);
console.log(`Copied items: ${copiedCart.prices.length}`);
console.log(`Copied total: ${totalPrices(copiedCart.prices)}`);
console.log(`Customer: ${copiedCart.customer.name}`);
