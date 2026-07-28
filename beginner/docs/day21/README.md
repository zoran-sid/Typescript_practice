# Day 21：Promise、async/await 与异步错误

预计用时：60–90 分钟。

网络请求、定时器和文件读取都要等一段时间。调用这类函数时，程序先拿到一个 `Promise`：它不是最终数据，而是一份“稍后会成功给值，或者失败给错误”的结果。`async/await` 是配套写法，其中 `await` 用来等待这份结果，再决定继续正常步骤还是进入错误处理。

## 今天第一次见到的 JavaScript 工具

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
  A["启动两个异步请求"] --> B
  B["Promise.all 并行等待"] --> C
  C["成功值组合成结果"] --> D
  D["失败 Promise 进入 catch"] --> E
  E["输出成功与错误"]
```

## 官方手册扩展阅读（可选）

完成当天教程后，可从 [Day 21 对应阅读](../OFFICIAL-READING.md#day-21) 中只选 1 篇继续看。它不是练习前置，不需要在写 Practice 前读完。

## 独立练习导航

本日共有 2 道独立练习。每道题都有单独目录、说明、作答文件和解题结构；题目之间不共享代码。

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

```ts
const lesson: string = fetchText("课程");
// ❌ async 函数返回 Promise<string>，不是已经完成的 string。

["课程", "进度"].forEach(async (name) => {
  await fetchText(name);
});
console.log("全部完成"); // ❌ forEach 不收集 Promise，这一行会提前执行。
```

### 正确写法

```ts
const lesson: string = await fetchText("课程"); // ✅ await 后才得到成功值。

const requests = ["课程", "进度"].map((name) => fetchText(name));
await Promise.all(requests); // ✅ map 收集所有 Promise，再统一等待。
console.log("全部完成");
```

## 面试时怎么回答

**问：`async` 函数抛错后，为什么外层有时捕获不到？**

**答：**`async` 函数总会返回 Promise。函数内部 `return "课程"` 会变成成功的 `Promise<string>`，内部抛错会变成 rejected Promise；调用它本身通常不会把错误同步抛到外层，必须等待或返回这个 Promise：

```ts
async function load(): Promise<string> {
  throw new Error("网络不可用");
}
try {
  await load();
} catch (error: unknown) {
  // 这里才能观察到拒绝
}
```

运行环境负责在 Promise 完成后继续，开发者仍要决定由哪一层 `await`、捕获和记录错误。忘记等待会留下未处理拒绝。

**问：`Promise.all` 是否等于“更快且自动取消”？**

**答：**它适合互不依赖的任务：先全部启动，再统一等待，并按输入顺序交回结果。任一 Promise 拒绝时，组合结果会尽快拒绝，但其他已启动任务不会因此自动取消。

**容易答错或追问：**不要把并行当成永远更好；请求过多会增加压力，有依赖的任务仍要顺序等待，`forEach(async ...)` 也不会替你收集和等待回调返回的 Promise。

## 拓展思考（不要求写代码）

如果第二个请求必须使用第一个请求返回的课程 id，它们还能放进同一个 `Promise.all` 吗？请画出依赖顺序，并指出哪些请求仍可能并行。
