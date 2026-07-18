# Day 21 参考答案与记忆卡

## 01：Promise 不是最终值

`fetchUserName()` 的类型是 `Promise<string>`。加上 `await` 后，`name` 才是 `string`。

## 02：独立任务一起开始

两个任务互不依赖，所以先都调用，再由 `Promise.all` 等待。事件顺序先出现两个“开始”，证明它们不是一个完成后才启动另一个。

## 03：forEach 不会等待 async 回调

`forEach` 不会收集回调返回的 Promise。用 `map` 得到 Promise 数组，再 `await Promise.all(...)`。

## 04：不要把失败伪装成成功

备用数据可能是产品需求，但必须明确标记。这里要求调用者看到失败，所以在 `await` 外层捕获，并把 `unknown` 缩小为 `Error`。

记忆卡：

- 漏 `await`：拿到盒子，不是盒中值；
- 互不依赖：`Promise.all`；
- 数组异步：`map + Promise.all`；
- `await` 失败：像同步 `throw` 一样进入 catch；
- `return` 是交付结果，`console.log` 只是展示。

间隔复习：两天后不看答案重做第 02、03 题；一周后再做第 04 题。
