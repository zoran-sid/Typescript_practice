# Day 10：联合类型、字面量类型与收窄

预计用时：60–90 分钟。

一个值有时允许不止一种类型，例如编号可以来自数字，也可以来自字符串。TypeScript 用联合类型表示“可能是其中之一”，并要求代码在使用专属功能前先确认当前是哪一种。这个确认过程叫类型收窄（narrowing）。

## 完成目标

- 能用 `A | B` 声明联合类型。
- 能用字符串字面量联合限制允许的选项。
- 能用 `typeof`、`Array.isArray`、相等判断和 `in` 收窄类型。
- 理解类型断言 `as` 不是运行时检查，也不应拿来逃避收窄。

## 今天暂时不学

不学习可辨识联合、`never` 完整性检查和自定义类型守卫。Day 11 以后会在今天的收窄基础上继续。

## 前置复习（8 分钟）

1. 怎样给对象形状取一个名字？
2. `phone?: string` 表示什么？
3. `readonly` 会不会把嵌套对象自动冻结？
4. `typeof "hello"` 和 `typeof 42` 分别得到什么文字？可以运行一行代码验证。

## 60–90 分钟安排

- 0–8 分钟：间隔复习对象类型和缺失值。
- 8–32 分钟：联合、字面量、四种常用收窄。
- 32–42 分钟：运行示例，尝试传入错误的对齐方式。
- 42–78 分钟：完成四道练习。
- 78–90 分钟：为每道题指出“收窄前”和“收窄后”的类型。

## 1. 联合类型表示多种可能

```ts
type Id = string | number;
```

这不表示值同时是字符串和数字，而是某一时刻可能属于其中一种。只能直接使用两种类型都拥有的能力；调用字符串专属的 `toUpperCase()` 前必须先确认。

## 2. `typeof` 收窄基础类型

```ts
function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id + 1);
  }
}
```

在 `if` 分支里，TypeScript 知道 `id` 是字符串；在 `else` 里则知道它是数字。

## 3. 字面量联合限制可选值

```ts
type Direction = "up" | "down";
```

此时普通 `string` 太宽，只有列出的两个文字才合法。编辑器也能自动提示选项并拦截拼写错误。

## 4. 其他常用收窄方式

- `Array.isArray(value)`：区分数组与其他值。
- `value === "某个字面量"`：区分具体选项。
- `"email" in contact`：确认对象是否拥有某个属性。

不要把 `value as string` 当成检查。`as` 只是告诉编译器“相信我”，不会验证运行时数据。

## 运行完整示例

```powershell
npm run beginner:example -- day10
```

实验：把 `"center"` 改成 `"middle"`，阅读 TypeScript 报错中列出的合法值，然后改回来。

## 必做练习

```powershell
npm run beginner -- day10 01
npm run beginner -- day10 02
npm run beginner -- day10 03
npm run beginner -- day10 04
```

- 01：用 `typeof` 分别处理字符串编号和数字编号。
- 02：用字面量类型限制尺寸，并处理所有尺寸。
- 03：用 `Array.isArray` 区分字符串和字符串数组。
- 04：用 `in` 区分邮箱联系人和电话联系人。

全部检查：

```powershell
npm run beginner -- day10 all
```

答案示例：

```powershell
npm run beginner:solution -- day10 04
```

## 常见坑

- `string | number` 不能直接调用只属于字符串的方法。
- `typeof` 返回的是小写文字，例如 `"string"`，不是 `"String"`。
- 字面量 `"medium"` 比普通 `string` 更精确。
- 数组也属于 JavaScript 对象，判断数组优先使用 `Array.isArray`。
- `as` 不会把运行时数字真的变成字符串，也不会验证外部数据。

## 完成标准

- 四道练习全部通过。
- 能解释“联合类型不是同时拥有两种类型”。
- 能不用断言完成 `string | number` 的分支处理。
- 能为一组固定选项写字符串字面量联合。
- 能根据值或属性选择合适的收窄方法。

## 官方资料

- [Everyday Types：Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
- [Everyday Types：Literal Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)
- [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
