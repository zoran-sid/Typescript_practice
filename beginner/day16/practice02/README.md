# DAY16 · Practice 02：安全读取配置字段

[返回当天课程](../README.md)

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 代码流程图

```mermaid
flowchart TD
  A["带 id 的对象进入受约束函数"] --> B
  B["keyof 限制读取键"] --> C
  C["item[key] 返回 T[K]"] --> D
  D["输出课程与设置字段"]
```

## 必须练到的能力

使用泛型约束、keyof 与 T[K] 安全读取属性。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
ID=7
标题：TypeScript
课数：21
设置：theme=dark
```

## 文件

在本目录的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 解题结构。
