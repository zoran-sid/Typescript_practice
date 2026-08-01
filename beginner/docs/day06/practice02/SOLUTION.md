# Practice 02 · 完整参考答案说明

[返回题目](./README.md)

[打开 solution.ts](../../../day06/practice02/solution.ts)

本文件提供完整参考答案。

## 直接调用逻辑

`book` → `describeBook(book)` → 形参 `item` → 根据 `item.available` 得到 `status` → 组合三行 `description` → return 到外部变量 `description` → `console.log(description)`。

函数只读取形参，不依赖外部同名变量，因此以后传入另一对象也能得到对应描述。
