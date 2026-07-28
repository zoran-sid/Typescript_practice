# 解题结构

[返回题目](./README.md) · [打开 solution.ts](../../../day19/practice02/solution.ts)

本文件不提供完整答案。对应的 `solution.ts` 只保留可通过类型检查的 TODO 脚手架，请先独立作答，再用这里检查思路。

## 方案一

1. `parsePrice` 先检查空文本，再把文本转成数字并验证有限、非负。
2. `toPriceResult` 在一个明确边界调用解析函数：成功包装 value，失败把 unknown 错误转换为 error。
3. 外层循环只处理 Result；成功时计数并读 value，失败时只读 error。
4. `0` 是否成功由 `ok` 决定，不由数字的真假值决定。

## 关键检查点

- `Number(" ")` 会得到 `0`，所以空文本检查必须发生在转换前。

- `Number.isFinite` 同时排除 `NaN`、`Infinity` 和 `-Infinity`。

- 异常只在适配函数里转换一次，循环不重复解析和捕获逻辑。
