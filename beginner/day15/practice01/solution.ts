// 解题结构提示：本文件不是完整答案，请沿 TODO 自己补全。
function lastOrFallback<Item>(items: readonly Item[], fallback: Item): Item {
  // TODO：遍历 items，让最后一个真实元素覆盖 fallback；空数组仍返回 fallback。
  return fallback;
}
type Box<Value> = { label: string; value: Value };
function makeBox<Value>(label: string, value: Value): Box<Value> {
  // TODO：保留传入的 label；当前空字符串只是安全占位。
  return { label: "", value };
}
function repeat<Item>(value: Item, count: number): Item[] {
  // TODO：根据 count 逐次把 value 放入新数组。
  return [];
}
// TODO：实现函数体，并按顺序返回由 Left 与 Right 组成的元组。
// 提示：declare 在这里只保存签名；正式作答时要删除 declare，并写出函数体。
declare function makePair<Left, Right>(left: Left, right: Right): [Left, Right];
const lastTopic = lastOrFallback(["变量", "泛型"], "无");
const emptyScore = lastOrFallback([], 0);
const course = makeBox("课程", "TypeScript");
const repeatedNumbers = repeat(7, 3);
const pair = makePair("level", 3);
// TODO：完成实现后，按题目顺序输出这些结果。
