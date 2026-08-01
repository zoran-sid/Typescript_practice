# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day20/practice01/solution.ts)

本文件提供完整参考答案。`solution.ts` 的 `// 调用关系：` 注释从原始 JSON 一直跟到经过守卫验证的业务输出。

## 直接调用逻辑

1. `raw` 进入 `parseProfile`，`JSON.parse` 的结果先保存为 `unknown`。
2. `isProfile` 调用 `isRecord` 和 `isLesson`，逐层验证对象、联系信息和课程数组。
3. 验证通过后，`ParseResult` 才把值交回为 `Profile`；失败则返回具体错误文字。
4. 调用处只在 `result.ok` 为真时读取资料字段，再用 `map` 和 `filter` 生成输出数据。

完整实现位于 `solution.ts`，其中没有 TODO、断言或占位返回值。
