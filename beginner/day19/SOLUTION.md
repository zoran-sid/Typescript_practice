# Day 19 参考答案与记忆卡

先自己运行练习、读提示，再看答案。答案不只是在“改输出”，而是在建立清楚的失败通道。

## 01：什么时候 throw

金额不合法时，函数无法给出可信的余额，因此抛出 `RangeError`。正常情况才 `return` 新余额。

记忆：`return` 交付正常结果；`throw` 中断当前路径并报告失败。

## 02：catch 中的错误是 unknown

先只包住真正可能失败的 `JSON.parse`，再把底层错误包装成稳定的业务消息。外层用 `error instanceof Error` 缩小类型后才能安全读取 `message`。

记忆：不知道抛来的是什么，就先把它当作 `unknown`。

## 03：可预期失败用 Result

`ok: true` 和 `ok: false` 是判别联合。检查 `result.ok` 后，TypeScript 会知道能读 `value` 还是 `error`。

记忆：异常适合“无法继续”；`Result` 适合调用者经常要处理的两种结果。

## 04：不要吞掉错误

返回“匿名”会把“数据真的匿名”和“读取失败”混在一起。补充上下文后重新抛出，调用者才能决定提示、重试或记录。

间隔复习：明天不看答案，口述 `unknown → instanceof Error → message`，再重做第 03、04 题。
