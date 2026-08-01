# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day16/practice02/solution.ts)

本文件提供完整参考答案。请沿 `solution.ts` 中的 `// 调用关系：` 注释查看第一次更新的返回值如何直接成为第二次调用的输入。

## 直接调用逻辑

1. `originalSettings`、`pageSizeKey` 和数字 `50` 进入第一次 `updateProperty`。
2. `pageUpdated` 接住新对象，再与 `"showTips"`、布尔值 `false` 进入第二次调用。
3. `updatedSettings` 保存两次更新后的最终结果，`originalSettings` 仍保持原值。
4. 输出同时读取新旧对象，验证键值类型关系和不可变更新。

完整实现位于 `solution.ts`，其中没有 TODO 或占位返回值。
