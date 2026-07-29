# Day 12：函数类型、箭头函数与回调

预计用时：75–90 分钟。

今天把函数当成一种可以传递的“处理规则”。例如，成绩报告函数不必自己决定分数怎么显示；外部可以把一个格式化函数传进去，让报告函数在需要时调用它。你会看到数据如何进入普通参数、如何进入回调，以及每一层 `return` 把结果交给谁。

## 写 Example 前先认识这些写法

### `array.forEach(callback)`：逐项执行动作

`forEach` 由数组提供，所以点号左边必须是数组。括号里传入一个回调函数；数组会按顺序把“当前项、下标、原数组”交给回调。最常用的是前两个参数。

`forEach` 适合输出、记录等动作。它不会创建新数组，整个调用返回 `undefined`；回调里的 `return` 也不能让外层 `forEach` 提前结束。需要收集新值时用已经学过的 `map`，需要中途停止时通常用 `for...of`。

```ts
const minutes = [30, 45];
const result = minutes.forEach((value, index) => {
  console.log(`${index + 1}: ${value}`);
});
console.log(result);
```

实际输出：

```text
1: 30
2: 45
undefined
```

## 核心讲解

先看一个函数类型。它不写具体实现，只说明“调用时要给什么，调用后会拿到什么”：

~~~ts
type Formatter = (value: number) => string;
~~~

把 `Formatter` 从左向右读：调用这个函数时，要传入一个 `number`；函数处理完后，要交回一个 `string`。这里的参数名 `value` 用来说明这个输入的含义，真正实现函数时可以使用别的参数名。

箭头函数右侧如果直接写一个表达式，表达式的结果会自动返回。右侧一旦使用 `{}`，花括号里就是多条语句，必须自己写 `return`：

~~~ts
const double = (value: number): number => {
  return value * 2;
};
~~~

上面的调用过程是：外部传入数字，数字进入 `value`，`value * 2` 算出新数字，`return` 再把新数字交回调用处。

`map` 也是同样的规则。它把数组当前项传给回调，并把回调 `return` 的值放进新数组。回调使用 `{}` 却没有写 `return` 时，每次调用都没有交回结果，所以新数组对应位置会是 `undefined`；原数组不会因此改变。

再看三种参数写法。区别都发生在“调用者有没有传值”这一步：

- `title?: string`：调用者可以不传。没传时，函数里的 `title` 就是 `undefined`，因此它在函数内的类型是 `string | undefined`，使用前要检查或提供默认文字。
- `punctuation = "!"`：调用者没传时，函数自动把 `"!"` 放进 `punctuation`；传了就使用传入值。
- `...values: number[]`：调用者可以继续传多个数字，函数把这些数字收进 `values` 数组。

`void` 回调常用于打印报告、记录日志或响应点击。它表示“调用这段函数是为了让它完成动作，外部不使用它的返回值”，并不是说函数内部什么都不能做。例如回调可以输出每行报告；调用回调的外层函数仍然可以自己 `return` 及格人数。

## 为什么要这样设计

如果报告函数自己写死“分数怎样显示”，换成百分比、等级或日志格式时，就要复制并修改整段遍历代码。回调把“什么时候处理每一项”留给外层流程，把“这一项具体怎样处理”交给传入的函数，同一套流程就能换用不同规则。

JavaScript 负责保存函数值并在需要时调用它，TypeScript 的函数类型负责检查参数和返回值能否接得上。你仍要决定回调返回的结果代表什么、是否允许修改外部变量、错误由哪一层处理；花括号里的 `return` 也必须由你明确写出。

回调层数太多时，数据从哪来、结果交给谁会变难追踪。`void` 只表示调用方不使用返回值，不代表动作一定成功；需要确认成功、失败或异步完成时，应设计更明确的返回类型。

## 阅读示例

打开并右键运行 `example.ts`。找出 `Formatter`、默认参数、rest 参数和 `void` 行为分别出现在哪里。

## 函数变量追踪

把高阶函数的一次调用拆成五步：

1. 外部先准备一个函数，并把这个函数当作实参传入。
2. 这个函数值进入高阶函数的回调参数。此时还不一定执行。
3. 高阶函数处理到某个数据时，才调用回调，并把当前数据传给回调自己的参数。
4. 回调里的 `return` 把处理结果交回高阶函数。
5. 高阶函数可以继续使用这个结果，最后再用自己的 `return` 把统计值交回最外层调用处。

看到两个 `return` 时，先看它们分别属于哪一层函数，不要把回调的返回值和外层函数的返回值混在一起。

## Example 实际输出

运行 `example.ts` 后，终端会按下面的顺序显示。先用代码推测结果，再逐行对照：

```text
学习记录
第 1 项：30 分钟
第 2 项：45 分钟
主题：函数 / 回调 / void
```

## Example 代码流程图

运行 `example.ts` 前先沿图预测执行顺序；运行后再把每个节点对应到代码行。

```mermaid
flowchart TD
  A["调用 printReport([30, 45], formatMinutes)"] --> B["title 没有传值<br/>使用默认值：学习记录"]
  B --> C["console.log(title)<br/>输出：学习记录"]
  C --> D["values.forEach 取出一项<br/>交给回调的 value 和 index"]
  D --> E["回调调用 formatter(value)<br/>实际执行 formatMinutes(value)"]
  E --> F["formatMinutes return<br/>value + 分钟"]
  F --> G["回调拼出第 index + 1 项<br/>console.log 输出这一行"]
  G --> H{"values 还有下一项吗？"}
  H -- "有" --> D
  H -- "没有" --> I["调用 joinTopics<br/>分隔符和 3 个主题作为实参"]
  I --> J["...topics 把函数、回调、void<br/>收进 topics 数组"]
  J --> K["topics.join(separator)<br/>return 拼接后的主题文字"]
  K --> L["console.log 输出主题"]
```

## 官方手册扩展阅读（可选）

完成当天教程后，可从 [Day 12 对应阅读](../OFFICIAL-READING.md#day-12) 中只选 1 篇继续看。它不是练习前置，不需要在写 Practice 前读完。

## 独立练习导航

本日共有 2 道独立练习。每道题都有单独目录、说明、作答文件和解题结构；题目之间不共享代码。

| 目录 | 场景 | 类型 |
| --- | --- | --- |
| [practice01](./practice01/README.md) | 函数类型、箭头函数与回调 | 主任务 |
| [practice02](./practice02/README.md) | 消息格式化与多路投递 | 闭卷迁移 |

右击任意练习目录中的 `practice.ts` 即可单独检查；命令行也可运行 `npm run beginner -- day12 practice02`。

## 容易出错的地方

- 写成 `(value) => { value * 2 }`，忘记 `return`。
- 把 `void` 理解成不能执行输出。
- 直接对可选参数调用字符串方法，没处理 `undefined`。
- 把 rest 参数当作单个数字。
- 在回调里打印正确文字，却忘记返回及格数量。

### 错误代码示例

```ts
const double = (value: number): number => {
  value * 2; // ❌ 使用花括号后不会自动返回，函数实际得到 undefined。
};

function greet(title?: string): string {
  return title.toUpperCase(); // ❌ 可选参数可能是 undefined。
}
```

### 正确写法

```ts
const double = (value: number): number => {
  return value * 2; // ✅ 花括号函数体要明确 return。
};

function greet(title?: string): string {
  return (title ?? "同学").toUpperCase(); // ✅ 先提供默认值，再调用字符串方法。
}
```

## 面试时怎么回答

**问：回调类型主要解决什么问题？**

**答：**它把固定流程和可替换规则拆开。例如遍历成绩、决定何时调用函数属于报告流程，而“一个分数显示成什么文字”交给 `Formatter`。TypeScript 负责检查传入函数的参数和返回值能否接上，调用者仍要决定回调结果代表什么、是否有副作用、错误由谁处理。层数太多时，回调也会让数据流难追踪，所以不是所有两行代码都要抽成回调。

**问：`void` 和 `undefined` 是一回事吗？**

**答：**不是。回调类型里的 `void` 重点是“调用方不使用返回值”，不要求实现函数真的只能产生 `undefined`。例如下面的函数实际会算出长度，但通过 `void` 类型调用时，类型契约不允许调用方依赖这个数字：

```ts
const report: (text: string) => void = (text) => text.length;
const result = report("TS"); // result 的类型是 void
```

`undefined` 则是一种真实的值和类型。

**容易答错或追问：**不要说 `void` 表示函数什么都不做，或等同“运行时一定返回 undefined”。箭头函数用了花括号后仍需明确 `return`，否则需要结果的回调会真的交回 `undefined`。

## 拓展思考（不要求写代码）

如果 `Reporter` 需要把每条报告异步保存到服务器，它的返回类型和 `reportScores` 的实现应怎样变化，调用者又应等待什么？
