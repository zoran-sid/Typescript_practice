# Practice 02 · 完整参考答案说明

[返回题目](./README.md)

[打开 solution.ts](../../../day05/practice02/solution.ts)

本文件提供完整参考答案。

## 直接调用逻辑

预计与实际分钟 → `evaluateDelivery` → 准时分支 return `"On time"`，迟到分支 return 延迟文字 → `firstResult / secondResult` → 与配送编号一起传给 `createDeliveryLine` → return 完整行 → `console.log`。

第一个 `return` 执行后函数立刻结束，所以准时订单不会继续生成迟到文字。
