# Day 05 · Practice 02 解题结构提示

[返回题目](./README.md) · [打开 solution.ts](../../../day05/practice02/solution.ts)

> 本文件不提供完整答案。这里只给函数边界和调用顺序，核心表达式与返回文字仍需完成。

## 一个函数只承担一种变化

`evaluateDelivery` 把两个数字变成一条评估结果；`createDeliveryLine` 把编号和评估结果变成显示文字：

```text
number + number ──> evaluateDelivery ──> string
string + string ──> createDeliveryLine ──> string
```

格式化函数不应该重新判断超时，否则同一条业务规则会散落在两个函数里。

## 两次调用互不干扰

每次调用 `evaluateDelivery(...)` 都会创建本次调用自己的参数和局部变量。A01 返回 `"On time"` 后，第二次调用会用 B02 的 45 和 55 重新计算；它不会沿用第一次的 `delayMinutes`。

## TODO 应怎样推进

1. 在评估函数中算出超时差值，并得到“是否按时”的布尔值。
2. 准时分支直接返回对应文字。
3. 只有超时时才把差值放进返回文字。
4. 在格式化函数中组合编号和结果。
5. 保留两个调用结果，再分别输出。

## 常见错误示例

```ts
function evaluateDelivery(...): string {
  console.log("On time");
}
```

打印只把文字送到终端，没有把值交给调用处，而且声明为 `string` 的函数也缺少返回值。

```ts
const delayMinutes = estimatedMinutes - actualMinutes;
```

超时时这会得到负数。先问清楚业务含义：“实际时间比预计时间多多少”，再确定减法顺序。
