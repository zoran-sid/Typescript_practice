type Cart = { customer: { name: string }; prices: number[] };

function copyPrices(source: number[]): number[] {
  const result: number[] = [];
  for (const price of source) {
    // 每轮把当前 price 放进新的局部数组。
    result.push(price);
  }
  return result;
}

function totalPrices(prices: number[]): number {
  let total = 0;
  for (const price of prices) {
    total = total + price;
  }
  return total;
}

const originalCart: Cart = {
  customer: { name: "Lin" },
  prices: [10, 20],
};

const copiedCart: Cart = {
  customer: { name: originalCart.customer.name },
  // 调用关系：原价格数组 -> copyPrices -> 新价格数组。
  prices: copyPrices(originalCart.prices),
};
copiedCart.prices.push(30);

// 调用关系：副本价格数组 -> totalPrices -> 返回总价 -> console.log。
console.log(`Original items: ${originalCart.prices.length}`);
console.log(`Copied items: ${copiedCart.prices.length}`);
console.log(`Copied total: ${totalPrices(copiedCart.prices)}`);
console.log(`Customer: ${copiedCart.customer.name}`);
