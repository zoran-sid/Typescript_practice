# DAY05 · Practice 02：配送时效评估

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day05/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day05/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

## 场景背景

配送看板要判断订单是否准时。A01 预计 30 分钟、实际 28 分钟；B02 预计 45 分钟、实际 55 分钟。两单遵守同一套规则，所以不应复制两段判断代码，而应让同一个函数分别处理两组参数。

评估函数只回答“这次配送结果是什么”，格式化函数再把配送编号放到结果前面。这样以后页面改显示格式时，不需要碰时效判断；规则改变时，也不必修改每个输出位置。

## 业务规则

- `actualMinutes <= estimatedMinutes`：返回 `"On time"`。
- 否则，计算 `actualMinutes - estimatedMinutes`，返回 `"Late by X minutes"`。

“刚好等于预计时间”仍算准时，这是本题的边界。

## 数据流

```text
30 + 28 ──> evaluateDelivery
               ├── 是否按时 ──> "On time" ───────────────> firstResult
               └── 超时分钟数 ──> "Late by ... minutes"
                                                           │
"A01" ──────────────────────────────────────────────────────┴──> createDeliveryLine ──> 第一行

45 + 55 ──> evaluateDelivery
               ├── 是否按时 ──> "On time"
               └── 超时分钟数 ──> "Late by ... minutes" ──> secondResult
                                                           │
"B02" ──────────────────────────────────────────────────────┴──> createDeliveryLine ──> 第二行
```

## 需要完成

- 声明 `evaluateDelivery(estimatedMinutes: number, actualMinutes: number): string`。
- 准时分支和超时分支都必须用 `return` 把字符串交回调用处。
- 声明 `createDeliveryLine(deliveryId: string, result: string): string`，只负责组合显示文字。
- 分别调用评估函数处理 `(30, 28)` 和 `(45, 55)`，把两个返回值保存下来。
- 把评估结果连同 `"A01"`、`"B02"` 交给格式化函数后输出。
- 本题独立运行，不导入 `practice01` 或其他练习。

## 为什么函数要接收参数

参数是每次调用临时交给函数的数据。第一次调用时，`estimatedMinutes` 是 30、`actualMinutes` 是 28；函数返回后这次局部数据结束。第二次调用会建立一组新的参数值 45 和 55。

如果函数直接读取外部的 `firstEstimatedMinutes`，它就很难复用到 B02；参数让规则不依赖某一张订单的变量名。

## `return` 在这里做了什么

`return` 不只是“结束函数”，还把结果交回调用处：

```ts
const result = evaluateDelivery(30, 28);
//                    函数返回的字符串 ──> result
```

`console.log` 只显示内容，不能代替返回值。若函数内部只打印而不 `return`，外面的 `result` 会是 `undefined`，也就无法继续交给 `createDeliveryLine`。

## 精确期望输出

```text
A01: On time
B02: Late by 10 minutes
```

## 和 Practice 01 的区别

Practice 01 把同一张账单依次交给三个数值函数，每个阶段产生下一阶段的输入。这里让一个带分支的函数复用两次，产生两种不同结果，再统一交给格式化函数。

## 写完后自检

- 如果调用 `evaluateDelivery(30, 30)`，应进入哪个分支？
- 如果第二单实际用时改成 40，超时分钟数和最终输出会怎样变化？
- 为什么把预计与实际时间作为参数传入，比让函数直接读取 A01 的外部变量更适合复用？

## 文件

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 结构和 `SOLUTION.md`。它们只提示步骤，不提供完整答案。
