# 解题结构

[返回题目](./README.md) · [打开 solution.ts](../../../day31/practice02/solution.ts)

本文件不提供完整答案。`solution.ts` 是可通过类型检查的 TODO 脚手架，只展示主要声明顺序、类型边界和待完成位置。

## 方案一：每次遍历创建独立分页状态

### 搭建顺序

1. 让 `createPageCursor` 返回只负责创建 iterator 的 iterable 对象。
2. 把 `current` 放进 `[Symbol.iterator]()`，让每次调用得到独立状态。
3. 交错调用两个 iterator 的 `next()`，保存结果后再格式化输出。

### 类型与数据流

`start/end` → iterable → 两份 iterator 状态 → 交错 `next()` → 值与 done。

### 关键自检点

- 不要把 `current` 放到两个 iterator 共享的位置，否则第二个消费者不会从起点开始。
- `IteratorResult` 的 done 分支不应伪造一个有效页码；完成后也不能重新开始。

完成 TODO 后，请以本题 README 的精确输出和限制逐项自检；不要把显示结果直接写死。
