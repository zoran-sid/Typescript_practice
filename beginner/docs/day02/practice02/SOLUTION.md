# Practice 02 · 完整参考答案说明

[返回题目](./README.md)

[打开 solution.ts](../../../day02/practice02/solution.ts)

本文件提供完整参考答案。

## 直接调用逻辑

`weightText`、`distanceText` → 分别调用 `Number` → `weight`、`distance` → 共同进入运费公式；`distance` 同时进入 `>= 30` 判断 → 得到 `route` → 输出四行报价。

边界值 30 也算长距离，所以判断使用 `>=`，不是 `>`。
