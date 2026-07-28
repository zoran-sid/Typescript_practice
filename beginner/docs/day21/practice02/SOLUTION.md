# 解题结构

[返回题目](./README.md) · [打开 solution.ts](../../../day21/practice02/solution.ts)

本文件不提供完整答案。对应的 `solution.ts` 只保留可通过类型检查的 TODO 脚手架，请先独立作答，再用这里检查思路。

## 方案一

1. 让三个请求函数各自返回清晰的 `Promise<T>`；失败仍通过 rejected Promise 传播。
2. 在 `main` 中先创建课程和进度 Promise，再把二者一起交给 `Promise.all`。
3. 权限请求要等 `fetchUserId` 交回 id 后才能创建，因此保留顺序 `await`。
4. 最后单独等待失败通知，在 `catch` 中把 `unknown` 交给错误文字函数。

## 关键检查点

- 是否并行由数据依赖决定，不由函数是不是 `async` 决定。

- `Promise.all` 的结果顺序跟传入 Promise 的顺序一致。

- 失败 Promise 必须被观察，不能留下未处理拒绝。
