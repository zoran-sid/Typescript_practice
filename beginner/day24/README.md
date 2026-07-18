# Day 24：结课项目（一）——模型与外部数据边界

这一阶段开始把前面的知识组合起来。今天先为“学习任务与进度报告器”建立可靠的数据模型，并把读取到的 JSON 当作 `unknown` 验证，而不是用 `as` 假装它正确。

## 今天能做到什么

- 用判别联合表达待开始、进行中、已完成三种状态。
- 区分 TypeScript 的编译期类型与运行时数据。
- 从 `unknown` 开始逐层验证对象、数组和字段。
- 对无效数据返回可解释的结果，而不是让程序突然崩溃。

## 60–90 分钟安排

1. 10 分钟：不看答案，口述 `unknown` 与 `any` 的区别，并复习 `typeof null` 的陷阱。
2. 15 分钟：运行 `example.ts`，跟着数据从 JSON 文本走到安全对象。
3. 15 分钟：练习 01，建立不会产生矛盾状态的任务模型。
4. 20 分钟：练习 02，补齐运行时验证。
5. 20 分钟：练习 03，处理一批好坏混合的数据。
6. 5–10 分钟：写下“为什么 `JSON.parse(text) as Task` 不安全”。

## 核心心智模型

```text
JSON 文本 → JSON.parse → unknown → 逐层检查 → Task
                                  ↘ 失败原因
```

`type` 和 `interface` 会在编译后消失。网络、文件、表单和本地存储中的数据不会因为你写了类型就自动变正确。因此，外部输入进入程序的第一站应该是 `unknown`。

状态不要建模成一堆互不约束的可选属性：

```ts
// 容易出现 completedAt 存在但 status 仍是 todo 的矛盾数据
type WeakTask = { status: string; startedAt?: string; completedAt?: string };

type TaskState =
  | { status: "todo" }
  | { status: "doing"; startedAt: string }
  | { status: "done"; startedAt: string; completedAt: string };
```

## 练习

| 编号 | 内容 | 重点 |
| --- | --- | --- |
| 01 | 给三种状态生成文字摘要 | 判别联合与完整分支 |
| 02 | 验证一条外部任务数据 | `unknown`、对象与字段检查 |
| 03 | 导入一批混合数据 | 复用验证器、保留失败信息 |

```powershell
npm run beginner:example -- day24
npm run beginner -- day24 01
npm run beginner -- day24 02
npm run beginner -- day24 03
npm run beginner -- day24 all
```

练习卡住时先看终端提示，再看 `SOLUTION.md`；最后才运行参考答案：

```powershell
npm run beginner:solution -- day24 02
```

## 常见错误

- `JSON.parse(text) as Task` 只让编译器安静，不会检查运行时字段。
- `typeof value === "object"` 还不够，因为 `null` 也是 `object`。
- 验证数组时只检查了 `Array.isArray`，却忘了验证每个元素。
- 用 `status: string`，导致拼错的状态也能进入模型。
- 验证失败后继续把原值当成任务使用。

## 完成标准

- 三题全部通过，且没有使用 `any`、非空断言 `!` 或未经验证的类型断言。
- 能解释为什么判别联合比“一堆可选字段”更难产生矛盾状态。
- 能独立写出 `value !== null && typeof value === "object"`。

## 官方资料

- [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [Everyday Types：联合与类型断言](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [TypeScript 类型声明只负责静态检查](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html)
