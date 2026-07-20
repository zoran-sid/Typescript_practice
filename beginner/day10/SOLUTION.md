# Day 10 参考答案说明

`TicketId` 和 `TopicInput` 允许两种输入，函数必须在使用某一类型的专属能力前收窄。`formatTicketId` 用 `typeof` 确认字符串，`describeTopics` 用 `Array.isArray` 确认数组。

`Contact` 是两个对象接口的联合。`"email" in contact` 为真时，参数收窄为 `EmailContact`；否则只剩 `PhoneContact`。每个分支只读取确定存在的专属属性。

`Priority` 只允许三个字面量。`priority === "high"` 把高优先级单独处理，其余两个合法值共享普通格式。整个答案没有用断言替代检查。

## 拓展思考参考方向

类型断言只影响编译器，不检查也不补充运行时对象。外部数据缺少 `email` 时，读取结果仍会是 `undefined`，更深访问还可能崩溃。运行时属性检查会实际观察当前值，并在检查成功的分支中同时给程序和类型系统依据；完整外部验证会在后续课程继续学习。
