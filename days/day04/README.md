# Day 04：`interface`、`type` 与结构类型

## 今日目标

理解接口、类型别名、可选属性、只读属性、扩展、交叉类型、索引签名和 TypeScript 的结构类型系统。

## 来自主站的素材

- `src/lib/routes/gpx.ts:1-53` 用接口继承表达 `RouteEndpoint extends RoutePoint`。
- `src/lib/media/list.ts:1-22` 用类型别名表达状态联合和内容对象。
- `src/layouts/BaseLayout.astro:16-22` 用 `Partial<Record<Locale, string>>` 表达不完整语言映射。

## 核心讲解

`interface` 擅长描述对象契约，支持 `extends` 和声明合并；`type` 能表达联合、交叉、元组、条件类型等更广的组合。二者都采用结构类型：只要对象拥有所需成员，就可赋给目标类型，不要求显式“声明实现”。

可选属性需要在使用前收窄。联合字段如 `cover: string | { src: string }` 必须区分分支，不能依靠 `String(object)` 或盲目断言。

交叉类型 `A & B` 要求同时满足两边；若两边同名字段不兼容，结果可能变成 `never`，不是简单的“后者覆盖前者”。

## 动手任务

1. 实现 `summarizeEntry`，包含标题、状态和标签数量。
2. 修复 `coverPath` 对对象 cover 产生 `[object Object]` 的故障。
3. 添加一个自定义对象，证明结构兼容不要求使用类。

## 常见故障

- 把接口当运行时验证器。
- 未收窄联合字段就访问属性。
- 用 `!` 隐藏可选字段缺失。
- 误以为额外属性检查在所有赋值场景都相同。

## 验收

```powershell
npm.cmd --prefix typescript_practice run day -- day04
```
