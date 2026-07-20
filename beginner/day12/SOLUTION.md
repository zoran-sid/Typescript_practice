# Day 12 参考答案说明

## 解题路线

`ScoreFormatter` 保存“数字输入到字符串输出”的关系，`formatScore` 在花括号函数体里明确 `return`。`Reporter` 返回 `void`，因为报告器的调用者只关心它产生的展示动作。

`greetStudent` 同时演示可选称呼与默认标点：`title ?? "同学"` 处理缺席值，默认参数处理省略的标点。`sumScores` 用 rest 收集多个数字。`reportScores` 调用两个回调完成格式化和报告，但仍用 `return` 把及格数量交给外部。

## 易错点

`console.log` 的返回值不能代替计算结果。写了花括号的箭头函数不会自动返回；可选参数在处理前仍含 `undefined`；rest 参数进入函数后是数组。

## 拓展思考参考方向

异步报告器应返回 `Promise<void>`。`reportScores` 也要成为返回 `Promise<number>` 的 `async` 函数，并明确等待每次报告；若各次保存互不依赖，可以收集 Promise 后使用 `Promise.all`。
