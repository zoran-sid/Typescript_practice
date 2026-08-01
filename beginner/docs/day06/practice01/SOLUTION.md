# Practice 01 · 完整参考答案说明

[返回题目](./README.md)

[打开 solution.ts](../../../day06/practice01/solution.ts)

本文件提供完整参考答案。

## 直接调用逻辑

`originalTask.scores` 有两条复制路线：全局 `for...of` 把每项 push 到 `copiedScores`；也可传给 `copyScores`，由局部 `result` 接收后 return。题目用 `copiedScores` 建立 `copiedTask` → 只更新副本状态 → `calculateAverage(copiedTask)` 循环累加并 return 平均分 → 输出。

全局循环与函数都能完成复制；函数版本把临时数组限制在调用内部，更容易复用。
