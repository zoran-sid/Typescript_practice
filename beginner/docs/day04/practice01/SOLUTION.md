# Practice 01 · 完整参考答案说明

[返回题目](./README.md)

[打开 solution.ts](../../../day04/practice01/solution.ts)

本文件提供完整参考答案。

## 直接调用逻辑

固定订单数据 → 计算 `canUseMemberDiscount` → 按“满 200、会员、普通优惠”的顺序进入 `if / else if` → 得到唯一 `discount` → `orderTotal - discount` → `amountToPay` → 输出。

优先级必须写进分支顺序，否则同一订单满足多个条件时可能拿到较低优惠。
