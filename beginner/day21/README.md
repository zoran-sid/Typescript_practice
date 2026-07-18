# Day 21｜异步不是“以后再说”：Promise、await 与错误

网络请求、定时器和文件读取不会立刻给出结果。JavaScript 用 `Promise` 表示“未来会成功或失败的结果”，`async/await` 让我们用接近同步代码的顺序阅读它。

建议用时：60–90 分钟。

## 今天会学到

- `Promise<T>` 与 `T` 不是同一种值；
- `async` 函数总是返回 Promise；
- `await` 取得成功值，也会把失败重新抛出；
- 独立任务用 `Promise.all` 一起等待；
- 为什么 `forEach(async () => ...)` 不会等待；
- 用 `try/catch` 和 `unknown` 处理异步错误。

## 最小心智模型

`getName()` 返回的是“装着未来名字的盒子”。`await getName()` 才是名字本身。

`async` 不会自动让所有代码按你想的顺序等待。你必须明确地 `await`，或者把一组 Promise 交给 `Promise.all`。

## 今日路线

1. 10 分钟：重做 Day 20 第 01 题，复习边界上的 `unknown`；
2. 15 分钟：运行示例，画出 Promise 的成功与失败两条路；
3. 35–50 分钟：完成 4 个高频易错练习；
4. 10 分钟：关掉答案，解释“漏 await”和“async forEach”。

## 命令

```bash
npm run beginner:example -- day21
npm run beginner -- day21 1
npm run beginner -- day21 2
npm run beginner -- day21 3
npm run beginner -- day21 4
```

答案命令示例：`npm run beginner:solution -- day21 3`。

## 最容易踩的坑

- 把 `Promise<string>` 当成 `string`；
- 为了“保险”把所有独立请求都一个个 await，白白串行等待；
- 认为 `forEach` 会等待 async 回调；
- 调用 async 函数却既不 await，也不返回它；
- catch 后返回假数据，把真实失败伪装成成功；
- 以为 `await` 只处理成功，不会抛出错误。

## 间隔复习

明天开始前，先重做第 01、03 题。三天后重做第 04 题，把错误类型仍然写成 `unknown`。

## 完成标准

- 4 个练习全部通过；
- 能解释 `Promise<T>` 和 `T` 的区别；
- 知道何时并行使用 `Promise.all`；
- 不再写无人等待的 `forEach(async ...)`；
- 异步失败不会被悄悄吞掉。

## 官方资料

- [TypeScript 4.5：Awaited 与 Promise 改进](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#the-awaited-type-and-promise-improvements)
- [MDN：async function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN：Promise.all](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
