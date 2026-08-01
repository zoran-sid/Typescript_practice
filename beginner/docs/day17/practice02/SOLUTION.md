# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day17/practice02/solution.ts)

本文件提供完整参考答案。`solution.ts` 中的 `// 调用关系：` 注释指向三次真实授权调用，权限并没有被写死在输出里。

## 直接调用逻辑

1. `role` 决定从 `permissions` 读取哪一组允许动作。
2. `can` 循环比较每个 `allowedAction` 与目标 `action`，匹配时返回 `true`，遍历结束返回 `false`。
3. 三组固定参数分别得到三个布尔结果，再进入对应输出。
4. `member` 的 `name` 和 `role` 组成 `MemberCard`，最后一行只读取这张卡片。

完整实现位于 `solution.ts`，其中没有 TODO 或占位返回值。
