# Day 05：函数——输入、处理、输出

预计用时：60–90 分钟。

函数把一段工作取名，使它能够被重复调用。今天会把完整账单拆成几个小函数，并重点区分“把结果交还给调用者”的 `return` 和“把内容显示出来”的 `console.log`。

## 完成目标

- 声明带参数类型和返回值类型的函数。
- 理解参数是函数的输入，`return` 是函数的输出。
- 理解 `console.log` 只负责显示，不能代替 `return`。
- 使用局部变量组织计算。
- 让计算函数只依赖参数，不意外修改外部变量。

## 参数与返回值

```ts
function add(left: number, right: number): number {
  return left + right;
}
```

调用 `add(2, 3)` 时，两个参数分别得到 2 和 3。圆括号后的 `: number` 表示函数必须返回数字。

`return` 会把结果交回调用位置：

```ts
const answer = add(2, 3);
```

若函数内部只写 `console.log(left + right)`，终端虽然显示 5，`answer` 却得不到可继续计算的数字。显示和返回是两个不同动作。

## 局部变量与纯计算

函数内部声明的变量通常只在函数内部存在。计算函数应优先从参数取得所需数据并返回新结果，而不是悄悄修改函数外的变量：

```ts
function addBonus(points: number, bonus: number): number {
  return points + bonus;
}
```

相同输入会得到相同输出，这让函数更容易理解、复用和测试。

## 拆分一项完整工作

账单计算可以拆成：

1. 数量与单价产生小计。
2. 小计与会员状态产生优惠。
3. 小计减优惠产生应付金额。
4. 最外层代码负责显示结果。

每个函数只负责一个清楚动作，函数名和参数名应表达业务含义。

## 阅读完整示例

打开并右击运行 `example.ts`。指出 `calculateArea` 和 `createLabel` 各自的输入、返回类型与调用结果。临时把其中一个 `return` 改成 `console.log`，观察类型错误与额外输出，再撤销。

## 独立练习（从空文件开始）

在 `practice.ts` 中从零完成“会员账单”。

必须声明这些函数：

- `calculateSubtotal(quantity: number, unitPrice: number): number`：返回数量乘单价。
- `calculateDiscount(subtotal: number, isMember: boolean): number`：会员并且小计至少 100 时返回小计的 10%，否则返回 0。
- `calculateAmountToPay(subtotal: number, discount: number): number`：返回小计减优惠。

固定数据与名称：

- `quantity` 为 3。
- `unitPrice` 为 40。
- `isMember` 为 `true`。
- 调用结果依次保存为 `subtotal`、`discount`、`amountToPay`。

精确期望输出：

```text
小计: 120
优惠: 12
应付: 108
```

限制：

- 三个函数都必须明确标注参数类型和返回值类型。
- 计算函数内部不得调用 `console.log`。
- 函数不得读取或修改题目中的外部变量。
- 不得把 120、12、108 直接写入输出语句。
- 只在所有计算完成后输出三行。

完成标准：

- 能指出每个函数的输入和返回值。
- 相同参数重复调用函数会得到相同结果。
- 右击运行 `practice.ts`，没有额外日志且三行完全一致。

## 常见错误

函数中打印了数字不等于返回数字；漏掉某个分支的 `return` 可能得到 `undefined`；把数量和单价的参数顺序调换会改变含义；读取外部变量会让函数难以复用。

## 拓展思考（不要求写代码）

如果 `calculateSubtotal` 内部把 120 打印出来却没有 `return`，为什么后面的 `calculateDiscount(subtotal, isMember)` 仍然无法得到正确的小计？

## 参考答案

完成后再阅读 `solution.ts` 与 `SOLUTION.md`，重点比较函数边界，而不只比较最终数字。

## 官方资料

- [Everyday Types：Functions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions)
- [More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)
