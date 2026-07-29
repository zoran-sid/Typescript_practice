# DAY11 · Practice 02：通知投递决策

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day11/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day11/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

## 场景背景

通知服务会记录四类事件：消息正在排队、已经发送、临时失败后等待重试、永久拒绝。后台处理每条事件时要同时得到两个结果：

1. 一段给管理员看的说明文字。
2. 这条消息是否需要再次发送。

`queued` 只是等待第一次发送，不算重试；`sent` 已经成功；`retrying` 才需要再次发送；`rejected` 表示永久失败，不能再试。程序最后还要统计有多少条消息真正需要重试。

## 和 Practice 01 的区别

Practice 01 的 `describeTask` 每次只返回一个字符串。本题的 `decideDelivery` 每次返回一个对象，对象里同时有 `text` 和 `shouldRetry`。外层循环接住这个对象，用一个字段输出文字，用另一个字段累计重试数量。输入形状、函数返回值和返回值的后续用途都不同。

## 关联复习

这里会再次用到 Day07 的数组遍历，以及 Day09 的“函数返回命名对象类型”。状态专属字段必须先由判别联合收窄。统计重试数时读取函数返回的 `decision`，不要在循环里再复制一套 `status` 判断。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
events: DeliveryEvent[]
│
└── for...of ──> 当前 event
                  │
                  └── decideDelivery(event)
                      │
                      └── switch(event.status)
                          │
                          ├── queued
                          │   ├── id + channel ──> 排队说明
                          │   └── 业务规则 ──> 不重试
                          │
                          ├── sent
                          │   ├── id + channel + deliveredAt ──> 已发送说明
                          │   └── 业务规则 ──> 不重试
                          │
                          ├── retrying
                          │   ├── id + channel + retryAfterSeconds ──> 稍后重试说明
                          │   └── 业务规则 ──> 需要重试
                          │
                          └── rejected
                              ├── id + channel + reason ──> 永久拒绝说明
                              └── 业务规则 ──> 不重试

本分支的“说明 + 是否重试”
└── 合成一个 DeliveryDecision 对象

函数返回的整个对象 ──> decision
                         ├── decision.text
                         │      └── console.log 输出本条说明
                         │
                         └── decision.shouldRetry
                                ├── true  ──> retryCount 加 1
                                └── false ──> retryCount 保持不变

循环结束 ──> retryCount ──> 输出“需要重试”的总数
```

## 要完成的功能

### 第一步：把渠道、输入和输出分别取名

本题必须在文件顶层单独声明 `Channel`。为了让输入和输出一眼能分开，下面继续使用教程统一名称 `DeliveryEvent` 和 `DeliveryDecision`；这两个名称可以换成其他含义清楚的名字，但它们仍应是两份分开的类型。

```ts
type Channel = /* TODO：三个渠道字符串组成的联合类型 */;

type DeliveryEvent =
  | { status: "queued"; /* TODO：公共字段 */ }
  | { status: "sent"; /* TODO：公共字段和发送时间 */ }
  | { status: "retrying"; /* TODO：公共字段和等待秒数 */ }
  | { status: "rejected"; /* TODO：公共字段和拒绝原因 */ };

type DeliveryDecision = {
  text: /* TODO：说明文字的类型 */;
  shouldRetry: /* TODO：是否重试的类型 */;
};
```

补全时按下面的字段要求写：

- `Channel` 只允许 `"email"`、`"sms"`、`"push"`。
- 四种事件都有字符串 `id`，并且 `channel` 的类型必须写成 `Channel`。
- `sent` 另外有字符串 `deliveredAt`。
- `retrying` 另外有数字 `retryAfterSeconds`。
- `rejected` 另外有字符串 `reason`。
- `DeliveryDecision` 的 `text` 是字符串，`shouldRetry` 是布尔值。

把三个渠道直接写进每个事件成员，在 TypeScript 中也合法。本题把“单独声明 `Channel`，再让 `channel` 使用它”作为练习目标：以后新增渠道时只修改一处。

`DeliveryEvent` 描述传进函数的事件；`DeliveryDecision` 描述函数处理后交回的结果。两者不是同一层数据。

### 第二步：实现决策函数

沿用上面的教程名称时，函数签名写成：

```ts
function decideDelivery(
  event: DeliveryEvent,
): DeliveryDecision {
  // 在这里根据 event.status 完成 switch。
}
```

圆括号里的 `event: DeliveryEvent` 是输入要求。圆括号后面的 `: DeliveryDecision` 是返回值要求，不是第二次函数调用。每个 `case` 都要 `return` 一个对象，这个对象同时包含：

- `text`：根据当前事件字段生成的说明文字。
- `shouldRetry`：只有 `retrying` 分支为 `true`，另外三种状态都是 `false`。

实现 `assertNever(value: never): never`，并在 `default` 中把当前 `event` 交给它，用于检查是否漏掉状态。

### 第三步：让外层循环使用返回对象

循环里先调用一次函数，并让 `decision` 接住整个返回对象：

```ts
const decision = decideDelivery(event);
console.log(decision.text);

if (decision.shouldRetry) {
  // 在这里让 retryCount 增加 1。
}
```

这里没有第二个函数。`decideDelivery` 已经完成本条事件的状态判断；循环只使用它交回的决定，不要再写一次 `if (event.status === "retrying")`。

### 第四步：创建固定输入

创建事件数组（下面的数据流把它叫作 `events`），按顺序放入：

- `msg-1 / queued / email`
- `msg-2 / sent / sms / deliveredAt="10:30"`
- `msg-3 / retrying / push / retryAfterSeconds=30`
- `msg-4 / rejected / email / reason="地址无效"`

`retryCount` 从 `0` 开始。四项处理结束后，输出最终数量。

### 跟踪一次 `msg-3`

```text
msg-3 事件 ──> status 是 retrying
                └── 读取 retryAfterSeconds = 30
                    ├── 生成“稍后重试”说明
                    └── 得到“需要重试”的布尔判断
                         │
                         └── 两项结果合成一个对象
                             └── decision 接住整个对象
                                 ├── decision.text ──> 输出本条说明
                                 └── decision.shouldRetry 是 true
                                     └── retryCount 从 0 变成 1
```

## 约束

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 不得使用 `any`、类型断言，也不得把成员专属字段全部改成可选。
- 只有 `retrying` 分支的 `shouldRetry` 为 `true`；`rejected` 表示永久失败，不能计入重试。
- `default` 必须把当前事件交给 `assertNever`。
- 必须单独声明 `Channel`，并让事件的 `channel` 字段使用它。文档统一使用 `DeliveryEvent`、`DeliveryDecision`、`decideDelivery`、`events`、`retryCount`，方便你对照数据流；其他含义清楚的内部名称也可以通过检查。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

> **先看清代码符号和输出标点：** 函数参数和类型标注中的 `()`、`:` 必须使用英文半角符号；`Channel` 中也必须使用英文半角直引号 `"sms"`，中文弯引号 `“sms”` 是排版符号，不能作为 TypeScript 字符串的引号。输出里的中文标签使用 `：`，时间 `10:30` 使用英文半角冒号；它们都是字符串内容。运行器不会因输出中英文括号或冒号的全半角差异判你失败，但其他文字、数字和顺序仍要一致。

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
