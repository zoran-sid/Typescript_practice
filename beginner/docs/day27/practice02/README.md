# DAY27 · Practice 02：搜索与命令行边界

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day27/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day27/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 场景背景

课程工具要在网页搜索框和命令行脚本中复用，同时还要接收服务端返回的课程标题。边界分别来自浏览器事件、类型未知的请求响应和字符串参数；任何一处读取错误都可能让工具只能在单一环境运行。你需要把浏览器专属的事件绑定留在适配层，把去空格逻辑拆成 Node 也能直接测试的普通函数，再输出规范化输入、验证后的标题和解析出的课程天数。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
浏览器 input 事件 ──> bindSearch ──> normalizeQuery ──> SearchCallback
固定字符串 "  typed  " ─────────────> normalizeQuery ──> query
fakeClient.get ──> Promise<unknown> ──> 字段验证 ──> 标题/invalid
CLI args ──> parseDay
                ├── 找到合法 day ──> number
                └── 缺失/非法 ──> undefined
三条边界结果 ──> 输出
```

## 必须练到的能力

把浏览器、请求或 CLI 边界转成可测试的普通参数；普通 Node 进程不伪造 DOM 事件。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。
- `bindSearch` 只负责浏览器接线；固定输入 `"  typed  "` 直接交给 `normalizeQuery`，结果必须来自 `trim()`。

## 精确期望输出

```text
Normalized query: typed
Fetched title: Runtime boundaries
CLI day: 27
```

## 文件

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 代码骨架与 `SOLUTION.md` 的解题结构；两者都不提供完整答案。
