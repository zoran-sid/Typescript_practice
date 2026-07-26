# DAY24 · Practice 03：订单 JSON 导入边界

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day24/practice03/practice.ts)
- 结构提示代码：[solution.ts](../../../day24/practice03/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

从 unknown JSON 中筛出合法订单并统计金额，拒绝字段类型错误的数据。

## 场景背景

电商运营每天会导入合作方提供的订单 JSON，入口数据可能包含正确订单，也可能把金额或其他字段写成错误类型。若错误订单进入统计，财务报表的订单量和收入都会被放大或缩小。你需要筛出合法订单，并给运营返回接受数、拒绝数和可以入账的总金额。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
订单 JSON 文本 ──> JSON.parse ──> parsed: unknown
                                      └── 数组 values
                                             ├── filter(isOrder) ──> orders
                                             │                        └── reduce ──> total
                                             └── values.length - orders.length ──> rejected
orders.length + rejected + total ──> 导入报告
```

## 要求

- 从空白文件完成本题需要的类型、函数、固定输入与输出。
- 不得导入其他 practice 文件夹。
- 计算必须来自参数和局部变量；函数用 return 交付结果。
- 保持原数据不变，并按流程图处理边界或状态。

## 精确期望输出

```text
Accepted orders: 2
Rejected orders: 1
Order total: 160
```

## 文件

在上方链接的 `practice.ts` 作答；完成后再查看 `solution.ts` 的 TODO 代码骨架与 `SOLUTION.md` 的解题结构；两者都不提供完整答案。
