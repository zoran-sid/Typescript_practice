# 解题结构

[返回题目](./README.md) · [打开 solution.ts](../../../day27/practice02/solution.ts)

本文件不提供完整答案。`solution.ts` 是可通过类型检查的 TODO 脚手架，只展示主要声明顺序、类型边界和待完成位置。

## 方案一：两个边界各自验证，再合并可信值

### 搭建顺序

1. 先用 `parseLesson` 把 API 的 `unknown` 转成可信课程或 `null`。
2. 再用 `valueAfter`、`parseMinutesOverride` 把 CLI 字符串转成数字或 `undefined`。
3. 只把两条边界的可信结果交给 `applyMinutesOverride`，并验证合法、非法两组参数。

### 类型与数据流

API unknown → Lesson/null；CLI 字符串 → number/undefined；Lesson + override → 新课程。

### 关键自检点

- `typeof value.minutes === "number"` 后还要检查有限、非负；CLI 还要检查整数与非空字符串。
- 无效覆盖应保留原课程分钟，不应制造 `NaN`，也不应修改原对象。

完成 TODO 后，请以本题 README 的精确输出和限制逐项自检；不要把显示结果直接写死。
