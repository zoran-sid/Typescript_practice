# DAY25 · Practice 02：任务更新与统计

[返回当天课程](../README.md)

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 代码流程图

```mermaid
flowchart TD
  A["模块提供任务更新函数"] --> B
  B["返回新任务数组"] --> C
  C["报告函数统计状态与分钟"] --> D
  D["比较原数组与新数组并输出"]
```

## 必须练到的能力

业务函数使用参数与返回值，执行不可变更新、筛选、排序和统计。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
Original first status: todo
Updated first status: done
Done: 2
Todo: 0
Total minutes: 105
```

## 文件

在本目录的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 代码骨架与 `SOLUTION.md` 的解题结构；两者都不提供完整答案。
