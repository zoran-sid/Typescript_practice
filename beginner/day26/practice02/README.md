# DAY26 · Practice 02：异步任务面板

[返回当天课程](../README.md)

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 代码流程图

```mermaid
flowchart TD
  A["先渲染 loading"] --> B
  B["仓库异步返回 unknown"] --> C
  C["验证为任务数组"] --> D
  D["生成 success 状态"] --> E
  E["渲染数量、完成数与分钟"]
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

在本目录的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 代码骨架与 `SOLUTION.md` 的解题结构；两者都不提供完整答案。
