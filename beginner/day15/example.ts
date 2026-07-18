function firstOrUndefined<Item>(
  items: readonly Item[],
): Item | undefined {
  return items[0];
}

type LabeledValue<Value> = {
  label: string;
  value: Value;
};

function labelValue<Value>(label: string, value: Value): LabeledValue<Value> {
  return { label, value };
}

const firstName = firstOrUndefined(["Ada", "Lin"]);
const firstScore = firstOrUndefined([80, 90]);
const course = labelValue("课程", "TypeScript");

console.log("第一位：" + (firstName ?? "无"));
console.log("第一个分数：" + (firstScore ?? "无"));
console.log("标签：" + course.label + "=" + course.value);
