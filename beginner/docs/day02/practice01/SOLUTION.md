# Practice 01 · 完整参考答案说明

[返回题目](./README.md)

[打开 solution.ts](../../../day02/practice01/solution.ts)

本文件提供完整参考答案。

## 直接调用逻辑

`completedText` → `Number(completedText)` → `completed` → 与 `plannedLessons` 相加 → `totalLessons` → 比较 `>= 5` → 必要时更新 `status` → 输出总课数与状态。

先转换再相加，避免字符串的 `"3" + 2` 得到拼接结果 `"32"`。
