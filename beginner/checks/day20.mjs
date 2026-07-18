export default {
  title: "Day 20 · JSON、unknown 与运行时验证",
  exampleExpected: ["课程: TypeScript / 90 分", "课程数据无效"],
  exercises: [
    {
      id: "01",
      title: "看见 as 没有做的事",
      expected: ["数据无效：age 必须是数字"],
      success: "外部数据先经过验证，没有把字符串年龄当作数字。",
      hints: [
        "删掉 as User，把 JSON.parse 的结果放进 unknown。",
        "写 isUser，并检查 name 和 age 的真实运行时类型。",
        "验证失败时打印题目要求的错误消息。",
      ],
    },
    {
      id: "02",
      title: "修好一个说谎的类型谓词",
      expected: ["商品: 键盘 / ¥299", "商品数据无效"],
      success: "isProduct 的承诺与实际检查一致。",
      hints: [
        "当前谓词只检查了 name。",
        "还要确认 price 属性存在，而且 typeof price === 'number'。",
      ],
    },
    {
      id: "03",
      title: "验证嵌套对象和数组",
      expected: ["邮箱: hi@example.com / 技能: TS、Git", "资料数据无效"],
      success: "外层、嵌套对象和数组元素都经过了运行时验证。",
      hints: [
        "先排除非对象和 null。",
        "contact 也要排除非对象和 null，再检查 email。",
        "skills 先用 Array.isArray，再用 every 检查每个元素。",
      ],
      runtimeHints: ["若看到属性读取错误，说明你在完成验证前就使用了嵌套字段。"],
    },
    {
      id: "04",
      title: "区分语法错误与字段错误",
      expected: [
        "任务: 复习 / 完成: 否",
        "失败: 任务字段无效",
        "失败: JSON 格式错误",
      ],
      success: "调用者现在能区分两类失败，并安全使用成功值。",
      hints: [
        "只把 JSON.parse 放进 try/catch。",
        "catch 返回 JSON 格式错误。",
        "解析成功但字段不合格时返回任务字段无效。",
      ],
    },
  ],
};
