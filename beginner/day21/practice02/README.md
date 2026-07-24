# DAY21 · Practice 02：并行内容加载

[返回当天课程](../README.md)

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 代码流程图

```mermaid
flowchart TD
  A["启动两个异步请求"] --> B
  B["Promise.all 并行等待"] --> C
  C["成功值组合成结果"] --> D
  D["失败 Promise 进入 catch"] --> E
  E["输出成功与错误"]
```

## 必须练到的能力

使用 Promise、async/await、Promise.all，并安全处理异步错误。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
并行结果: 课程、进度
错误: 网络不可用
```

## 文件

在本目录的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 解题结构。
