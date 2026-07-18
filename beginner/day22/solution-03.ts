function total(prices: number[]): number {
  return prices.reduce((sum, price) => sum + price, 0);
}

const actual = total([10, 20]);

if (actual === 30) {
  console.log("测试通过: 总价是 30");
} else {
  throw new Error(`测试失败：期望 30，实际 ${actual}`);
}
