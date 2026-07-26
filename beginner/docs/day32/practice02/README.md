# DAY32 · Practice 02：计算器方法日志

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day32/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day32/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 场景背景

内部计算器准备接入统一的可观测日志，团队希望记录类的用途和每次方法调用，但不能改变原有加法行为。输入边界是被包装的方法、实例上下文和参数元组；若装饰器返回的函数没有完整转发它们，结果或类型都会被破坏。你需要交付类定义日志、类别标签、方法调用日志和原样返回的计算结果。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
Calculator.add + context ──> loggedMethod
   └── 包装器记录调用 ──> target.call(this, ...args) ──> 原结果
Calculator 类 ──> announceClass ──> 定义日志
new Calculator ──> withCategory ──> calculator + category
定义日志 + 调用日志 + 结果 ──> 输出
```

## 必须练到的能力

标准装饰器包装方法时保留 this、参数元组与返回类型。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
定义类: Calculator
类别: utility
调用方法: add
结果: 5
```

## 文件

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 代码骨架与 `SOLUTION.md` 的解题结构；两者都不提供完整答案。
