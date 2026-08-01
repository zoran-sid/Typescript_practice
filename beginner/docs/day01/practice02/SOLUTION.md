# Practice 02 · 完整参考答案说明

[返回题目](./README.md)

[打开 solution.ts](../../../day01/practice02/solution.ts)

本文件提供完整参考答案。

## 直接调用逻辑

`stock = 5` → 修改前复制给 `beforeStock` → 连续减 1 两次 → 当前 `stock = 3` → 四个模板字符串分别读取商品、快照、当前库存和跟踪状态 → 输出四行。

`beforeStock` 是修改前的数字快照，不会随 `stock` 后续赋值而改变。
