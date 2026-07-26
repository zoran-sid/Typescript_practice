# DAY04 · Practice 02：电影院票价判断

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day04/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day04/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

## 场景背景

电影院自助购票机收到文本形式的年龄 `"20"`，并知道顾客持有学生证。影院会依据年龄和身份从多档票价中选择一档，同时还要判断该顾客能否独自入场。目标是输出转换后的年龄、最终票价和入场资格，供检票员核对。

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
ageText ──> Number(...) ──> age
                              ├── if / else if ──> ticketPrice
                              └── 年龄条件 ──┐
hasStudentCard ──────────────────────────────┴──> canEnterAlone

age + ticketPrice + canEnterAlone ──> 输出
```

## 必须练到的能力

使用比较、布尔运算和互斥的 if / else if / else。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
年龄: 20
票价: 30
允许独自入场: true
```

## 文件

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 解题结构与 `SOLUTION.md` 的结构提示，它们不提供完整答案。
