export default {
  "title": "Utility Types、as const 与 satisfies",
  "exampleExpected": [
    "原标题：旧标题",
    "新标题：TypeScript 工具类型",
    "状态：published=已发布",
    "可用状态：draft、published、archived"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "Utility Types、as const 与 satisfies",
      "expected": [
        "原标题：旧标题",
        "新标题：TypeScript 工具类型",
        "原状态：draft",
        "新状态：published=已发布",
        "公开字段：id,title,published,status",
        "可用状态：draft、published、archived"
      ],
      "success": "派生类型、不可变补丁、字面量联合、完整标签表和运行时字段移除均已完成。",
      "hints": [
        "Status 写成 (typeof statuses)[number]，三个派生类型使用 Partial、Pick 和 Omit。",
        "updateArticle 返回 { ...article, ...patch }，不要修改原文章。",
        "statusLabels 使用 satisfies Record<Status, string>，不要使用 as 强制断言。",
        "toPublicArticle 可解构 summary，再用对象 rest 收集真正的公开字段。"
      ],
      "runtimeHints": [
        "若公开字段仍出现 summary，说明你只改变了类型，没有改变真实对象。"
      ]
    },
    {
      "id": "practice02",
      "title": "角色权限矩阵",
      "expected": [
        "viewer 可编辑：false",
        "editor 可关闭：false",
        "admin 可关闭：true",
        "成员：Ada / editor"
      ],
      "success": "角色与动作来自唯一数据源，权限表完整，运行时授权判断也与配置一致。",
      "hints": [
        "Role 与 Action 分别从 roles、actions 的 as const 元组派生。",
        "permissions 使用 satisfies Record<Role, readonly Action[]> 检查完整性。",
        "can 遍历 permissions[role]，不要按角色硬编码分支。",
        "MemberCard 用 Pick<Member, \"name\" | \"role\"> 派生。"
      ]
    }
  ]
};
