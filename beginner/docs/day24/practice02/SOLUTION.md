# 解题结构

[返回题目](./README.md) · [打开 solution.ts](../../../day24/practice02/solution.ts)

本文件不提供完整答案。`solution.ts` 是可通过类型检查的 TODO 脚手架，只展示主要声明顺序、类型边界和待完成位置。

## 方案一：先守住 unknown 边界，再让业务层只接收任务

### 搭建顺序

1. 保留 `TaskState`、`StudyTask`、`ImportResult` 的类型骨架。
2. 依次完成 record、状态、任务三个守卫的 TODO；任一元素失败就返回整批失败。
3. 分别运行成功批次与坏分钟批次，在 `ok` 两个分支中读取各自成员。

### 类型与数据流

文本 → JSON 解析值 → 守卫链 → 成功/失败结果 → 业务输出。

### 关键自检点

- 不要用 `as StudyTask[]` 代替运行时验证。
- 第一项可能不存在；失败结果只能读 `message`，不能读 `tasks`。

完成 TODO 后，请以本题 README 的精确输出和限制逐项自检；不要把显示结果直接写死。
