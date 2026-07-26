# DAY18 · Practice 02：学习时段类

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day18/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day18/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

## 场景背景

学习小组想用一个简单面板记录不同主题的学习时段。每条输入包含主题和分钟数，各记录之间必须保持独立。程序需要展示单个学习时段，并让汇总面板通过这些实例生成统一的摘要。

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
new StudyCounter(topic) ──> types / modules
   └── addMinutes ──> 当前实例 minutes
types ───────────────┐
modules ─────────────┴──> Dashboard ──> totalMinutes / summary
单项摘要 + 总分钟 ──> 输出
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
