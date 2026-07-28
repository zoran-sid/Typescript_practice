// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
function* evenNumbers(start: number, end: number): Generator<number, void, unknown> {
  // TODO 1：从 start 逐个走到 end，起点和终点都包含；
  // 当前数字能被 2 整除时才 yield。函数体为空时不会产出任何值。
}
function createCountdown(start: number): Iterable<number> {
  return {
    [Symbol.iterator](): Iterator<number, void, unknown> {
      // TODO 2：把 current 定义在这次 Symbol.iterator 调用内部，并从 start 开始；
      // 这样同一个 iterable 每次开始新遍历时，都有一份互不影响的当前位置。
      let current = start;

      return {
        next(): IteratorResult<number, void> {
          // TODO 3：current >= 1 时，先保存本轮要交出的数字，再把 current 减 1，
          // 返回 done: false 与本轮数字；current < 1 时返回 done: true。
          // 下面的结果只是“立即结束”的占位，完成时要替换成这两个分支。
          return { done: true, value: undefined };
        },
      };
    },
  };
}
const currentId = 9_007_199_254_740_993n;
// TODO 4：题目要求编号精确增加 1；increment 必须是 bigint，
// 下面的 0n 类型正确但数值只是占位，当前不会让编号前进。
const increment = 0n;
const nextId = currentId + increment;
// TODO 5：先把 nextId 转成字符串，放进对象的 id 字段，再交给 JSON.stringify；
// 下面的空字符串是尚未序列化时的占位，不能直接 stringify bigint。
const jsonText = "";
console.log(`偶数: ${[...evenNumbers(1, 6)].join(", ")}`);
console.log(`倒计时: ${[...createCountdown(3)].join(", ")}`);
console.log(`下一个编号: ${nextId}`);
console.log(`JSON: ${jsonText}`);
