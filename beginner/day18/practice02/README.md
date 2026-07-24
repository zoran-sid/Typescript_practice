# DAY18 · Practice 02：学习时段类

[返回当天课程](../README.md)

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 代码流程图

```mermaid
flowchart TD
  A["new 创建学习 Session"] --> B
  B["方法读取 minutes 与 topic"] --> C
  C["Dashboard 接收多个实例"] --> D
  D["输出单项和汇总"]
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

在本目录的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 解题结构。
