# Day 02：运算、显式转换和条件判断

预计用时：75–90 分钟。

来自输入框、网址或文件的数字经常先以文字形式出现。字符串 `"3"` 如果直接参与 `+`，可能产生拼接而不是加法。今天会建立“先转换、再计算、后判断”的顺序。

## 完成后你会做到

- 使用 `+`、`-`、`*`、`/` 完成数字运算。
- 解释为什么 `"3" + 2` 得到字符串 `"32"`。
- 使用 `Number(...)` 把数字文本显式转换为数字。
- 使用比较运算得到布尔值。
- 使用 `if` 根据条件更新程序状态。
- 理解类型正确不等于业务逻辑一定正确。

## 数字运算与字符串拼接

两个数字使用 `+` 时执行加法，只要一侧是字符串，就可能先转换为文字并拼接：

```ts
3 + 2;      // 5
"3" + 2;    // "32"
```

`-`、`*`、`/` 分别表示减、乘、除。括号可以明确计算顺序；初学阶段应优先写出清楚的括号。

## 先转换，再计算

```ts
const countText = "3";
const count = Number(countText);
const total = count + 2;
```

这里先把 `"3"` 转换成数字 `3`，再得到 `5`。如果写成 `Number("3" + 2)`，括号内部会先拼成 `"32"`，最后得到数字 `32`。最终类型虽然也是 `number`，业务结果却错了。

类型标注和类型断言都不会转换运行时的值；真正的转换必须调用 `Number(...)`。

## 比较与 `if`

比较表达式产生 `boolean`：

- `>`、`<`：大于、小于。
- `>=`、`<=`：包含边界的大于等于、小于等于。
- `===`、`!==`：严格相等、严格不等。

`if` 只在条件为 `true` 时执行花括号中的代码：

```ts
let status = "Keep learning";

if (total >= 5) {
  status = "Goal reached";
}
```

`status` 使用 `let`，因为满足条件时它会被重新赋值。

## 阅读完整示例

打开并右击运行 `example.ts`。按照“文字单价 → 数字单价 → 总价 → 比较 → 状态”的顺序逐行跟踪。可以临时改变判断阈值，先预测状态，再运行验证并恢复。

## 独立练习（从空文件开始）

在 `practice.ts` 中从零完成一个课程计划统计器。

固定数据和名称：

- `completedText` 保存字符串 `"3"`。
- `plannedLessons` 保存数字 `2`。
- `totalLessons` 保存转换并相加后的结果。
- `status` 初始保存 `"Keep learning"`。

程序要求：

1. 只对 `completedText` 调用 `Number(...)`，再与 `plannedLessons` 做数字加法。
2. 当 `totalLessons >= 5` 时，用 `if` 把 `status` 更新为 `"Goal reached"`。
3. 使用变量输出总课数和最终状态。

精确期望输出：

```text
Total lessons: 5
Status: Goal reached
```

限制：

- 不得把 `completedText` 的初始值改成数字。
- 不得写 `Number(completedText + plannedLessons)`。
- 不得把数字 5 或最终状态直接写进输出语句。
- 不得通过降低判断阈值来迁就错误结果。

完成标准：

- 能解释转换与加法的执行顺序。
- `totalLessons` 的运行时值是数字 5。
- 右击运行 `practice.ts`，两行输出完全一致。

## 常见错误

删除 `Number` 会再次发生拼接；把 `: number` 写在变量后只是在声明期望类型，不会转换值；若状态没有更新，应先检查总数是否真的是 5。

## 拓展思考（不要求写代码）

为什么 `Number(completedText + plannedLessons)` 最终也是 `number` 类型，TypeScript 却无法仅凭类型判断结果 32 不符合课程总数的业务含义？

## 参考答案

完成后再阅读 `solution.ts` 和 `SOLUTION.md`，重点比较括号放置位置和实际执行顺序。

## 官方资料

- [The Basics：静态类型检查与运行时行为](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
- [MDN：Number 转换](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [MDN：Addition 运算符](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Addition)
