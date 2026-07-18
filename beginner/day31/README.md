# Day 31（选修）：迭代协议、生成器与 `bigint`

预计用时：60–90 分钟。

数组能被 `for...of` 遍历，也能用展开语法变成另一个数组。这不是数组独有的魔法：JavaScript 规定了一套“每次给我下一个值”的迭代协议。生成器（generator）是编写这种按需序列的简洁方式。本课最后还会认识适合超大整数的 `bigint`。

## 适合什么时候学

完成泛型、模块、严格空值检查后再学。普通列表优先使用数组；只有数据很大、按需产生、需要自定义遍历顺序时，迭代器和生成器才更有价值。

## 完成目标

- 区分 iterable（可迭代对象）与 iterator（迭代器）。
- 知道 `[Symbol.iterator]()` 返回带 `next()` 的迭代器。
- 能用 `function*` 和 `yield` 按需产生值。
- 能把可迭代对象交给 `for...of` 或展开语法。
- 能安全使用 `bigint`，并理解它与 `number`、JSON 的边界。

## 今天暂时不学

不学习异步生成器、`Symbol.asyncIterator`、无限流的复杂取消机制和迭代器辅助方法。它们应在真实需求出现时再学。

## 前置复习（8 分钟）

1. `for...of` 取得数组的值还是索引？
2. `[...items]` 会产生什么？
3. 泛型 `Iterable<number>` 中的 `number` 表示什么？
4. `Number.MAX_SAFE_INTEGER` 之后，普通 `number` 为什么可能无法精确表示每个整数？

## 60–90 分钟安排

- 0–8 分钟：前置复习。
- 8–25 分钟：可迭代对象与迭代器协议。
- 25–42 分钟：生成器、`yield` 与惰性执行。
- 42–52 分钟：`bigint` 规则与边界。
- 52–80 分钟：完成三道练习。
- 80–90 分钟：比较数组、生成器和手写迭代器的适用场景。

## 1. Iterable 与 Iterator 不是同一个角色

可迭代对象拥有一个特殊方法：

```ts
interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
}
```

`Symbol.iterator` 是 JavaScript 约定的唯一属性键。`for...of` 和展开语法会调用它，取得迭代器。

迭代器的 `next()` 每次返回一个结果：

```ts
{ done: false, value: 3 }
{ done: true, value: undefined }
```

`done: false` 表示还有一个值；`done: true` 表示序列结束。

## 2. 生成器简化迭代器状态

```ts
function* range(start: number, end: number): Generator<number, void, unknown> {
  for (let value = start; value <= end; value += 1) {
    yield value;
  }
}
```

调用生成器不会立即把所有结果计算出来。每次请求下一个值时，函数运行到 `yield` 暂停；再次请求时从暂停位置继续。这叫惰性执行。

返回类型中的三个位置分别表示：产出的值是 `number`、最终 `return` 值是 `void`、外界传回生成器的值是 `unknown`。

## 3. 什么时候使用

- 数据量大，不想一次创建完整数组。
- 序列可以按规则即时产生，例如范围、分页游标、树遍历。
- 自定义对象需要自然地支持 `for...of`。

如果数据很小而且需要多次 `map`、`filter`，数组通常更直观。

## 4. `bigint` 是另一种数字类型

```ts
const id = 9_007_199_254_740_993n;
const next = id + 1n;
```

- 字面量末尾的 `n` 表示 `bigint`。
- 不能直接计算 `1n + 1`，两边必须是同一种数值类型。
- `Math` 方法主要面向 `number`，不能直接用于 `bigint`。
- `JSON.stringify(1n)` 会抛错；序列化前通常转换成字符串，并在读取边界明确转换回来。
- `bigint` 适合精确大整数、计数器、超大标识，不适合小数。

## 运行完整示例

```powershell
npm run beginner:example -- day31
```

修改范围终点与倒计时起点，先预测输出。再把 `1n` 写成 `1`，阅读 TypeScript 为什么拒绝混合运算，然后恢复。

## 必做练习

```powershell
npm run beginner -- day31 01
npm run beginner -- day31 02
npm run beginner -- day31 03
```

- 01：用生成器只产出偶数。
- 02：修复手写 `[Symbol.iterator]` 的第一次 `next()`。
- 03：递增超大整数，并安全转换成 JSON 字符串。

全部检查：

```powershell
npm run beginner -- day31 all
```

答案示例：

```powershell
npm run beginner:solution -- day31 02
```

## 常见坑

- iterable 提供迭代器，iterator 的 `next()` 提供值。
- `yield` 暂停函数，不等同于普通 `return`。
- 生成器默认是一次消费的迭代器；需要重新遍历时重新调用生成器函数。
- 手写迭代器时很容易出现起点、终点和多减一次的边界错误。
- `number` 与 `bigint` 不能直接混合计算。
- 原生 JSON 不直接支持 `bigint`。

## 完成标准

- 三道练习全部通过。
- 能画出 iterable → iterator → `next()` → result 的关系。
- 能解释生成器为什么适合按需序列。
- 能说出 `bigint` 的一个适用场景和两个限制。

## 官方资料

- [TypeScript：Iterators and Generators](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)
- [TypeScript：Symbols 与 Symbol.iterator](https://www.typescriptlang.org/docs/handbook/symbols.html#symboliterator)
- [TypeScript 3.2：BigInt](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#bigint)
