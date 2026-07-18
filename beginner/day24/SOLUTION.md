# Day 24 参考思路

先自己根据终端提示修改练习。这里解释判断顺序，不建议整段复制。

## 练习 01

先检查 `state.status`，TypeScript 才知道当前分支拥有哪些字段。`doing` 分支可以读取 `startedAt`，`done` 分支可以读取 `completedAt`。`assertNever` 的参数只能接收 `never`；以后新增状态却忘记新增分支时，编译器会指出问题。

## 练习 02

验证顺序很重要：

1. 排除 `null` 并确认值是对象。
2. 检查普通字段的运行时类型。
3. 检查数字是否有限且不为负数。
4. 把嵌套的 `state` 交给另一个小验证器。

类型谓词 `value is StudyTask` 是函数在完成真实检查后向编译器作出的承诺，不是替代检查的魔法语法。

## 练习 03

`filter(isImportedTask)` 同时完成筛选和收窄，所得数组是 `ImportedTask[]`。拒绝数等于输入数减去接收数。这里再次写验证器，是为了间隔复习 `unknown`、`null` 与属性检查。

## 请用自己的话回答

- 为什么 `as StudyTask` 不能防止坏 JSON？
- 为什么 `typeof null === "object"` 会影响验证器？
- 如果任务状态新增 `cancelled`，哪些地方应该出现编译错误或验证失败？
