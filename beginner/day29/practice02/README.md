# DAY29 · Practice 02：界面类型派生

[返回当天课程](../README.md)

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 代码流程图

```mermaid
flowchart TD
  A["从来源类型派生布尔标记"] --> B
  B["模板字面量生成处理器名"] --> C
  C["条件类型取得成员"] --> D
  D["创建合法值并输出"]
```

## 必须练到的能力

从现有类型派生映射、条件或模板字面量类型，避免重复手写。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
Flags: true/false
Topic: modules
Handler: onReady
Title: Advanced types
```

## 文件

在本目录的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 代码骨架与 `SOLUTION.md` 的解题结构；两者都不提供完整答案。
