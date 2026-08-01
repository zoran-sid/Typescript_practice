# Practice 02 · 完整参考答案说明

[返回题目](./README.md)

[打开 solution.ts](../../../day08/practice02/solution.ts)

本文件提供完整参考答案。

## 直接调用逻辑

`contacts` → `find` → `selectedContact` → 安全读取姓名与可选电话；`score = 0`、空昵称 → `??` → 保留两个有效值 → 四次 `console.log`。

这一题刻意使用“找到联系人但电话缺失”的数据，方便区分对象不存在与某个可选字段不存在。
