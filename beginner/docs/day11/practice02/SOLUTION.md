# 解题结构

[返回题目](./README.md) · [打开 solution.ts](../../../day11/practice02/solution.ts)

本文件不提供完整答案。对应的 `solution.ts` 只保留可通过类型检查的 TODO 脚手架，请先独立作答，再用这里检查思路。

## 方案一

1. 先单独声明 `Channel`、`DeliveryEvent`、`DeliveryDecision`。`DeliveryEvent` 是函数输入，`DeliveryDecision` 是函数输出。
2. 让每个投递事件进入 `decideDelivery`，先按 `status` 收窄。
3. 每个分支只 `return` 一次，交回一个同时含有 `text` 和 `shouldRetry` 的对象。
4. 外层循环用 `decision` 接住整个对象，再分别读取两个字段：`text` 用于输出，`shouldRetry` 用于计数。
5. `default` 只负责把遗漏状态交给 `assertNever`。

函数签名这样读：

```ts
function decideDelivery(
  event: DeliveryEvent, // 输入对象必须符合 DeliveryEvent
): DeliveryDecision {  // return 的对象必须符合 DeliveryDecision
  // TODO：按 status 返回对象。
}
```

`: DeliveryDecision` 只是返回类型，不是第二层函数。真正的数据移动顺序是：

```text
event ──> decideDelivery(event)
             └── return 一个对象
                    └── decision 接住对象
                           ├── decision.text ──> 输出
                           └── decision.shouldRetry ──> 计数
```

## 关键检查点

- 发送时间、等待秒数和拒绝原因只能在拥有该字段的分支读取。

- `queued` 是等待第一次发送，`retrying` 才是需要再次发送。

- `rejected` 是永久失败，不等于“稍后重试”。

- 统计逻辑读取函数交回的 decision，不再重复检查原事件状态。

- 把渠道联合直接写进每个事件成员也能通过 TypeScript；本题要求单独声明 `Channel`，是为了只维护一份渠道规则。
