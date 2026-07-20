# Day 01 参考答案说明

这一题用四个变量完成一份学习档案。`learnerName`、`courseName` 和 `isBeginner` 在程序中不重新赋值，因此使用 `const`；`completedLessons` 会更新两次，因此使用 `let`。

`"Lin"` 与 `"TypeScript"` 让 TypeScript 推断出 `string`，`0` 推断为 `number`，没有引号的 `true` 推断为 `boolean`。

```ts
completedLessons = completedLessons + 1;
```

这行会读取旧值、加 1，再把结果赋回同一变量。执行两次后，值依次从 0 变成 1、再变成 2。

最后四次 `console.log` 都使用模板字符串读取变量，所以输出能反映变量的真实值，而不是一段与程序状态无关的固定文字。

## 拓展思考参考方向

只需要把 `courseName` 改为 `let`，因为是否需要 `let` 取决于这个变量自身会不会重新赋值。其他变量不会因为同一个程序里有变量发生变化，就自动也需要 `let`。
