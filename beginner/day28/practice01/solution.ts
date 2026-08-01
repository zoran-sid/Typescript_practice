type ProgressPair = readonly [completed: number, total: number];

function progress(values: readonly boolean[]): ProgressPair {
  const completed = values.filter((value) => value).length;
  return [completed, values.length];
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
  if (typeof value === "string") return value.trim().toLowerCase();
  return value.map((item) => item.trim().toLowerCase());
}

type CourseContext = { title: string; day: number };
function describe(this: CourseContext, prefix: string): string {
  return `${prefix} Day ${this.day}: ${this.title}`;
}

// 调用关系：完成状态数组 -> progress -> 二元组解构 -> 输出。
const [completed, total] = progress([true, false, true, true]);
console.log(`Progress: ${completed}/${total}`);

// 调用关系：函数和匹配的实参一起交给 invoke，invoke 转发调用并 return 结果。
const sum = invoke((left: number, right: number) => left + right, 12, 24);
const title = invoke((day: number) => `Day ${day}`, 28);
console.log(`Total: ${sum}`);
console.log(title);

// 调用关系：单个字符串 / 字符串数组 -> normalize 的对应重载 -> 精确返回类型 -> 输出。
console.log(normalize("  TYPES "));
console.log(normalize([" Modules ", " GENERICS "]).join(", "));

// 调用关系：第一个 call 参数提供 this，"Elective" 才是 describe 的普通参数。
console.log(describe.call({ title: "Advanced functions", day: 28 }, "Elective"));
