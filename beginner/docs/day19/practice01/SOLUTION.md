# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day19/practice01/solution.ts)

本文件提供完整参考答案。`solution.ts` 中的 `// 调用关系：` 注释区分了解析异常和保存失败这两条不同的失败路径。

## 直接调用逻辑

1. 每个 `input` 先进入 `parsePort`；合法值 `return` 数字，非法值抛出 `RangeError`。
2. 合法 `port` 再进入 `savePort`，返回成功或失败 `Result<number>`。
3. `result.ok` 决定读取 `value` 还是 `error`。
4. 只有解析异常进入 `catch`，再由 `errorMessage` 返回可输出的文字。

完整实现位于 `solution.ts`，其中没有 TODO 或占位返回值。
