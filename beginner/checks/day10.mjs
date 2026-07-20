export default {
  title: "Day 10：支持工单摘要",
  exampleExpected: ["TS-10", "#42", "对齐方式: center"],
  expected: [
    "编号: TS-10",
    "编号: #42",
    "主题: variables",
    "主题列表: variables, arrays",
    "邮箱: a@example.com",
    "电话: 13800000000",
    "优先级: high（立即处理）",
  ],
  success: "你已经能从空文件使用联合、字面量和四种常见收窄方式。",
  hints: [
    '依次使用 typeof、Array.isArray、"email" in contact、priority === "high"。',
    "每个函数都返回格式化字符串，console.log 只负责输出调用结果。",
    '数组主题使用 join(", ")，字符串编号调用 toUpperCase()。',
  ],
  typeHints: [
    "不要使用 any、as 或 !；先通过真实条件收窄再访问专属能力。",
    "函数参数应使用 TicketId、TopicInput、Contact、Priority 这些命名类型。",
  ],
};
