# Practice 01 · 完整参考答案说明

[返回题目](./README.md)

[打开 solution.ts](../../../day08/practice01/solution.ts)

本文件提供完整参考答案。

## 直接调用逻辑

`contacts` → `find` 回调 return 姓名比较结果 → `selectedContact` → `?.` 安全读取姓名、电话、城市 → `??` 补缺失文字；`score = 0` 与空昵称分别经过 `??` 后保留原值 → 输出五行。

`??` 只替换 `null` 或 `undefined`，所以 0 和空字符串不会被误判成缺失。
