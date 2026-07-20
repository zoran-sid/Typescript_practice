function getProperty<Item, Key extends keyof Item>(
  item: Item,
  key: Key,
): Item[Key] {
  return item[key];
}

function pluck<Item, Key extends keyof Item>(
  items: readonly Item[],
  key: Key,
): Item[Key][] {
  return items.map((item) => item[key]);
}

function describeId<Item extends { id: number }>(
  item: Item,
  prefix: string,
): string {
  return `${prefix}#${item.id}`;
}

const firstCourse = {
  id: 7,
  title: "变量",
  score: 80,
  published: true,
};

const secondCourse = {
  id: 8,
  title: "泛型",
  score: 95,
  published: false,
};

const courses = [firstCourse, secondCourse];

const settings = {
  theme: "dark",
  fontSize: 16,
  compact: false,
};

type SettingName = keyof typeof settings;
const selectedSetting: SettingName = "theme";

console.log(describeId(firstCourse, "课程"));
console.log(`标题：${pluck(courses, "title").join("、")}`);
console.log(`分数：${pluck(courses, "score").join("、")}`);
console.log(
  `设置：${selectedSetting}=${getProperty(settings, selectedSetting)}`,
);
