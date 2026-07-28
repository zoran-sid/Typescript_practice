export default {
  "title": "泛型约束、keyof、T[K] 与 typeof",
  "exampleExpected": [
    "ID=7",
    "标题：TypeScript",
    "课数：21",
    "设置：theme=dark"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "泛型约束、keyof、T[K] 与 typeof",
      "expected": [
        "课程#7",
        "标题：变量、泛型",
        "分数：80、95",
        "设置：theme=dark"
      ],
      "success": "约束、合法键、索引访问类型和值派生键已在同一工具中保持精确关系。",
      "hints": [
        "getProperty 直接 return item[key]，返回类型写 Item[Key]。",
        "pluck 用 map 返回 item[key]，最终类型是 Item[Key][]。",
        "describeId 的 Item 约束为 { id: number }，再读取 item.id。",
        "SettingName 写成 keyof typeof settings，并用 getProperty 读取选中设置。"
      ],
      "typeHints": [
        "不要把 key 放宽为 string，也不要用 as 强迫任意字符串通过检查。"
      ]
    },
    {
      "id": "practice02",
      "title": "类型安全的配置更新",
      "expected": [
        "原页数：20",
        "新页数：50",
        "原提示：true",
        "新提示：false"
      ],
      "success": "配置键与新值类型保持关联，两次更新也没有修改原设置。",
      "hints": [
        "updateProperty 的 key 是 Key extends keyof Item，nextValue 是 Item[Key]。",
        "使用对象 spread 返回新对象，并让 [key]: nextValue 放在旧字段之后。",
        "pageSizeKey 约束为 SettingName，不能写不存在的字段。",
        "输出同时读取 originalSettings 和 updatedSettings。"
      ]
    }
  ]
};
