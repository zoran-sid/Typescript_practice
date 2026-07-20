# Day 02 参考答案说明

程序先保存原始字符串 `"3"` 和数字 `2`。关键表达式是：

```ts
const totalLessons = Number(completedText) + plannedLessons;
```

调用 `Number(completedText)` 后，左侧已经是数字 3，因此接下来的 `+` 执行数字加法并得到 5。若把整个加法都放进 `Number(...)`，字符串拼接会先发生。

`status` 使用 `let`，先保存默认文字。比较 `totalLessons >= 5` 得到 `true` 后，`if` 才把它更新为目标状态。输出语句读取计算结果和最终状态，没有把答案写死。

## 拓展思考参考方向

TypeScript 能确认 `Number(...)` 的返回类型是 `number`，却不知道“已完成课数加计划课数应该是 5”这条业务事实。32 在类型上仍是合法数字，因此还需要正确的计算顺序、测试数据和输出验收来发现逻辑错误。
