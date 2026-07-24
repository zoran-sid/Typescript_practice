# DAY28 · Practice 02：高级函数调用器

[返回当天课程](../README.md)

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 代码流程图

```mermaid
flowchart TD
  A["元组保存名称与分钟"] --> B
  B["通用调用器转发参数"] --> C
  C["重载规范化输入"] --> D
  D["call 提供显式 this"] --> E
  E["输出四种结果"]
```

## 必须练到的能力

使用元组、重载、显式 this 或可变参数保持函数关系。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
Functions: 45m
42
types, modules
[TS] typed this
```

## 文件

在本目录的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 代码骨架与 `SOLUTION.md` 的解题结构；两者都不提供完整答案。
