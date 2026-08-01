# Day 21：Promise、async/await 与异步错误

预计用时：60–90 分钟。

网络请求、定时器和文件读取都要等一段时间。调用这类函数时，程序先拿到一个 `Promise`：它不是最终数据，而是一份“稍后会成功给值，或者失败给错误”的结果。`async/await` 是配套写法，其中 `await` 用来等待这份结果，再决定继续正常步骤还是进入错误处理。

## 写 Example 前先认识这些写法

### `Promise.resolve(value)`：得到一个成功 Promise

`Promise` 是 JavaScript 运行环境提供的构造函数和工具对象。`Promise.resolve("课程")` 把括号里的值变成已经成功的 `Promise<string>`；`await` 后才得到字符串 `"课程"`。

不传值时得到 `Promise<void>`。它可以制造一个异步边界，但不会等待真实的几秒钟；本课示例用它避免引入网络或定时器。

```ts
const pending = Promise.resolve("课程");
console.log(await pending);
```

实际输出：

```text
课程
```

### `Promise.all(promises)`：统一等待一组任务

`Promise.all` 的括号里放可遍历的一组 Promise（最常见是数组），返回一个新的 Promise。所有输入都成功时，新 Promise 的值是结果数组，顺序与输入数组一致；任意一项失败时，新 Promise 直接失败，但不会自动取消其他已启动任务。

```ts
const first = Promise.resolve("课程");
const second = Promise.resolve("进度");
const results = await Promise.all([first, second]);
console.log(results.join("、"));
```

实际输出：

```text
课程、进度
```

同一家族里，`Promise.allSettled` 会等待所有任务结束，并为每项返回 `fulfilled` 或 `rejected` 状态。它适合“无论成功失败都要收集结果”的场景；本日必做题需要任一失败就进入错误处理，因此使用 `Promise.all`。

## 核心讲解

先分清三个时刻：

1. 调用 `getName()` 后立刻得到 `Promise<string>`，此时还没有可直接使用的姓名字符串。
2. `await getName()` 会暂停当前 `async` 函数，等待 Promise 得到结果；它不会把整个 JavaScript 程序都停住。
3. Promise 成功时，`await` 表达式得到 `string`；Promise 失败时，当前路径像遇到 `throw` 一样进入附近的 `catch`。

只要函数写了 `async`，它对外返回的就是 Promise。函数内部 `return` 一个 `T`，调用者拿到的是 `Promise<T>`；调用者再 `await` 后才得到 `T`。

两个请求如果互相不需要对方的结果，就可以同时启动，再一起等待：

~~~ts
const [lesson, progress] = await Promise.all([
  loadLesson(),
  loadProgress(),
]);
~~~

执行数组中的两个函数调用时，请求就开始了。`Promise.all` 等到两项都成功后，把两个成功值按原顺序放进结果数组，再解构到 `lesson` 和 `progress`。只要其中一项失败，`Promise.all` 返回的 Promise 就会失败；它不会自动取消其他已经开始的请求。

顺序可以这样比较：

| 写法 | 第二个请求何时开始 | 适用情况 |
| --- | --- | --- |
| 先 `await` 第一个，再调用第二个 | 第一个完成以后 | 第二个需要第一个的结果 |
| 先创建两个 Promise，再 `Promise.all` | 不等待第一个完成 | 两个请求互不依赖 |

不要写无人等待的 `forEach(async () => ...)`。`forEach` 只负责逐项调用回调，不会把回调返回的 Promise 收集起来，也不会等它们完成。用 `map` 把每次调用得到的 Promise 放进新数组，再把这个数组交给 `Promise.all`。

每次调用异步函数后，都要决定谁来等待它：当前函数立刻 `await`，把 Promise `return` 给上一层，或者先保存起来稍后统一等待。如果三种都没做，外层代码可能已经继续执行，而异步任务还没完成，失败也可能没人处理。

异步错误进入 `catch` 后，捕获值仍先看作 `unknown`，通过 `instanceof Error` 检查后再读取 `message`。不要在 `catch` 中随手返回看似成功的数据；这样调用者会把失败当成正常结果。只有产品明确允许备用数据，并且返回结果能标明“这是备用值”时，才适合这样做。

## 为什么要这样设计

网络和文件操作不能立刻得到结果；若程序一直原地阻塞，界面和其他任务也无法继续。Promise 用一个值表示“将来成功或失败的结果”，`async/await` 让等待步骤按普通代码的顺序阅读，`Promise.all` 则统一收集互不依赖的多个任务。

运行环境负责在任务完成后继续 Promise 链，TypeScript 负责区分 `Promise<T>` 和等待后的 `T`。你仍要判断任务之间是否有依赖、哪些可以并行、谁负责 `await`、失败在哪里处理，以及是否需要超时或取消。

并行不是没有代价：一次启动太多请求会造成压力；`Promise.all` 遇到一项失败就整体失败，却不会自动取消已经启动的其他任务。`async` 函数也总是返回 Promise，忘记等待或返回它，外层就可能提前继续并漏掉错误。

## 阅读示例

打开并右键运行 `example.ts`。先找出每个异步函数调用返回的 Promise，再找对应的 `await`。对每个变量分别写下“等待前的类型”和“等待后的类型”。最后沿失败请求找到它进入的 `catch`。

## 函数变量追踪

追踪一个 `async` 函数时，按调用者和函数内部两层看：

1. 调用者执行异步函数，立刻得到 `Promise<T>`。
2. 异步函数内部继续执行自己的步骤；遇到 `await` 时，当前函数等待该 Promise。
3. 内部最终 `return` 的 `T` 会成为外层 Promise 的成功值。
4. 调用者对这个 Promise 使用 `await` 后，才得到真正的 `T`。
5. 内部抛错或等待到失败 Promise 时，外层 Promise 会拒绝；调用者的 `await` 再把错误送进 `catch`。

看到变量类型时，先问它处在 `await` 前还是后：前面通常是 `Promise<T>`，后面才是 `T`。

## Example 实际输出

运行 `example.ts` 后，终端会按下面的顺序显示。先用代码推测结果，再逐行对照：

```text
并行结果: 课程、进度
错误: 网络不可用
```

## Example 代码流程图

运行 `example.ts` 前先沿图预测执行顺序；运行后再把每个节点对应到代码行。

```mermaid
flowchart TD
  A["执行 await main()，进入 main"] --> B["从左到右计算 Promise.all 的数组元素"]
  B --> C["先调用 fetchText('课程')<br/>shouldFail 使用默认值 false<br/>运行到 await 后交回课程 Promise"]
  C --> D["再调用 fetchText('进度')<br/>shouldFail 使用默认值 false<br/>运行到 await 后交回进度 Promise"]
  D --> E["调用 Promise.all<br/>一起等待两个已经创建的 Promise"]
  E --> F["课程调用从自己的 await 恢复"]
  E --> G["进度调用从自己的 await 恢复"]
  F --> H{"课程调用的 shouldFail？"}
  G --> I{"进度调用的 shouldFail？"}
  H -- "false，本例走这里" --> J["课程调用 return '课程'"]
  I -- "false，本例走这里" --> K["进度调用 return '进度'"]
  H -- "true" --> L["课程调用抛出 Error"]
  I -- "true" --> L
  L --> M["Promise.all 变为 rejected<br/>main 在此停止"]
  J --> N["Promise.all 继续等待另一个 Promise"]
  K --> N
  N --> O["两个 Promise 都完成<br/>结果数组是 ['课程', '进度']"]
  O --> P["按位置解构<br/>lesson = '课程'，progress = '进度'"]
  P --> Q["console.log 输出并行结果"]
  Q --> R["进入 try<br/>调用 fetchText('通知', true)"]
  R --> S["通知调用等待 Promise.resolve()"]
  S --> T{"shouldFail？"}
  T -- "false" --> U["return '通知'<br/>离开 try"]
  T -- "true，本例走这里" --> V["throw new Error('网络不可用')"]
  V --> W["catch 接住 error<br/>在 catch 中先把它当作 unknown"]
  W --> X{"error instanceof Error？"}
  X -- "是，本例走这里" --> Y["message = error.message<br/>也就是 '网络不可用'"]
  X -- "否" --> Z["message = '未知错误'"]
  Y --> AA["console.log 输出错误: 网络不可用"]
  Z --> AA
  U --> AB["main 完成<br/>await main() 得到 Promise<void> 的完成结果"]
  AA --> AB
```

## 官方手册扩展阅读（可选）

完成当天教程后，可从 [Day 21 对应阅读](../OFFICIAL-READING.md#day-21) 中只选 1 篇继续看。它不是练习前置，不需要在写 Practice 前读完。

## 独立练习导航

本日共有 2 道独立练习。每道题都有单独目录、说明、作答文件和完整参考答案；题目之间不共享代码。

| 目录 | 场景 | 类型 |
| --- | --- | --- |
| [practice01](./practice01/README.md) | Promise、async/await 与异步错误 | 主任务 |
| [practice02](./practice02/README.md) | 并行还是顺序：按依赖关系等待 | 闭卷迁移 |

右击任意练习目录中的 `practice.ts` 即可单独检查；命令行也可运行 `npm run beginner -- day21 practice02`。

## 容易出错的地方

- 把 `Promise<string>` 直接当成 `string`。
- 互不依赖的请求仍逐个等待，造成不必要串行。
- 认为 `forEach` 会等待 async 回调。
- 调用 async 函数却既不等待也不返回。
- 捕获后返回假数据，把失败伪装成成功。
- 忘记 `await` 也会把拒绝重新抛出。

### 错误代码示例

消息同步任务要保存两条记录，全部保存后才能把批次标为完成。开发者把同步回调改成 `async`，却继续使用原来的 `forEach`：

```ts
async function saveMessage(message: string): Promise<void> {
  await Promise.resolve();
  console.log("已保存：" + message);
}

async function saveBatch(): Promise<void> {
  ["订单", "通知"].forEach(async (message) => { // ❌ forEach 不等待 Promise。
    await saveMessage(message);
  });

  console.log("批次完成");
}

await saveBatch();
```

实际输出：

```text
批次完成
已保存：订单
已保存：通知
```

`forEach` 只调用回调，并忽略回调返回的 Promise。`saveBatch` 没有任何可等待的任务，所以先报告完成；如果某次保存拒绝，外层对 `saveBatch()` 的 `try/catch` 也接不到那条无人等待的 Promise。

### 正确写法

```ts
async function saveBatch(): Promise<void> {
  const requests = ["订单", "通知"].map(
    (message) => saveMessage(message),
  );

  await Promise.all(requests); // ✅ 统一等待收集到的 Promise。
  console.log("批次完成");
}

await saveBatch();
```

实际输出：

```text
已保存：订单
已保存：通知
批次完成
```

`map` 把每次调用返回的 Promise 收集进数组，`Promise.all` 返回一份代表整批任务的 Promise。外层等待它，就能在所有保存完成后再更新批次状态，也能在任一保存失败时进入统一错误处理。

## 面试时怎么回答

**问：`async` 函数抛错后，为什么外层有时捕获不到？**

**答：**每次调用 `async` 函数都会得到 Promise。函数内部抛错时，调用者收到的是 rejected Promise，而不是一次可以被普通同步 `try/catch` 直接抓住的抛错。

要让**当前函数里的** `catch` 处理这次失败，必须在它对应的 `try` 中 `await` 这个 Promise：

```ts
async function load(): Promise<string> {
  throw new Error("网络不可用");
}

async function loadWithFallback(): Promise<string> {
  try {
    return await load();
  } catch (error: unknown) {
    console.log("当前函数捕获：网络不可用");
    return "使用缓存内容";
  }
}

console.log(await loadWithFallback());
```

实际输出：

```text
当前函数捕获：网络不可用
使用缓存内容
```

如果在 `try` 中直接 `return load()`，当前函数只是把这份 Promise 交给外层，并没有用 `await` 把拒绝转换成当前这一层可以捕获的抛错，因此当前 `catch` 不会执行：

```ts
async function passFailureOutward(): Promise<string> {
  try {
    return load(); // ❌ 只向外传播拒绝，下面的 catch 不会捕获它。
  } catch (error: unknown) {
    return "这里不会执行";
  }
}

try {
  await passFailureOutward();
} catch (error: unknown) {
  console.log("外层捕获：网络不可用");
}
```

`return Promise` 可以把失败继续传给调用者，但不等于“当前层已经处理”。最终必须有某一层使用 `await` 配合 `try/catch`，或使用 `.catch(...)` 挂接拒绝处理；完全不处理则可能产生未处理的 Promise rejection。

**问：`Promise.all` 是否等于“更快且自动取消”？**

**答：**不是。`Promise.all` 接收一组已经创建的 Promise，所有任务成功时按输入顺序返回结果；任一任务拒绝时，组合 Promise 会拒绝。它不会自动启动没有调用的函数，也不会取消其他已经开始的任务。只有互不依赖并且适合一起失败的任务，才适合这样组合。

有数据依赖的步骤仍要顺序等待；并发数量过大时还要另做限制。`forEach(async ...)` 不会替调用者收集 Promise。

官方参考：

- [MDN：`async function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN：`Promise.all()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

## 拓展思考（不要求写代码）

如果第二个请求必须使用第一个请求返回的课程 id，它们还能放进同一个 `Promise.all` 吗？请画出依赖顺序，并指出哪些请求仍可能并行。
