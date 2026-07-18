function* range(
  start: number,
  end: number,
): Generator<number, void, unknown> {
  for (let current = start; current <= end; current += 1) {
    yield current;
  }
}

function createCountdown(start: number): Iterable<number> {
  return {
    *[Symbol.iterator](): Generator<number, void, unknown> {
      for (let current = start; current >= 1; current -= 1) {
        yield current;
      }
    },
  };
}

const nextSafeInteger = 9_007_199_254_740_993n + 1n;

console.log(`范围: ${[...range(2, 4)].join(", ")}`);
console.log(`倒计时: ${[...createCountdown(3)].join(", ")}`);
console.log(`安全整数之后: ${nextSafeInteger}`);

export {};
