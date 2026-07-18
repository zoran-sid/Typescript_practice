# Day 22｜测试与调试：让错误更早、更小地出现

类型检查回答“这段代码在类型上能不能成立”，运行测试回答“它做出来的结果是不是我们要的”。两者互补，谁也不能替代谁。

建议用时：60–90 分钟。

## 今天会学到

- Arrange–Act–Assert（准备、执行、断言）的测试结构；
- 同时覆盖正常、边界和错误路径；
- 测试会抛错的函数；
- 正确等待异步结果后再断言；
- 用最小输入和第一条失败信息定位问题；
- 再次分清 `return` 与 `console.log`。

## 一个测试的三步

1. Arrange：准备输入和依赖；
2. Act：调用要测试的函数；
3. Assert：比较实际值与期望值。

测试失败时，先看第一个失败。不要一次改五处；用最小改动让第一个失败变清楚，再继续。

## 类型检查与运行测试

- TypeScript 能发现“把字符串传给只收数字的函数”；
- 它通常不知道“折扣算成 8 折还是 2 折”是否符合需求；
- 测试能检查业务结果、边界和异常；
- 测试也不能证明所有输入都正确，所以仍然需要清晰的类型。

## 今日路线

1. 10 分钟：不看答案重做 Day 21 的漏 await 题；
2. 15 分钟：运行示例，标出 AAA 三段；
3. 35–50 分钟：完成 4 个练习；
4. 10 分钟：故意改坏一个答案，观察失败信息如何变化。

## 命令

```bash
npm run beginner:example -- day22
npm run beginner -- day22 1
npm run beginner -- day22 2
npm run beginner -- day22 3
npm run beginner -- day22 4
```

## 最容易踩的坑

- 只测一个“看起来正常”的输入；
- 测试多个行为，失败后不知道是哪一个坏了；
- 函数只打印，不返回，因此无法稳定断言；
- 忘记断言会抛错的路径；
- 测试 Promise 本身，却没有 await 它；
- 测试依赖当前时间、随机数或网络，结果忽好忽坏；
- 编译通过后就认为业务一定正确。

## 间隔复习

明天先重做第 03、04 题。三天后，为今天任意一个函数再补一个你自己想到的边界用例。

## 完成标准

- 4 个练习全部通过；
- 能独立写出 AAA 三段；
- 每个功能至少想到正常、边界、错误三类用例；
- 会测试同步抛错和异步结果；
- 能解释类型检查与运行测试各自负责什么。

## 官方资料

- [TypeScript：为什么要做静态类型检查](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#static-type-checking)
- [TypeScript TSConfig：noEmit](https://www.typescriptlang.org/tsconfig/noEmit.html)
- [Node.js：Test runner](https://nodejs.org/api/test.html)
