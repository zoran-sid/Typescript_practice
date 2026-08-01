# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day20/practice02/solution.ts)

本文件提供完整参考答案。`solution.ts` 中的 `// 调用关系：` 注释把每个原始批次连接到解析结果和最终输出。

## 直接调用逻辑

1. `raw` 进入 `parseBatch`；语法错误直接返回失败 Result，成功解析的值仍是 `unknown`。
2. 数组检查通过后，循环把每个 `item` 交给 `isNotification`。
3. 合法项加入 `valid`，坏项只增加 `rejectedCount`；循环结束返回 `BatchSummary`。
4. 调用处根据 `result.ok` 输出合法渠道和丢弃数，或只输出批次错误。

完整实现位于 `solution.ts`，其中没有 TODO、断言或占位返回值。
