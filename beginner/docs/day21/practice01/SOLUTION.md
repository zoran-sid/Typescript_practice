# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day21/practice01/solution.ts)

本文件提供完整参考答案。`solution.ts` 的 `// 调用关系：` 注释标出了 Promise 数组怎样进入 `Promise.all`，以及 rejected Promise 怎样进入 `catch`。

## 直接调用逻辑

1. `loadLessons` 的 `map` 为每个标题调用一次 `fetchLesson`，返回 `Promise<string>[]`。
2. `Promise.all` 等待整组请求，`lessons` 接住完成后的字符串数组并进入两行输出。
3. 失败请求在 `try` 中被 `await`，因此 rejection 会进入同一处 `catch`。
4. `errorMessage` 把 `unknown` 错误安全转换成文字；文件末尾等待 `main()` 完成。

完整实现位于 `solution.ts`，其中没有 TODO 或占位返回值。
