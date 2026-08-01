# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day15/practice02/solution.ts)

本文件提供完整参考答案。`solution.ts` 的 `// 调用关系：` 注释区分了通用函数返回的缺席值和页面选择的展示文字。

## 直接调用逻辑

1. 三个数组分别进入 `firstOrUndefined`，函数只返回 `items[0]`。
2. 非空调用得到字符串或数字，空数组调用得到 `undefined`。
3. 调用处用 `?? "暂无"` 决定展示内容，通用函数不写入业务文案。
4. `labelValue` 返回 `course` 对象，输出读取其 `label` 和 `value`。

完整实现位于 `solution.ts`，其中没有 TODO 或占位返回值。
