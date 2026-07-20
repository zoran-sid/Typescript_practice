# Day 24 参考思路

完整答案在 `solution.ts`。

- `TaskState` 让每个状态只能携带自己的合法字段，`describeState` 再按 `status` 收窄。
- `isRecord` 先排除 `null`，后续验证器才安全读取属性。
- `isTaskState` 负责嵌套对象，`isStudyTask` 组合基础字段、数字范围和状态验证。
- `importTasks` 把解析结果留在 `unknown`，只有验证通过的元素才进入 `StudyTask[]`。

## 拓展思考方向

新增 paused 时，联合类型要增加成员，`isTaskState` 要验证 `reason`，`describeState` 也要增加分支。编译器能提醒遗漏的联合分支，运行时验证器仍要人工同步，因为类型会被擦除。
