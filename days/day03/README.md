# Day 03：函数、参数、重载、`void` 与 `never`

## 今日目标

掌握函数声明与表达式、返回类型、可选/默认/剩余参数、回调、重载签名、`void` 和 `never`。

## 来自主站的素材

- `src/lib/utils.ts:3-10` 使用联合参数 `string | Date`、默认参数和显式返回值。
- `src/lib/routes/splits.ts:113-126` 将数字格式化为持续时间和配速。
- `scripts/media-update.ts:24-70` 用函数解析命令行参数，并在非法输入时抛错。

## 核心讲解

函数类型由参数和返回值共同组成。可选参数 `x?: number` 可能是 `undefined`；默认参数 `x = 20` 只在实参为 `undefined` 时生效。剩余参数 `...items: string[]` 把多个参数收集为数组。

重载用于“不同输入对应不同输出”的公开 API：先写多个调用签名，再写一个包含所有情况的实现签名。不要用重载掩盖本来应该拆开的职责。

`void` 表示调用者不使用返回值；`never` 表示函数无法正常返回，例如总是抛出异常。穷尽检查通常让遗漏分支的值流入 `never`。

## 动手任务

1. 为 `formatMetric` 的两个重载编写实现：`distance` 输出 km，`duration` 输出 `m:ss`。
2. 修复 `normalizeResultLimit`，使显式传入的 `0` 不会被 `||` 替换。
3. 阅读 `fail`，解释它为何返回 `never`。

## 常见故障

- 用 `value || fallback` 吞掉合法的 `0`、空字符串或 `false`。
- 回调声明返回 `void` 后，误以为实现函数真的不能返回值。
- 重载签名与实现签名不兼容。
- 捕获错误后既不返回也不抛出，导致隐式 `undefined`。

## 验收

```powershell
npm.cmd --prefix typescript_practice run day -- day03
```
