# DAY26 · Practice 02：异步任务面板

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day26/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day26/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 场景背景

课程运营希望在管理页展示异步加载的任务摘要，数据仓库返回的响应在验证前不能被当作任务数组使用。若页面过早进入成功状态或直接读取未知字段，任务数、完成数和分钟数都可能不可信。你需要先展示加载状态，再把合法响应转换为成功状态并输出三项统计。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
loading 状态 ──> render ──> 首次输出
MemoryTaskRepository
   └── loadDashboard ──> await repository.load()
                              └── unknown 验证 ──> finalState
                                                   ├── success(tasks)
                                                   └── failure(message)
finalState ──> render ──> 数量、完成数、分钟输出
```

## 必须练到的能力

把异步加载、unknown 验证、状态渲染和回归测试组合起来。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
State: loading
State: success
Tasks: 2
Done: 1
Minutes: 75
```

## 文件

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 代码骨架与 `SOLUTION.md` 的解题结构；两者都不提供完整答案。
