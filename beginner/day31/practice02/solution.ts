// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
function* range(start: number, end: number): Generator<number, void, unknown> {
  // TODO 1：按题目约定依次 yield start 到 end，两个边界都包含；
  // 当前空函数体会让展开结果为空，完成时要加入推进与终止条件。
}
function createCountdown(start: number): Iterable<number> {
  return {
    *[Symbol.iterator](): Generator<number, void, unknown> {
      // TODO 2：每次调用 Symbol.iterator 都从 start 建立新的当前位置，
      // 依次 yield start、下一整数，直到 1；空函数体目前不会产出任何值。
    },
  };
}
const largeInteger = 9_007_199_254_740_993n;
// TODO 3：题目要求 largeInteger 精确增加 1，步长必须与它同为 bigint；
// 下面的 0n 只是类型正确的占位，当前结果仍等于原值。
const nextSafeInteger = largeInteger + 0n;
console.log(`范围: ${[...range(2, 4)].join(", ")}`);
console.log(`倒计时: ${[...createCountdown(3)].join(", ")}`);
console.log(`安全整数之后: ${nextSafeInteger}`);
