# Day 05：函数——输入、处理、输出

预计用时：60–90 分钟。

函数可以把一段工作取名并重复使用。今天从零认识参数和返回值，并重点区分“把结果交还给调用者”和“把文字显示在终端”。

## 完成目标

- 能声明一个带参数类型和返回值类型的函数。
- 理解参数是函数的输入，`return` 是函数的输出。
- 理解 `console.log` 只负责显示，不会代替 `return`。
- 能让计算函数只依赖参数，避免意外修改外部变量。

## 今天暂时不学

不学习回调、泛型、函数重载和类方法。它们都建立在今天的基础上。

## 前置复习（8 分钟）

1. `"3"` 怎样转换为数字 `3`？
2. “至少 100”应该使用 `>` 还是 `>=`？
3. `true && false` 的结果是什么？
4. 为什么优惠最高的分支通常写在前面？

## 60–90 分钟安排

- 0–8 分钟：复习 Day 04。
- 8–28 分钟：阅读参数、返回值和作用域。
- 28–38 分钟：运行并改动完整示例。
- 38–75 分钟：完成四道练习。
- 75–90 分钟：对照答案，口头解释每个函数的输入和输出。

## 1. 参数是输入

```ts
function add(left: number, right: number): number {
  return left + right;
}
```

调用 `add(2, 3)` 时，`left` 得到 `2`，`right` 得到 `3`。

参数名称应描述含义。`calculatePrice(quantity, unitPrice)` 比 `calculatePrice(a, b)` 更容易阅读。

## 2. `return` 把结果交回去

```ts
function double(value: number): number {
  return value * 2;
}

const answer = double(4);
```

`answer` 会得到 `8`。相比之下，`console.log(8)` 只是把 8 显示出来，调用者拿不到这个结果继续计算。

## 3. 局部变量与外部变量

函数内部声明的变量通常只在函数内部存在。计算函数优先从参数取得数据并返回新结果：

```ts
function addBonus(points: number, bonus: number): number {
  return points + bonus;
}
```

这样用相同输入调用两次会得到相同结果，也不会悄悄改变外面的状态。

## 运行完整示例

```powershell
npm run beginner:example -- day05
```

把桌面的宽、高改成其他数字；再把 `createLabel` 中的文字顺序改掉，观察“计算”和“显示格式”是两个不同函数。

## 必做练习

```powershell
npm run beginner -- day05 01
npm run beginner -- day05 02
npm run beginner -- day05 03
npm run beginner -- day05 04
```

- 01：把参数真正用于问候语。
- 02：修复 `console.log` 与 `return` 的混淆。
- 03：把会修改外部变量的函数改成纯计算。
- 04：把账单拆成小计、优惠和应付金额。

全部检查：

```powershell
npm run beginner -- day05 all
```

查看某题答案：

```powershell
npm run beginner:solution -- day05 02
```

## 常见坑

- 函数内部打印了正确数字，不表示函数返回了这个数字。
- 遇到 `return` 后，本次函数调用立即结束。
- 漏写返回路径时，函数可能得到 `undefined`。
- 参数顺序具有含义，数量和单价不要反过来传。
- 无意修改外部变量会让同一次调用得到不同结果。

## 完成标准

- 四道练习全部通过。
- 能指出每个函数的输入、处理和输出。
- 能解释为什么 `console.log(value * 2)` 不能替代 `return value * 2`。
- 能把一段三步计算拆成至少两个小函数。

## 官方资料

- [Everyday Types：Functions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions)
- [More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)
