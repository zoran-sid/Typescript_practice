export default {
  title: "Day 07：订单数组报告",
  exampleExpected: [
    "打折后: 13.5, 72, 108, 40.5",
    "低于 50: 13.5, 40.5",
    "第一个至少 100: 120",
  ],
  expected: [
    "已完成订单: A1, C3",
    "完成总额: 100",
    "第一笔大额订单: D4",
  ],
  success: "你已经能从空文件组合 filter、map、find、回调和未找到保护。",
  hints: [
    "completedOrders 只保留 status === \"done\" 的完整订单。",
    "completedIds 从 completedOrders 映射出 id，金额也只累加已完成订单。",
    "firstLargeOrder 可能是 undefined，读取 id 前先显式判断。",
  ],
  typeHints: [
    "如果 TypeScript 提示对象可能是 undefined，不要使用非空断言，先写条件判断。",
    "带花括号的 map 回调必须显式 return；简写表达式会自动返回。",
  ],
};
