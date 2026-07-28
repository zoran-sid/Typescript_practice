# DAY26 · Practice 01：异步任务仪表板

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day26/practice01/practice.ts)
- 结构提示代码：[solution.ts](../../../day26/practice01/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

这是一道完整、独立的主练习。不要导入其他 practice 文件夹中的代码。

## 场景背景

学习平台的任务面板通过异步仓库加载数据，但仓库边界只承诺返回 `unknown`，也可能因离线直接抛出错误。若面板跳过验证或吞掉异常，坏任务会被显示成成功状态，用户也无法判断数据是否真的加载完成。你需要交付清晰的 loading、success 或 failure 状态、可信统计，以及覆盖正常、空数据、坏数据和离线情况的回归测试结果。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
TaskRepository.load() ──> Promise<unknown> ──> await value
                                             └── parseTasks
                                                   ├── 合法 ──> success(tasks)
                                                   └── 非法 ──> failure(message)
Promise 抛错 ──────────────────────────────────────────────> failure(message)
LoadState ──> render ──> 输出行 + 回归测试
```

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

## 本题易漏语法

判别联合靠共同字段连接；对象值属性用逗号，类型联合成员用 |。

## 写完后自检

- 仓库返回合法空数组、`minutes: Number.NaN`、以及拒绝值 `"offline"` 时，最终状态分别应该是什么？
- 为什么 `await repository.load()` 之后仍要运行 `parseTasks`，不能把等待成功等同于数据可信？
- 如果新增 `empty` 状态，`render` 和回归测试中哪些位置必须一起增加分支？

## 文件

- 在 `practice.ts` 中独立作答。
- 独立完成后，再查看 `solution.ts` 的 TODO 代码骨架与 `SOLUTION.md` 的解题结构；两者都不提供完整答案。
