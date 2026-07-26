# DAY21 · Practice 01：Promise、async/await 与异步错误

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day21/practice01/practice.ts)
- 结构提示代码：[solution.ts](../../../day21/practice01/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

## 场景背景

你在实现课程首页的初始化流程，页面打开后要同时加载多个课程标题，以减少等待时间。课程列表加载完成后，程序还会单独请求通知服务，而该请求可能失败。你需要交付成功加载的数量和课程列表，并把异步失败转成用户能理解的提示。

这是一道完整、独立的主练习。不要导入其他 practice 文件夹中的代码。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
titles
   └── map ──> fetchLesson(title) 产生的 Promise[]
                    └── Promise.all ──> loadLessons 的 string[]
失败 request ──> Promise rejected ──> catch unknown
                                           └── errorMessage
成功数组或错误文字 ──> main 输出
```

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

## 本题易漏语法

async 函数返回 Promise<T>；调用先得到 Promise，await 后的变量才是 T。

## 文件

- 在 `practice.ts` 中独立作答。
- 完成并运行通过后，再查看 `solution.ts` 的 TODO 解题结构与 `SOLUTION.md` 的结构提示。
