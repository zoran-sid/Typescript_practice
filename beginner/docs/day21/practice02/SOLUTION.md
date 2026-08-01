# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day21/practice02/solution.ts)

本文件提供完整参考答案。`solution.ts` 的 `// 调用关系：` 注释把并行、依赖和失败三条异步路径分开标明。

## 直接调用逻辑

1. `coursePromise` 和 `progressPromise` 都在第一次 `await` 前创建，再一起进入 `Promise.all`。
2. `fetchUserId` 的返回值先保存为 `userId`，然后作为参数传给 `fetchPermission`，这是顺序依赖。
3. 失败的通知请求在 `try` 中等待，异常经过 `errorMessage` 后输出。
4. `main()` 的三个阶段依次产生并行结果、依赖结果和错误结果，顶层 `await` 等待全部完成。

完整实现位于 `solution.ts`，其中没有 TODO 或占位返回值。
