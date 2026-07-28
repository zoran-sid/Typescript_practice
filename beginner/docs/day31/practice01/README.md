# DAY31 · Practice 01：Day 31 · 迭代器、生成器与 bigint 独立综合题

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day31/practice01/practice.ts)
- 结构提示代码：[solution.ts](../../../day31/practice01/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

这是一道完整、独立的主练习。不要导入其他 practice 文件夹中的代码。

## 场景背景

后台任务服务要按需生成数字序列和倒计时，还要创建超过 JavaScript 安全整数范围的唯一编号并写入 JSON。输入边界包括给定闭区间、倒计时起点和大整数当前值；若提前创建完整序列会浪费内存，混用 `number` 又会让编号丢失精度，直接序列化 `bigint` 还会失败。你需要交付惰性产生的两组序列、精确递增后的编号，以及可以安全传输的 JSON 文本。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
start + end ──> evenNumbers 生成器 ──> 每次消费 ──> yield 偶数 / 结束
起始数字 ──> createCountdown ──> Iterable<number>
                                   └── [Symbol.iterator]() ──> iterator
                                                                  └── next() ──> { value, done }
currentId + increment ──> nextId: bigint
nextId ──> toString ──> JSON.stringify ──> jsonText
迭代结果 + bigint JSON ──> 输出
```

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

## 本题易漏语法

generator 写 function* name()，暂停点写 yield value;；yield 与结束函数的 return 不同。

## 文件

- 在 `practice.ts` 中独立作答。
- 独立完成后，再查看 `solution.ts` 的 TODO 代码骨架与 `SOLUTION.md` 的解题结构；两者都不提供完整答案。
