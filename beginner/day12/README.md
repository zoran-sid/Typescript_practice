# Day 12：函数类型、箭头函数与回调

预计用时：75–90 分钟。

函数不仅能执行动作，它本身也是一个值：可以存进变量、传给另一个函数，也可以由类型描述。今天会把函数类型、返回值、默认与可选参数、rest 参数和 `void` 回调放进一份成绩报告。

## 核心讲解

函数类型描述参数与返回值的关系：

~~~ts
type Formatter = (value: number) => string;
~~~

箭头函数只有在函数体是单个表达式时才会自动返回。写了花括号后必须明确 `return`：

~~~ts
const double = (value: number): number => {
  return value * 2;
};
~~~

这也是 `map` 回调经常得到一组 `undefined` 的原因。

参数还有三种常用形式：

- `title?: string`：调用者可省略，函数内得到 `string | undefined`。
- `punctuation = "!"`：调用者省略时使用默认值。
- `...values: number[]`：把剩余参数收集为数组。

`void` 常用于报告、日志和事件回调，表示调用者不使用它的返回结果；它不表示函数“什么都不能做”。一个函数可以调用 `void` 回调，同时返回自己的统计结果。

## 阅读示例

打开并右键运行 `example.ts`。找出 `Formatter`、默认参数、rest 参数和 `void` 行为分别出现在哪里。

## 独立练习（从空文件开始）

请在 `practice.ts` 中从头编写“学生成绩报告器”。

必须创建：

- `ScoreFormatter`：接收 `number`、返回 `string` 的函数类型。
- `Reporter`：接收 `string`、返回 `void` 的函数类型。
- `formatScore`：符合 `ScoreFormatter` 的箭头函数；60 分及以上返回“成绩：分数（通过）”，否则返回“成绩：分数（未通过）”。
- `greetStudent(name, title?, punctuation = "!")`：缺少称呼时使用“同学”。
- `sumScores(...scores)`：返回所有分数之和。
- `reportScores(scores, formatter, reporter)`：逐项调用回调，并返回及格数量。
- 固定数组 `scores`，内容为 `55、80、100`。

用 `console.log` 作为 `Reporter`，精确输出：

~~~text
你好，Ada同学!
成绩：55（未通过）
成绩：80（通过）
成绩：100（通过）
总分：235
通过数量：2
~~~

限制：

- 不得使用 `any` 或类型断言。
- `formatScore` 必须写花括号并明确 `return`。
- `reportScores` 不能把输出写死；它必须调用收到的 `formatter` 和 `reporter`。
- `sumScores` 必须使用 rest 参数，`reportScores` 的数组参数必须是只读数组。
- `console.log` 只负责展示，计算函数必须用 `return` 交付结果。

完成标准：右键运行后显示 PASS；能分别解释可选参数、默认参数、rest 参数与 `void`。

## 容易出错的地方

- 写成 `(value) => { value * 2 }`，忘记 `return`。
- 把 `void` 理解成不能执行输出。
- 直接对可选参数调用字符串方法，没处理 `undefined`。
- 把 rest 参数当作单个数字。
- 在回调里打印正确文字，却忘记返回及格数量。

## 拓展思考（不要求写代码）

如果 `Reporter` 需要把每条报告异步保存到服务器，它的返回类型和 `reportScores` 的实现应怎样变化，调用者又应等待什么？

## 官方资料

- [More on Functions：Function Type Expressions](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions)
- [More on Functions：Optional Parameters](https://www.typescriptlang.org/docs/handbook/2/functions.html#optional-parameters)
- [More on Functions：Rest Parameters](https://www.typescriptlang.org/docs/handbook/2/functions.html#rest-parameters-and-arguments)
- [More on Functions：void](https://www.typescriptlang.org/docs/handbook/2/functions.html#void)
