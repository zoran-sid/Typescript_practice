# Day 18 参考思路

## 练习 01

通过 `this.minutes` 访问当前计时器的私有字段。检查 `minutes > 0` 后再累加，最后的方法只负责把当前状态格式化成字符串。

## 练习 02

`implements ProgressSummary` 要求类提供 `getSummary(): string`。`completed` 只能在类内部更新，`course` 创建后不可重新赋值；第三次完成不应超过总数。

## 练习 03

普通方法的 `this` 由调用方式决定。`formatter.format(...)` 有接收者，`detachedFormat(...)` 没有。箭头函数字段在实例创建时捕获当前 `this`，所以单独传递后仍能访问 `prefix`。另一种办法是显式 `bind(formatter)`，但回调场景常用箭头函数字段。

## 选择类还是函数

- 只有数据：优先 `type`/`interface` 加普通对象。
- 输入进去、结果出来：优先纯函数。
- 多个实例各自长期保存并保护状态：类可能合适。
- 一个对象只是“使用”另一个能力：先考虑组合，而不是继承。
