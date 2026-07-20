export default {
  title: "Day 08：联系人安全摘要",
  exampleExpected: [
    "联系人: Mei",
    "电话: 未提供",
    "分数显示: 0",
    '昵称显示: ""',
  ],
  expected: [
    "联系人: Mei",
    "电话: 未提供",
    "城市: 未填写",
    "分数: 0",
    '昵称: ""',
  ],
  success: "你已经能从空文件安全处理 find、可选属性、嵌套访问和有效空值。",
  hints: [
    "selectedContact 可能是 undefined，读取属性从 ?. 开始。",
    "嵌套城市需要同时安全经过 address，并用 ?? 提供默认文字。",
    "score 和 nickname 使用 ??，不要用会替换 0、空字符串的 ||。",
  ],
  typeHints: [
    "不要用 ! 或 as 消除错误；它们不会添加运行时保护。",
    "contacts 的显式类型应把 phone、address 和 city 标成可选属性。",
  ],
};
