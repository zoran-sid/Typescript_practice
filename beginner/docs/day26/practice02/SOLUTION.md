# 解题结构

[返回题目](./README.md) · [打开 solution.ts](../../../day26/practice02/solution.ts)

本文件不提供完整答案。`solution.ts` 是可通过类型检查的 TODO 脚手架，只展示主要声明顺序、类型边界和待完成位置。

## 方案一：以 LoadState 作为异步任务面板的唯一交接格式

### 搭建顺序

1. 复用题目提供的模型边界，只在本练习内完成加载调用和渲染流程。
2. 先产生 loading，再等待合法仓库并把 success 交给 `render`。
3. 再等待坏字段仓库，把 failure 交给同一个 `render`；不要在仓库内部直接输出。

### 类型与数据流

仓库 → loading → `await` + 验证 → success/failure → 字符串数组。

### 关键自检点

- 不要把 `Promise` 本身当作任务数组使用。
- success 与 failure 都要经过 `render`；入口不能绕开状态联合直接读取仓库原值。

完成 TODO 后，请以本题 README 的精确输出和限制逐项自检；不要把显示结果直接写死。
