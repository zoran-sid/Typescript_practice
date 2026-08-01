function firstOrUndefined<Item>(
  items: readonly Item[],
): Item | undefined {
  // 空数组的 items[0] 会自然得到 undefined，不伪造业务回退值。
  return items[0];
}

type LabeledValue<Value> = { label: string; value: Value };

function labelValue<Value>(
  label: string,
  value: Value,
): LabeledValue<Value> {
  return { label, value };
}

// 调用关系：不同元素类型的数组 -> firstOrUndefined -> 各自的“元素 | undefined”。
const firstName = firstOrUndefined(["Ada", "Lin"]);
const firstScore = firstOrUndefined([80, 90]);
const emptyScores: readonly number[] = [];
const firstEmptyScore = firstOrUndefined(emptyScores);
// 调用关系：标签和值 -> labelValue -> course 对象。
const course = labelValue("课程", "TypeScript");

console.log(`第一位：${firstName ?? "暂无"}`);
console.log(`第一个分数：${firstScore ?? "暂无"}`);
console.log(`空成绩：${firstEmptyScore ?? "暂无"}`);
console.log(`标签：${course.label}=${course.value}`);
