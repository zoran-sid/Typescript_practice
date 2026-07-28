# DAY18 · Practice 02：学习时段类

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day18/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day18/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

## 场景背景

学习小组想记录不同主题的学习时段。每条记录包含主题和分钟数，各实例之间必须保持独立。程序先分别展示两个实例的摘要，再把 `types` 这一个实例交给面板；面板只负责给它的摘要加上统一前缀，不计算多个实例的总分钟数。

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
new StudyCounter("Types") ──> types
   ├── add(30) ──> types.minutes: 0 → 30
   ├── add(15) ──> types.minutes: 30 → 45
   ├── summary() ──> "Types: 45 minutes" ──> 输出
   └── Dashboard(types) ──> render()
                                └── types.summary() ──> "Dashboard | Types: 45 minutes" ──> 输出

new StudyCounter("Modules") ──> modules
   ├── add(20) ──> modules.minutes: 0 → 20
   └── summary() ──> "Modules: 20 minutes" ──> 输出
```

## 必须练到的能力

用 class、constructor、字段和方法组织实例状态。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
Types: 45 minutes
Modules: 20 minutes
Dashboard | Types: 45 minutes
```

## 文件

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 解题结构。
