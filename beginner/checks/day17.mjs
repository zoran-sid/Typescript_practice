export default {
  title: "Utility Types、as const 与 satisfies",
  exampleExpected: [
    "原标题：旧标题",
    "新标题：TypeScript 工具类型",
    "状态：published=已发布",
    "可用状态：draft、published、archived",
  ],
  exercises: [
    {
      id: "01",
      title: "Omit 与真实运行时字段",
      expected: ["公开字段：id,name,active"],
      success: "公开类型和运行时对象都真正排除了 email。",
      hints: [
        'PublicAccount 使用 Omit<Account, "email">。',
        "只改类型不会删除运行时字段。",
        "用 const { email: _privateEmail, ...publicAccount } = account 收集公开字段。",
      ],
    },
    {
      id: "02",
      title: "Partial 与不可变补丁",
      expected: ["原资料：Ada/light", "新资料：Lin/dark"],
      success: "Partial 补丁已合并到新对象，原资料保持不变。",
      hints: [
        "移除 patch 参数名前的下划线。",
        "返回 { ...profile, ...patch }。",
        "不要直接给 profile.name 或 profile.theme 赋值。",
      ],
    },
    {
      id: "03",
      title: "as const 派生字面量联合",
      expected: ["当前：中级", "可选：初级、中级、高级"],
      success: "Level 已从 readonly 字面量元组自动派生。",
      hints: [
        "在 levels 数组后添加 as const。",
        "Level 写成 (typeof levels)[number]。",
        "currentLevel 选择现有成员“中级”。",
      ],
    },
    {
      id: "04",
      title: "Record 与 satisfies",
      expected: ["home=/", "about=/about", "learn=/learn"],
      success: "完整路径表通过 satisfies 检查且运行值正确。",
      hints: [
        "在对象后添加 satisfies Record<RouteName, string>。",
        "about 的值改为 /about，learn 的值改为 /learn。",
        "不要用 as Record 强制断言。",
      ],
    },
  ],
};
