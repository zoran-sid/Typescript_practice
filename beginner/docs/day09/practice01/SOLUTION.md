# Practice 01 · 完整参考答案说明

[返回题目](./README.md)

[打开 solution.ts](../../../day09/practice01/solution.ts)

本文件提供完整参考答案。

## 直接调用逻辑

`Project` 接口检查固定 `project` → `describeProject(project)` → 成员数组 `join`、可选备注 `??`、进度字段读取 → 组合四行字符串 → return 给 `console.log` → 输出项目摘要。

`readonly` 负责阻止不该发生的赋值；描述函数只读取数据，不修改项目。
