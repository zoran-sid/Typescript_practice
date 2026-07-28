// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type ProgressPair = readonly [completed: number, total: number];
function progress(values: readonly boolean[]): ProgressPair {
  // TODO 1：输入 values 是完成状态数组；第一项计算其中 true 的数量，
  // 第二项使用 values.length，并按 [completed, total] 返回。下面的 0 是临时完成数。
  return [0, values.length];
}
// TODO 2：把下面只供类型检查的 declare 声明替换成真正的 invoke 函数实现；
// fn 和 ...args 由同一个 Args 连接，函数体调用 fn(...args)，再把它的 Result 交回调用处。
// declare 不会生成运行时代码，保留它却调用 invoke 会出现“函数不存在”。
declare function invoke<Args extends unknown[], Result>(fn: (...args: Args) => Result, ...args: Args): Result;
function normalize(value: string): string;
function normalize(value: readonly string[]): string[];
function normalize(value: string | readonly string[]): string | string[] {
  // TODO 3：检查当前 value 是单个 string 还是只读 string 数组；
  // 两种分支都对文本执行 trim 和小写，分别返回 string 或新 string[]。
  // 下面的空字符串只满足联合返回类型，没有处理数组分支。
  return "";
}
type CourseContext = { title: string; day: number };
function describe(this: CourseContext, prefix: string): string {
  // TODO 4：this 来自 describe.call 的第一个参数，不在普通实参数组里；
  // 用 prefix、this.day 和 this.title 组成题目指定的课程描述。空字符串是占位值。
  return "";
}
const [completed, total] = progress([true, false, true, true]);
console.log(`Progress: ${completed}/${total}`);
// TODO 5：完成 invoke 的运行时实现后取消注释，并补齐题目要求的数字乘法与标题拼接两次调用；
// 两次结果分别由各自 fn 的返回类型决定。
console.log(normalize("  TYPES "));
console.log(describe.call({ title: "Advanced functions", day: 28 }, "Elective"));
// TODO 6：再用 normalize 的数组重载处理题目给出的两个标签，
// 把返回的新 string[] 用逗号连接后输出，验证数组输入没有被当成单个字符串。
