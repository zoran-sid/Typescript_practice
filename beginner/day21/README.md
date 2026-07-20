# Day 21：Promise、async/await 与异步错误

预计用时：60–90 分钟。

网络请求、定时器和文件读取不会立刻给出结果。JavaScript 用 `Promise` 表示“未来会成功或失败的结果”，`async/await` 让异步步骤更接近从上到下的阅读顺序。

## 核心讲解

`Promise<string>` 是“未来的字符串”，不是字符串本身。`await getName()` 才取得成功值；如果 Promise 失败，`await` 会像同步 `throw` 一样进入 `catch`。`async` 函数总是返回 Promise，因此其返回类型常写成 `Promise<T>`。

互不依赖的任务可以一起创建，再统一等待：

~~~ts
const [lesson, progress] = await Promise.all([
  loadLesson(),
  loadProgress(),
]);
~~~

不要写无人等待的 `forEach(async () => ...)`。`forEach` 不会收集回调返回的 Promise；应使用 `map` 产生 Promise 数组，再交给 `Promise.all`。

调用异步函数后必须明确 `await`、`return` 或保存并统一等待。捕获异步错误时，错误值仍是 `unknown`，先用 `instanceof Error` 收窄。不要在 `catch` 中返回看似成功的假数据，除非产品明确要求且结果能标记为备用数据。

## 阅读示例

打开并右键运行 `example.ts`。画出 `Promise.all` 的成功路径和通知请求的失败路径，并指出每个 `await` 后变量的类型。

## 独立练习（从空文件开始）

请从头编写“并行课程加载器”。

必须创建：

- `LessonRequest`：`title: string`，可选 `shouldFail?: boolean`。
- `fetchLesson(request: LessonRequest): Promise<string>`：
  - 先 `await Promise.resolve()` 模拟异步边界。
  - `shouldFail` 为真时抛出 `Error("网络不可用")`。
  - 否则返回课程标题。
- `loadLessons(titles: readonly string[]): Promise<string[]>`：
  - 使用 `map` 为每个标题创建 Promise。
  - 使用 `Promise.all` 一起等待并返回结果。
- `errorMessage(error: unknown): string`：安全读取错误文字。
- `main(): Promise<void>`：加载固定标题 `变量、函数、联合`，然后单独请求一个会失败的“通知”。

精确输出：

~~~text
完成数量：3
课程：变量、函数、联合
失败：网络不可用
~~~

限制：

- 不得使用 `any`、类型断言、非空断言或 `forEach(async ...)`。
- 三个正常请求必须先通过 `map` 创建，再统一交给 `Promise.all`。
- `main` 必须 `await loadLessons`，不能把 Promise 当作字符串数组。
- 失败请求必须被 `try/catch` 等待并处理，不得留下未处理的 rejected Promise。
- `catch` 值保持 `unknown`，不得把失败伪装成成功课程。
- 文件末尾必须等待 `main()` 完成。

完成标准：右键运行后显示 PASS；能解释 `Promise<T>` 与 `T`、并行与串行、`map + Promise.all` 与异步 `forEach` 的区别。

## 容易出错的地方

- 把 `Promise<string>` 直接当成 `string`。
- 互不依赖的请求仍逐个等待，造成不必要串行。
- 认为 `forEach` 会等待 async 回调。
- 调用 async 函数却既不等待也不返回。
- 捕获后返回假数据，把失败伪装成成功。
- 忘记 `await` 也会把拒绝重新抛出。

## 拓展思考（不要求写代码）

如果第二个请求必须使用第一个请求返回的课程 id，它们还能放进同一个 `Promise.all` 吗？请画出依赖顺序，并指出哪些请求仍可能并行。

## 官方资料

- [MDN：async function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN：Promise.all](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
