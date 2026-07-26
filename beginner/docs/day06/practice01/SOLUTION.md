# Day 06 · Practice 01 解题结构提示

[返回题目](./README.md) · [打开 solution.ts](../../../day06/practice01/solution.ts)

> 本文件不提供完整答案。`solution.ts` 同时展示两种复制数组的结构，但真正的 `push`、对象复制、状态修改、累加和平均值表达式都保留为 `TODO`。

## 方案一：全局 `for` 循环

```ts
const copiedScores: number[] = [];

for (const score of originalTask.scores) {
  // TODO：把当前 score 加入 copiedScores。
}
```

适合只使用一次、刚开始观察循环变量的场景。`originalTask` 与 `copiedScores` 在循环外声明，所以循环结束后仍可访问；`score` 是每轮的局部绑定，只在循环体内存在。循环体直接修改外部数组，数据流短，但复用时容易与固定变量耦合。

## 方案二：封装为函数

```ts
function copyScores(source: number[]): number[] {
  const result: number[] = [];

  for (const score of source) {
    // TODO：把当前 score 加入 result。
  }

  return result;
}

const copiedScores = copyScores(originalTask.scores);
```

适合需要重复复制不同数字数组的场景。调用时，外部数组是实参；参数 `source` 是函数内访问这次输入的名称；`result` 与 `score` 都是局部变量。`return result` 把新数组引用交回调用处，外部的 `copiedScores` 再接住它。函数不读取固定的 `originalTask`，因此边界更清楚。

## 对象副本与平均值结构

创建副本时要分别检查三层：外层任务对象、嵌套 `student` 对象、`scores` 数组。只要其中某层复用原引用，沿该路径修改就可能影响原数据。

`calculateAverage` 的参数是本次要计算的记录；`total` 在函数内跨循环轮次保存累加状态；循环结束后再用它与参数中的数组信息完成返回表达式。不要在函数内读取外部 `originalTask`，也不要把最终结果写死。

## 自检

- 两种复制方式都从空的新数组开始，核心加入动作由你完成。
- 修改副本前，先确认嵌套对象和数组没有与原对象共享引用。
- 函数的参数、局部变量、返回值与外部接收变量能逐一说清。
- 改变原分数数组后，计算仍由数据推导。