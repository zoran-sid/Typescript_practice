export default {
  title: "Day 27 · 运行环境边界独立综合题",
  exampleExpected: ["Browser handler: typed", "Fetched title: Runtime boundaries", "CLI day: 27"],
  expected: ["Query: typescript", "Missing: empty", "Valid: DOM/35", "Invalid: rejected", "Day: 27", "Mode: example", "Defaults: 0/practice"],
  success: "你已从零把事件、unknown 请求和 CLI 参数边界拆成可测试逻辑。",
  hints: ["事件目标用可选链处理；真正缺失时返回空字符串。", "请求结果先排除 null 并检查 title、minutes。", "valueAfter 返回值可能是 undefined，day 转换后检查非负整数。"],
  typeHints: ["不要用 as Lesson 或非空断言绕过边界。"],
};
