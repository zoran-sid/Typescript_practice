# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day22/practice01/solution.ts)

本文件提供完整参考答案。对应的 `solution.ts` 可以直接类型检查和运行，包含“成绩服务回归测试”的完整判断、循环、回调、`return` 与输出代码。建议先独立作答，再用它逐段对照；不要只背最终输出。

## 直接调用逻辑

1. 固定数组先进入 `averageScore`；其中 `map` 把每项交给 `clampScore`，`reduce` 再汇总受限后的分数。
2. `averageScore` 的返回值分别进入 `ordinaryAverage`、`clampedAverage` 和 `loadedAverage`，随后交给 `assertEqual`。
3. 空数组包在箭头函数中交给 `assertThrows`，由断言函数控制调用时机并捕获 `RangeError`。
4. 每条断言成功后才增加 `testCount`，最后一次 `console.log` 输出通过总数。

代码中的 `// 调用关系：` 注释标出了固定数据进入函数、返回值进入下一步以及最终输出的位置。顺着这些注释阅读，就能把函数声明和真正发生的调用连起来。

## 对照方式

1. 先运行自己的 `practice.ts`，记录第一处类型错误或第一行不同的输出。
2. 再打开完整答案，只比较对应函数和它的调用处。
3. 修改自己的实现后重新运行，直到输出与题目完全一致。
