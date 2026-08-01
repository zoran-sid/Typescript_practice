# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day11/practice02/solution.ts)

本文件提供完整参考答案。建议先独立完成 `practice.ts`，再沿 `solution.ts` 中的 `// 调用关系：` 注释检查自己是否重复判断了事件状态。

## 直接调用逻辑

1. 循环把当前 `event` 交给 `decideDelivery(event)`。
2. 函数根据 `status` 返回一个 `DeliveryDecision`，其中同时包含文字和重试决定。
3. `decision.text` 进入 `console.log`；`decision.shouldRetry` 决定是否增加 `retryCount`。
4. 循环结束后，最终计数进入汇总输出。调用处不需要再次检查 `event.status`。

完整实现位于 `solution.ts`，其中没有 TODO 或占位返回值。
