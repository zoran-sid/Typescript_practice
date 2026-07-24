// 解题结构提示：保留元组、可变参数、重载和显式 this 的类型关系。
type ProgressPair = readonly [completed: number, total: number];
function progress(values: readonly boolean[]): ProgressPair {
  // TODO 1：计算 true 的数量；第二项保留总长度。
  return [0, values.length];
}
// TODO 2：按此签名实现 invoke：把 args 原样转发给 fn，并返回 Result。
declare function invoke<Args extends unknown[], Result>(fn: (...args: Args) => Result, ...args: Args): Result;
function normalize(value: string): string;
function normalize(value: readonly string[]): string[];
function normalize(value: string | readonly string[]): string | string[] {
  // TODO 3：按输入形状分别规范化字符串或数组，并保持重载关系。
  return "";
}
type CourseContext = { title: string; day: number };
function describe(this: CourseContext, prefix: string): string {
  // TODO 4：使用 this.day 与 this.title 组成描述。
  return "";
}
const [completed, total] = progress([true, false, true, true]);
console.log(`Progress: ${completed}/${total}`);
// TODO 5：完成 invoke 后取消下面注释，分别测试数字函数与字符串函数。
// console.log(invoke((left: number, right: number) => left + right, 20, 22));
console.log(normalize("  TYPES "));
console.log(describe.call({ title: "Advanced functions", day: 28 }, "Elective"));
