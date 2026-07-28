# DAY11 · Practice 02：通知投递决策

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day11/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day11/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

## 场景背景

通知服务会记录排队、已发送、等待重试和永久拒绝四类事件。每类事件带的数据不同：已发送事件有时间，重试事件有等待秒数，拒绝事件有原因。后台不仅要显示事件说明，还要统计真正需要再次投递的数量。

## 和 Practice 01 的区别

Practice 01 的每个任务只返回一行描述，`completed` 还处理可选分数。本题的分支要返回 `{ text, shouldRetry }` 两项决策，外层循环再累计重试数量；专属字段变成发送时间、等待秒数和拒绝原因。

## 关联复习

这里会再次用到 Day07 的数组遍历和 Day09 的对象字段读取，但状态专属字段必须先由判别联合收窄。统计重试数时读取函数返回的 decision，避免在循环中复制一套状态判断。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
events
   └── for...of ──> 当前 event
                         └── decideDelivery
                                └── switch(event.status)
                                       ├── queued ─────> text + false
                                       ├── sent ───────> text + false
                                       ├── retrying ───> text + true
                                       └── rejected ───> text + false
每个 decision.text ──> 逐行输出
decision.shouldRetry ──> retryCount ──> 汇总输出
```

## 要完成的功能

- `Channel` 为 `"email" | "sms" | "push"`。
- 判别联合 `DeliveryEvent` 包含 `queued`、`sent`、`retrying`、`rejected` 四种成员；共同字段为 `id`、`channel`。
- `DeliveryDecision` 包含 `text: string` 和 `shouldRetry: boolean`。
- `decideDelivery(event): DeliveryDecision` 使用 `switch` 读取各分支专属字段。
- `assertNever(value: never): never` 用于穷尽检查。
- 固定四项输入：
  - `msg-1 / queued / email`
  - `msg-2 / sent / sms / deliveredAt="10:30"`
  - `msg-3 / retrying / push / retryAfterSeconds=30`
  - `msg-4 / rejected / email / reason="地址无效"`

## 约束

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 不得使用 `any`、类型断言，也不得把成员专属字段全部改成可选。
- 只有 `retrying` 分支的 `shouldRetry` 为 `true`；`rejected` 表示永久失败，不能计入重试。
- `default` 必须把当前事件交给 `assertNever`。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
排队：msg-1 / email
已发送：msg-2 / sms / 10:30
稍后重试：msg-3 / push / 30 秒
永久拒绝：msg-4 / email / 地址无效
需要重试：1
```

完成标准：右键运行显示 PASS；四项事件都从各自分支产生文字，最终重试数来自 `shouldRetry`，新增联合成员时穷尽检查会提醒补分支。

## 写完后自检

- 把 `retryAfterSeconds` 改成 `0`，它仍属于重试事件还是应该被业务层拒绝？当前题目把哪一层规则交给了类型，哪一层仍需运行时判断？
- 新增 `cancelled` 状态却不补 `case` 时，哪处穷尽检查应先报错？
- 为什么 `rejected` 不能仅凭“也是失败”就把 `shouldRetry` 设为 `true`？判别字段如何帮助你保留这项业务区别？

## 文件

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 解题结构。
