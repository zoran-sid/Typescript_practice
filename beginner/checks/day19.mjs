export default {
  title: "Day 19 · 错误不是字符串：throw、unknown 与 Result",
  exampleExpected: [
    "端口: 3000",
    "错误: 端口必须是 1 到 65535 的整数",
    "保存结果: 成功",
  ],
  exercises: [
    {
      id: "01",
      title: "为非法取款抛出明确错误",
      expected: ["余额: 70", "错误: 金额必须大于 0", "错误: 余额不足"],
      success: "正常路径返回余额，两个非法输入也都被准确报告。",
      hints: [
        "金额小于等于 0 时，不要返回旧余额。",
        "金额超过余额时，不要假装余额变成 0。",
        "分别抛出带有题目期望文字的 RangeError。",
      ],
    },
    {
      id: "02",
      title: "缩小 catch 中的 unknown",
      expected: ["读取成功: TypeScript", "读取失败: JSON 格式错误"],
      success: "底层 JSON 错误被转换成了稳定、可读的业务错误。",
      hints: [
        "不要用一个大 catch 把所有错误都改成同一句话。",
        "只捕获 JSON.parse 的错误，并用 cause 保留原始原因。",
        "外层通过 instanceof Error 后再读取 message。",
      ],
      runtimeHints: ["如果程序直接停止，检查两个输入是否都放在 try/catch 内。"],
    },
    {
      id: "03",
      title: "用判别联合表达可预期失败",
      expected: ["12 ÷ 3 = 4", "失败: 除数不能是 0"],
      success: "Result 的成功和失败分支都给出了准确数据。",
      hints: [
        "先看 right === 0 的分支。",
        "失败不是异常；保留 ok: false，只修正有用的错误原因。",
      ],
    },
    {
      id: "04",
      title: "补充上下文后重新抛出",
      expected: ["用户: 小林", "上层收到: 加载用户资料失败"],
      success: "加载失败没有被伪装成匿名用户，上层能够做决定。",
      hints: [
        "catch 中不要返回匿名资料。",
        "用 new Error('加载用户资料失败', { cause: error }) 重新抛出。",
      ],
      runtimeHints: ["确保最外层仍然捕获错误，否则练习程序会提前退出。"],
    },
  ],
};
