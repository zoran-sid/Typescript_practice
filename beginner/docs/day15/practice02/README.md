# DAY15 · Practice 02：泛型首项读取

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day15/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day15/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

## 场景背景

课程首页需要读取报名名单中的第一位学习者和成绩列表中的第一个分数，同时还要保存一条带标签的课程信息。两种数组的数据类型不同，但读取规则相同。你需要交付仍保持各自具体类型的首项结果，以及可供界面展示的标签和值。

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
names: string[] ──> firstOrUndefined<string> ──> firstName
scores: number[] ──> firstOrUndefined<number> ──> firstScore
value + label ──> labelValue<T> ──> LabeledValue<T>

firstName + firstScore + course ──> 输出
```

## 必须练到的能力

使用泛型连接输入与输出，不使用 any。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
第一位：Ada
第一个分数：80
标签：课程=TypeScript
```

## 文件

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 解题结构。
