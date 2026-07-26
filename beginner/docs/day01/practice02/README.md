# DAY01 · Practice 02：学习进度卡

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day01/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day01/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

## 场景背景

你在为在线课程制作两张简短的学习进度卡，使用者分别是 Ada 和 Zoran。系统已经保存了他们的姓名、当前完成课数和初学者状态，完成新课程后还要更新课数。目标是按统一格式生成两条摘要，方便助教快速核对学习进度。

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
learnerName ───────┐
completedLessons ──┼──> firstSummary ──> 第一次输出
isBeginner ────────┘

studentName ───────┐
completedLesson ───┼──> secondSummary ──> 第二次输出
isBeginner2 ───────┘
```

## 必须练到的能力

使用 const、let、string、number、boolean 和模板字符串。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
Ada completed 1 lesson. Beginner: true
Zoran completed 2 and Lesson Beginner is: true
```

## 文件

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 解题结构与 `SOLUTION.md` 的结构提示，它们不提供完整答案。
