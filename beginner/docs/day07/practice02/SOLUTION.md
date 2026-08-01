# Practice 02 · 完整参考答案说明

[返回题目](./README.md)

[打开 solution.ts](../../../day07/practice02/solution.ts)

本文件提供完整参考答案。

## 直接调用逻辑

`prices` → `map` 回调 return 九折价 → `discountedPrices` → `filter` 回调 return 是否低于 50 → `affordablePrices`；原价数组另进入 `find` → return 是否至少 100 → `firstLargePrice` → 输出三行。

`map` 收集每轮返回的数字，`filter` 用每轮返回的 boolean 决定是否保留，`find` 在首次得到 true 时交回当前项。
