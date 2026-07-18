# Day 19：错误处理与 `unknown`

程序遇到无效输入、缺失文件或失败请求时，不应该假装一切正常。今天学习两种清晰的失败表达：真正无法继续时抛出 `Error`；失败是普通业务结果时返回判别联合。

## 今天能做到什么

- 用 `throw new Error(message)` 报告无法继续的情况。
- 用 `try/catch` 在有能力处理错误的边界捕获它。
- 把 `catch` 中的值当作 `unknown`，收窄后再读信息。
- 区分异常与 `Result` 风格的成功/失败联合。
- 保留有用的错误信息，而不是吞掉失败或抛出字符串。

## 60–90 分钟安排

1. 10 分钟：复习联合收窄，写出 `error instanceof Error`。
2. 15 分钟：运行示例，观察异常怎样越过中间调用到达边界。
3. 15 分钟：练习 01，验证并抛出明确错误。
4. 15 分钟：练习 02，安全读取未知捕获值。
5. 15 分钟：练习 03，用结果联合表达预期失败。
6. 15 分钟：练习 04，确保失败不会被静默吞掉。

## 两种失败方式

异常适合“当前函数无法在这里恢复”的情况：

```ts
function requirePositive(value: number): number {
  if (value <= 0) throw new Error("Value must be positive");
  return value;
}
```

如果失败是调用者经常需要分支处理的普通结果，可以返回：

```ts
type Result<T> =
  | { ok: true; value: T }
  | { ok: false; message: string };
```

两种风格都可以，关键是边界清楚、信息不丢失。不要为了“程序不报错”而写空的 `catch {}`。

## 练习

```powershell
npm run beginner:example -- day19
npm run beginner -- day19 01
npm run beginner -- day19 02
npm run beginner -- day19 03
npm run beginner -- day19 04
npm run beginner -- day19 all
```

| 编号 | 内容 | 重点 |
| --- | --- | --- |
| 01 | 读取正整数 | 抛 `Error`、边界捕获 |
| 02 | 格式化未知错误 | `unknown`、`instanceof` |
| 03 | 解析端口号 | 泛型结果联合与收窄 |
| 04 | 保留失败上下文 | 不吞错、不重复记录 |

## 常见错误

- `throw "bad"`：字符串没有标准的 `name`、`message` 和堆栈信息。
- 把捕获值标成 `any`，直接读取任意属性。
- `catch { return defaultValue; }`，使调用者无法区分真实值和失败后的假值。
- 底层和上层都打印同一错误，导致日志重复；通常由能决定如何呈现的边界处理。
- 捕获后继续使用只完成了一半的数据。

## 完成标准

- 四题通过，并能解释为什么捕获值可能不是 `Error`。
- 能为一个失败场景选择“抛异常”或“返回结果联合”，并说明理由。
- 没有空 `catch`、`throw` 字符串或 `any`。

## 官方资料

- [Narrowing：`instanceof`](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing)
- [TSConfig：useUnknownInCatchVariables](https://www.typescriptlang.org/tsconfig/useUnknownInCatchVariables.html)
