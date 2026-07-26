# DAY21 · Practice 02：并行内容加载

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day21/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day21/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

## 场景背景

学习主页启动时需要同时获取课程信息和学习进度，再把两项结果组合起来展示。页面还要演示后端网络异常时的处理，不能留下未处理的失败任务。你需要输出并行请求的成功结果，并为失败请求提供清晰的错误信息。

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
课程名 ──> fetchText ──> Promise ──┐
进度名 ──> fetchText ──> Promise ──┴──> Promise.all ──> 两个成功值
失败请求 ──> rejected Promise ──> catch unknown ──> 错误文字

成功组合结果 + 错误结果 ──> main 输出
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

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 解题结构。
