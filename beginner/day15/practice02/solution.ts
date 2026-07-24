// 解题结构提示：本文件不是完整答案，请沿 TODO 自己补全。
function firstOrUndefined<Item>(items: readonly Item[]): Item | undefined {
  // TODO：读取第一项；返回类型必须保留空数组产生 undefined 的可能性。
  return undefined;
}
type LabeledValue<Value> = { label: string; value: Value };
function labelValue<Value>(
  label: string,
  value: Value,
): LabeledValue<Value> {
  // TODO：把传入的 label 与 value 放进对象；空 label 只是安全占位。
  return { label: "", value };
}
const firstName = firstOrUndefined(["Ada", "Lin"]);
const firstScore = firstOrUndefined([80, 90]);
const course = labelValue("课程", "TypeScript");
// TODO：使用 ?? 处理可能缺席的首项，再输出三个结果。
