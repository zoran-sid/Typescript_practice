# Day 07：数组方法与回调

预计用时：60–90 分钟。

Day 03 使用 `for...of` 逐项处理数组。今天学习 `map`、`filter` 和 `find`：方法负责遍历，你提供一个小函数说明每一项怎样处理，这个小函数叫回调函数。

## 完成目标

- 使用 `map` 把每一项转换成新值。
- 使用 `filter` 保留满足条件的项。
- 使用 `find` 寻找第一项，并处理可能找不到的情况。
- 读懂箭头函数 `(item) => ...`。
- 理解回调的参数与返回值。

## `map`：每一项变成什么

```ts
const numbers = [1, 2, 3];
const doubled = numbers.map((number) => number * 2);
```

回调参数是当前数组项，箭头右侧是返回的新值。`map` 得到新数组，原数组不变。回调使用花括号时必须明确 `return`，否则新数组中会出现 `undefined`。

## `filter`：哪些项要保留

```ts
const large = numbers.filter((number) => number >= 2);
```

回调返回 `true` 的原数组项被保留，返回 `false` 的项被排除。因此 `filter` 的回调要回答一个布尔问题。

## `find`：第一项在哪里

```ts
const found = numbers.find((number) => number === 2);
```

`find` 只返回第一项；找不到时返回 `undefined`。使用结果前必须显式考虑失败情况。Day 08 会学习更简洁的安全访问写法。

## 箭头函数仍然是函数

箭头左侧是参数，右侧表达式是返回值。初学阶段请把每一步保存为有名称的中间数组，不要把多个操作挤成难以调试的一行。

## 阅读完整示例

打开并右击运行 `example.ts`。依次找出 `map` 产生的新价格、`filter` 保留的价格，以及 `find` 返回的第一项。临时改变阈值，先预测三个结果再运行并恢复。

## 独立练习（从空文件开始）

在 `practice.ts` 中从零完成“订单数组报告”。

创建 `orders`，固定为四个对象：

| id | amount | status |
| --- | ---: | --- |
| A1 | 40 | done |
| B2 | 80 | pending |
| C3 | 60 | done |
| D4 | 120 | pending |

程序要求：

1. 使用 `filter` 创建 `completedOrders`，只保留 `status === "done"` 的订单。
2. 使用 `map` 创建 `completedIds`，把已完成订单转换为编号字符串。
3. 使用 `find` 创建 `firstLargeOrder`，寻找第一笔 `amount >= 100` 的订单。
4. 使用 `for...of` 累加 `completedOrders` 的金额到 `completedTotal`。
5. 创建 `firstLargeId`，初始为 `"未找到"`；只有查找结果不是 `undefined` 时才改成该订单编号。
6. 使用 `.join(", ")` 连接已完成编号并输出报告。

精确期望输出：

```text
已完成订单: A1, C3
完成总额: 100
第一笔大额订单: D4
```

限制：

- 筛选、转换和查找必须分别使用 `filter`、`map`、`find`。
- 不得假设 `find` 一定成功。
- 不得直接把编号列表、总额或 D4 写入输出。
- 不得修改原数组中的对象。

完成标准：

- 能用一句话区分三个数组方法。
- 能解释每个回调返回的内容。
- 右击运行 `practice.ts`，三行输出完全一致。

## 常见错误

`map` 用于转换而不是筛选；带花括号的箭头回调漏写 `return` 会产生 `undefined`；`find` 只返回一项而且可能找不到；`filter` 回调必须返回布尔结果。

## 拓展思考（不要求写代码）

如果先把所有订单 `map` 成只包含编号的字符串，再尝试筛选 `status === "done"`，为什么已经无法完成筛选，这说明数组操作的顺序会怎样影响后续可用信息？

## 参考答案

完成后再阅读 `solution.ts` 和 `SOLUTION.md`，重点对照三个数组方法各自保存的中间结果。

## 官方资料

- [Everyday Types：Arrays](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)
- [MDN：Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)
