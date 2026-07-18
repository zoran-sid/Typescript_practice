# Day 15 参考答案说明

## 练习 01

Item 同时出现在数组、fallback 和返回类型中，所以三者必须一致。答案用 fallback 初始化 last，再遍历覆盖；空数组没有迭代，正好返回 fallback，也不需要非空断言。

## 练习 02

两个类型参数分别保存两个输入的位置关系。修改返回类型为 [Key, Value] 后，返回值也必须是 [key, value]。元组顺序是类型的一部分。

## 练习 03

Box<Value> 让 value 随调用变化，label 始终是 string。泛型只负责需要保持的类型关系，普通参数仍必须按业务正确返回。

## 练习 04

repeat 不需要知道 Item 是 string 还是 number，只需要把收到的同一个值放入 Item[]。循环次数属于运行时逻辑，TypeScript 不会自动修复“只重复一次”的业务错误。
