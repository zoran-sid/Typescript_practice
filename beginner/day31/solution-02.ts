function createCountdown(start: number): Iterable<number> {
  return {
    [Symbol.iterator](): Iterator<number, void> {
      let current = start;

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
