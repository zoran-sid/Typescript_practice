// 解题结构提示：本文件不是完整答案，请沿 TODO 自己补全。
type PropertyReader = <Item, Key extends keyof Item>(
  item: Item,
  key: Key,
) => Item[Key];
type PropertyPlucker = <Item, Key extends keyof Item>(
  items: readonly Item[],
  key: Key,
) => Item[Key][];
// TODO：按照上面的函数类型实现 getProperty 与 pluck。
// 使用 undefined 占位可以保留签名，又不会提前泄露核心索引表达式。
let getProperty: PropertyReader | undefined;
let pluck: PropertyPlucker | undefined;
function describeId<Item extends { id: number }>(
  item: Item,
  prefix: string,
): string {
  // TODO：使用约束保证的 id 与 prefix 组织文字。
  return "";
}
const courses = [
  { id: 7, title: "变量", score: 80, published: true },
  { id: 8, title: "泛型", score: 95, published: false },
];
const settings = { theme: "dark", fontSize: 16, compact: false };
type SettingName = keyof typeof settings;
const selectedSetting: SettingName = "theme";
// TODO：实现函数后再读取课程标题、分数和配置；先检查函数不再是 undefined。
