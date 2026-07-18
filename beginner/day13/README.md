# Day 13：解构、spread、rest 与不可变更新

预计用时：75–90 分钟。

今天学习如何取出对象或数组中的数据，以及如何在不改坏原数据的前提下产生新版本。这里最容易混淆的是：const 只阻止变量重新指向别处，普通对象内部仍然可以改变；spread 只复制一层。

## 前置复习（10 分钟）

1. const 数组还能调用 push 吗？
2. 两个变量指向同一个对象时，通过一个变量修改属性，另一个会看到吗？
3. map 回调必须返回什么？

## 1. 对象与数组解构

解构（destructuring）让我们按结构取值：

~~~ts
const course = { title: "TypeScript", days: 21 };
const { title, days } = course;

const topics = ["函数", "对象", "联合"];
const [first, ...remaining] = topics;
~~~

数组中的 ...remaining 是 rest：把剩余元素收集成一个新数组。

## 2. spread 创建新容器

~~~ts
const newTopics = [...topics, "泛型"];
const renamed = { ...course, title: "TypeScript 入门" };
~~~

这里的 spread 表示展开已有内容，创建新的数组或对象。它与函数 rest 都写成三个点，但方向不同：

- rest 收集剩余值。
- spread 展开已有值。

## 3. 浅复制陷阱

对象 spread 只复制第一层。如果内部还有对象，内部引用仍然共享：

~~~ts
const updated = {
  ...profile,
  preferences: {
    ...profile.preferences,
    theme: "dark",
  },
};
~~~

要修改哪一层，就为那一层也创建新对象。数组中的对象同理，通常使用 map 找到目标项后返回新对象。

## 4. 不可变更新

“不可变”在这里表示不修改旧版本，而是计算一个新版本。它让旧值、日志和测试结果更容易推理。

~~~ts
const updatedTasks = tasks.map((task) =>
  task.id === 2 ? { ...task, done: true } : task,
);
~~~

readonly 是 TypeScript 的编译期约束，不会在运行时自动深度冻结对象。

## 5. 运行示例

~~~powershell
npm run beginner:example -- day13
~~~

## 6. 必做练习

### 练习 01：解构与数组 rest

从课程对象取 title，从 lessons 取第一项与剩余项。

~~~powershell
npm run beginner -- day13 01
~~~

### 练习 02：修复共享数组引用

为文章添加标签，但保留原文章的标签数组。

~~~powershell
npm run beginner -- day13 02
~~~

### 练习 03：修复浅复制

只用一层 spread 仍然会共享 preferences。为嵌套层也创建新对象。

~~~powershell
npm run beginner -- day13 03
~~~

### 练习 04：迁移到列表更新

使用 map 只更新 id 为 2 的任务，并确认原数组保持不变。

~~~powershell
npm run beginner -- day13 04
~~~

查看答案：

~~~powershell
npm run beginner:solution -- day13 03
~~~

## 7. 容易出错的地方

- 以为 const 会让对象所有层都不可修改。
- 写 const updated = original，然后修改 updated；两个名字仍指向同一对象。
- spread 外层对象后直接修改嵌套对象；嵌套引用仍共享。
- 使用 map 却忘记 return，产生 undefined 数组。
- 为“更新一项”直接 push 或修改原数组元素，破坏旧状态。
- 误以为 readonly 或 as const 会在运行时自动冻结所有嵌套数据。

## 完成标准

- 四题全部 PASS。
- 能解释 rest 与 spread 的方向差异。
- 能画出“两个变量指向同一对象”的简单关系。
- 能对嵌套对象逐层复制。
- 能用 map 做一次不修改原数组的项目更新。

## 官方资料

- [MDN：Destructuring assignment](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [MDN：Spread syntax](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Object Types：readonly Properties](https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-properties)
- [Object Types：ReadonlyArray](https://www.typescriptlang.org/docs/handbook/2/objects.html#the-readonlyarray-type)
