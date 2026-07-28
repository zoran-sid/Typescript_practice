# 解题结构

[返回题目](./README.md) · [打开 solution.ts](../../../day11/practice02/solution.ts)

本文件不提供完整答案。对应的 `solution.ts` 只保留可通过类型检查的 TODO 脚手架，请先独立作答，再用这里检查思路。

## 方案一

1. 让每个投递事件进入 `decideDelivery`，先按 `status` 收窄。
2. 每个分支同时构造展示文字和重试决定；只有 `retrying` 分支交回 `true`。
3. 外层循环输出 `text`，并根据 `shouldRetry` 累加计数。
4. `default` 只负责把遗漏状态交给 `assertNever`。

## 关键检查点

- 发送时间、等待秒数和拒绝原因只能在拥有该字段的分支读取。

- `rejected` 是永久失败，不等于“稍后重试”。

- 统计逻辑读取函数交回的 decision，不再重复检查原事件状态。
