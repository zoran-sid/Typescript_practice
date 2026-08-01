# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day26/practice01/solution.ts)

本文件提供完整参考答案。对应的 `solution.ts` 可以直接类型检查和运行，包含“异步任务仪表板”的完整判断、循环、回调、`return` 与输出代码。建议先独立作答，再用它逐段对照；不要只背最终输出。

## 直接调用逻辑

1. `MemoryTaskRepository` 保存固定数据，`loadDashboard` 通过 `await repository.load()` 得到 `unknown`。
2. `parseTasks` 用数组检查与 `every(isStudyTask)` 验证数据；合法数组再由 `reduce` 得到总分钟。
3. `loadDashboard` 返回 `LoadState`，`render` 用 `switch` 把状态转换成字符串数组，`for...of` 输出每一行。
4. `runRegressionTests` 分别等待正常、空数组、坏数据和 offline 四次调用，条件通过后才累计结果。

代码中的 `// 调用关系：` 注释标出了固定数据进入函数、返回值进入下一步以及最终输出的位置。顺着这些注释阅读，就能把函数声明和真正发生的调用连起来。

## 对照方式

1. 先运行自己的 `practice.ts`，记录第一处类型错误或第一行不同的输出。
2. 再打开完整答案，只比较对应函数和它的调用处。
3. 修改自己的实现后重新运行，直到输出与题目完全一致。
