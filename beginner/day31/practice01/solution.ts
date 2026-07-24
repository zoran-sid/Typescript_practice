// 解题结构提示：生成器、手写 iterable 与 bigint 边界分别完成。
function* evenNumbers(start: number, end: number): Generator<number, void, unknown> {
  // TODO 1：逐个遍历闭区间，只在当前值为偶数时 yield。
}
function createCountdown(start: number): Iterable<number> {
  return {
    *[Symbol.iterator](): Generator<number, void, unknown> {
      // TODO 2：从 start 到 1 逐次 yield；确认先产出还是先递减。
    },
  };
}
const currentId = 9_007_199_254_740_993n;
// TODO 3：选择与 bigint 相同类型的递增量。
const increment = 0n;
const nextId = currentId + increment;
// TODO 4：进入 JSON 前把 bigint 转成可序列化表示。
const jsonText = "";
console.log(`偶数: ${[...evenNumbers(1, 6)].join(", ")}`);
console.log(`倒计时: ${[...createCountdown(3)].join(", ")}`);
console.log(`下一个编号: ${nextId}`);
console.log(`JSON: ${jsonText}`);
