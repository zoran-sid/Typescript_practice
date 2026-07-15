# Day 16：迭代器、生成器与 `Symbol`

## 今日目标

理解 Iterable / Iterator 协议、`Symbol.iterator`、生成器函数、惰性计算和迭代结束值，并用它遍历多段路线。

## 来自主站的素材

- `src/lib/routes/gpx.ts:31-53` 同时保存扁平 points 和分段 segments。
- `src/lib/routes/display-geometry.ts:85-97` 对每段独立处理，禁止跨缺口连线。
- `src/lib/routes/downsample.ts:49-61` 按段分配显示点数量。

## 核心讲解

对象实现 `[Symbol.iterator]()` 后即可被 `for...of`、展开和 `Array.from` 使用。Iterator 的 `next()` 返回 `{ done, value }`。生成器 `function*` 用 `yield` 简化状态保存，并天然实现 IterableIterator。

惰性迭代适合大数据或可能提前停止的流程；若每次都会完整遍历且需要随机访问，数组通常更简单。生成器不能消除路线分段语义：可以逐点读取，但显示连线仍必须按 segment 处理。

## 动手任务

1. 实现 `validRoutePoints`，按段 yield 合法经纬度，并 return 合法点数量。
2. 修复 `firstPoint`：当前错误地调用两次 next，跳过第一个元素。
3. 观察展开生成器后 return 的计数为何不会成为数组元素。

## 常见故障

- 把 Iterator 当数组重复消费；很多迭代器是一次性的。
- 忽略 `done`，把结束值当普通元素。
- 为简单小数组增加不必要的生成器层。
- 扁平遍历后误以为可以连接跨段点。

## 验收

```powershell
npm.cmd --prefix typescript_practice run day -- day16
```
