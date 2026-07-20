# Day 01：值、变量和三个最常用的类型

预计用时：75–90 分钟。

程序需要记住信息。姓名和课程是文字，完成数量是数字，“是否为初学者”是真或假。TypeScript 会帮助我们说明并检查这些值的类型。

## 完成后你会做到

- 区分值、变量名和类型。
- 使用 `const` 保存不需要重新赋值的数据。
- 使用 `let` 保存会变化的数据。
- 认识 `string`、`number`、`boolean`。
- 理解类型标注和类型推断。
- 使用模板字符串组合输出。

## 值、变量名与类型

阅读这一行：

```ts
const courseName = "TypeScript";
```

`"TypeScript"` 是值，`courseName` 是方便代码重复使用它的变量名，`string` 是这类值的类型。

三个最常用的基础类型是：

- `string`：文字，例如 `"Lin"`。
- `number`：数字，例如 `2` 或 `0.5`。
- `boolean`：只有不带引号的 `true` 和 `false`。

带引号的 `"2"` 是字符串，不是数字；带引号的 `"true"` 也是字符串，不是布尔值。

## `const`、`let` 与赋值

默认优先使用 `const`。只有变量稍后确实需要重新赋值时才使用 `let`：

```ts
let completedLessons = 0;
completedLessons = completedLessons + 1;
```

等号右边先读取旧值并计算，新的结果再赋回左边变量。若变量使用 `const`，TypeScript 会阻止重新赋值。

## 类型标注与类型推断

下面两种写法都能得到字符串类型：

```ts
const learnerName: string = "Lin";
const courseName = "TypeScript";
```

第一行明确写了类型标注，第二行由 TypeScript 根据初始值推断。初始值已经很清楚时，不必重复标注明显类型。基础类型名称应使用小写 `string`、`number`、`boolean`。

## 模板字符串

反引号创建模板字符串，`${...}` 会插入变量当前的值：

```ts
const summary = `课程: ${courseName}`;
```

反引号不是单引号。它通常位于键盘左上角、数字 1 左侧。

## 阅读完整示例

打开并右击运行 `example.ts`。先预测 `completedLessons` 增加前后的值，再对照输出。可以临时把数字赋值改成字符串，观察 TypeScript 怎样在运行前指出错误；实验后撤销并保存。

## 独立练习（从空文件开始）

请在 `practice.ts` 的说明注释后，从第一条变量声明开始完成“学习档案”。

固定数据和名称：

- `learnerName` 保存字符串 `"Lin"`。
- `courseName` 保存字符串 `"TypeScript"`。
- `completedLessons` 从数字 `0` 开始。
- `isBeginner` 保存布尔值 `true`。

程序要求：

1. 对不需要重新赋值的数据使用 `const`。
2. 对 `completedLessons` 使用 `let`，并用“旧值加 1”的方式连续更新两次。
3. 使用变量和模板字符串输出四行，不要把最终结果整行写死。

精确期望输出：

```text
学习者: Lin
课程: TypeScript
已完成: 2
初学者: true
```

限制：

- `true` 不得加引号。
- 数字 `0`、`1`、`2` 不得写成字符串。
- 不得直接声明 `completedLessons = 2`。
- 除要求的四行外不要产生其他输出。

完成标准：

- 能解释四个变量各自的类型。
- 能说明为什么只有 `completedLessons` 使用 `let`。
- 右击运行 `practice.ts` 后，四行输出完全一致。

## 常见错误

把反引号写成普通引号会让 `${变量名}` 原样显示；把 `true` 放进引号会改变类型；用 `const` 声明需要更新的变量会产生重新赋值错误。

## 拓展思考（不要求写代码）

如果课程名称也要在程序运行过程中从 `"TypeScript"` 改成 `"JavaScript"`，应只把哪一个变量从 `const` 改成 `let`，为什么其他变量不需要跟着改变？

## 参考答案

完成后再查看 `solution.ts` 与 `SOLUTION.md`。先比较自己的变量选择和更新过程，再比较输出格式。

## 官方资料

- [Everyday Types：基础类型与类型推断](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [The Basics：静态类型检查](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
