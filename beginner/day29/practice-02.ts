// TODO：用条件类型和 infer 提取只读数组的元素类型。
type ElementOf<T> = T;

const topics = ["types", "modules"] as const;
type Topic = ElementOf<typeof topics>;

const selected: Topic = "modules";
console.log(`Selected: ${selected}`);
