export default {
  "title": "Day 27 · 运行环境边界独立综合题",
  "exampleExpected": [
    "Browser handler: typed",
    "Fetched title: Runtime boundaries",
    "CLI day: 27"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "Day 27 · 运行环境边界独立综合题",
      "expected": [
        "Query: typescript",
        "Missing: empty",
        "Valid: DOM/35",
        "Invalid: rejected",
        "Day: 27",
        "Mode: example",
        "Defaults: 0/practice"
      ],
      "success": "你已从零把事件、unknown 请求和 CLI 参数边界拆成可测试逻辑。",
      "hints": [
        "事件目标用可选链处理；真正缺失时返回空字符串。",
        "请求结果先排除 null 并检查 title、minutes。",
        "valueAfter 返回值可能是 undefined，day 转换后检查非负整数。"
      ],
      "typeHints": [
        "不要用 as Lesson 或非空断言绕过边界。"
      ]
    },
    {
      "id": "practice02",
      "title": "搜索与命令行边界",
      "expected": [
        "Browser handler: typed",
        "Fetched title: Runtime boundaries",
        "CLI day: 27"
      ],
      "success": "你已闭卷重建 搜索与命令行边界 的完整数据流。",
      "hints": [
        "把浏览器、请求或 CLI 边界转成可测试的普通参数。",
        "沿 README 流程图逐个检查输入、处理、分支/循环和输出。",
        "不要导入其他 practice 文件夹；每题必须独立运行。"
      ]
    }
  ]
};
