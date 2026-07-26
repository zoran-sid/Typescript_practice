# DAY12 · Practice 02：学习记录格式器

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day12/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day12/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

## 场景背景

你在制作个人学习日志的命令行摘要。当天记录包含多段学习时长和若干学习主题，标题与输出方式需要能灵活配置。程序最终要列出每段时长，并把当天涉及的主题整理成一行摘要。

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
minutes ──> formatMinutes ──> 格式文字
reportLines ──> printReport
                  └── 每一行 ──> void 回调 ──> 输出
topics ──> joinTopics(...topics) ──> 主题文字

三个结果 ──> 输出
```

## 必须练到的能力

使用函数类型、箭头函数、默认/可选/rest 参数与回调。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
学习记录
第 1 项：30 分钟
第 2 项：45 分钟
主题：函数 / 回调 / void
```

## 文件

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 解题结构。
