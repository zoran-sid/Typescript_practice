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
      "title": "安全读取配置字段",
      "expected": [
        "ID=7",
        "标题：TypeScript",
        "课数：21",
        "设置：theme=dark"
      ],
      "success": "你已闭卷重建 安全读取配置字段 的完整数据流。",
      "hints": [
        "使用泛型约束、keyof 与 T[K] 安全读取属性。",
        "沿 README 流程图逐个检查输入、处理、分支/循环和输出。",
        "不要导入其他 practice 文件夹；每题必须独立运行。"
      ]
    }
  ]
};
