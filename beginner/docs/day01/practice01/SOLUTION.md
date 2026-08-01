# Practice 01 · 完整参考答案说明

[返回题目](./README.md)

[打开 solution.ts](../../../day01/practice01/solution.ts)

本文件提供完整参考答案。

## 直接调用逻辑

`completedLessons = 0` → 第一次读取旧值并加 1 → 第二次再加 1 → 得到 `2` → 与姓名、课程、初学者状态一起进入模板字符串 → 四次 `console.log`。

`const` 保存不需要重新赋值的数据；`let` 让完成数可以连续更新。
