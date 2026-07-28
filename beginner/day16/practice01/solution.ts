// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type PropertyReader = <Item, Key extends keyof Item>(
  item: Item,
  key: Key,
) => Item[Key];
type PropertyPlucker = <Item, Key extends keyof Item>(
  items: readonly Item[],
  key: Key,
) => Item[Key][];
// TODO：把两个 undefined 声明替换为符合上方类型的真实函数：getProperty 返回 item 中 key 对应的值；pluck 遍历 items，收集每项同一个 key 的值。
// `| undefined` 与初始 undefined 只让未完成脚手架可编译，最终实现后应删除，不能让调用方继续面对“函数可能不存在”。
let getProperty: PropertyReader | undefined;
let pluck: PropertyPlucker | undefined;
function describeId<Item extends { id: number }>(
  item: Item,
  prefix: string,
): string {
  // TODO：只读取约束保证存在的 item.id，把 prefix 和该数字组成描述字符串。
  // 下面的 "" 是临时占位，完成时要替换。
  return "";
}
const courses = [
  { id: 7, title: "变量", score: 80, published: true },
  { id: 8, title: "泛型", score: 95, published: false },
];
const settings = { theme: "dark", fontSize: 16, compact: false };
type SettingName = keyof typeof settings;
const selectedSetting: SettingName = "theme";
// TODO：实现两个函数后，用 getProperty 读取课程标题，用 pluck 收集课程分数，并用 selectedSetting 读取 settings 的值；输出这些结果和 describeId 的结果。
