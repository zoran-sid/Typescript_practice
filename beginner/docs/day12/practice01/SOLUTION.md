# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day12/practice01/solution.ts)

本文件提供完整参考答案。`solution.ts` 中的 `// 调用关系：` 注释标出了回调和普通函数各自接收、返回什么。

## 直接调用逻辑

1. `greetStudent("Ada")` 返回问候语，`greeting` 接住后输出。
2. `reportScores` 循环读取分数，把每项交给 `formatScore`，再把返回文字交给 `console.log` 这个 `Reporter`。
3. `reportScores` 返回及格数给 `passedCount`；`sumScores(...scores)` 返回总分给 `totalScore`。
4. 最后输出总分和通过数量。计算函数不直接代替调用处展示结果。

完整实现位于 `solution.ts`，其中没有 TODO 或占位返回值。
