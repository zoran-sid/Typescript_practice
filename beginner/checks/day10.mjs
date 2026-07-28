export default {
  "title": "Day 10：支持工单摘要",
  "exampleExpected": [
    "TS-10",
    "#42",
    "对齐方式: center"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "Day 10：支持工单摘要",
      "expected": [
        "编号: TS-10",
        "编号: #42",
        "主题: variables",
        "主题列表: variables, arrays",
        "邮箱: a@example.com",
        "电话: 13800000000",
        "优先级: high（立即处理）"
      ],
      "success": "你已经能从空文件使用联合、字面量和四种常见收窄方式。",
      "hints": [
        "依次使用 typeof、Array.isArray、\"email\" in contact、priority === \"high\"。",
        "每个函数都返回格式化字符串，console.log 只负责输出调用结果。",
        "数组主题使用 join(\", \")，字符串编号调用 toUpperCase()。"
      ],
      "typeHints": [
        "不要使用 any、as 或 !；先通过真实条件收窄再访问专属能力。",
        "函数参数应使用 TicketId、TopicInput、Contact、Priority 这些命名类型。"
      ]
    },
    {
      "id": "practice02",
      "title": "调试开关规范化",
      "expected": [
        "staging debug: enabled",
        "production debug: disabled"
      ],
      "success": "你已经能先收窄并规范化联合类型，再把统一结果交给环境策略。",
      "hints": [
        "布尔输入已经是规范结果；字符串输入要比较是否等于 on。",
        "即使请求开启，production 环境也必须得到 disabled。",
        "describeDebug 应复用 normalizeToggle，不要重复判断三种输入。"
      ]
    }
  ]
};
