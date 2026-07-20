type ProgressPair = readonly [completed: number, total: number];

function progress(values: readonly boolean[]): ProgressPair {
  return [values.filter(Boolean).length, values.length];
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

type CourseContext = { title: string; day: number };

function describe(this: CourseContext, prefix: string): string {
  return `${prefix} Day ${this.day}: ${this.title}`;
}

const [completed, total] = progress([true, false, true, true]);
console.log(`Progress: ${completed}/${total}`);
console.log(`Total: ${invoke((price: number, count: number) => price * count, 12, 3)}`);
console.log(invoke((prefix: string, day: number) => `${prefix}${day}`, "Day ", 28));
console.log(normalize("  TYPES "));
console.log(normalize([" Modules ", " GENERICS "]).join(", "));
console.log(describe.call({ title: "Advanced functions", day: 28 }, "Elective"));
