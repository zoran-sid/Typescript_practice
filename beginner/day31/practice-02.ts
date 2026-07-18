function createCountdown(start: number): Iterable<number> {
  return {
    [Symbol.iterator](): Iterator<number, void> {
      // TODO：第一次 next() 应从 start 本身开始。
      let current = start - 1;

      return {
        next(): IteratorResult<number, void> {
          if (current < 1) {
            return { done: true, value: undefined };
          }

          const value = current;
          current -= 1;
          return { done: false, value };
        },
      };
    },
  };
}

console.log(`倒计时: ${[...createCountdown(3)].join(", ")}`);

export {};
