# Day 02 · Practice 02 解题结构提示

[返回题目](./README.md) · [打开 solution.ts](../../../day02/practice02/solution.ts)

> 本文件不提供完整答案。`solution.ts` 中的 `0` 是 `number` 占位值，核心转换、公式和边界判断仍需完成。

## 两条输入先各自变成数字

重量和距离来自两个文本框，所以需要两次转换：

```text
weightText ──> weight
distanceText ──> distance
```

不要把原始文本覆盖掉。保留原始输入，既能看清数据来源，也便于以后处理非法输入。

## 一个值可以流向不同用途

`distance` 一方面参与费用公式，另一方面决定路线。可以先计算一次数字距离，再让两个步骤共同读取它；没有必要重复调用 `Number(distanceText)`。

完成 TODO 时按这个顺序推进：

1. 转换重量和距离。
2. 用三个费用部分计算 `deliveryFee`。
3. 让路线在达到边界时从默认值更新为长距离。
4. 最后统一输出结果。

## 常见错误示例

```ts
const deliveryFee = baseFee + weightText + distanceText;
```

这里的两个文本会参与字符串拼接，结果不是数值运费。计算时应读取已经转换好的 `weight` 和 `distance`。

另一个容易忽略的点是 `distance > 30` 会把刚好 30 排除在外；题目写的是“达到或超过 30”，比较符号必须包含等号。
