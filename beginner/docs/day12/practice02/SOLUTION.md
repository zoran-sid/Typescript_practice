# 解题结构

[返回题目](./README.md) · [打开 solution.ts](../../../day12/practice02/solution.ts)

本文件不提供完整答案。对应的 `solution.ts` 只保留可通过类型检查的 TODO 脚手架，请先独立作答，再用这里检查思路。

## 方案一

1. `createFormatter` 返回一个箭头函数，让它记住创建时收到的前缀。
2. `dispatch` 先调用一次 formatter，保存格式化结果。
3. 遍历 rest 参数收集到的 sinks，把同一结果依次交给每个 `void` 回调并计数。
4. 一个 sink 输出，另一个 sink 写入数组；入口再读取计数和存档结果。

## 关键检查点

- formatter 只调用一次，避免不同 sink 收到不一致的结果或重复执行有副作用的格式器。

- `void` sink 负责动作，投递数量由 dispatch 的循环维护。

- rest 参数在函数体内是普通数组，可以是零个、一个或多个接收方。
