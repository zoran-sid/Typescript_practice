# 解题结构

本文件不提供完整答案。`solution.ts` 是可通过类型检查的 TODO 脚手架，只展示主要声明顺序、类型边界和待完成位置。

## 方案一：先守住 unknown 边界，再让业务层只接收任务

### 搭建顺序

1. 保留 `TaskState`、`StudyTask`、`ImportResult` 的类型骨架。
2. 依次完成 record、状态、任务三个守卫的 TODO，再组装 `importTasks`。
3. 只在成功分支遍历任务并调用 `describeState`。

### 类型与数据流

文本 → JSON 解析值 → 守卫链 → 成功/失败结果 → 业务输出。

### 关键自检点

- 不要用 `as StudyTask[]` 代替运行时验证。
- 每个判别成员只能读取自己的专属字段。

完成 TODO 后，请以本题 README 的精确输出和限制逐项自检；不要把显示结果直接写死。
