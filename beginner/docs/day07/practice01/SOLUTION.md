# Practice 01 · 完整参考答案说明

[返回题目](./README.md)

[打开 solution.ts](../../../day07/practice01/solution.ts)

本文件提供完整参考答案。

## 直接调用逻辑

`orders` → `filter` 回调 return 完成状态 → `completedOrders` → `map` 回调 return id → `completedIds`；`orders` 同时进入 `find` → 首个金额达到 100 的订单 → `firstLargeOrder`；完成订单再由循环累加 → 三个结果共同输出。

回调里的 `return false` 不是额外步骤。最终代码直接 return 比较结果，`find` 收到 true 就停止查找。
