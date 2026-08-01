# Practice 01 · 完整参考答案说明

[返回题目](./README.md)

[打开 solution.ts](../../../day10/practice01/solution.ts)

本文件提供完整参考答案。

## 直接调用逻辑

每组固定数据传入对应函数：编号 → `typeof` → return 格式化编号；主题 → `Array.isArray` → return 单项或列表；联系人 → `"email" in contact` → return 邮箱或电话；优先级 → 字面量判断 → return 提示文字。七个返回值直接交给七次 `console.log`。

先用运行时条件收窄，分支内才能安全使用该成员独有的属性或方法。
