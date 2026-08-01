# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day11/practice01/solution.ts)

本文件提供完整参考答案。建议先独立完成 `practice.ts`，再运行 `solution.ts`，沿代码里的 `// 调用关系：` 注释核对自己的数据传递顺序。

## 直接调用逻辑

1. `tasks` 保存五条固定任务，`for...of` 每次取出一条 `task`。
2. `describeTask(task)` 用 `status` 选择分支，并把该分支生成的字符串 `return` 给调用处。
3. 局部变量 `description` 接住返回值，`console.log(description)` 输出当前任务。
4. `completed` 分支单独处理 `score` 缺席；`default` 把遗漏状态交给 `assertNever`。

完整实现位于 `solution.ts`，其中没有 TODO 或占位返回值。
