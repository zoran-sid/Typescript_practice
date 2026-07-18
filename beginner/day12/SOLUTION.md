# Day 12 参考答案说明

## 练习 01

NumberOperation 要求输入和输出都是 number。原函数虽然类型正确，却只是原样返回。箭头函数体中的 return value * 2 才完成“加倍”行为。

## 练习 02

花括号中的字符串表达式会被计算后丢弃。没有 return 的回调返回 undefined，所以 map 得到的是 undefined 数组。两个分支都明确 return 后，labels 才是 string[]。

## 练习 03

title?: string 表示调用者可以不传，函数内看到的是 string | undefined。答案用空值合并给出“同学”。punctuation 有默认值，省略时使用感叹号。rest 参数 values 在函数内是 number[]，需要累加值而不是返回数组长度。

## 练习 04

Reporter 的返回类型是 void，因为调用者只关心它产生的报告动作。inspectTemperatures 仍返回 number，供外部输出总数。一个函数可以同时调用 void 回调和计算自己的返回值。
