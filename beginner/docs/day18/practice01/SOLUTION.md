# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day18/practice01/solution.ts)

本文件提供完整参考答案。`solution.ts` 的 `// 调用关系：` 注释标出了实例状态、组合调用和脱离实例后的箭头函数调用。

## 直接调用逻辑

1. 两个 `StudyCounter` 实例各自保存 `minutes`；`add` 只让正数进入当前实例状态。
2. `types.summary()` 与 `modules.summary()` 分别返回各自摘要。
3. `Dashboard` 保存 `types` 作为 `SummaryProvider`，`render()` 再调用它的 `summary()`。
4. `detachedFormat` 指向箭头函数字段，独立调用时仍读取原 `formatter` 的 `prefix`。

完整实现位于 `solution.ts`，其中没有 TODO 或占位返回值。
