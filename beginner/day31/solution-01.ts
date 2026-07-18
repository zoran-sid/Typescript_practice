function* evenNumbers(
  start: number,
  end: number,
): Generator<number, void, unknown> {
  for (let current = start; current <= end; current += 1) {
    if (current % 2 === 0) {
      yield current;
    }
  }
}

console.log(`偶数: ${[...evenNumbers(1, 6)].join(", ")}`);

export {};
