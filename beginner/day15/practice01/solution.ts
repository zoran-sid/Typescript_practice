// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
function lastOrFallback<Item>(items: readonly Item[], fallback: Item): Item {
  // TODO：从 fallback 开始遍历 items，让每个当前 Item 覆盖候选值，最后返回末项；items 为空时才保留 fallback。
  // 当前直接 return fallback 只正确处理空数组，是未完成占位。
  return fallback;
}
type Box<Value> = { label: string; value: Value };
function makeBox<Value>(label: string, value: Value): Box<Value> {
  // TODO：返回 Box<Value>，其中 label 使用传入的 label，value 使用传入的 value。
  // 当前对象里的空 label 只是临时占位，完成时要替换。
  return { label: "", value };
}
function repeat<Item>(value: Item, count: number): Item[] {
  // TODO：创建新的 Item[]，按 count 次数加入当前 value，并返回该数组；不能写死为 3 项。
  // 下面的 [] 只是空结果占位，count 大于 0 时必须被替换为生成结果。
  return [];
}
// TODO：删除 declare 并实现 makePair；返回一个保持 left、right 输入顺序的 [Left, Right] 元组。
// declare 只保存类型签名，运行时并没有函数，不能保留在最终答案中。
declare function makePair<Left, Right>(left: Left, right: Right): [Left, Right];
const lastTopic = lastOrFallback(["变量", "泛型"], "无");
const emptyScore = lastOrFallback([], 0);
const course = makeBox("课程", "TypeScript");
const repeatedNumbers = repeat(7, 3);
const pair = makePair("level", 3);
// TODO：完成四个函数后，依次输出 lastTopic、emptyScore、course 的标签和值、repeatedNumbers 和 pair。
