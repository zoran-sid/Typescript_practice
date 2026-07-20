# Day 17：Utility Types、as const 与 satisfies

预计用时：75–90 分钟。

真实项目常常已经有可靠类型，我们只想从它派生“更新输入”“公开字段”或“键值表”，而不是复制一份几乎相同的定义。今天会用工具类型、`as const` 和 `satisfies` 建立一套不会轻易漂移的文章模型。

## 核心讲解

常用 Utility Types 会从已有类型生成新类型：

- `Partial<T>`：所有属性可选，适合补丁对象。
- `Required<T>`：所有属性必填。
- `Readonly<T>`：属性只读。
- `Pick<T, Keys>`：只挑选指定属性。
- `Omit<T, Keys>`：排除指定属性。
- `Record<Keys, Value>`：每个指定键对应同一种值。
- `ReturnType<typeof fn>`：取得函数返回类型。
- `Awaited<PromiseType>`：取得等待后的结果类型。

它们只改变静态描述，不会在运行时自动复制、冻结或删除字段。`Omit<Account, "email">` 不会让真实对象的 `email` 自动消失。

`as const` 会保留字面量并把数组推断为只读元组：

~~~ts
const levels = ["初级", "中级", "高级"] as const;
type Level = (typeof levels)[number];
~~~

`satisfies` 检查表达式符合目标类型，同时尽量保留表达式自身的精确推断：

~~~ts
const labels = {
  draft: "草稿",
  published: "已发布",
} satisfies Record<Status, string>;
~~~

与强制断言相比，漏键、拼错键和值类型错误都能得到提示。它仍然只是编译期检查，不能验证网络返回的未知数据。

## 阅读示例

打开并右键运行 `example.ts`。指出 `ArticlePatch`、`ArticlePreview`、`Status` 与 `statusLabels` 分别由哪个已有类型或值派生。

## 独立练习（从空文件开始）

请从头编写“文章更新与公开摘要”。

先声明：

- `statuses = ["draft", "published", "archived"] as const`
- `Status = (typeof statuses)[number]`
- `Article`：包含只读数字 `id`，以及 `title`、`summary`、`published`、`status`
- `ArticlePatch = Partial<Pick<Article, "title" | "summary" | "published" | "status">>`
- `ArticlePreview = Pick<Article, "id" | "title" | "status">`
- `PublicArticle = Omit<Article, "summary">`
- `statusLabels`，用 `satisfies Record<Status, string>` 精确覆盖三种状态

实现：

- `updateArticle(article, patch): Article`：使用 spread 返回新文章。
- `toPublicArticle(article): PublicArticle`：在运行时真正排除 `summary`，不能只改类型。

固定 `original`：

~~~text
id=1
title=旧标题
summary=内部学习记录
published=false
status=draft
~~~

用补丁把标题改成 `TypeScript 工具类型`、published 改为 `true`、status 改为 `published`，并创建 `updated`、`preview` 和 `publicArticle`。精确输出：

~~~text
原标题：旧标题
新标题：TypeScript 工具类型
原状态：draft
新状态：published=已发布
公开字段：id,title,published,status
可用状态：draft、published、archived
~~~

限制：

- 不得使用 `any`、类型断言、非空断言或直接修改 `original`。
- 四个派生类型不得复制粘贴完整字段定义。
- 状态联合必须来自 `statuses`，标签表必须使用 `satisfies Record<Status, string>`。
- `toPublicArticle` 必须通过对象解构与 rest 真正移除运行时字段。
- 输出新标题时必须读取 `ArticlePreview`，公开字段必须读取 `publicArticle`。

完成标准：右键运行后显示 PASS；能解释类型层的 `Omit` 与运行时移除字段为何是两件事。

## 容易出错的地方

- 复制新接口，原类型改变后忘记同步。
- 认为 `Omit` 会删除运行时字段。
- 使用 `Partial` 后直接修改原对象。
- 把 `as const` 当作运行时深冻结。
- 用 `as Record<...>` 掩盖漏键，而不是使用 `satisfies`。
- 派生数组成员联合时忘记 `[number]`。

## 拓展思考（不要求写代码）

如果 `Article` 增加状态 `scheduled`，你希望哪些派生类型或配置自动更新，哪些位置应该立即报错提醒补充业务内容？为什么？

## 官方资料

- [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [TypeScript 3.4：const assertions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions)
- [TypeScript 4.9：satisfies](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator)
