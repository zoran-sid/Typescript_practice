function invoke<Args extends unknown[], Result>(
  fn: (...args: Args) => Result,
  ...args: Args
): Result {
  return fn(...args);
}

const total = invoke((price: number, count: number) => price * count, 12, 3);
const title = invoke((prefix: string, day: number) => `${prefix}${day}`, "Day ", 28);
console.log(`Total: ${total}`);
console.log(title);
