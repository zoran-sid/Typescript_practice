# Practice 01 · 完整参考答案说明

[返回题目](./README.md)

[打开 solution.ts](../../../day03/practice01/solution.ts)

本文件提供完整参考答案。

## 直接调用逻辑

`studyMinutes` → `for...of` 每轮取出 `minutes` → 累加进 `totalMinutes` → 与 `longestSession` 比较并按需更新 → 循环结束 → 输出次数、总时长和最长单次时长。

最长值只在本轮更大时覆盖；较小值不会把已经找到的最长记录改回去。
