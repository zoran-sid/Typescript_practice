# DAY30 · Practice 02：旧模块声明适配

[返回当天课程](../README.md)

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 代码流程图

```mermaid
flowchart TD
  A["从旧 JS 导入真实函数与版本"] --> B
  B["d.ts 提供类型"] --> C
  C["声明合并扩展模型"] --> D
  D["现代状态单独建模"] --> E
  E["输出运行结果"]
```

## 必须练到的能力

让 .d.ts 诚实描述旧 JavaScript 的真实导出与返回值。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
Legacy total: 60
Legacy version: 1.0
Merged: Declarations/40
Modern status: published
```

## 文件

在本目录的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 代码骨架与 `SOLUTION.md` 的解题结构；两者都不提供完整答案。
