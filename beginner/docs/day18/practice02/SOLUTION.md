# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day18/practice02/solution.ts)

本文件提供完整参考答案。`solution.ts` 的 `// 调用关系：` 注释说明三次 `consume` 共享同一个实例状态，面板只通过接口读取摘要。

## 直接调用逻辑

1. 前两次 `consume` 通过判断，把 `used` 从 `0` 更新为 `30`。
2. 第三次调用发现 `30 + 80` 超过上限，返回 `false` 且不修改状态。
3. `oversizedAccepted` 决定输出“接受”还是“拒绝”。
4. `QuotaPanel.render()` 调用 `provider.summary()`，把同一份配额状态加上面板前缀。

完整实现位于 `solution.ts`，其中没有 TODO 或占位返回值。
