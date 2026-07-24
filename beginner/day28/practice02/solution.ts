type LessonPair = readonly [title: string, minutes: number];
function summarize(pair: LessonPair): string {
  // TODO 1：解构 title/minutes 并格式化。
  return "";
}
// TODO 2：实现时将 Args 同时连接 fn 与 ...args，并原样返回 Result。
declare function invoke<Args extends unknown[], Result>(fn: (...args: Args) => Result, ...args: Args): Result;
function normalize(value: string): string;
function normalize(value: readonly string[]): string[];
function normalize(value: string | readonly string[]): string | string[] {
  // TODO 3：用 typeof 分支处理字符串与数组。
  return "";
}
function label(this: { prefix: string }, value: string): string {
  // TODO 4：从 this 读取 prefix，并拼接 value。
  return "";
}
console.log(summarize(["Functions", 45]));
// TODO 5：实现 invoke 后补一条双参数调用。
console.log(normalize(" Types "));
console.log(label.call({ prefix: "TS" }, "typed this"));
