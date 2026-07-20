export default {
  title: "泛型约束、keyof、T[K] 与 typeof",
  exampleExpected: [
    "ID=7",
    "标题：TypeScript",
    "课数：21",
    "设置：theme=dark",
  ],
  expected: [
    "课程#7",
    "标题：变量、泛型",
    "分数：80、95",
    "设置：theme=dark",
  ],
  success: "约束、合法键、索引访问类型和值派生键已在同一工具中保持精确关系。",
  hints: [
    "getProperty 直接 return item[key]，返回类型写 Item[Key]。",
    "pluck 用 map 返回 item[key]，最终类型是 Item[Key][]。",
    "describeId 的 Item 约束为 { id: number }，再读取 item.id。",
    "SettingName 写成 keyof typeof settings，并用 getProperty 读取选中设置。",
  ],
  typeHints: [
    "不要把 key 放宽为 string，也不要用 as 强迫任意字符串通过检查。",
  ],
};
