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
      "title": "内容发布配置",
      "expected": [
        "原标题：旧标题",
        "新标题：TypeScript 工具类型",
        "状态：published=已发布",
        "可用状态：draft、published、archived"
      ],
      "success": "你已闭卷重建 内容发布配置 的完整数据流。",
      "hints": [
        "使用 Utility Types、as const 或 satisfies 保留约束与推断。",
        "沿 README 流程图逐个检查输入、处理、分支/循环和输出。",
        "不要导入其他 practice 文件夹；每题必须独立运行。"
      ]
    }
  ]
};
