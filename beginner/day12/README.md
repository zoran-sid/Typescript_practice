# Day 12：函数类型、箭头函数与回调

预计用时：75–90 分钟。

函数不仅能执行动作，它本身也是一个值：可以放进变量、传给另一个函数，也可以由类型描述。今天会重点处理一个高频错误——箭头函数写了花括号却忘记 return。

## 前置复习（10 分钟）

1. 参数是函数收到的输入，return 是什么？
2. 函数某个分支没有 return 时，运行时可能得到什么？
3. 数组索引不存在时会得到什么？

undefined 既可能来自缺少返回值，也可能来自缺少数据；要结合来源判断。

## 1. 函数类型

下面的类型表示：接收一个 number，并返回 string。

~~~ts
type Formatter = (value: number) => string;

const formatMinutes: Formatter = (value) => {
  return value + " 分钟";
};
~~~

参数 value 的类型可以从 Formatter 得到，这叫上下文类型推断。

## 2. 箭头函数与 return

只有单个表达式时可以省略花括号并自动返回：

~~~ts
const double = (value: number): number => value * 2;
~~~

写了花括号后必须明确 return：

~~~ts
const double = (value: number): number => {
  return value * 2;
};
~~~

在 map 回调中忘记 return，得到的会是一组 undefined。这是本日要多次识别的错误。

## 3. 回调、void 与参数形式

把函数传给另一个函数时，被传入的函数叫回调（callback）。

~~~ts
type Reporter = (message: string) => void;
~~~

void 表示调用者不使用返回结果，常用于日志、事件或报告动作。

- 默认参数：没有提供参数时使用预设值。
- 可选参数：名字后写问号，函数内必须考虑 undefined。
- rest 参数：把剩余的多个参数收集成数组。

~~~ts
function sum(...values: number[]): number {
  return values.reduce((total, value) => total + value, 0);
}
~~~

## 4. 运行示例

~~~powershell
npm run beginner:example -- day12
~~~

## 5. 必做练习

### 练习 01：函数类型与箭头函数

修复 double，让函数类型表达的“number 输入到 number 输出”真正成立。

~~~powershell
npm run beginner -- day12 01
~~~

### 练习 02：找回 map 回调的 return

程序当前输出 undefined。不要改最终 console.log；检查 map 回调的大括号。

~~~powershell
npm run beginner -- day12 02
~~~

### 练习 03：默认、可选与 rest 参数

让称呼可选、标点有默认值，并正确累加任意个数字。

~~~powershell
npm run beginner -- day12 03
~~~

### 练习 04：void 回调迁移

检查温度数组，每次发现达到阈值的值就调用 reporter，同时返回警告数量。

~~~powershell
npm run beginner -- day12 04
~~~

查看单题答案：

~~~powershell
npm run beginner:solution -- day12 04
~~~

## 6. 容易出错的地方

- 写成 (value) => { value * 2 }，花括号中没有 return。
- 把 void 理解成“函数不能执行任何事情”；它只是说明返回值不供调用者使用。
- 在函数类型中省略参数名。正确形式是 (value: number) => string。
- 可选参数直接调用字符串方法，没有先提供默认值或检查 undefined。
- 把 rest 参数写成一个普通 number；rest 在函数内部是数组。
- 为相同逻辑写许多重载。官方建议能用联合或可选参数表达时，优先使用更简单的签名。

## 完成标准

- 四题全部 PASS。
- 能写出一个函数类型和匹配它的箭头函数。
- 能解释 map 回调为什么会产生 undefined。
- 能区分可选参数、默认参数和 rest 参数。
- 能把返回 number 的计算函数与返回 void 的报告回调组合起来。

## 官方资料

- [More on Functions：Function Type Expressions](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions)
- [More on Functions：Optional Parameters](https://www.typescriptlang.org/docs/handbook/2/functions.html#optional-parameters)
- [More on Functions：Rest Parameters](https://www.typescriptlang.org/docs/handbook/2/functions.html#rest-parameters-and-arguments)
- [More on Functions：void](https://www.typescriptlang.org/docs/handbook/2/functions.html#void)
