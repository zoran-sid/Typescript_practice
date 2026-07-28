// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
function firstOrUndefined<Item>(items: readonly Item[]): Item | undefined {
  // TODO：读取 items 的第一项并返回；非空数组应得到 Item，空数组才自然得到 undefined。
  // 当前固定 return undefined 只是占位，不能让非空输入也丢失首项。
  return undefined;
}
type LabeledValue<Value> = { label: string; value: Value };
function labelValue<Value>(
  label: string,
  value: Value,
): LabeledValue<Value> {
  // TODO：返回 LabeledValue<Value>，label 和 value 都来自当前函数参数。
  // 当前对象里的空 label 只是临时占位，完成时要换成传入值。
  return { label: "", value };
}
const firstName = firstOrUndefined(["Ada", "Lin"]);
const firstScore = firstOrUndefined([80, 90]);
const course = labelValue("课程", "TypeScript");
// TODO：对 firstName 和 firstScore 分别用 ?? 提供缺席时的显示值；再从 course 读取 label 与 value，按题目顺序输出三行。
