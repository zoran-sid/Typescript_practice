# Day 25 参考思路

完整答案在 `solution.ts`。

- `updateById` 的约束保证可读取 id，同时让回调与返回数组保留具体实体类型。
- `map` 创建新数组；命中项展开成新对象；未命中项复用旧引用。
- `filter` 已创建新数组，因此随后 `sort` 不会修改调用者数组。
- `Record<TaskStatus, number>` 明确列出三种状态，再按 `counts[task.status]` 累加。

## 拓展思考方向

至少复制数组、目标任务、`details` 对象和 `notes` 数组四层。原则是沿着被修改值到根对象的整条引用路径逐层创建新值。
