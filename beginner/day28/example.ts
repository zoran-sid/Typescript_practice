type LessonPair = readonly [title: string, minutes: number];

function summarize([title, minutes]: LessonPair): string {
  return `${title}: ${minutes}m`;
}

function invoke<Args extends unknown[], Result>(
  fn: (...args: Args) => Result,
  ...args: Args
): Result {
  return fn(...args);
}

function normalize(value: string): string;
function normalize(value: readonly string[]): string[];
function normalize(value: string | readonly string[]): string | string[] {
  return typeof value === "string"
    ? value.trim().toLowerCase()
    : value.map((item) => item.trim().toLowerCase());
}

function label(this: { prefix: string }, value: string): string {
  return `[${this.prefix}] ${value}`;
}

console.log(summarize(["Functions", 45]));
console.log(invoke((left: number, right: number) => left + right, 20, 22));
console.log(normalize([" Types ", " MODULES "]).join(", "));
console.log(label.call({ prefix: "TS" }, "typed this"));
