export default {
  title: "函数类型、箭头函数与回调",
  exampleExpected: [
    "学习记录",
    "第 1 项：30 分钟",
    "第 2 项：45 分钟",
    "主题：函数 / 回调 / void",
  ],
  exercises: [
    {
      id: "01",
      title: "函数类型与箭头函数",
      expected: ["4", "10", "16"],
      success: "箭头函数现在符合加倍操作的输入输出关系。",
      hints: [
        "不要修改循环中的输入数组。",
        "double 应返回 value * 2。",
      ],
    },
    {
      id: "02",
      title: "找回 map 回调的 return",
      expected: ["55：继续复习", "80：通过", "100：通过"],
      success: "map 的每个分支都返回了字符串，不再产生 undefined。",
      hints: [
        "写了花括号的箭头函数不会自动返回。",
        "if 和 else 两个分支都需要 return。",
        "不要把最终输出中的 undefined 替换成固定文字。",
      ],
    },
    {
      id: "03",
      title: "默认、可选与 rest 参数",
      expected: ["你好，Ada同学!", "你好，Lin老师。", "总分：60"],
      success: "三种参数形式都按用途工作。",
      hints: [
        "title 缺席时可用 ?? 得到“同学”。",
        "punctuation 已经有默认值，不需要额外分支。",
        "rest 参数 values 是数组，要累加其中的数字。",
      ],
    },
    {
      id: "04",
      title: "void 回调迁移",
      expected: ["警告：32°C", "警告：35°C", "警告数量：2"],
      success: "报告动作与计数返回值已经正确组合。",
      hints: [
        "循环读取每个温度，只处理 value >= threshold。",
        "达到阈值时调用 report，并把计数增加 1。",
        "循环结束后 return warningCount。",
      ],
    },
  ],
};
