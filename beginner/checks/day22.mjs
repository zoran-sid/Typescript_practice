export default {
  title: "Day 22 · 测试、调试与 AAA",
  exampleExpected: [
    "通过: 正常总价",
    "通过: 空购物车",
    "通过: 负数数量会报错",
    "通过: 异步问候",
  ],
  exercises: [
    {
      id: "01",
      title: "补齐边界用例",
      expected: [
        "通过: 区间内数字",
        "通过: 低于下界",
        "通过: 高于上界",
        "共 3 个测试",
      ],
      success: "正常值与两侧边界都被独立验证。",
      hints: [
        "保留区间内测试。",
        "增加一个小于 minimum 的输入，期望 minimum。",
        "增加一个大于 maximum 的输入，期望 maximum。",
      ],
    },
    {
      id: "02",
      title: "测试正常路径与错误路径",
      expected: [
        "通过: 正常用户名",
        "通过: 空用户名会报错",
        "共 2 个测试",
      ],
      success: "需求中的成功和失败行为都有测试保护。",
      hints: [
        "写一个接收 () => void 的 assertThrows。",
        "在 try 中执行 action；若进入 catch，检查错误消息。",
        "如果 action 没抛错，测试本身必须失败。",
      ],
      runtimeHints: ["不要把测试自身抛出的失败错误误判成被测函数的成功。"],
    },
    {
      id: "03",
      title: "让函数返回可断言的值",
      expected: ["测试通过: 总价是 30"],
      success: "total 现在返回数字，输出由测试层负责。",
      hints: [
        "把 total 的返回类型从 void 改为 number。",
        "函数内 return 计算结果，不要 console.log。",
        "外层比较 actual 与 30。",
      ],
    },
    {
      id: "04",
      title: "等待异步结果后再断言",
      expected: ["测试通过: 异步问候"],
      success: "断言比较的是问候字符串，不是 Promise。",
      hints: [
        "在 greeting 调用前加 await。",
        "等待后 actual 是 string，可以与期望文字比较。",
      ],
    },
  ],
};
