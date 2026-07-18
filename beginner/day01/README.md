# Day 01：值、变量和三个最常用的类型

预计用时：75–90 分钟。

程序需要记住信息。例如课程名称是一段文字，完成课数是数字，“是否为初学者”只有是或否。TypeScript 的第一项工作，就是帮助我们说明和检查这些值是什么类型。

## 完成后你会做到

- 区分值、变量名和类型。
- 使用 `const` 保存不需要重新赋值的数据。
- 使用 `let` 保存会变化的数据。
- 认识 `string`、`number`、`boolean`。
- 看懂最简单的类型标注，并理解类型推断。
- 使用模板字符串组合一行输出。

今天不学习数组、对象、函数、联合类型、`null`、`undefined`、`bigint`、`symbol` 或模块。

## 建议时间安排

| 阶段 | 时间 |
| --- | ---: |
| 值、变量、类型 | 20 分钟 |
| `const`、`let` 与推断 | 15 分钟 |
| 跟写和类型错误实验 | 15 分钟 |
| 必做练习 | 25 分钟 |
| 故障排查与回顾 | 15 分钟 |

## 1. 先区分三个词

阅读下面一行：

```ts
const courseName = "TypeScript";
```

- `"TypeScript"` 是一个值，具体来说是一段字符串值。
- `courseName` 是变量名，让后面的代码可以再次使用这个值。
- `string` 是这类值的类型名称。

可以把它想成贴标签的盒子：盒子上的标签是 `courseName`，盒子里当前放着文字 `"TypeScript"`，TypeScript 知道这个盒子保存的是 `string`。

## 2. 三个最常用的基础类型

### `string`：文字

字符串写在单引号或双引号中：

```ts
const courseName: string = "TypeScript";
const greeting: string = "Hello";
```

类型名使用小写 `string`，不要写成大写 `String`。

### `number`：数字

JavaScript 和 TypeScript 不把普通整数与小数分成 `int` 和 `float`；它们都使用 `number`：

```ts
const lessonCount: number = 4;
const progress: number = 0.25;
```

带引号的 `"4"` 是文字，不是数字。Day 02 会专门练习两者的区别。

### `boolean`：真或假

布尔值只有两个：`true` 和 `false`。

```ts
const isBeginner: boolean = true;
const isFinished: boolean = false;
```

它们必须小写且不带引号。`"true"` 是字符串，并不是布尔值。

## 3. `const` 和 `let`

### 默认优先使用 `const`

当变量不需要重新赋值时使用 `const`：

```ts
const courseName = "TypeScript";
```

下面的代码会被 TypeScript 拒绝，因为它试图给 `const` 变量重新赋值：

```ts
courseName = "JavaScript";
```

### 确实会变化时使用 `let`

完成课程数会从 `0` 变成 `1`，因此使用 `let`：

```ts
let completedLessons = 0;
completedLessons = completedLessons + 1;
```

等号右边先计算 `0 + 1`，得到 `1`，再把结果放回 `completedLessons`。

这里的 `=` 表示赋值，不是数学中的“左右永远相等”。

## 4. 类型标注和类型推断

你可以在变量名后写出类型：

```ts
const courseName: string = "TypeScript";
```

冒号后面的 `string` 就是类型标注。

但很多时候 TypeScript 能从初始值推断类型：

```ts
const courseName = "TypeScript"; // 推断为 string
let completedLessons = 0;        // 推断为 number
const isBeginner = true;         // 推断为 boolean
```

官方手册建议初学时不要到处重复明显类型。两种写法都要能看懂；当初始值已经非常清楚时，本课程会优先使用推断。

将鼠标停在 VS Code 中的变量名上，可以观察编辑器推断出的类型。

## 5. 模板字符串

反引号 `` ` `` 可以创建模板字符串。`${...}` 会把变量当前的值放进文字：

```ts
const name = "TypeScript";
const summary = `Course: ${name}`;
```

`summary` 的结果是：

```text
Course: TypeScript
```

反引号通常位于键盘左上角、数字 `1` 左侧。它不是单引号 `'`。

## 6. 跟写并运行示例

打开 `beginner/day01/example.ts`，尝试自己重新输入每一行，然后保存：

```powershell
npm run beginner:example -- day01
```

### 类型错误实验

在示例中，把：

```ts
completedLessons = completedLessons + 1;
```

临时改成：

```ts
completedLessons = "one";
```

保存并重新运行。TypeScript 会在程序真正运行前指出，不能把 `string` 赋给已经推断为 `number` 的变量。

观察错误后按 `Ctrl + Z` 撤销并保存，再运行一次，确认示例恢复正常。

## 7. 必做练习

打开 `beginner/day01/practice.ts`，完成两个 `TODO`：

1. 让 `courseName` 保存字符串 `"TypeScript"`。
2. 保持 `completedLessons` 从数字 `0` 开始，并让现有代码把它增加到 `1`。
3. 让 `isBeginner` 保存布尔值 `true`。

不要直接把最终整行输出写死；验收的目的是检查你是否正确使用三个变量。

运行：

```powershell
npm run beginner -- day01
```

目标输出：

```text
TypeScript | completed: 1 | beginner: true
```

## 8. 常见故障排查

### 把布尔值写成字符串

错误：

```ts
const isBeginner = "true";
```

正确：

```ts
const isBeginner = true;
```

判断方法：带引号的是文字；不带引号的 `true` 才是布尔值。

### 给会变化的变量使用 `const`

如果写成 `const completedLessons = 0`，后面的重新赋值会产生错误。思考变量是否需要重新赋值，再决定使用 `const` 还是 `let`。

### 模板字符串没有替换变量

下面使用的是普通双引号，因此会原样显示符号：

```ts
const summary = "${courseName}";
```

模板字符串必须使用反引号：

```ts
const summary = `${courseName}`;
```

## 9. 完成检查

不看上文，尝试回答：

1. `"8"` 和 `8` 的类型分别是什么？
2. `true` 和 `"true"` 有什么区别？
3. 什么情况下使用 `let`？
4. TypeScript 如何知道 `const name = "Ada"` 是字符串？
5. 为什么 `${name}` 需要写在反引号中？

## 10. 参考答案

完成练习后再查看 `solution.ts` 和 `SOLUTION.md`，或运行：

```powershell
npm run beginner:solution -- day01
```

## 11. 与真实项目的联系（可选）

个人网站会保存站点名称、文章数量、是否为草稿、当前语言等数据。它们的业务名称不同，但底层仍是 `string`、`number` 和 `boolean`。掌握通用类型后，你不需要先懂 Astro 或 Web3 就能阅读这些基础值。

## 官方资料

- [Everyday Types：string、number、boolean 与类型推断](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [The Basics：静态类型检查](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
