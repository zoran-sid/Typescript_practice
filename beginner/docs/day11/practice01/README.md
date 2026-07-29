# DAY11 · Practice 01：判别联合、switch 与完整分支

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day11/practice01/practice.ts)
- 结构提示代码：[solution.ts](../../../day11/practice01/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

## 场景背景

你正在为学习任务看板开发状态说明功能。系统会传入处于等待、学习中、已完成或失败状态的任务，其中不同状态携带的详情并不相同。你需要把每项任务转换成适合展示给学习者的文字，并确保以后增加新状态时不会悄悄漏掉处理分支。

这是一道完整、独立的主练习。不要导入其他 practice 文件夹中的代码。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
tasks: StudyTask[]
│
└── for...of ──> 当前 task
                  │
                  └── describeTask(task)
                      │
                      └── switch(task.status)
                          ├── waiting
                          │   └── 读取 title ──> return 待开始文字
                          ├── studying
                          │   └── 读取 title、minutes ──> return 学习中文字
                          ├── completed
                          │   └── 读取 title、score
                          │       └── score 有值吗？
                          │           ├── 有 ──> 使用数字分数
                          │           └── 没有 ──> 使用“待评分”
                          │               └── return 已完成文字
                          └── failed
                              └── 读取 title、reason ──> return 失败文字

函数返回的字符串 ──> console.log 输出本条任务
                       └── 回到 for...of 处理下一项
```

## 要完成的功能

请在 `practice.ts` 中从第一行开始编写“学习任务状态说明器”。程序要把每个任务对象交给 `describeTask`，让函数根据状态返回一段文字；外层循环只负责输出这段文字。

先声明固定类型 `StudyTask`，它必须包含以下四种联合成员：

- `{ status: "waiting"; title: string }`
- `{ status: "studying"; title: string; minutes: number }`
- `{ status: "completed"; title: string; score?: number }`
- `{ status: "failed"; title: string; reason: string }`

然后实现两个函数：

- `assertNever(value: never): never`：发现漏写的新状态时抛出错误。
- `describeTask(task: StudyTask): string`：用 `switch` 检查 `task.status`，每个分支返回对应文字。

最后创建名为 `tasks` 的数组并用 `for...of` 逐项调用 `describeTask`。虽然只有四种 `status`，`completed` 必须分别测试“有分数”和“无分数”，所以固定输入一共有五项：

~~~text
waiting / 联合类型
studying / 函数 / 45
completed / 对象 / 92
completed / 复习 / 不提供 score
failed / 提交 / 网络中断
~~~

> **先看清输出标点：** `describeTask(task: StudyTask)` 里的 `()` 和 `:` 是 TypeScript 语法，必须使用英文半角符号。下面输出中的 `：`、`（ ）` 是展示给读者的中文标点。运行器不会因这些显示标点的全半角差异判你失败，但其他文字、数字和顺序仍要一致。

程序必须精确输出：

~~~text
待开始：联合类型
学习中：函数（45 分钟）
已完成：对象（92 分）
已完成：复习（待评分）
失败：提交（网络中断）
~~~

限制：

- 不得把成员专属字段全部改成可选属性。
- 不得使用 `any`、类型断言或非空断言。
- `completed` 分支必须正确处理缺失分数；可以使用 `score ?? "待评分"`，也可以写清楚的条件判断。
- `default` 必须把 `task` 交给 `assertNever`。

完成标准：右键运行 `practice.ts` 后显示 PASS；新增一个 `paused` 成员时，能看到穷尽检查提示缺失分支。

## 本题易漏语法

case "name": 结尾是冒号；用 return 或 break 结束分支，分支里的语句仍用分号。

## 写完后自检

- 如果给 `StudyTask` 新增 `paused` 状态但不加 `case`，你预计哪一行先出现类型错误？为什么错误会出现在那里？
- 把已完成任务的 `score` 改成 `0`，输出应该把它当成分数还是“待评分”？如果把这段改写成 `score ?? "待评分"`，为什么不应使用 `||`？
- 如果把四种成员合并成一个“所有字段都可选”的对象，哪些非法组合会被放进数组？判别联合解决了什么问题？

## 文件

- 在 `practice.ts` 中独立作答。
- 完成并运行通过后，再查看 `solution.ts` 的 TODO 解题结构与 `SOLUTION.md` 的结构提示。
