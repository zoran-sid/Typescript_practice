# Day 08：`keyof`、`typeof`、索引访问与 `satisfies`

## 今日目标

从真实值派生类型，安全地读取对象键和值类型，并理解 `satisfies` 与类型标注、类型断言的区别。

## 来自主站的素材

- `src/i18n/utils.ts:4-10`：`typeof locales[number]` 产生 `Locale`。
- `src/i18n/utils.ts:182-201`：`keyof UIStrings` 限制翻译键。
- `src/lib/lab.ts:4-17`：常量映射把内容类型变为 URL 段。

## 核心讲解

`typeof value` 在类型位置读取值的静态类型；`keyof T` 得到对象类型的键联合；`T[K]` 是索引访问类型。组合后可以让“值是唯一事实来源”，避免手写联合与数据漂移。

`satisfies` 检查表达式是否满足某个契约，同时尽量保留表达式自身的精确类型。类型标注可能扩宽值；`as SomeType` 只是告诉编译器相信你，可能隐藏错误。

## 动手任务

1. 实现 `labSegment`，只能接受映射中的键。
2. 修复 `localeFromPath`，不能通过 `includes("en")` 猜测语言。
3. 暂时删除一个翻译键，观察 `satisfies Record<Locale, string>` 的错误。

## 常见故障

- 在值位置和类型位置混淆 `typeof`。
- 用 `Object.keys` 后忘记键在运行时是字符串。
- 用断言掩盖翻译表缺失。
- 用子字符串判断 URL 协议，误匹配正文片段。

## 验收

```powershell
npm.cmd --prefix typescript_practice run day -- day08
```
