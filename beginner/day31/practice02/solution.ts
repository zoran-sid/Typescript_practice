// 解题结构提示：范围、倒计时和 bigint 三段核心实现保留为 TODO。
function* range(start: number, end: number): Generator<number, void, unknown> {
  // TODO 1：按题目约定产出 start 到 end，处理边界是否包含。
}
function createCountdown(start: number): Iterable<number> {
  return {
    *[Symbol.iterator](): Generator<number, void, unknown> {
      // TODO 2：每次迭代都创建独立状态，并产出 start 到 1。
    },
  };
}
const largeInteger = 9_007_199_254_740_993n;
// TODO 3：用 bigint 类型的步长计算下一个整数。
const nextSafeInteger = largeInteger + 0n;
console.log(`范围: ${[...range(2, 4)].join(", ")}`);
console.log(`倒计时: ${[...createCountdown(3)].join(", ")}`);
console.log(`安全整数之后: ${nextSafeInteger}`);
