# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day12/practice02/solution.ts)

本文件提供完整参考答案。请沿 `solution.ts` 中的 `// 调用关系：` 注释检查 formatter 是否只调用一次，以及两个 sink 是否收到同一个字符串。

## 直接调用逻辑

1. `createFormatter("[课程]")` 返回一个记住前缀的 formatter。
2. `dispatch` 先调用一次 `formatter(message)`，让 `formattedMessage` 接住结果。
3. 循环依次把同一个结果交给 `console.log` 和 `archiveSink`，再返回 `sinks.length`。
4. `deliveredCount` 用于数量输出，`archived[0]` 用于存档输出。

完整实现位于 `solution.ts`，其中没有 TODO 或占位返回值。
