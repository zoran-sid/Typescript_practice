# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day13/practice01/solution.ts)

本文件提供完整参考答案。`solution.ts` 用 `// 调用关系：` 标出原对象如何进入更新函数，以及新对象如何进入对照输出。

## 直接调用逻辑

1. `original` 进入 `updateProfile(original)`。
2. 函数分别创建新的外层对象、技能数组、偏好对象和任务数组；`map` 只替换 `id === 2` 的任务。
3. 函数 `return` 新对象，`updated` 接住它；随后从 `updated.skills` 解构首项和其余项。
4. 输出同时读取 `original` 与 `updated`，用实际结果证明旧对象没有被修改。

完整实现位于 `solution.ts`，其中没有 TODO 或占位返回值。
