// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
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
  // TODO：不要修改 item；返回包含原字段、且当前 key 被 nextValue 覆盖的新对象。
  // 当前 return item 只表示“完全没更新”的占位，完成时必须替换。
  return item;
}
const originalSettings: Settings = {
  theme: "light",
  pageSize: 20,
  showTips: true,
};
const pageSizeKey: SettingName = "pageSize";
const pageUpdated = updateProperty(originalSettings, pageSizeKey, 50);
const updatedSettings = updateProperty(pageUpdated, "showTips", false);
// TODO：分别从 originalSettings 与 updatedSettings 读取 pageSize、showTips，输出四行对照。
// 不要重新计算或写死值；两次更新都必须来自 updateProperty 的返回结果。
