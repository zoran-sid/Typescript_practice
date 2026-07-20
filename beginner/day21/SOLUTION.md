# Day 21 参考答案说明

## 解题路线

`fetchLesson` 返回 `Promise<string>`；只有 `await` 后才得到字符串。`loadLessons` 先用 `map` 创建所有 Promise，再用 `Promise.all` 统一等待，因此结果是按输入顺序排列的 `string[]`。

`main` 明确等待正常加载和失败请求。Promise 拒绝会在 `await` 处进入 `catch`，捕获值仍以 `unknown` 交给 `errorMessage` 收窄。文件末尾再等待 `main()`，避免程序留下未观察的异步工作。

## 易错点

`forEach` 不会保存或等待 async 回调的 Promise。也不要把 Promise 用 `String(...)` 掩盖成文字，或在 `catch` 中返回一门假课程冒充成功。

## 拓展思考参考方向

依赖第一个结果的第二个请求必须在第一个 `await` 之后创建，不能和它放入同一批并行任务。拿到课程 id 后，所有只依赖该 id、彼此互不依赖的后续请求仍可以一起交给 `Promise.all`。
