# Day 01 · Practice 02 解题结构提示

[返回题目](./README.md) · [打开 solution.ts](../../../day01/practice02/solution.ts)

> 本文件不提供完整答案。`solution.ts` 中的 `0` 和空字符串都是待替换的占位值。

## 先分清两个时刻

`stock` 保存当前库存，之后会被重新赋值；`beforeStock` 只记录修改发生前看到的数字。顺序应当是：

```text
读取初始 stock
   ├── 保存为 beforeStock
   └── 连续更新两次 ──> 得到最终 stock
```

如果先更新再保存，`beforeStock` 记录的就不再是“出库前”。这不是语法差异，而是业务时间点变了。

## TODO 应怎样推进

1. 先完成 `beforeStock`，让它读取修改前的 `stock`。
2. 再写两次库存更新。每次都要读取旧值、减 1、赋回同一个变量。
3. 最后生成四条输出文字。库存前后两行必须分别读取 `beforeStock` 和最终 `stock`。

## 容易写错的地方

```ts
stock - 1;
```

这行只算出了一个新数字，却没有保存它，`stock` 仍然是原值。需要有一次赋值，状态才真正改变。

另一个常见错误是让 `beforeStock` 也使用 `let` 并在后面一起修改。它的职责是保留历史快照，创建后不应再变，所以这里使用 `const` 更合适。
