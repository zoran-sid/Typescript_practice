# Day 06：对象与引用

预计用时：60–90 分钟。

对象可以把同一事物的多项信息放在一起，例如任务标题、完成状态、学习者资料和分数。本课还会处理一个很容易被忽略的问题：把对象赋给另一个变量，只会复制引用，不会自动创建独立对象。

## 完成目标

- 创建对象并用点号读取、修改属性。
- 把对象传给函数，并描述函数需要的对象形状。
- 读取嵌套对象和对象里的数组。
- 使用循环处理对象中的数组。
- 理解对象赋值复制的是引用。

## 对象与属性

```ts
const task = {
  title: "学习对象",
  done: false,
};

console.log(task.title);
```

花括号中每一项是属性。对象内部使用 `属性名: 值`，变量声明仍使用 `=`。TypeScript 会从初始值推断每个属性的类型。

嵌套对象需要逐层使用点号：

```ts
const student = {
  name: "Mei",
  address: {
    city: "成都",
  },
};

console.log(student.address.city);
```

## 对象作为函数参数

函数可以直接描述需要的对象形状：

```ts
function readScores(record: { scores: number[] }): number {
  return record.scores.length;
}
```

调用者可以拥有更多属性，但必须至少提供函数声明需要的 `scores`。重复使用的对象形状会在 Day 09 学习如何取名。

## 引用与独立副本

```ts
const original = { done: false };
const alias = original;
alias.done = true;
```

`original.done` 也会变成 `true`，因为两个变量指向同一个对象。`const alias = original` 只复制了通往对象的引用。

今天先通过明确创建新对象、逐项复制属性来获得独立副本。嵌套对象和数组也各自是引用；若副本需要完全独立，这些层也要单独创建。更简洁的展开语法会在后续课程学习。

## 阅读完整示例

打开并右击运行 `example.ts`。找出书本对象的三个属性和函数参数形状。临时新增一个作者属性，并观察对象与参数形状是否都需要它；实验后恢复。

## 独立练习（从空文件开始）

在 `practice.ts` 中从零完成“学习任务副本与成绩报告”。

创建 `originalTask`，固定结构如下：

- `title` 为 `"完成对象练习"`。
- `done` 为 `false`。
- `student` 是嵌套对象，包含 `name: "Mei"` 和 `city: "成都"`。
- `scores` 是数字数组 `[88, 92, 90]`。

程序要求：

1. 创建空数字数组 `copiedScores`，使用 `for...of` 把原数组的每个分数 `push` 进去。
2. 创建新对象 `copiedTask`，逐项读取原对象的值；`student` 必须是新对象，`scores` 使用 `copiedScores`。
3. 只把 `copiedTask.done` 修改为 `true`。
4. 实现 `calculateAverage(record: { scores: number[] }): number`，用循环计算平均分。
5. 输出原任务与副本状态、嵌套学生资料和平均分。

精确期望输出：

```text
原任务完成: false
副本完成: true
学生: Mei（成都）
平均分: 90
```

限制：

- 不得写 `const copiedTask = originalTask`。
- 不使用尚未学习的对象或数组展开语法。
- 平均分必须根据数组循环计算，不得直接写 90。
- 函数必须从参数读取分数，不得读取外部 `originalTask`。

完成标准：

- 修改副本后，原对象仍保持 `false`。
- 能画出原对象和副本各自指向的嵌套对象与数组。
- 右击运行 `practice.ts`，四行输出完全一致。

## 常见错误

`const copy = original` 不会复制对象；只复制顶层但复用 `student` 或 `scores`，仍会共享嵌套引用；属性拼写和大小写必须一致。

## 拓展思考（不要求写代码）

如果 `copiedTask.student` 直接使用 `originalTask.student`，随后修改副本学生的城市，为什么原任务中的城市也会变化，而本题单独创建嵌套对象后不会？

## 参考答案

完成后再阅读 `solution.ts` 与 `SOLUTION.md`，并尝试画出两套对象结构。

## 官方资料

- [Everyday Types：Object Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types)
- [Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
