# Day 01：基础类型、变量声明与类型推断

## 今日目标

掌握 `string`、`number`、`boolean`、`bigint`、`symbol`、`null`、`undefined`，理解 `const`、`let` 和字面量推断。能够解释 TypeScript 类型为何不会在运行时替你校验字符串。

## 来自主站的素材

- `src/i18n/utils.ts:4-6` 用 `const` 保存语言列表，并从值派生类型。
- `src/lib/radar.ts:1-8` 用数字常量表达雷达角度和动画时长。
- `src/lib/theme.ts:2-6` 从字符串常量推导 `"dark" | "light"`。

## 核心讲解

`const` 限制变量重新赋值，但不自动冻结对象；`let` 用于确实会变化的绑定。TypeScript 通常能从初始值推断类型：`const online = true` 会得到字面量 `true`，`let online = true` 通常会扩宽为 `boolean`。

`number` 同时表示整数和浮点数；大整数可用 `bigint`，但不能与 `number` 直接运算。`symbol` 适合创建唯一键。`null` 和 `undefined` 在严格模式下是独立类型，不能假装它们总有值。

类型标注不做运行时转换。把 `"8"` 标成 `number` 既不合理，也不会把字符串变成数字；必须显式解析并验证 `Number.isFinite`。

## 动手任务

打开 `practice.ts`：

1. 实现 `formatLabStatus`，输出 `ONLINE · WEB3 LAB · BUILD 7` 这样的状态文本。
2. 排查 `sumPacketSamples`：当前实现把字符串拼在一起，不是数值求和。
3. 不允许使用 `any` 或双重断言。

## 常见故障

- 用 `+` 处理来自 `dataset` / JSON 的字符串，得到拼接结果。
- 认为 `const object` 会让对象内部属性只读。
- 用 `Number.parseInt("12px")` 误以为输入已经被完整验证。
- 用 `Boolean("false")`，结果仍是 `true`。

## 验收

```powershell
npm.cmd --prefix typescript_practice run day -- day01
```

思考：主站中哪些值来自浏览器字符串边界？它们在进入业务逻辑前应如何转换？
