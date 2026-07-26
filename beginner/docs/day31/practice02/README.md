# DAY31 · Practice 02：数字序列生成器

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day31/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day31/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 场景背景

报表调度器需要按需遍历页码范围和任务倒计时，同时处理已经超过安全整数上限的流水号。序列的起止值和大整数都是明确输入；若一次性展开无限增长的数据或用普通数字计算流水号，系统会浪费资源并产生重复编号。你需要输出两组按调用推进的序列，以及保持精度的大整数运算结果。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
范围参数 ──> range generator ──> yield 数字序列
起始数字 ──> createCountdown ──> 倒计时序列
largeInteger + 1n ──> nextSafeInteger
三类惰性/大整数结果 ──> 输出
```

## 必须练到的能力

实现 Iterable、Iterator 或 generator，并区分 yield 与 return。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
范围: 2, 3, 4
倒计时: 3, 2, 1
安全整数之后: 9007199254740994
```

## 文件

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 代码骨架与 `SOLUTION.md` 的解题结构；两者都不提供完整答案。
