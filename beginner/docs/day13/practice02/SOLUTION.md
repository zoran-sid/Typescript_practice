# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day13/practice02/solution.ts)

本文件提供完整参考答案。`solution.ts` 中的 `// 调用关系：` 注释把三次连续返回值连接成一条购物车更新链。

## 直接调用逻辑

1. `originalCart` 先进入 `updateQuantity(..., "KB", 3)`，返回值保存为 `withKeyboardUpdated`。
2. 上一步结果再次进入 `updateQuantity(..., "MS", 0)`；数量为零的分支用 `filter` 移除鼠标。
3. `withoutMouse` 进入 `applyCoupon`，`updatedCart` 接住最终新对象。
4. 两份购物车分别进入 `findQuantity`，返回的新旧键盘数量与商品数、优惠券一起输出，确认原数据未变、连续更新都被保留。

完整实现位于 `solution.ts`，其中没有 TODO 或占位返回值。
