# Practice 02 · 完整参考答案说明

[返回题目](./README.md)

[打开 solution.ts](../../../day03/practice02/solution.ts)

本文件提供完整参考答案。

## 直接调用逻辑

`taskMinutes` → 普通 `for` 同时取得 `index` 和 `minutes` → 判断是否达到慢任务边界 → 命中时更新 `slowCount` 与位置文字 → 循环结束 → 输出任务数量、慢任务数量和位置。

数组下标从 0 开始，展示给人的任务位置从 1 开始，所以拼接时使用 `index + 1`。
