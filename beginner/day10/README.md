# Day 10：联合类型、字面量类型与收窄

预计用时：60–90 分钟。

一个值有时允许多种类型，例如编号可能是字符串或数字。联合类型表示“当前值是其中一种”，使用某个类型独有的能力前，代码必须先确认它现在是哪一种。这个确认过程叫类型收窄。

## 完成目标

- 使用 `A | B` 声明联合类型。
- 使用字符串字面量联合限制合法选项。
- 使用 `typeof` 收窄基础类型。
- 使用 `Array.isArray` 区分数组。
- 使用相等判断收窄字面量。
- 使用 `in` 区分具有不同属性的对象。
- 理解 `as` 不是运行时检查。

## 联合类型表示多种可能

```ts
type Id = string | number;
```

这不表示值同时是字符串和数字，而表示某一次运行中它可能是其中一种。只能直接使用所有成员都拥有的能力；调用字符串专属的 `toUpperCase` 前，必须先确认当前是字符串。

## `typeof` 收窄基础类型

```ts
function formatId(id: string | number): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  }

  return `#${id}`;
}
```

在 `if` 分支中，TypeScript 知道 `id` 是字符串；剩余分支中只可能是数字。`typeof` 的结果使用小写 `"string"`、`"number"`。

## 字面量联合限制选项

```ts
type Priority = "low" | "medium" | "high";
```

普通 `string` 可以是任意文字，字面量联合只允许列出的三个值。编辑器会提供自动补全并阻止拼写错误。使用 `priority === "high"` 后，分支中的值也会被收窄为这个具体字面量。

## 数组与对象收窄

`Array.isArray(value)` 是判断数组的可靠方式。数组在 JavaScript 中也属于对象，因此不要只写 `typeof value === "object"` 来区分。

对于对象联合，可以检查专属属性：

```ts
if ("email" in contact) {
  return contact.email;
}
```

进入分支后，TypeScript 知道当前对象拥有 `email`。

## 类型断言不是验证

`value as string` 只让编译器暂时相信你的判断，不会把数字转换成字符串，也不会检查运行时数据。能够通过 `typeof`、`Array.isArray`、相等判断或 `in` 收窄时，不应使用断言逃避检查。

## 阅读完整示例

打开并右击运行 `example.ts`。指出每次调用进入 `formatId` 的哪个分支，并观察字面量类型如何限制对齐方式。临时传入非法字面量，阅读错误后撤销。

## 独立练习（从空文件开始）

在 `practice.ts` 中从零完成“支持工单摘要”。

必须声明这些类型：

- `type TicketId = string | number`
- `type TopicInput = string | string[]`
- `type Priority = "low" | "medium" | "high"`
- `interface EmailContact { name: string; email: string }`
- `interface PhoneContact { name: string; phone: string }`
- `type Contact = EmailContact | PhoneContact`

必须实现这些函数：

- `formatTicketId(id: TicketId): string`：字符串编号转大写，数字编号前加 `#`，都带前缀 `"编号: "`。
- `describeTopics(topics: TopicInput): string`：数组返回 `"主题列表: "` 加逗号空格连接；字符串返回 `"主题: "` 加原值。
- `describeContact(contact: Contact): string`：用 `"email" in contact` 返回邮箱或电话。
- `describePriority(priority: Priority): string`：当值为 `"high"` 返回 `"优先级: high（立即处理）"`，其他值返回 `"优先级: "` 加原值。

固定调用数据：

- 工单编号 `"ts-10"` 和 `42`。
- 主题 `"variables"` 和 `["variables", "arrays"]`。
- 邮箱联系人 `{ name: "Lin", email: "a@example.com" }`。
- 电话联系人 `{ name: "Mei", phone: "13800000000" }`。
- 优先级 `"high"`。

精确期望输出：

```text
编号: TS-10
编号: #42
主题: variables
主题列表: variables, arrays
邮箱: a@example.com
电话: 13800000000
优先级: high（立即处理）
```

限制：

- 四个函数都必须使用题目指定的命名类型。
- 分别使用 `typeof`、`Array.isArray`、`in` 和严格相等判断收窄。
- 不使用 `any`、`as` 或非空断言。
- 不得把最终七行整句直接交给 `console.log`。

完成标准：

- 能说明每个分支进入后变量被收窄成什么类型。
- 非法优先级会在运行前被 TypeScript 拒绝。
- 右击运行 `practice.ts`，七行输出完全一致。

## 常见错误

联合类型不是同时拥有两个成员的所有方法；`typeof` 返回小写文字；`Array.isArray` 比普通对象判断更精确；`as` 不会产生运行时检查；属性名拼错会让 `in` 判断失去意义。

## 拓展思考（不要求写代码）

如果把来自外部文件的未知值直接写成 `value as EmailContact`，当它实际没有 `email` 属性时程序为什么仍可能出错，而 `"email" in value` 这类运行时检查提供了什么额外保证？

## 参考答案

完成后再阅读 `solution.ts` 与 `SOLUTION.md`，逐个指出四个函数使用的收窄方法。

## 官方资料

- [Everyday Types：Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
- [Everyday Types：Literal Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)
- [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
