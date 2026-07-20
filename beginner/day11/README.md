# Day 11：判别联合、switch 与完整分支

预计用时：75–90 分钟。

今天把“一个值可能处于几种状态”写成 TypeScript 能检查的模型。重点不是背诵 `switch`，而是为每种状态保存恰当的数据，并让遗漏分支尽早变成类型错误。

## 核心讲解

判别联合的每个成员都有同名的字面量字段：

~~~ts
type LoadState =
  | { status: "idle" }
  | { status: "success"; items: string[] }
  | { status: "error"; message: string };
~~~

检查 `state.status` 后，TypeScript 会把值收窄到对应成员。因此，只有 `success` 分支能读取 `items`，只有 `error` 分支能读取 `message`。不要把所有字段都改成可选属性；那会允许“成功却没有数据”之类的不合理组合。

`switch` 很适合逐个处理成员。可以在 `default` 中调用穷尽检查函数：

~~~ts
function assertNever(value: never): never {
  throw new Error("未处理的状态：" + JSON.stringify(value));
}
~~~

当联合增加新成员但分支没有同步更新时，传给 `assertNever` 的值不再是 `never`，检查器就会提醒你。成员内部的可选字段仍需单独处理，例如使用 `??` 为缺失分数提供说明。

## 阅读示例

打开 `example.ts`，按项目根目录 README 介绍的右键方式运行。阅读每个 `case`，指出该分支里的 `state` 具体是哪一种类型。

## 独立练习（从空文件开始）

请在 `practice.ts` 中从第一行开始编写“学习任务状态说明器”。

固定类型 `StudyTask` 必须包含以下五种成员：

- `{ status: "waiting"; title: string }`
- `{ status: "studying"; title: string; minutes: number }`
- `{ status: "completed"; title: string; score?: number }`
- `{ status: "failed"; title: string; reason: string }`

虽然上面只有四种 `status`，`completed` 必须分别测试“有分数”和“无分数”，因此固定输入一共有五项。请实现 `assertNever(value: never): never` 和 `describeTask(task: StudyTask): string`，使用 `switch` 完成收窄，并创建名为 `tasks` 的数组：

~~~text
waiting / 联合类型
studying / 函数 / 45
completed / 对象 / 92
completed / 复习 / 不提供 score
failed / 提交 / 网络中断
~~~

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
- `completed` 分支必须用空值合并处理缺失分数。
- `default` 必须把 `task` 交给 `assertNever`。

完成标准：右键运行 `practice.ts` 后显示 PASS；新增一个 `paused` 成员时，能看到穷尽检查提示缺失分支。

## 容易出错的地方

- 在收窄前读取 `score` 或 `reason`。
- 用一个宽泛对象加许多可选属性代替判别联合。
- `default` 直接返回“未知”，让新状态悄悄漏掉。
- 忘记 `case` 中的 `return`。
- 用非空断言掩盖可选的 `score`。

## 拓展思考（不要求写代码）

如果以后加入 `{ status: "paused"; title: string; reason: string }`，哪些位置应该发生类型错误？为什么这些错误是在帮助你，而不是阻碍你？

## 官方资料

- [Narrowing：Discriminated unions](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions)
- [Narrowing：The never type](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type)
