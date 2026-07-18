# Day 05 参考答案说明

## 01 使用参数

模板字符串中的 `${name}` 会放入本次调用收到的名字。写死问候语会让函数失去复用价值。

## 02 `return` 与显示

答案删除函数内部的 `console.log`，直接 `return value * 2`。终端只由调用函数的那一行输出一次。

## 03 不修改外部状态

`addPoints` 只返回 `current + bonus`。外部的 `points` 使用 `const`，两次相同输入会得到相同结果。

## 04 小函数组合

小计负责乘法，优惠函数负责规则，应付金额负责相减。每个函数只有一个清楚职责，较容易测试。

```powershell
npm run beginner:solution -- day05 04
```
