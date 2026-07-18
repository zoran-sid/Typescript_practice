export default {
  title: "Day 09：type、interface 与 readonly",
  exampleExpected: [
    "T-01 | 学习 type 和 interface | 未完成",
    "备注: 无",
    "标签: TypeScript, 基础",
  ],
  exercises: [
    {
      id: "01",
      title: "商品类型",
      expected: ["P-01 | 鼠标 | ¥99"],
      success: "商品对象符合命名类型并输出正确。",
      hints: ["对象形状已经完整。", "检查 price 的业务值。"],
    },
    {
      id: "02",
      title: "只读 id 与可选简介",
      expected: ["用户: Lin", "简介: 暂无简介"],
      success: "可选简介已使用指定默认值。",
      hints: ["bio 缺失，所以 ?? 会使用右边。", "默认文字需要与目标输出一致。"],
    },
    {
      id: "03",
      title: "readonly 浅层行为",
      expected: ["课时: 5"],
      success: "你验证了顶层 readonly 不会自动深入嵌套属性。",
      hints: ["不能替换 course.info。", "但 info.lessons 自身没有 readonly。"],
    },
    {
      id: "04",
      title: "项目模型综合",
      expected: ["项目: P-01 | TypeScript 练习", "成员数: 2", "备注: 无"],
      success: "只读数组长度和可选备注处理正确。",
      hints: ["length 已经是成员数量。", "缺少 note 时使用“无”。"],
    },
  ],
};
