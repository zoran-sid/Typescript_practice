# DAY27 · Practice 02：搜索与命令行边界

[返回当天课程](../README.md)

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 代码流程图

```mermaid
flowchart TD
  A["模拟浏览器输入事件"] --> B
  B["请求适配器读取 unknown 响应"] --> C
  C["CLI 参数解析 day"] --> D
  D["三个边界结果分别输出"]
```

## 必须练到的能力

把浏览器、请求或 CLI 边界转成可测试的普通参数。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
Browser handler: typed
Fetched title: Runtime boundaries
CLI day: 27
```

## 文件

在本目录的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 代码骨架与 `SOLUTION.md` 的解题结构；两者都不提供完整答案。
