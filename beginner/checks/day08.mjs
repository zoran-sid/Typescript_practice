export default {
  title: "Day 08：缺失值与安全访问",
  exampleExpected: [
    "联系人: Mei",
    "电话: 未提供",
    "分数显示: 0",
    '昵称显示: ""',
  ],
  exercises: [
    {
      id: "01",
      title: "可选嵌套属性",
      expected: ["城市: 未填写"],
      success: "缺失地址已被安全处理。",
      hints: ["?. 负责安全访问。", "?? 右边应使用题目指定的默认文字。"],
    },
    {
      id: "02",
      title: "保留 0 与空字符串",
      expected: ["分数: 0", '昵称: ""'],
      success: "有效的 0 和空字符串均被保留。",
      hints: ["|| 会把 0 和空字符串也当成不成立。", "只处理 null/undefined 时使用 ??。"],
    },
    {
      id: "03",
      title: "find 未找到",
      expected: ["结果: 未找到"],
      success: "未找到结果安全转换为指定文字。",
      hints: ["foundUser 可能是 undefined。", "保留 ?.，修改 ?? 后的默认值。"],
    },
    {
      id: "04",
      title: "设置默认值综合",
      expected: ["音量: 0", '主题: ""', "语言: zh-CN"],
      success: "有效空值和缺失值已正确区分。",
      hints: ["三个设置都可以使用同一种空值合并方式。", "0 和空字符串不等于 undefined。"],
    },
  ],
};
