# Day 11 参考答案说明

请先独立尝试，再运行对应 solution。

## 练习 01

switch 检查 status 后，每个 case 都得到更具体的成员类型。paid 分支才能读取 amount，cancelled 分支才能读取 reason。pending 分支也应该使用对象自己的 orderId，而不是写死结果。

## 练习 02

原错误不是类型错误，而是业务分支返回了错误文字。类型正确不等于逻辑正确。答案同时加入 assertNever；新增 TaskState 成员后，default 中的 task 将不再是 never，检查器会指出漏掉的分支。

## 练习 03

三个图形的面积公式需要的字段不同。判别后再计算，既不需要可选属性，也不需要非空断言。

## 练习 04

success 已经收窄了联合，但 receiptId 自身仍是可选属性，所以类型仍包含 undefined。使用空值合并运算符提供“待生成”，比非空断言安全。declined 和 error 必须分别处理，不能合并成模糊的“尚未处理”。
