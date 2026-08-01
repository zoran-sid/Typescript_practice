type PropertyReader = <Item, Key extends keyof Item>(
  item: Item,
  key: Key,
) => Item[Key];

type PropertyPlucker = <Item, Key extends keyof Item>(
  items: readonly Item[],
  key: Key,
) => Item[Key][];

const getProperty: PropertyReader = (item, key) => {
  return item[key];
};

const pluck: PropertyPlucker = (items, key) => {
  // map 每轮读取同一个 key，并 return 当前对象的对应字段。
  return items.map((item) => item[key]);
};

function describeId<Item extends { id: number }>(
  item: Item,
  prefix: string,
): string {
  return `${prefix}#${item.id}`;
}

const courses = [
  { id: 7, title: "变量", score: 80, published: true },
  { id: 8, title: "泛型", score: 95, published: false },
] as const;
const settings = { theme: "dark", fontSize: 16, compact: false };
type SettingName = keyof typeof settings;
const selectedSetting: SettingName = "theme";

// 调用关系：第一门课程 -> describeId -> idDescription。
const idDescription = describeId(courses[0], "课程");
// 调用关系：courses + "title"/"score" -> pluck -> 两组精确类型数组。
const titles = pluck(courses, "title");
const scores = pluck(courses, "score");
// 调用关系：settings + selectedSetting -> getProperty -> settingValue。
const settingValue = getProperty(settings, selectedSetting);

console.log(idDescription);
console.log(`标题：${titles.join("、")}`);
console.log(`分数：${scores.join("、")}`);
console.log(`设置：${selectedSetting}=${settingValue}`);
