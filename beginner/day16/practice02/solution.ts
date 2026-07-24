// 解题结构提示：本文件不是完整答案，请沿 TODO 自己补全。
type PropertyReader = <Item, Key extends keyof Item>(
  item: Item,
  key: Key,
) => Item[Key];
// TODO：实现符合 PropertyReader 的 getProperty，不要把 key 放宽为 string。
let getProperty: PropertyReader | undefined;
function describeId<Item extends { id: number }>(item: Item): string {
  // TODO：只依赖约束中承诺存在的 id。
  return "";
}
const course = {
  id: 7,
  title: "TypeScript",
  lessons: 21,
  published: true,
};
const settings = { theme: "dark", fontSize: 16, compact: false };
type SettingName = keyof typeof settings;
const selectedSetting: SettingName = "theme";
// TODO：实现后读取 title、lessons 与 selectedSetting 对应的值。
