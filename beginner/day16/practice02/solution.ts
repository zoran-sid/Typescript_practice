type Settings = {
  theme: "light" | "dark";
  pageSize: number;
  showTips: boolean;
};

type SettingName = keyof Settings;

function updateProperty<Item, Key extends keyof Item>(
  item: Item,
  key: Key,
  nextValue: Item[Key],
): Item {
  // 计算属性名 [key] 只覆盖目标字段，spread 保留其余字段并创建新对象。
  return { ...item, [key]: nextValue };
}

const originalSettings: Settings = {
  theme: "light",
  pageSize: 20,
  showTips: true,
};
const pageSizeKey: SettingName = "pageSize";

// 调用关系：originalSettings + pageSizeKey + 50 -> pageUpdated。
const pageUpdated = updateProperty(originalSettings, pageSizeKey, 50);
// 调用关系：pageUpdated + "showTips" + false -> updatedSettings。
const updatedSettings = updateProperty(pageUpdated, "showTips", false);

console.log(`原页数：${originalSettings.pageSize}`);
console.log(`新页数：${updatedSettings.pageSize}`);
console.log(`原提示：${originalSettings.showTips}`);
console.log(`新提示：${updatedSettings.showTips}`);
