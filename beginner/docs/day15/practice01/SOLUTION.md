# 完整参考答案说明

[返回题目](./README.md) · [打开 solution.ts](../../../day15/practice01/solution.ts)

本文件提供完整参考答案。`solution.ts` 用 `// 调用关系：` 汇总标明五组实参如何进入四个泛型函数。

## 直接调用逻辑

1. 两次 `lastOrFallback` 分别推断出字符串和数字关系：非空数组返回末项，空数组返回同类型后备值。
2. `makeBox` 把标签和值放进 `Box<Value>`；`repeat` 根据次数循环生成数组。
3. `makePair` 按输入顺序返回 `[Left, Right]`。
4. 五个结果变量直接进入对应输出，调用端不需要断言类型。

完整实现位于 `solution.ts`，其中没有 TODO、`declare` 或占位返回值。
