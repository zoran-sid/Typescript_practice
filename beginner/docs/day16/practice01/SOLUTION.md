# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day16/practice01/solution.ts)

本文件提供完整参考答案。`solution.ts` 中的 `// 调用关系：` 注释标出了对象、键与返回字段类型之间的对应关系。

## 直接调用逻辑

1. 第一门课程进入 `describeId`，数字 `id` 被组合成 `idDescription`。
2. 同一份 `courses` 分别和 `"title"`、`"score"` 进入 `pluck`，`map` 返回两个不同元素类型的数组。
3. `settings` 和 `selectedSetting` 进入 `getProperty`，返回该键对应的值。
4. 四个结果变量分别进入输出；不存在任意字符串索引或类型断言。

完整实现位于 `solution.ts`，其中没有 TODO 或占位函数。
