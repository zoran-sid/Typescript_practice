export default {
  title: "Day 10：联合类型、字面量类型与收窄",
  exampleExpected: ["TS-10", "#42", "对齐方式: center"],
  exercises: [
    {
      id: "01",
      title: "typeof 收窄编号",
      expected: ["TS-10", "#42"],
      success: "字符串和数字编号已分别安全处理。",
      hints: ["字符串分支可以调用 toUpperCase()。", "数字分支用模板字符串添加 #。"],
    },
    {
      id: "02",
      title: "字面量尺寸",
      expected: ["small: 10", "medium: 20", "large: 30"],
      success: "三个合法尺寸均得到正确价格。",
      hints: ["当前遗漏的是 medium。", "也可以明确写出三个分支。"],
    },
    {
      id: "03",
      title: "Array.isArray 收窄",
      expected: ["文本长度: 4", "列表项: 3"],
      success: "字符串和数组的 length 含义均处理正确。",
      hints: ["数组分支已经完成。", "else 区域中的 value 已经是 string。"],
    },
    {
      id: "04",
      title: "in 收窄联系人",
      expected: ["邮箱: a@example.com", "电话: 13800000000"],
      success: "对象联合已根据属性安全收窄。",
      hints: ["in 判断已经正确。", "为两个分支的返回文字补上“邮箱:”和“电话:”。"],
    },
  ],
};
