# Day 07：数组方法与回调

预计用时：60–90 分钟。

Day 03 用 `for...of` 逐项处理数组。今天学习几种常见数组方法：它们会替你完成循环，但你仍要提供一个小函数，说明“每一项怎样处理”。这个小函数叫回调函数（callback）。

## 完成目标

- 能用 `map` 把每一项转换成新值。
- 能用 `filter` 保留满足条件的项。
- 能用 `find` 寻找第一项，并处理可能找不到的情况。
- 能读懂箭头函数 `(item) => ...`。
- 知道 `map` 回调仍然需要返回值。

## 今天暂时不学

不学习 `reduce`、异步回调和复杂链式调用。初学阶段宁可写两三个有名字的中间变量，也不要把所有操作挤成一行。

## 前置复习（8 分钟）

1. 函数的参数从哪里获得值？
2. `return` 与 `console.log` 有什么区别？
3. 对象数组中的一项可能长什么样？
4. `for...of` 怎样累计数组中的数字？

## 60–90 分钟安排

- 0–8 分钟：复习函数和对象。
- 8–30 分钟：分别学习 `map`、`filter`、`find`。
- 30–40 分钟：运行示例，预测三个新数组/值。
- 40–78 分钟：完成四道练习。
- 78–90 分钟：不看代码，说出三个方法各自回答的问题。

## 1. `map`：每一项变成什么

```ts
const numbers = [1, 2, 3];
const doubled = numbers.map((number) => number * 2);
```

箭头左边的 `number` 是本次处理的数组项，右边是返回的新值。结果是 `[2, 4, 6]`，原数组保持不变。

使用花括号时必须明确 `return`：

```ts
const doubled = numbers.map((number) => {
  return number * 2;
});
```

## 2. `filter`：哪一些要保留

```ts
const large = numbers.filter((number) => number >= 2);
```

回调返回 `true` 的项被放进新数组，返回 `false` 的项被排除。

## 3. `find`：第一项在哪里

```ts
const found = numbers.find((number) => number === 2);
```

找到时得到那一项；找不到时得到 `undefined`。因此不能假定结果一定存在：

```ts
if (found !== undefined) {
  console.log(found);
}
```

Day 08 会学习更简洁的安全访问写法。

## 运行完整示例

```powershell
npm run beginner:example -- day07
```

先预测把折扣从 `0.9` 改为 `0.5` 后三行分别怎样变化，再运行验证。

## 必做练习

```powershell
npm run beginner -- day07 01
npm run beginner -- day07 02
npm run beginner -- day07 03
npm run beginner -- day07 04
```

- 01：再次练习 `return`，这次它在 `map` 回调里。
- 02：用布尔条件筛选偶数。
- 03：查找对象，并安全处理找不到的可能。
- 04：组合 `filter`、`map` 和 `for...of` 完成订单报告。

全部检查：

```powershell
npm run beginner -- day07 all
```

答案示例：

```powershell
npm run beginner:solution -- day07 01
```

## 常见坑

- `map` 负责“转换”，不是“筛选”。
- 回调使用 `{}` 后漏写 `return`，结果会出现 `undefined`。
- `filter` 回调应回答 true/false，而不是返回要保留的对象。
- `find` 只返回第一项，而且可能返回 `undefined`。
- `forEach` 主要用于执行动作，不会像 `map` 一样生成结果数组。

## 完成标准

- 四道练习全部通过。
- 能用一句话分别说明 `map`、`filter`、`find`。
- 能解释为什么 `map` 的回调需要返回值。
- 面对 `find` 结果时会先考虑“如果没找到怎么办”。

## 官方资料

- [Everyday Types：Arrays](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)
- [MDN：Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)
