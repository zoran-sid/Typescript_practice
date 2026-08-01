# Practice 02 · 完整参考答案说明

[返回题目](./README.md)

[打开 solution.ts](../../../day10/practice02/solution.ts)

本文件提供完整参考答案。

## 直接调用逻辑

环境与开关输入 → `describeDebug` → 内部调用 `normalizeToggle(input)` → return 统一的 boolean 到 `requested` → 与“不是生产环境”共同计算 `canEnable` → 选择 `status` → return 最终文字 → `console.log`。

规范化函数只处理输入格式，环境规则只处理是否允许开启，两层职责不会混在一起。
