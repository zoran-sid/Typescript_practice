# Day 28（选修）｜元组、重载、`this` 与可变参数

普通业务函数优先使用简单参数和联合类型。本专题帮助你设计或阅读库 API：固定位置的数据、保留整组参数的通用包装器、输入与返回形状不同的重载，以及依赖调用者的 `this`。

建议用时：60–90 分钟。

## 今天会学到

- 用只读元组表达固定长度和位置含义；
- 用剩余参数与可变参数元组保留函数签名；
- 正确排列重载签名和实现签名；
- 用显式 `this` 参数检查调用上下文。

## 核心讲解

`readonly [completed: number, total: number]` 有固定两个位置，与任意长度的 `number[]` 不同。元组标签只帮助阅读，不会成为运行时属性。

通用调用器中的 `Args` 同时出现在函数参数和实参数组，`Result` 同时连接原函数与包装器返回值，因此类型关系不会丢失。重载签名写在实现上方，实现必须覆盖全部分支；如果输入输出关系没有变化，简单联合通常更清楚。

显式 `this` 参数只用于类型检查，不是运行时第一个实参；可以通过 `.call(context, ...)` 提供调用者。

## 独立练习（从空文件开始）

从零完成一个“高级函数工具箱”。

必须名称：`ProgressPair`、`progress`、`invoke`、`normalize`、`CourseContext`、`describe`。

需求：

1. `progress([true, false, true, true])` 返回只读元组 `[3, 4]`。
2. `invoke` 使用 `Args extends unknown[]` 与 `Result`，分别调用数字乘法和标题拼接函数。
3. `normalize` 提供字符串重载和只读字符串数组重载；都执行 trim + 小写，返回类型分别是 string 和 string[]。
4. `describe` 有显式 `this: CourseContext` 和 prefix 参数，通过 `.call` 输出课程说明。

精确输出：

```text
Progress: 3/4
Total: 36
Day 28
types
modules, generics
Elective Day 28: Advanced functions
```

固定输入：乘法 12×3；标题函数接收 `"Day "`、28；normalize 输入 `"  TYPES "` 及 `[" Modules ", " GENERICS "]`；上下文 title 为 Advanced functions、day 为 28。

限制：不使用 `any`、类型断言或普通数组冒充元组；实现签名必须覆盖两个重载。

完成标准：右击运行 `practice.ts` 后输出完全一致；能指出每个泛型参数连接了哪些位置，并说明 `this` 参数为何不出现在运行时实参数组中。

## 常见错误

- 用 `(number | boolean)[]` 代替固定元组；
- 包装器写成 `any[]` 丢失关系；
- 只写重载签名却没有兼容实现；
- 把显式 this 当成普通第一个参数。

## 拓展思考（不要求写代码）

`normalize` 能否只用联合参数写成一个函数？比较联合版本与重载版本在调用处返回类型精度和实现可读性上的差别。

## 官方资料

- [More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)
- [Tuple Types](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)
- [Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
