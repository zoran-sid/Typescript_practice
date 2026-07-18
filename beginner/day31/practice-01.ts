function* evenNumbers(
  start: number,
  end: number,
): Generator<number, void, unknown> {
  for (let current = start; current <= end; current += 1) {
    // TODO：只暂停并产出偶数。
    yield current;
  }
}

console.log(`偶数: ${[...evenNumbers(1, 6)].join(", ")}`);

export {};
