# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day14/practice02/solution.ts)

本文件提供完整参考答案。请沿 `solution.ts` 的 `// 调用关系：` 注释确认默认导出、具名导出和类型导入分别去了哪里。

## 直接调用逻辑

1. 数据模块的默认导出保存为 `featuredProduct`，`warehouseName` 在入口改名为 `warehouse`。
2. `selected` 接住默认商品，并由 `Product` 在编译期检查字段。
3. `selected.priceCents` 进入 `formatPrice`；整个 `selected` 进入 `stockLabel`。
4. 两个函数的返回值和两个导入值共同组成四行输出。

完整实现位于 `solution.ts`，其中没有 TODO 或占位导入。
