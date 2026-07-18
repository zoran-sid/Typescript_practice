function getProperty<Item, Key extends keyof Item>(
  item: Item,
  key: Key,
): Item[Key] {
  return item[key];
}

function describeId<Item extends { id: number }>(item: Item): string {
  return "ID=" + item.id;
}

const course = {
  id: 7,
  title: "TypeScript",
  lessons: 21,
  published: true,
};

const settings = {
  theme: "dark",
  fontSize: 16,
  compact: false,
};

type SettingName = keyof typeof settings;
const selectedSetting: SettingName = "theme";

console.log(describeId(course));
console.log("标题：" + getProperty(course, "title"));
console.log("课数：" + getProperty(course, "lessons"));
console.log("设置：" + selectedSetting + "=" + getProperty(settings, selectedSetting));
