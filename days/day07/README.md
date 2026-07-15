# Day 07：泛型、约束与可复用算法

## 今日目标

掌握泛型函数、泛型接口、泛型类、约束 `extends`、多个类型参数、默认类型参数，以及何时不该使用泛型。

## 来自主站的素材

- `src/lib/utils.ts:46-55` 的 `groupBy<T>(items, key: keyof T)` 保留输入元素类型。
- `src/components/SearchModal.astro:60` 的 `Fuse<SearchEntry>` 把搜索结果与内容模型绑定。
- `src/lib/photos.ts:64-98` 用 `Map<string, PhotoAlbum>` 保留键和值类型。

## 核心讲解

泛型是“由调用者提供的类型变量”。`identity<T>(value: T): T` 保留输入与输出之间的关系，而 `unknown -> unknown` 会丢失它。约束 `T extends { id: string }` 表示算法只要求一个最小能力。

多个类型参数可表达键和值关系，例如 `<T, K extends keyof T>`。泛型默认值适合次要配置：`Page<T, Meta = {}>`。如果函数只接受一种具体类型，或类型参数只出现一次且没有建立关系，泛型往往没有价值。

## 动手任务

1. 实现类型安全的 `groupBy`。
2. 修复 `uniqueBy`：当前把整个对象转字符串，所有对象都可能变成同一个键。
3. 确认返回数组仍是 `SearchEntry[]`，而不是 `unknown[]`。

## 常见故障

- 使用 `<T>(value: any): T`，让调用者凭空“指定答案”。
- 把键写成 `string`，丢失 `keyof T` 约束。
- 假设 `items[0]` 一定存在；在 `noUncheckedIndexedAccess` 下应处理 `undefined`。
- 泛型约束太宽，函数内部仍需大量断言。

## 验收

```powershell
npm.cmd --prefix typescript_practice run day -- day07
```
