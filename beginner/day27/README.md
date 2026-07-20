# Day 27（选修）｜浏览器、请求与命令行边界

TypeScript 总在某个运行环境中执行。浏览器提供 DOM、事件和 `fetch`，Node.js 提供命令行与文件系统。类型声明描述环境 API，却不会创造运行时能力；外部输入仍要验证。

建议用时：60–90 分钟。

## 今天会学到

- 用结构类型表达输入事件，并处理空目标；
- 把客户端响应保留为 `Promise<unknown>`；
- 把命令行参数解析成可测试的纯函数；
- 区分环境声明、运行时 API 与外部数据验证。

## 核心讲解

真实浏览器事件可用 `HTMLInputElement` 和 `event.currentTarget`，但课程在 Node 中运行，不能直接执行 `document`。独立练习用最小结构模拟事件，把可测试业务逻辑与真实 DOM 绑定分开。

请求客户端即使写成 TypeScript，也无法保证服务器响应。先 `await` 得到 `unknown`，再验证对象与字段。命令行解析也不要在业务函数内部读取全局 `process.argv`；让 `parseArgs(args)` 接收普通字符串数组，更容易测试。

## 独立练习（从空文件开始）

从零完成一个“课程搜索入口”，同时处理事件、请求和 CLI 参数。

必须名称：`InputEventLike`、`readQuery`、`JsonClient`、`Lesson`、`isRecord`、`loadLesson`、`Options`、`valueAfter`、`parseArgs`。

需求：

1. `readQuery` 读取可为空的 `currentTarget.value`，去掉两端空格；缺失时返回空字符串。
2. `JsonClient.get(path)` 返回 `Promise<unknown>`；`loadLesson` 请求 `/lesson`，只接受字符串 title 和有限数字 minutes，无效时返回 `null`。
3. `parseArgs` 读取 `--day` 与 `--mode` 后一项；day 必须是非负整数，否则默认 0；mode 只有 `example` 时取 example，否则为 practice。
4. 使用与 README 对应的两个假客户端及两组参数输出结果，不依赖真实 DOM、网络或 `process`。

精确输出：

```text
Query: typescript
Missing: empty
Valid: DOM/35
Invalid: rejected
Day: 27
Mode: example
Defaults: 0/practice
```

固定输入：事件值为 `"  typescript  "` 和 null；好响应 `{ title: "DOM", minutes: 35 }`，坏响应的 minutes 为字符串；参数为 `["--day", "27", "--mode", "example"]` 和 `[]`。

限制：不使用 `any`、类型断言、非空断言；不访问真实 `document`、网络或 `process.argv`。

完成标准：右击运行 `practice.ts` 后输出完全一致；三个边界逻辑都是可独立测试的普通函数。

## 常见错误

- 在 Node 中直接执行 `document.querySelector`；
- 把响应断言成 Lesson 而没有验证；
- 忘记标志后的数组项可能不存在；
- 把全局环境藏进业务函数。

## 拓展思考（不要求写代码）

真实网页中应把哪一小段代码留在最外层，负责把 `HTMLInputElement`、`fetch` 和这里的纯函数连接起来？这样拆分对测试有什么帮助？

## 官方资料

- [DOM Manipulation](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html)
- [Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)
- [Type Declarations](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html)
