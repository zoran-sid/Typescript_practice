// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type PropertyReader = <Item, Key extends keyof Item>(
  item: Item,
  key: Key,
) => Item[Key];
// TODO：把 undefined 声明替换为符合 PropertyReader 的真实函数；返回 item 中当前 key 对应的 Item[Key] 值，不要把 key 放宽为任意 string。
// `| undefined` 与初始 undefined 只是未完成占位，函数实现后应删除。
let getProperty: PropertyReader | undefined;
function describeId<Item extends { id: number }>(item: Item): string {
  // TODO：只读取约束保证存在的 item.id，组织题目要求的“ID=数字”。
  // 下面的 "" 是临时占位，完成时要替换。
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
// TODO：输出 describeId(course)；分别把 "title"、"lessons" 传给 getProperty；再用 selectedSetting 读取 settings 对应值并组成最后一行。
