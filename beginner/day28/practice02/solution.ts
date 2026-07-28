// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type LessonPair = readonly [title: string, minutes: number];
function summarize(pair: LessonPair): string {
  // TODO 1：按固定位置从 pair 取出 title 与 minutes，
  // 返回“标题: 分钟m”格式的摘要。下面的空字符串没有使用元组内容，是占位值。
  return "";
}
// TODO 2：把下面的 declare 声明替换成真正的 invoke 实现；
// 同一个 Args 同时约束 fn 参数与 ...args，调用 fn(...args) 后原样返回 Result。
// declare 只告诉编译器类型，不会提供可运行函数。
declare function invoke<Args extends unknown[], Result>(fn: (...args: Args) => Result, ...args: Args): Result;
function normalize(value: string): string;
function normalize(value: readonly string[]): string[];
function normalize(value: string | readonly string[]): string | string[] {
  // TODO 3：用 typeof 区分单个 string 与数组；两边都对每段文字 trim 后转小写，
  // 单个输入返回 string，数组输入返回新 string[]。下面的空字符串只占住一个分支。
  return "";
}
function label(this: { prefix: string }, value: string): string {
  // TODO 4：this 由 label.call 提供；读取 this.prefix，与普通参数 value 组成
  // 题目要求的“[前缀] 内容”。下面的空字符串是临时返回值。
  return "";
}
console.log(summarize(["Functions", 45]));
// TODO 5：实现 invoke 后，用一个接收两个参数的函数和对应实参调用它，
// 把返回的 42 作为第二行输出；不要直接写死整行结果。
console.log(normalize(" Types "));
// TODO 6：精确输出需要数组重载的结果；把当前单字符串演示改为包含 Types/Modules 的数组，
// 再把 normalize 返回的新数组用逗号和空格连接，不能把结果整行写死。
console.log(label.call({ prefix: "TS" }, "typed this"));
