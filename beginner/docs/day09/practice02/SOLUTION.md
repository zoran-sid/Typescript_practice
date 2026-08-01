# Practice 02 · 完整参考答案说明

[返回题目](./README.md)

[打开 solution.ts](../../../day09/practice02/solution.ts)

本文件提供完整参考答案。

## 直接调用逻辑

`Task` 接口检查固定 `task` → `describeTask(task)` → 根据 `done` 选择状态、用 `??` 处理备注 → return 两行摘要；`tags` → `join(", ")` → `tagsText` → 两次 `console.log` 合计输出三行。

任务对象与标签数组是两条独立数据流，只在最终输出阶段并列展示。
