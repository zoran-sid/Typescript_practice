# DAY05 · Practice 02：书桌面积函数

[返回当天课程](../README.md)

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 代码流程图

```mermaid
flowchart TD
  A["宽和高进入 calculateArea"] --> B
  B["相乘并 return 面积"] --> C
  C["createLabel 生成文字"] --> D
  D["console.log 输出标签"]
```

## 必须练到的能力

声明参数类型与返回类型，用 return 交付计算结果。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
书桌面积: 120
```

## 文件

在本目录的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 解题结构与 `SOLUTION.md` 的结构提示，它们不提供完整答案。
