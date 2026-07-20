# Day 17 参考答案说明

## 解题路线

`Status` 从只读字面量元组派生；状态增减时，联合自动同步。`ArticlePatch`、`ArticlePreview` 和 `PublicArticle` 都从唯一 `Article` 派生，避免重复定义漂移。`statusLabels` 使用 `satisfies`，所以漏掉任何状态或写错值类型都会得到检查提示。

`updateArticle` 用 spread 返回新对象。`toPublicArticle` 还必须解构掉 `summary`，因为 `Omit` 只改变类型，并不会删除运行时字段。

## 易错点

不要用断言强迫标签表通过，也不要把 `original` 直接改掉。仅把完整文章赋给 `PublicArticle` 变量并不能移除额外的运行时字段，必须真的构造公开对象。

## 拓展思考参考方向

若先把 `scheduled` 加入 `statuses`，`Status`、`Article.status` 和相关派生类型会自动包含它；`statusLabels` 会因缺少键立即报错，迫使你提供用户可读标签。需要穷尽处理状态的业务分支也应同步报错。
