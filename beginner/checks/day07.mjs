export default {
  title: "Day 07：数组方法与回调",
  exampleExpected: [
    "打折后: 13.5, 72, 108, 40.5",
    "低于 50: 13.5, 40.5",
    "第一个至少 100: 120",
  ],
  exercises: [
    {
      id: "01",
      title: "map 与 return",
      expected: ["加倍: 10, 16, 24"],
      success: "map 已收集到每次回调返回的加倍结果。",
      hints: ["回想普通函数的 return。", "在回调花括号中返回 price * 2。"],
    },
    {
      id: "02",
      title: "filter 筛选偶数",
      expected: ["偶数: 6, 12"],
      success: "filter 的条件只保留了偶数。",
      hints: ["偶数除以 2 的余数是 0。", "检查 === 与 !==。"],
    },
    {
      id: "03",
      title: "find 查找用户",
      expected: ["找到: Chen"],
      success: "find 条件正确，并保留了未找到保护。",
      hints: ["Chen 的 id 是 3。", "只需修正查找条件，不要删除 undefined 检查。"],
    },
    {
      id: "04",
      title: "订单数组综合",
      expected: ["已完成订单: A1, C3", "完成总额: 100"],
      success: "筛选、映射和累计组合正确。",
      hints: ["先检查 filter 使用了哪个 status。", "后面的编号和金额都依赖筛选结果。"],
    },
  ],
};
