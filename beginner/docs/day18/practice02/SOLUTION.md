# 解题结构

[返回题目](./README.md) · [打开 solution.ts](../../../day18/practice02/solution.ts)

本文件不提供完整答案。对应的 `solution.ts` 只保留可通过类型检查的 TODO 脚手架，请先独立作答，再用这里检查思路。

## 方案一

1. 让 `StorageQuota` 独占 `used` 状态；先判断输入为正数且新总量不超过上限，再决定是否更新。
2. `consume` 用 boolean 把接受或拒绝交给调用方，拒绝分支不修改任何字段。
3. `summary` 只读取当前实例状态并返回文字，不负责输出。
4. 把配额实例作为 `SummaryProvider` 交给 `QuotaPanel`；面板只包装摘要，不参与容量规则。

## 关键检查点

- 先算“写入后会是多少”，通过检查后再修改 `used`。

- `0`、负数和超额请求都返回 `false`，并保持原状态。

- 组合依赖的是 `SummaryProvider` 能力，不是具体配额类的私有实现。
