# Day 31（选修）｜迭代协议、生成器与 `bigint`

数组能被 `for...of` 和展开语法消费，是因为它实现了迭代协议。生成器让按需产生序列更简洁；`bigint` 则用于普通 number 无法精确表示的超大整数。

建议用时：60–90 分钟。

## 今天会学到

- 区分 iterable 与 iterator；
- 理解 `[Symbol.iterator]()`、`next()` 和 IteratorResult；
- 用 `function*`、`yield` 惰性产生值；
- 安全计算并序列化 bigint。

## 核心讲解

可迭代对象提供 `[Symbol.iterator]()`，它返回迭代器；迭代器的 `next()` 每次返回 `{ done, value }`。生成器自动管理这套状态，每次执行到 `yield` 暂停，下次请求再继续。

生成器默认是一次消费的迭代器；要重新遍历就重新调用生成器函数。小数据且需要多次 map/filter 时，数组通常更直观。

bigint 字面量以 `n` 结尾，不能与 number 直接混算。原生 `JSON.stringify` 不支持 bigint，进入 JSON 前通常转换成字符串，并在读取边界明确转换回来。

## 独立练习（从空文件开始）

从零完成“惰性序列与大整数”程序。

必须名称：`evenNumbers`、`createCountdown`、`currentId`、`nextId`、`jsonText`。

需求：

1. `evenNumbers(start, end)` 是 `Generator<number, void, unknown>`，逐个检查闭区间，只 yield 偶数；用 1 到 6。
2. `createCountdown(start)` 返回 `Iterable<number>`，内部手写 `[Symbol.iterator]` 和 `next()`；第一次产出 start，到 1 后结束；用 3。
3. `currentId` 为 `9_007_199_254_740_993n`，用 bigint 的 1 递增。
4. 把 nextId 转成字符串后放入 `{ id }` 再 JSON.stringify。

精确输出：

```text
偶数: 2, 4, 6
倒计时: 3, 2, 1
下一个编号: 9007199254740994
JSON: {"id":"9007199254740994"}
```

限制：不使用 `any`；偶数生成器不能先创建完整结果数组；不能混合 number 与 bigint 运算，也不能直接 stringify bigint。

完成标准：右击运行 `practice.ts` 后输出完全一致；能画出 iterable → iterator → next → result 的关系，并解释惰性执行。

## 常见错误

- 混淆 iterable 与 iterator；
- 手写迭代器第一次就少 1；
- 把 yield 当普通 return；
- 写 `currentId + 1`；
- 直接 `JSON.stringify(nextId)`。

## 拓展思考（不要求写代码）

如果序列没有终点，哪些消费方式仍可能安全，哪些写法（例如直接展开成数组）会导致程序无法结束？

## 官方资料

- [Iterators and Generators](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)
- [Symbols 与 Symbol.iterator](https://www.typescriptlang.org/docs/handbook/symbols.html#symboliterator)
- [BigInt](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#bigint)
