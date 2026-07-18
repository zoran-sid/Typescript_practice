export default {
  title: "Day 31（选修）：迭代协议、生成器与 bigint",
  exampleExpected: [
    "范围: 2, 3, 4",
    "倒计时: 3, 2, 1",
    "安全整数之后: 9007199254740994",
  ],
  exercises: [
    {
      id: "01",
      title: "生成器产出偶数",
      expected: ["偶数: 2, 4, 6"],
      success: "生成器只在偶数位置 yield。",
      hints: ["偶数除以 2 的余数是 0。", "不需要先创建另一个数组。"],
    },
    {
      id: "02",
      title: "手写倒计时迭代器",
      expected: ["倒计时: 3, 2, 1"],
      success: "Symbol.iterator 和 next() 的起点、终点均正确。",
      hints: ["第一次 next() 应产出传入的 start。", "检查 current 的初始值。"],
    },
    {
      id: "03",
      title: "bigint 递增与 JSON",
      expected: [
        "下一个编号: 9007199254740994",
        'JSON: {"id":"9007199254740994"}',
      ],
      success: "超大整数精确递增，并以字符串安全进入 JSON。",
      hints: ["递增量也要写成 bigint 字面量。", "bigint 字面量末尾有 n。"],
    },
  ],
};
