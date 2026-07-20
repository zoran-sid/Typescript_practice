# Day 25｜结课项目（二）：业务逻辑、不可变更新与模块

昨天把外部数据变成了可信任务，今天从空文件实现更新、筛选、排序和统计。示例继续展示多模块组织；独立练习只写一个入口文件，让注意力集中在数据关系和不可变更新上。

建议用时：60–90 分钟。

## 今天会学到

- 用 `map` 和对象展开替换一个任务，不修改旧数据；
- 区分新数组、新对象与复用的旧引用；
- 避免 `sort` 原地修改调用者数组；
- 用 `Record` 保证每种状态都有统计位置；
- 用受约束泛型保留实体的具体类型。

## 核心讲解

`map` 创建新数组，命中项用对象展开创建新对象；未命中项没有变化，可以安全复用旧引用。对象展开是浅复制，嵌套可变对象仍共享引用。

`sort` 会原地修改数组，应先 `filter` 或复制再排序。`Record<TaskStatus, number>` 比任意字符串键严格：新增状态时会提醒补齐统计初值。

`T extends { readonly id: string }` 表示函数接受任意带 id 的实体，并让输入、更新回调和返回数组保持同一种 `T`。

## 独立练习（从空文件开始）

在 `practice.ts` 中从零完成“任务业务服务与报告”。

必须名称：`TaskStatus`、`StudyTask`、`Report`、`updateById`、`completeTask`、`plannedByDuration`、`buildReport`、`original`、`updated`。

固定任务：a / Types / 30 / todo；b / Modules / 45 / doing；c / Validation / 20 / todo；d / Variables / 50 / todo。

需求：

1. `updateById<T extends { readonly id: string }>` 用 `map` 只更新命中项。
2. `completeTask` 复用它，把 id 为 a 的状态改为 done。
3. `plannedByDuration` 只保留 todo，按分钟升序排列，不能改动传入数组。
4. `buildReport` 返回 `Record<TaskStatus, number>` 的 counts 和总分钟数。
5. 输出原始/更新状态、引用比较、计划顺序和更新后报告。

精确输出：

```text
Original first: todo
Updated first: done
Same array: false
Same untouched task: true
Planned: Validation, Variables
Counts: todo=2, doing=1, done=1
Minutes: 145
```

限制：不使用 `any`、非空断言 `!`；不得给原数组调用会修改它的方法，不得直接赋值修改任务属性。

完成标准：右击运行 `practice.ts` 后输出完全一致；能解释为何目标项是新对象、未命中项可以复用，以及 `Record` 如何防止遗漏状态。

## 常见错误

- 直接写 `task.status = "done"`；
- 对参数数组直接 `sort`；
- 误以为对象展开会深复制；
- 用任意字符串键统计状态。

## 拓展思考（不要求写代码）

如果任务新增可修改的 `details: { notes: string[] }`，更新其中一条 notes 时需要复制哪几层，才能保证旧任务完全不变？

## 官方资料

- [Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Utility Types：Record](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)
- [Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)
