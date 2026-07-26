# DAY09 · Practice 02：任务卡片类型

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day09/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day09/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

## 场景背景

学习任务看板中有一张编号 T-01 的任务卡，用于跟踪“学习 type 和 interface”的完成状态。任务可能没有备注，但还带有一组只供展示的分类标签，界面代码不应修改这些标签。最终要依据同一份类型约束生成任务状态、备注和标签三行内容。

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 代码流程图

```mermaid
flowchart TD
  A["声明 Task 类型"] --> B
  B["创建任务对象"] --> C
  C["函数读取状态与可选字段"] --> D
  D["拼接标签和摘要"] --> E
  E["输出三行"]
```

## 必须练到的能力

使用 type 或 interface 描述对象，并正确处理 readonly。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
T-01 | 学习 type 和 interface | 未完成
备注: 无
标签: TypeScript, 基础
```

## 文件

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 解题结构与 `SOLUTION.md` 的结构提示，它们不提供完整答案。
