# Day 31 参考思路

完整答案在 `solution.ts`。

- evenNumbers 只在当前值为偶数时 yield，没有预先建立结果数组。
- createCountdown 的可迭代对象每次创建一个带独立 current 状态的迭代器；先保存本次 value，再递减。
- bigint 的递增量也是 bigint；进入 JSON 前显式变成字符串。

## 拓展思考方向

无限序列只能由“取有限个后停止”的消费逻辑安全处理。直接展开、Array.from 或没有 break 的 for...of 会不断请求下一个值，既无法结束也会持续占用资源。
