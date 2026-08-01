# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day24/practice01/solution.ts)

本文件提供完整参考答案。对应的 `solution.ts` 可以直接类型检查和运行，包含“任务 JSON 导入审查器”的完整判断、循环、回调、`return` 与输出代码。建议先独立作答，再用它逐段对照；不要只背最终输出。

## 直接调用逻辑

1. `incomingText` 进入 `importTasks`，先由 `JSON.parse` 变成 `unknown`，再检查顶层数组。
2. `filter(isStudyTask)` 逐项调用验证器；验证器继续调用 `isRecord` 和 `isTaskState`。
3. 成功分支同时携带 `tasks` 与 `rejected`，调用处据此循环输出任务。
4. 每个状态进入 `describeState`；任务分钟由 `reduce` 汇总后输出。坏 JSON 则走失败分支。

代码中的 `// 调用关系：` 注释标出了固定数据进入函数、返回值进入下一步以及最终输出的位置。顺着这些注释阅读，就能把函数声明和真正发生的调用连起来。

## 对照方式

1. 先运行自己的 `practice.ts`，记录第一处类型错误或第一行不同的输出。
2. 再打开完整答案，只比较对应函数和它的调用处。
3. 修改自己的实现后重新运行，直到输出与题目完全一致。
