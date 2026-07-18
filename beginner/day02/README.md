# Day 02：运算、显式转换和条件判断

预计用时：75–90 分钟。

今天解决一个非常常见的问题：看起来像数字的文字，仍然是字符串。程序从表单、网址或文件读取到 `"3"` 时，如果直接使用 `+`，结果可能是拼接而不是加法。

## 完成后你会做到

- 使用 `+`、`-`、`*`、`/` 完成基础运算。
- 解释为什么 `"3" + 2` 得到 `"32"`。
- 使用 `Number(...)` 显式把数字文本转换为数字。
- 使用比较运算得到布尔值。
- 使用 `if` 在条件满足时执行代码。
- 理解 TypeScript 类型检查不能自动纠正所有运行时逻辑错误。

今天暂时不学习函数、数组、异常或复杂数据验证。`Number("abc")` 的完整验证会在以后学习外部数据时处理。

## 建议时间安排

| 阶段 | 时间 |
| --- | ---: |
| 数字运算和字符串拼接 | 20 分钟 |
| 显式转换 | 15 分钟 |
| 比较与 `if` | 15 分钟 |
| 跟写实验 | 15 分钟 |
| 必做练习和排错 | 20 分钟 |
| 回顾 | 10 分钟 |

## 1. 相同的 `+`，两种不同含义

两个数字使用 `+` 时会做加法：

```ts
const total = 3 + 2;
console.log(total); // 5
```

只要有一侧是字符串，`+` 就可能把两边转换成文字后拼接：

```ts
const total = "3" + 2;
console.log(total); // 32
```

终端显示的 `32` 实际是字符串 `"32"`，不是数字三十二的计算过程。可以把它理解为把文字 `"3"` 与文字 `"2"` 首尾相接。

这不是 TypeScript 发明的行为，而是 JavaScript 运行时的规则。TypeScript 构建在 JavaScript 之上，所以必须理解这条基础规则。

## 2. 常用数字运算符

```ts
const addition = 8 + 2;       // 10
const subtraction = 8 - 2;    // 6
const multiplication = 8 * 2; // 16
const division = 8 / 2;       // 4
```

`-`、`*`、`/` 的含义比较明确；`+` 同时承担数字加法和字符串拼接，因此最容易出错。

括号可以明确计算顺序：

```ts
const result = (2 + 3) * 4; // 20
```

没有括号时，乘除通常先于加减。刚开始学习时，宁可使用清楚的括号，也不要依赖记忆复杂优先级。

## 3. 使用 `Number(...)` 显式转换

如果字符串确实表示数字，可以在运算前进行转换：

```ts
const countText = "3";
const count = Number(countText);
const total = count + 2;

console.log(total); // 5
```

关键顺序是：

```text
先转换 "3" → 3
再计算 3 + 2 → 5
```

下面的顺序看起来相近，结果却不同：

```ts
const wrong = Number("3" + 2);
```

括号里先得到字符串 `"32"`，然后 `Number("32")` 才把它转换成数字 `32`。TypeScript 看到最终结果确实是 `number`，因此不会报告类型错误，但业务结果仍然不正确。

这说明：

> 类型正确不代表所有逻辑都正确。类型检查与运行结果都需要验证。

## 4. 比较会产生布尔值

比较运算的结果是 `boolean`：

```ts
const total = 5;
const reachedGoal = total >= 5;

console.log(reachedGoal); // true
```

常见比较运算符：

| 运算符 | 含义 |
| --- | --- |
| `>` | 大于 |
| `<` | 小于 |
| `>=` | 大于或等于 |
| `<=` | 小于或等于 |
| `===` | 值和类型都相等 |
| `!==` | 值或类型不相等 |

初学时优先使用 `===` 和 `!==`，不要使用会进行隐式转换的 `==` 和 `!=`。

## 5. 使用 `if` 作出选择

`if` 后面的圆括号中需要一个条件。当条件为 `true` 时，花括号中的代码会运行：

```ts
const total = 5;
let status = "Keep learning";

if (total >= 5) {
  status = "Goal reached";
}

console.log(status);
```

`status` 使用 `let`，因为它可能在 `if` 中被重新赋值。

阅读时按这个顺序：

1. `status` 先保存默认文字。
2. 计算 `total >= 5`。
3. 如果结果是 `true`，更新 `status`。
4. 输出最后的值。

## 6. 跟写示例

打开 `beginner/day02/example.ts`。示例把商品单价文本转换为数字，计算总价，再根据总价设置状态。

运行：

```powershell
npm run beginner:example -- day02
```

### 修改实验一：观察类型

临时把：

```ts
const unitPrice = Number(unitPriceText);
```

改为：

```ts
const unitPrice = unitPriceText;
```

观察 VS Code 和运行器提供的类型信息。这里后面使用的是乘法，JavaScript 会尝试隐式转换，但让数字文本一直保留为字符串会让程序边界含糊。实验后撤销。

### 修改实验二：改变条件

把判断阈值从 `20` 改为 `30`，预测状态会怎样变化，再运行验证。实验后恢复原值。

## 7. 必做练习

打开 `beginner/day02/practice.ts`。当前代码中：

```ts
const totalLessons = Number(completedText + plannedLessons);
```

会先把 `"3"` 和 `2` 拼成 `"32"`，再转换成数字 `32`。

只修改这一行的括号位置，让程序：

1. 先把 `completedText` 转换为数字。
2. 再与 `plannedLessons` 相加。
3. 最终输出总数 `5` 和状态 `Goal reached`。

运行：

```powershell
npm run beginner -- day02
```

目标输出：

```text
Total lessons: 5
Status: Goal reached
```

## 8. 常见故障排查

### 直接删除 `Number(...)`

下面仍然会拼接：

```ts
const totalLessons = completedText + plannedLessons;
```

问题不是 `Number` 多余，而是转换发生得太晚。

### 给结果写 `: number` 不能转换值

类型标注只说明期望，不会把字符串自动变成数字：

```ts
const totalLessons: number = completedText + plannedLessons;
```

TypeScript 会拒绝这行代码。正确做法仍是明确调用 `Number(completedText)`。

### 状态没有更新

先检查 `totalLessons` 的实际输出。如果它不是 `5`，应先修复转换和加法，而不是修改 `if` 的阈值来迁就错误结果。

## 9. 完成检查

1. `"10" + 5` 的结果是什么？为什么？
2. `Number("10") + 5` 的结果是什么？
3. `Number("10" + 5)` 为什么会得到不同结果？
4. `total >= 5` 的结果是什么类型？
5. TypeScript 为什么没有发现本练习最初的 `32` 是逻辑错误？

## 10. 参考答案

完成后查看 `solution.ts` 和 `SOLUTION.md`，或运行：

```powershell
npm run beginner:solution -- day02
```

## 11. 与真实项目的联系（可选）

浏览器表单、HTML `dataset`、网址参数和 JSON 数据经常提供字符串。无论项目是博客、商店还是地图，都应该在数据进入计算前明确转换。这个通用原则比记住某个 Astro 文件名更重要。

## 官方资料

- [The Basics：静态类型检查与运行时行为](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
- [Everyday Types：常用基础类型](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [MDN：Number 转换](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [MDN：Addition 运算符](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Addition)
