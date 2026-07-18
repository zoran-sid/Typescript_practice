function invoke<Args extends unknown[], Result>(
  fn: (...args: Args) => Result,
  ...args: Args
): Result {
  // TODO：把同一组 args 展开传给 fn，并返回 fn 的结果。
  void args;
  throw new Error("not implemented");
}

const total = invoke((price: number, count: number) => price * count, 12, 3);
const title = invoke((prefix: string, day: number) => `${prefix}${day}`, "Day ", 28);
console.log(`Total: ${total}`);
console.log(title);
