export default {
  title: "Day 05：函数——输入、处理、输出",
  exampleExpected: ["书桌面积: 120"],
  exercises: [
    {
      id: "01",
      title: "使用函数参数",
      expected: ["你好，Lin！"],
      success: "函数已使用本次调用收到的名字。",
      hints: ["不要把 Lin 写死在函数里。", "可以在模板字符串中使用 ${name}。"],
    },
    {
      id: "02",
      title: "区分 return 与 console.log",
      expected: ["结果: 14"],
      success: "函数正确返回结果，而且没有多余输出。",
      hints: ["调用者需要拿到数字 14。", "函数内部的 console.log 只会显示，不能交回结果。"],
    },
    {
      id: "03",
      title: "避免修改外部变量",
      expected: ["第一次: 15", "第二次: 15", "原始积分: 10"],
      success: "函数只依赖参数，外部积分保持不变。",
      hints: ["addPoints 已经收到了 current。", "返回 current + bonus，不必重新赋值外部变量。"],
    },
    {
      id: "04",
      title: "账单函数综合",
      expected: ["小计: 120", "优惠: 12", "应付: 108"],
      success: "小计、优惠和应付金额都计算正确。",
      hints: ["小计是数量乘单价。", "10% 可以写成 subtotal * 0.1。"],
    },
  ],
};
