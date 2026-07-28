# 解题结构

[返回题目](./README.md) · [打开 solution.ts](../../../day17/practice02/solution.ts)

本文件不提供完整答案。对应的 `solution.ts` 只保留可通过类型检查的 TODO 脚手架，请先独立作答，再用这里检查思路。

## 方案一

1. 从两个只读元组分别派生 `Role` 与 `Action`。
2. 用 `Record<Role, readonly Action[]>` 描述权限矩阵，再用 `satisfies` 检查对象是否完整且动作有效。
3. `can` 只读取当前角色对应的动作列表，遍历后交回 boolean。
4. 从完整成员类型 Pick 出卡片字段，和三次权限判断一起输出。

## 关键检查点

- `satisfies` 检查权限表，但不会把每个数组无条件放宽成任意字符串。

- `can` 由数据表驱动；新增角色时先补表，不复制新的角色分支。

- `MemberCard` 不包含邮箱，却仍与 `Member` 的字段类型保持同步。
