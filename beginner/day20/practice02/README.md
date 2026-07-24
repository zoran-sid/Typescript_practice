# DAY20 · Practice 02：课程 JSON 验证

[返回当天课程](../README.md)

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 代码流程图

```mermaid
flowchart TD
  A["准备合法与非法 JSON"] --> B
  B["JSON.parse 得到 unknown"] --> C
  C["类型守卫验证课程字段"] --> D
  D["合法输出课程，非法输出提示"]
```

## 必须练到的能力

JSON.parse 的结果先当 unknown，再逐层验证运行时形状。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
课程: TypeScript / 90 分
课程数据无效
```

## 文件

在本目录的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 解题结构。
