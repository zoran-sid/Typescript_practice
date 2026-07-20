# Day 26 参考思路

完整答案在 `solution.ts`。

- `TaskRepository` 的边界返回 `unknown`，`parseTasks` 验证数组和每个任务。
- `loadDashboard` 在 try 中 await，成功和失败都转换成明确的 `LoadState`。
- `render` 按判别字段读取对应数据，不会组合出矛盾状态。
- 四条回归测试分别保护正常、空数组、坏数据和异步异常。

## 拓展思考方向

可在同一个 async 函数中写 `const [tasksValue, userValue] = await Promise.all([...])`，随后分别验证。若任何 Promise 拒绝或任一数据无效，应返回统一 failure；只有两者都验证成功才构造 success，避免半成功状态。
