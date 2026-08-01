# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day14/practice01/solution.ts)

本文件提供完整参考答案。`solution.ts` 的 `// 调用关系：` 注释说明每个导入值进入了哪次函数调用或输出。

## 直接调用逻辑

1. `Student` 通过 `import type` 约束本地 `student`，不参与运行。
2. `courseTitle` 和 `lessonCount` 直接进入课程概况输出。
3. `student` 进入 `summarizeStudent(student)`，返回摘要后输出。
4. 循环把两个分数依次交给 `formatScore`；最后输出导入的 `passingScore`。

完整实现位于 `solution.ts`，其中没有 TODO 或占位导入。
