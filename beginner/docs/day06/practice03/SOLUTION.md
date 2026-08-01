# Practice 03 · 完整参考答案说明

[返回题目](./README.md)

[打开 solution.ts](../../../day06/practice03/solution.ts)

本文件提供完整参考答案。

## 直接调用逻辑

`originalCart.prices` → `copyPrices` 循环 push → return 新数组 → `copiedCart.prices` → 只向副本追加 30 → `totalPrices(copiedCart.prices)` 循环累加 → return 60 → 输出原数量、副本数量、总价和客户。

`customer` 也重新建立对象，保证副本不与原购物车共享需要独立修改的嵌套值。
