# Day 26｜结课项目（三）：异步加载、状态与测试

主线最后一天要把任务报告器接到异步仓库。你将从空文件写出外部数据验证、加载状态、错误收窄、渲染和四条回归测试，完成一条从 Promise 到界面的可靠数据流。

建议用时：60–90 分钟。

## 今天会学到

- 用 `await` 把 `Promise<T>` 变成最终的 `T`；
- 把仓库结果保留为 `unknown` 并运行时验证；
- 用判别联合表达 loading、success、failure；
- 在 `catch` 中把错误当作 `unknown` 收窄；
- 测试正常、空数组、坏数据和异步失败。

## 核心讲解

```text
TaskRepository.load() → Promise<unknown> → await → 运行时验证
                                            ├─ success：任务与总分钟
                                            └─ failure：可读错误消息
```

不要用 `isLoading`、`data?`、`error?` 三个可互相矛盾的字段。判别联合让每个状态只携带合法数据。异步不会让类型断言变成验证：网络或文件结果仍应从 `unknown` 开始。

`catch` 到的值不保证是 `Error`，要先用 `instanceof Error`。回归测试必须覆盖成功以外的路径，否则坏数据或离线错误可能直到真实使用时才暴露。

## 独立练习（从空文件开始）

在 `practice.ts` 中从零完成“异步任务面板”。

必须名称：`StudyTask`、`LoadState`、`TaskRepository`、`isRecord`、`isStudyTask`、`parseTasks`、`loadDashboard`、`render`、`MemoryTaskRepository`、`runRegressionTests`。

需求：

1. 任务字段为只读 id、title、非负有限 minutes、`todo | doing | done` 状态。
2. 仓库 `load()` 返回 `Promise<unknown>`；内存仓库可返回给定值，也可异步抛出给定错误。
3. `parseTasks` 验证数组及每个元素；空数组合法，坏数据返回 `null`。
4. `loadDashboard` 成功时计算总分钟，坏数据返回消息 `Task data is invalid`，捕获 Error 时保留其 message。
5. `render` 把 loading 和 success 转成输出行。
6. `runRegressionTests` 独立验证：正常两项、空数组、坏 minutes、仓库抛出 `offline`，返回通过数量。

固定正常任务为 Async / 30 / done 与 Tests / 45 / todo。

精确输出：

```text
State: loading
State: success
Tasks: 2
Done: 1
Minutes: 75
Tests passed: 4/4
```

限制：不使用 `any`、非空断言 `!` 或 `as StudyTask[]`；不能吞掉异常后伪装成成功。

完成标准：右击运行 `practice.ts` 后输出完全一致；四条测试确实检查结果，而不是无条件累加；能画出 Promise、unknown、验证器、LoadState 的顺序。

## 常见错误

- 忘记 `await`，把 Promise 当任务数组；
- 在 `catch` 里直接访问 `error.message`；
- 空数组被错误判为无效；
- 只测试成功路径；
- 用断言越过外部数据边界。

## 拓展思考（不要求写代码）

如果面板还要从另一个独立仓库加载用户名，怎样用 `Promise.all` 并发等待两项数据？其中一项失败时，最终状态应如何定义才不会留下半成功的矛盾数据？

## 官方资料

- [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [Utility Types：Awaited](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype)
- [Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)
