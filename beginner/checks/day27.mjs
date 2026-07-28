export default {
  "title": "Day 27 · 运行环境边界独立综合题",
  "exampleExpected": [
    "Normalized query: typed",
    "Fetched title: Runtime boundaries",
    "CLI day: 27"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "跨环境课程搜索入口",
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
      "title": "API 课程与 CLI 覆盖",
      "expected": [
        "Base: Runtime boundaries/35",
        "Override: Runtime boundaries/45",
        "Invalid minutes: Runtime boundaries/35",
        "Bad response: rejected"
      ],
      "success": "你已分别验证 API 与 CLI 边界，并安全合并合法覆盖值。",
      "hints": [
        "parseLesson 检查 title、有限非负 minutes。",
        "parseMinutesOverride 拒绝缺失、空值、非整数和负数。",
        "合法覆盖创建新 Lesson，无效覆盖保留原 Lesson。",
        "坏 API 响应不能进入 applyMinutesOverride。"
      ]
    }
  ]
};
