# Day 03：数组、索引和循环

预计用时：75–90 分钟。

前三天的变量一次只保存一个值。今天开始保存一组同类数据，并让程序重复处理每一项。最终你会完成一个学习时长统计小程序。

## 完成后你会做到

- 使用数组保存一组同类值。
- 看懂 `number[]` 和 `string[]`。
- 理解索引从 `0` 开始。
- 使用 `.length` 获取项目数量。
- 使用 `for...of` 依次读取数组元素。
- 使用累加变量计算总计。
- 结合 Day 02 的 `if` 找出最大值。

今天不学习元组、`readonly` 数组、数组方法、泛型或函数。先把数组与循环的运行过程真正看懂，再学习更简洁的写法。

## 建议时间安排

| 阶段 | 时间 |
| --- | ---: |
| 数组与类型 | 20 分钟 |
| 索引和 `.length` | 15 分钟 |
| `for...of` 循环 | 20 分钟 |
| 手工跟踪程序 | 10 分钟 |
| 必做练习 | 20 分钟 |
| 回顾 | 10 分钟 |

## 1. 数组保存一组值

数组使用方括号 `[]`，元素之间使用逗号分隔：

```ts
const studyMinutes = [30, 45, 60];
```

这里一个变量保存了三次学习时长。

TypeScript 会推断它是 `number[]`，读作“数字数组”。你也可以显式写出类型：

```ts
const studyMinutes: number[] = [30, 45, 60];
```

文字数组则写成：

```ts
const topics: string[] = ["variables", "conditions", "arrays"];
```

数组类型说明其中每一项应当是什么类型。下面会被 TypeScript 拒绝，因为字符串不属于 `number[]`：

```ts
const studyMinutes: number[] = [30, "45", 60];
```

`"45"` 看起来像数字，但带引号后仍然是 `string`。Day 02 的规则在数组中同样适用。

## 2. 索引从零开始

可以使用方括号和位置编号读取元素：

```ts
const studyMinutes = [30, 45, 60];

console.log(studyMinutes[0]); // 30
console.log(studyMinutes[1]); // 45
console.log(studyMinutes[2]); // 60
```

第一个元素的索引是 `0`，不是 `1`。这是 JavaScript 数组的基础规则。

数组有三项，但最后一项的索引是 `2`：

```text
值：    30   45   60
索引：   0    1    2
```

访问不存在的位置会在运行时得到 `undefined`。严格的索引安全会在后续课程单独学习，今天先养成确认数组长度的习惯。

## 3. 使用 `.length` 获取数量

```ts
const studyMinutes = [30, 45, 60];
console.log(studyMinutes.length); // 3
```

`.length` 是数组当前包含的元素数量。它与最后索引不同：三项数组的长度为 `3`，最后索引为 `2`。

## 4. 使用 `for...of` 依次读取元素

当数组可能有很多项时，不应该手工写 `studyMinutes[0]`、`studyMinutes[1]`。`for...of` 会依次把每个元素交给循环体：

```ts
const studyMinutes = [30, 45, 60];

for (const minutes of studyMinutes) {
  console.log(minutes);
}
```

运行顺序：

1. 第一次循环，`minutes` 是 `30`。
2. 第二次循环，`minutes` 是 `45`。
3. 第三次循环，`minutes` 是 `60`。
4. 数组没有更多元素，循环结束。

循环中的 `minutes` 使用 `const`，因为每一次循环内我们都不重新赋值；下一轮由循环自动提供下一个值。

## 5. 使用累加变量计算总计

总计最初为零，每次循环加上当前值：

```ts
const studyMinutes = [30, 45, 60];
let totalMinutes = 0;

for (const minutes of studyMinutes) {
  totalMinutes = totalMinutes + minutes;
}

console.log(totalMinutes); // 135
```

手工跟踪：

| 循环 | 当前 `minutes` | 计算 | 新的 `totalMinutes` |
| ---: | ---: | --- | ---: |
| 开始 | — | 初始值 | 0 |
| 1 | 30 | `0 + 30` | 30 |
| 2 | 45 | `30 + 45` | 75 |
| 3 | 60 | `75 + 60` | 135 |

像 `totalMinutes` 这样保存“目前累计结果”的变量，常被称为累加器。名称不需要死记，运行过程必须理解。

## 6. 使用条件找出最大值

结合 Day 02 的 `if`：

```ts
let longestSession = 0;

for (const minutes of studyMinutes) {
  if (minutes > longestSession) {
    longestSession = minutes;
  }
}
```

每次循环都问：“当前值是否大于目前记录？”只有答案为 `true` 时才更新记录。

手工跟踪：

| 当前值 | 旧的最大值 | 是否更大 | 新的最大值 |
| ---: | ---: | --- | ---: |
| 30 | 0 | 是 | 30 |
| 45 | 30 | 是 | 45 |
| 60 | 45 | 是 | 60 |

## 7. 跟写示例

打开 `beginner/day03/example.ts`。不要复制粘贴，尝试亲手输入数组、两个变量和循环。

运行：

```powershell
npm run beginner:example -- day03
```

### 修改实验

把温度数组中的最后一个值从 `23` 改为 `30`，先预测总和与最高温度，再保存运行。然后增加第四个值 `16`，观察 `.length`、总和和最高值如何变化。

实验结束后恢复原始数组，或使用 `Ctrl + Z` 撤销。

## 8. 必做练习：学习时长统计

打开 `beginner/day03/practice.ts`。数组已经准备好：

```ts
const studyMinutes: number[] = [30, 45, 60];
```

在循环中完成两个 `TODO`：

1. 把当前 `minutes` 累加到 `totalMinutes`。
2. 如果当前值比 `longestSession` 大，就更新最长记录。

不要直接把 `135` 和 `60` 写进输出。程序应该根据数组计算结果；以后数组改变时，统计也应自动改变。

运行：

```powershell
npm run beginner -- day03
```

目标输出：

```text
Sessions: 3
Total minutes: 135
Longest session: 60
```

## 9. 常见故障排查

### 在循环中把总计重设为当前值

错误：

```ts
totalMinutes = minutes;
```

这样会丢掉前面累计的结果，循环结束后只剩最后一项。累加必须同时使用旧的总计和当前值：

```ts
totalMinutes = totalMinutes + minutes;
```

### 每次都更新最大值

错误：

```ts
longestSession = minutes;
```

这只是保存最后一项，不一定是最大值。更新语句必须放在 `if (minutes > longestSession)` 中。

### 混淆 `for...of` 与 `for...in`

本课使用：

```ts
for (const minutes of studyMinutes)
```

`of` 给你元素值。`in` 在数组中主要给出索引键，含义不同；本课不要替换成 `in`。

### 把 `.length` 当成最后索引

三项数组的 `.length` 是 `3`，但最后索引是 `2`。如果要读取最后一项，表达式是 `array[array.length - 1]`；本题不需要手工读取最后一项。

## 10. 完成检查

1. `[10, 20, 30]` 的类型可以怎样写？
2. 第一项的索引是多少？数组长度是多少？
3. `for...of` 中的临时变量每轮保存什么？
4. 为什么 `totalMinutes` 必须使用 `let`？
5. 为什么找最大值需要 `if`？
6. 如果数组改为 `[10, 20]`，程序应输出怎样的统计？

## 11. 参考答案

完成后查看 `solution.ts` 和 `SOLUTION.md`，或运行：

```powershell
npm run beginner:solution -- day03
```

## 12. 与真实项目的联系（可选）

数组用于文章列表、搜索结果、坐标点、订单项目、学习记录等几乎所有项目。真实路线规划程序会处理大量坐标，但“依次读取数组、累计结果、比较最大值”的核心思路与今天完全相同。复杂业务只是建立在这些通用基础之上。

## 官方资料

- [Everyday Types：数组](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)
- [MDN：Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN：for...of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of)
