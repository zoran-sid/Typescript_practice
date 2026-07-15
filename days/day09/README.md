# Day 09：Utility、映射类型、条件类型与 `infer`

## 今日目标

掌握内置 Utility Types、自定义映射类型、条件类型、分布式条件类型和 `infer`，并能设计安全的局部更新类型。

## 来自主站的素材

- `src/layouts/BaseLayout.astro:16-22` 使用 `Partial<Record<Locale, string>>`。
- `src/lib/routes/gpx.ts:133-135` 用 `Pick` 限制距离函数只依赖经纬度。
- `scripts/media/douban.ts:33-36` 用 `Pick<Console, "log" | "warn">` 注入最小日志能力。

## 核心讲解

常用工具包括 `Partial`、`Required`、`Readonly`、`Pick`、`Omit`、`Record`、`Exclude`、`Extract`、`NonNullable`、`ReturnType` 和 `Parameters`。它们多数由映射类型和条件类型构成。

条件类型 `T extends U ? X : Y` 可根据类型关系选择结果。`infer R` 可以从 Promise、函数等结构中提取内部类型。裸类型参数遇到联合时会分布计算；用 `[T] extends [U]` 可关闭这种行为。

`Partial<T>` 适合 patch，但不代表所有 `undefined` 都应该覆盖原值。更新语义必须由业务规则决定。

## 动手任务

1. 实现 `toPublicBuild`，只暴露允许公开的字段。
2. 修复 `applyBuildPatch`，忽略值为 `undefined` 的更新。
3. 阅读 `Resolved<T>`，说明 `infer` 提取了什么。

## 常见故障

- 用 `Partial` 后直接展开，意外删除已有值。
- 用 `Record<string, ...>` 丢失有限键集合。
- 条件类型意外分布，产生比预期更宽的联合。
- 从已有类型复制字段，而不是用 `Pick` 保持同步。

## 验收

```powershell
npm.cmd --prefix typescript_practice run day -- day09
```
