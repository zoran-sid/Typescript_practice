# 解题结构

[返回题目](./README.md) · [打开 solution.ts](../../../day31/practice02/solution.ts)

本文件不提供完整答案。`solution.ts` 是可通过类型检查的 TODO 脚手架，只展示主要声明顺序、类型边界和待完成位置。

## 方案一：用自定义 Iterable 表达倒计时

### 搭建顺序

1. 让 `createCountdown` 返回带迭代器工厂的对象。
2. 把 current 放在工厂内部，`next` 每次决定 value、done 和下一状态。
3. 再单独完成超过安全整数范围的 bigint 计算与展示。

### 类型与数据流

`start` → iterable → 新 iterator 状态 → 多次 `next()` → 消费结果。

### 关键自检点

- `return` 结束生成器，`yield` 才把中间值交给消费者。
- 完成后继续调用 `next` 也应保持完成状态。

完成 TODO 后，请以本题 README 的精确输出和限制逐项自检；不要把显示结果直接写死。
