# Day 24｜结课项目（一）：模型与外部数据边界

结课项目“学习任务与进度报告器”从数据边界开始。今天要从空文件建立可靠模型，并把 JSON 解析结果当作 `unknown` 逐层验证，而不是用类型断言假装外部数据正确。

建议用时：60–90 分钟。

## 今天会学到

- 用判别联合表达待开始、进行中、已完成状态；
- 用类型谓词验证对象、嵌套状态和数组元素；
- 区分编译期类型与运行时数据；
- 保留有效任务并统计被拒绝的数据；
- 用完整 `switch` 安全读取不同状态的字段。

## 核心讲解

```text
JSON 文本 → JSON.parse → unknown → 逐层检查 → StudyTask[]
                                  ↘ 失败原因或拒绝数量
```

`type` 和 `interface` 编译后会消失，不能检查网络、文件或本地存储中的真实数据。对象检查必须同时排除 `null`；数组不仅要用 `Array.isArray`，还要验证每个元素。

状态应使用判别联合，而不是把所有时间字段都写成可选。这样 doing 必须携带 `startedAt`，done 必须同时携带开始与完成时间，不容易产生矛盾数据。

## 独立练习（从空文件开始）

在 `practice.ts` 中从零完成“任务 JSON 导入器”。

必须名称：`TaskState`、`StudyTask`、`ImportResult`、`isRecord`、`isTaskState`、`isStudyTask`、`importTasks`、`describeState`。

需求：

1. `TaskState` 包含 todo、doing、done；doing 有 `startedAt`，done 有 `startedAt` 和 `completedAt`。
2. `StudyTask` 含只读字符串 `id`、字符串 `title`、非负有限数字 `minutes` 和 `state`。
3. `importTasks(text)` 捕获坏 JSON；顶层不是数组时返回失败；数组中保留通过验证的元素并计算 `rejected`。
4. `describeState` 用 `switch` 生成 `todo`、`doing since 时间`、`done at 时间`。
5. 固定输入包含 Plan（todo，30）、Practice（doing since 09:00，45）、Review（done at 10:30，30），以及一条 `minutes: "20"` 的坏数据；另用字符串 `{` 测试坏 JSON。

精确输出：

```text
Import succeeded: 3 tasks
Rejected: 1
Plan: todo
Practice: doing since 09:00
Review: done at 10:30
Total planned minutes: 105
Invalid JSON: JSON format is invalid
```

限制：不使用 `any`、非空断言 `!` 或未经验证的类型断言；不能只检查数组外壳，嵌套 `state` 也要逐字段验证。

完成标准：右击运行 `practice.ts` 后输出完全一致；能解释为什么类型声明不能验证 JSON，以及判别联合如何避免矛盾状态。

## 常见错误

- 写 `JSON.parse(text) as StudyTask[]`；
- 忘记 `typeof null === "object"`；
- 只检查 `Array.isArray`；
- 用 `status: string` 接受任意拼写。

## 拓展思考（不要求写代码）

如果新增 `{ status: "paused"; reason: string }`，模型、运行时验证器和 `describeState` 分别会在哪些位置提醒你补充逻辑？

## 官方资料

- [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Type Declarations](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html)
