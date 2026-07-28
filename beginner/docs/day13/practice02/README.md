# DAY13 · Practice 02：购物车的更新、删除与不变分支

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day13/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day13/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

## 场景背景

购物车状态可能还被结算预览和撤销功能引用，因此数量修改不能污染旧对象。同一个 `nextQuantity` 参数有三种含义：正数表示更新数量，`0` 表示移除商品，负数或不存在的 SKU 表示拒绝这次操作并保留原购物车。数量处理完成后还要不可变地加入优惠券。

## 和 Practice 01 的区别

Practice 01 对一份资料执行预先确定的多层字段更新。本题的数组更新由输入决定：`map` 更新、`filter` 删除或直接返回原对象三条路径必须分开，之后再串联一次优惠券更新。

## 关联复习

正数分支复用 Day07 的 `map`，删除分支复用 `filter`，但两者都要遵守本日的不可变更新规则。最后的可选 `coupon` 也会用到 Day08 对“缺席值”的理解。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
originalCart + sku + nextQuantity ──> updateQuantity
   ├── nextQuantity < 0 / sku 不存在 ──> 原 cart
   ├── nextQuantity === 0 ──> filter ──> 新 items
   └── nextQuantity > 0 ──> map ──> 目标商品新对象

数量更新结果 + "TS20" ──> applyCoupon ──> updatedCart
originalCart + updatedCart ──> 对照输出
```

## 要完成的功能

- `CartItem`：`readonly sku`、`name`、`quantity`。
- `Cart`：`readonly id`、只读 `items` 数组、可选 `coupon`。
- `updateQuantity(cart, sku, nextQuantity): Cart`：
  - SKU 不存在或数量为负数时返回原 `cart`。
  - 数量为 `0` 时返回移除目标商品的新购物车。
  - 数量为正数时只替换目标商品，其他商品保留。
- `applyCoupon(cart, coupon): Cart`：返回带新优惠券的新购物车，不修改传入对象。
- 固定原购物车：`KB` 机械键盘数量 `2`，`MS` 鼠标数量 `1`。
- 先把 `KB` 改为 `3`，再把 `MS` 改为 `0`，最后应用 `TS20`。

## 约束

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 不得使用 `any`、类型断言、`push`、`splice` 或直接属性赋值。
- 更新数量使用 `map`，删除商品使用 `filter`；不能先改原数组再复制。
- 被拒绝的操作不得制造看似成功的新状态。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
原商品数：2
新商品数：1
原键盘数量：2
新键盘数量：3
优惠券：TS20
```

完成标准：右键运行显示 PASS；原购物车保持两项且键盘数量仍为 `2`，新购物车只剩一项、数量为 `3` 并带 `TS20`。

## 写完后自检

- 把 `nextQuantity` 改成 `-1`，函数应返回原引用还是一个内容相同的新对象？为什么？
- 用不存在的 SKU 调用更新函数后，后续 `applyCoupon` 还能否独立创建新状态？
- 为什么数量为 `0` 使用 `filter`，正数使用 `map`？如果统一用直接赋值，会破坏哪份历史数据？

## 文件

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 解题结构。
