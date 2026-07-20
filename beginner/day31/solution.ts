function* evenNumbers(start: number, end: number): Generator<number, void, unknown> {
  for (let current = start; current <= end; current += 1) {
    if (current % 2 === 0) yield current;
  }
}

function createCountdown(start: number): Iterable<number> {
  return {
    [Symbol.iterator](): Iterator<number, void> {
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
const nextId = currentId + 1n;
const jsonText = JSON.stringify({ id: nextId.toString() });

console.log(`偶数: ${[...evenNumbers(1, 6)].join(", ")}`);
console.log(`倒计时: ${[...createCountdown(3)].join(", ")}`);
console.log(`下一个编号: ${nextId}`);
console.log(`JSON: ${jsonText}`);

export {};
