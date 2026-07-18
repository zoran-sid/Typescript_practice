function total(prices: number[]): void {
  console.log(prices.reduce((sum, price) => sum + price, 0));
}

const actual = total([10, 20]);

if (actual === undefined) {
  console.log("测试失败: total 没有返回值");
}
