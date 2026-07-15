# Day 12：错误边界、`Result` 与安全失败

## 今日目标

在 `useUnknownInCatchVariables` 下安全处理异常；区分“预期验证失败”和“意外异常”；使用判别联合 Result 返回可检查结果。

## 来自主站的素材

- `scripts/media-update.ts:209-229` 捕获 JSON 解析错误并添加来源上下文。
- `scripts/media-update.ts:326-341` 用 `try/finally` 清理临时文件。
- `scripts/media-update.ts:363-389` 先完整验证，再决定是否写入。

## 核心讲解

catch 中的值不保证是 `Error`，JavaScript 可以 `throw "text"`。先用 `instanceof Error` 收窄，再读取 message。

`Result<T, E> = { ok: true; value: T } | { ok: false; error: E }` 适合调用者预期会处理的验证失败。不可恢复的编程错误仍可抛异常。不要把所有异常都吞成 `undefined`，否则来源和原因丢失。

## 动手任务

1. 实现 `parseRating`：接受 number 或数字字符串，10 分制转换为 5 分制，范围外返回错误。
2. 修复 `errorMessage` 对字符串 throw 返回 `undefined` 的问题。
3. 在调用处先检查 `ok`，再访问 value / error。

## 常见故障

- catch 后直接 `(error as Error).message`。
- 返回 `null` 表示所有失败，无法区分原因。
- 记录错误后继续写入不完整数据。
- finally 中的错误覆盖了原始错误。

## 验收

```powershell
npm.cmd --prefix typescript_practice run day -- day12
```
