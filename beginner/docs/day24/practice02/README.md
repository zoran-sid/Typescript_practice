# DAY24 · Practice 02：任务导入边界

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day24/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day24/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 场景背景

学习平台正在把旧存储中的任务迁移到新面板，导入层收到的是类型未知的外部数组，数组项可能缺字段或带有不合法状态。若无效项混入业务模型，首项状态展示和总分钟数都会失真。你需要只接纳通过逐字段验证的任务，并交付成功数量、第一项描述和可信的计划时长。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
text ──> importTasks ──> parsed: unknown
                         └── every(isStudyTask)
                                ├── isRecord
                                └── isTaskState
全部合法 ──> result.tasks ──> describeState + minutes 合计
任一非法/坏 JSON ──> result.message
```

## 必须练到的能力

建立模型、unknown 边界、类型守卫和判别联合。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
Import succeeded: 2 tasks
First: Validate data (doing since 09:00)
Total planned minutes: 105
```

## 文件

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 代码骨架与 `SOLUTION.md` 的解题结构；两者都不提供完整答案。
