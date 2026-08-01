# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day19/practice02/solution.ts)

本文件提供完整参考答案。`solution.ts` 的 `// 调用关系：` 注释说明异常怎样在函数边界内转换成普通 `Result`。

## 直接调用逻辑

1. 循环只把当前 `text` 交给 `toPriceResult`。
2. `toPriceResult` 在 `try` 中调用 `parsePrice`；成功返回数字 Result，异常经 `errorMessage` 转成失败 Result。
3. 调用处检查 `result.ok`，成功时输出并增加 `validCount`，失败时只输出错误。
4. 坏价格不会结束循环，最后一项 `0` 仍会被统计，循环结束再输出总数。

完整实现位于 `solution.ts`，其中没有 TODO 或占位返回值。
