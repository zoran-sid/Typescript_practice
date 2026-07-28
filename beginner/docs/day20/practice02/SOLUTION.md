# 解题结构

[返回题目](./README.md) · [打开 solution.ts](../../../day20/practice02/solution.ts)

本文件不提供完整答案。对应的 `solution.ts` 只保留可通过类型检查的 TODO 脚手架，请先独立作答，再用这里检查思路。

## 方案一

1. 先把解析结果保留为 `unknown`，语法错误立即变成失败 Result。
2. 用 `Array.isArray` 检查批次容器，再遍历数组里的 unknown 项。
3. `isNotification` 先用会排除 `null` 和数组的 `isRecord` 确认普通记录对象，再按 kind 检查对应字段。
4. 合法项加入 `valid`，其余项只累计 rejected；外层按 Result 输出批次结果。

## 关键检查点

- `typeof null` 和数组都会落入 `object`；`isRecord` 必须同时排除 `null` 和数组。

- email 与 push 的字段不同，不能只检查 kind 就承诺整个联合成员。

- 容器错误、单项错误和 JSON 语法错误属于不同层级，不要混成同一个 `false`。
