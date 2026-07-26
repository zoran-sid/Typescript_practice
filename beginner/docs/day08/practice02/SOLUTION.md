# Day 08 · Practice 02 解题结构提示

[返回题目](./README.md) · [打开 solution.ts](../../../day08/practice02/solution.ts)

> 本文件不提供完整答案。`solution.ts` 中的查找、安全电话访问及 0/空字符串处理仍是 `TODO`。

## 标准结构

联系人数组允许电话缺失，`find` 又让整个联系人可能缺失。因此姓名和电话都应从可选链开始，随后由 `??` 产生显示值。分数与昵称是独立的两组反例，用于验证 `??` 不会错误替换 0 和空字符串。

## 自检

- 联系人类型中的 `phone` 带 `?`。
- 不直接访问 `selectedContact.phone`。
- 后备值只处理 `null` / `undefined`。
- 昵称输出能明确看见空字符串仍被保留。