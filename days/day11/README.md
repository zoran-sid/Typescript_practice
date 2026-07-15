# Day 11：`unknown`、`any`、类型守卫与断言

## 今日目标

理解 `unknown` 是安全的外部输入类型，`any` 会传播不安全；掌握 `typeof`、`instanceof`、`in`、类型谓词、断言函数和谨慎使用类型断言。

## 来自主站的素材

- `scripts/media-update.ts:73-229` 从 `unknown` JSON 逐字段验证电影数据。
- `src/lib/routes/identity.ts:59-60` 用 `value is string` 建立 Route ID 守卫。
- `src/lib/routes/gpx.ts:362-386` 用 filter 类型谓词移除解析失败项。

## 核心讲解

`any` 关闭检查，而且可赋给任何类型；错误会跨越模块传播。`unknown` 允许接收任何值，但使用前必须收窄。外部 JSON、URL 参数、dataset 和 catch 变量都应从 `unknown` 开始。

类型谓词 `value is Entry` 告诉编译器某个布尔函数成功时的类型。断言函数 `asserts value is Entry` 成功返回后直接收窄，失败则抛错。`as T` 不执行检查；它只适合你已通过其他机制证明、但编译器无法表达的边界。

## 动手任务

1. 实现 `parseExternalEntry`，验证对象、title、locale 和 tags。
2. 修复 `unsafeTitle`，移除 `any`，错误输入应返回 `undefined` 而不是崩溃。
3. 比较“类型断言”和“类型守卫”生成的 JavaScript 有何不同。

## 常见故障

- `JSON.parse(text) as Model` 后直接信任字段。
- 从 `any` 读取拼错属性，编译器不再提醒。
- 守卫只检查对象存在，却未排除数组或 `null`。
- 用双重断言 `as unknown as T` 绕过不兼容类型。

## 验收

```powershell
npm.cmd --prefix typescript_practice run day -- day11
```
