# Day 02：数组、元组、对象与只读数据

## 今日目标

区分普通数组、`readonly` 数组和定长元组；为对象建立明确形状；理解“类型只读”和“运行时冻结”不是一回事。

## 来自主站的素材

- `src/lib/routes/gpx.ts:1-53` 定义路线点、端点、`RoutePoint[]` 和 `RoutePoint[][]`。
- `src/lib/routes/identity.ts:12-29` 使用 `[number, number, number]` 元组保存稳定采样。
- `src/lib/routes/display-geometry.ts:60-97` 通过 `map` 和对象展开创建显示数据，不覆盖原始 GPX。

## 核心讲解

`T[]` 与 `Array<T>` 等价。`readonly T[]` 阻止调用 `push`、`splice` 等修改方法，但只在编译期有效。元组 `[number, number]` 不只是“两个数字的数组”，它还能表达位置语义；MapLibre 坐标应明确为 `[lng, lat]`，而不是模糊的 `number[]`。

可选属性 `elevation?: number` 表示属性可能不存在。开启 `exactOptionalPropertyTypes` 后，“不存在”和“明确写入 undefined”更容易区分。

项目最重要的数据原则之一是：展示几何可以派生，但不能修改统计所依赖的源几何。这个原则正适合练习只读输入和不可变返回值。

## 动手任务

1. 实现 `toMapCoordinate`，注意顺序是经度在前、纬度在后。
2. 修复 `appendDisplayPoint` 对输入数组的原地修改。
3. 保持输入对象和数组未改变。

## 常见故障

- 用 `number[]` 表示坐标，导致经纬度顺序无法由类型说明。
- 把 `readonly` 强制断言回可写数组后修改。
- 只复制最外层数组，却继续修改嵌套对象。
- 把 `undefined` 当作数值参与计算，产生 `NaN`。

## 验收

```powershell
npm.cmd --prefix typescript_practice run day -- day02
```
