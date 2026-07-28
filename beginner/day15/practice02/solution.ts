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
const emptyScores: readonly number[] = [];
const firstEmptyScore = firstOrUndefined(emptyScores);
const course = labelValue("课程", "TypeScript");
// TODO：对 firstName、firstScore 和 firstEmptyScore 分别在调用处用 ?? 提供显示回退值；
// 空成绩显示“暂无”，但不要把这个业务文字塞进 firstOrUndefined。最后从 course 读取 label 与 value，共输出四行。
