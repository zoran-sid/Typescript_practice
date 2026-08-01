# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day17/practice01/solution.ts)

本文件提供完整参考答案。`solution.ts` 的 `// 调用关系：` 注释把部分更新、预览对象和公开对象连成了实际运行链。

## 直接调用逻辑

1. `original` 和 `patch` 进入 `updateArticle`，spread 合并后返回 `updated`。
2. `updated` 的三个字段组成 `preview`；完整 `updated` 同时进入 `toPublicArticle`。
3. `toPublicArticle` 在运行时解构掉 `summary`，返回 `publicArticle`。
4. 输出从 `preview`、`publicArticle`、`statusLabels` 和 `statuses` 读取数据，而不是只依赖类型层声明。

完整实现位于 `solution.ts`，其中没有 TODO 或占位类型。
