export default {
  title: "选修：浏览器、请求与命令行边界",
  exampleExpected: [
    "Browser handler: typed",
    "Fetched title: Runtime boundaries",
    "CLI day: 27",
  ],
  exercises: [
    {
      id: "01",
      title: "安全读取输入事件",
      expected: ["Query: typescript", "Missing: empty"],
      success: "输入目标存在与缺失两条路径都已安全处理。",
      hints: [
        "可使用 event.currentTarget?.value.trim()。",
        "再用 ?? 提供真正缺失时的空字符串。",
      ],
    },
    {
      id: "02",
      title: "验证异步请求结果",
      expected: ["Valid: DOM/35", "Invalid: rejected"],
      success: "请求得到的 unknown 已经过真实字段验证。",
      hints: [
        "先 const value = await client.get('/lesson')。",
        "排除 null 并确认 object 后，再检查 title 和 minutes。",
        "不要用 as Lesson。",
      ],
    },
    {
      id: "03",
      title: "解析命令行参数",
      expected: ["Day: 27", "Mode: example", "Defaults: 0/practice"],
      success: "命令行字符串已被转换、收窄并赋予安全默认值。",
      hints: [
        "用 indexOf 找标志，下一项可能是 undefined。",
        "Number 转换后检查 Number.isInteger 和非负。",
        "mode 只在原值严格等于 example 时选择 example。",
      ],
    },
  ],
};
