# Day 26 参考思路

## 练习 01：Promise 不是最终值

调用 `fetchTitle()` 得到 `Promise<string>`；`await fetchTitle()` 才得到 `string`。`await` 只能写在 `async` 函数中，或像本课程这样写在支持顶层 await 的 ES 模块里。

## 练习 02：并发等待

用户和任务数量互不依赖，可以先同时启动，再用：

```ts
const [user, taskCount] = await Promise.all([loadUser(), loadTaskCount()]);
```

结果数组仍按传入 Promise 的顺序排列，而不是按完成先后排列。

## 练习 03：错误也是状态

`try` 中等待仓库。失败时进入 `catch`，捕获值按 `unknown` 处理；只有 `error instanceof Error` 后才能安全读取 `message`。函数最终总是返回 `LoadState`，调用者只需根据 `status` 分支。

## 练习 04：四条回归防线

四个测试分别保护：普通有效数组、合法空数组、错误字段类型和异步失败。类型检查只能证明你按声明使用代码；这些测试还会真实执行分支，检查运行时行为。

## 毕业口述题

1. `as Task[]` 和 `isTask` 的运行时差别是什么？
2. 哪些请求可以放入 `Promise.all`，哪些必须顺序等待？
3. 为什么 `{ loading: false, data: undefined, error: undefined }` 不如判别联合清晰？
4. 为什么不可变更新仍可能共享嵌套对象？
5. 类型检查、运行时验证、自动化测试分别挡住哪类错误？
