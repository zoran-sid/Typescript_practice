# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day27/practice02/solution.ts)

本文件提供完整参考答案。对应的 `solution.ts` 可以直接类型检查和运行，包含“API 课程与 CLI 覆盖”的完整判断、循环、回调、`return` 与输出代码。建议先独立作答，再用它逐段对照；不要只背最终输出。

## 直接调用逻辑

1. 固定 API 对象进入 `parseLesson`，通过验证后由 `base` 接住。
2. 两组 CLI 参数进入 `parseMinutesOverride`，内部通过 `valueAfter` 找到 minutes 并验证数字。
3. `base` 和覆盖结果一起进入 `applyMinutesOverride`；合法覆盖返回新对象，无效覆盖返回原对象。
4. `base`、`valid`、`invalid` 和坏 API 的 `null` 结果分别进入四次输出。

代码中的 `// 调用关系：` 注释标出了固定数据进入函数、返回值进入下一步以及最终输出的位置。顺着这些注释阅读，就能把函数声明和真正发生的调用连起来。

## 对照方式

1. 先运行自己的 `practice.ts`，记录第一处类型错误或第一行不同的输出。
2. 再打开完整答案，只比较对应函数和它的调用处。
3. 修改自己的实现后重新运行，直到输出与题目完全一致。
