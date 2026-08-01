function* evenNumbers(start: number, end: number): Generator<number, void, unknown> {
  // 循环关系：逐个检查闭区间中的数字，只把偶数 yield 给调用处。
  for (let current = start; current <= end; current += 1) {
    if (current % 2 === 0) yield current;
  }
}

function createCountdown(start: number): Iterable<number> {
  return {
    [Symbol.iterator](): Iterator<number, void, unknown> {
      // 每次调用 Symbol.iterator 都创建独立 current，所以可以重复遍历。
      let current = start;
      return {
        next(): IteratorResult<number, void> {
          if (current < 1) return { done: true, value: undefined };
          const value = current;
          current -= 1;
          return { done: false, value };
        },
      };
    },
  };
}

const currentId = 9_007_199_254_740_993n;
const increment = 1n;
const nextId = currentId + increment;
// 调用关系：bigint -> toString -> 普通对象 -> JSON.stringify -> jsonText。
const jsonText = JSON.stringify({ id: nextId.toString() });

// 调用关系：固定区间 / 起点 -> iterable -> 展开语法反复请求下一项 -> join -> 输出。
console.log(`偶数: ${[...evenNumbers(1, 6)].join(", ")}`);
console.log(`倒计时: ${[...createCountdown(3)].join(", ")}`);
console.log(`下一个编号: ${nextId}`);
console.log(`JSON: ${jsonText}`);
