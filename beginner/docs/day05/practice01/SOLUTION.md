# Practice 01 · 完整参考答案说明

[返回题目](./README.md)

[打开 solution.ts](../../../day05/practice01/solution.ts)

本文件提供完整参考答案。

## 直接调用逻辑

`quantity`、`unitPrice` → `calculateSubtotal` → return 到 `subtotal` → `subtotal`、`isMember` → `calculateDiscount` → return 到 `discount` → 前两个结果 → `calculateAmountToPay` → return 到 `amountToPay` → 输出三行。

每个函数只处理一步，上一函数的返回值由变量接住，再作为下一函数的实参。
