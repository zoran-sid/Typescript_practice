# Practice 02 · 完整参考答案说明

[返回题目](./README.md)

[打开 solution.ts](../../../day04/practice02/solution.ts)

本文件提供完整参考答案。

## 直接调用逻辑

检查数、审批和热修复状态 → 计算 `hasFailure` 与 `canFastTrack` → 按优先级选择 `decision` → 单独计算 `canDeploy` → 输出决策、能否部署和失败数。

失败检查优先级最高，因此即使已经审批，也必须先阻止部署。
