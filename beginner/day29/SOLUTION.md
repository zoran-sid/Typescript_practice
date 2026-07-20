# Day 29 参考思路

完整答案在 `solution.ts`。

- `Flags` 遍历键但固定右侧为 boolean。
- `ElementOf` 在条件类型的数组结构内用 infer 提取元素。
- `Handlers` 用 `as` 重映射键，负载仍通过 `T[Key]` 精确关联。
- 品牌构造器先验证字符串，只在成功路径集中进行一次窄断言。

## 拓展思考方向

固定键到同一值类型通常可用 `Record`，Promise 解包可用内置 `Awaited`，挑选或删除属性可用 `Pick`、`Omit`。内置工具更熟悉、经过广泛检查，也能减少维护者误读复杂条件分发的风险。
