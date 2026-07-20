export default {
  title: "Day 22 · 独立测试与调试练习",
  exampleExpected: [
    "通过: 正常总价",
    "通过: 空购物车",
    "通过: 负数数量会报错",
    "通过: 异步问候",
  ],
  expected: [
    "通过: 普通平均分",
    "通过: 分数限制在 0 到 100",
    "通过: 空列表会报错",
    "通过: 异步成绩",
    "共 4 个测试",
  ],
  success: "你已从零完成业务函数，并用正常、边界、错误和异步测试保护它。",
  hints: [
    "先实现 clampScore 和 averageScore，再逐条写 AAA 测试。",
    "averageScore([]) 必须抛出消息准确的 RangeError。",
    "调用 loadScores() 后先 await，再断言平均值。",
  ],
  runtimeHints: [
    "先看第一条失败；检查断言是否把实际值、期望值和标签传对。",
    "assertThrows 不能把测试自身的失败错误当作被测函数正确抛错。",
  ],
};
