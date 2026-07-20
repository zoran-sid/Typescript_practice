# Day 13：解构、spread、rest 与不可变更新

预计用时：75–90 分钟。

今天学习按结构取值，以及在不改坏旧数据的前提下产生新版本。最容易混淆的是：`const` 只阻止变量重新指向别处，普通对象内部仍可改变；spread 只复制一层。

## 核心讲解

对象与数组可以按结构解构：

~~~ts
const { title } = course;
const [first, ...remaining] = topics;
~~~

这里的 `...remaining` 是 rest，负责收集剩余值。创建新容器时，三个点是 spread，负责展开旧内容：

~~~ts
const newTopics = [...topics, "泛型"];
const renamed = { ...course, title: "TypeScript 入门" };
~~~

spread 只复制当前这一层。若要更新嵌套对象，外层和目标嵌套层都要创建新对象：

~~~ts
const updated = {
  ...profile,
  preferences: {
    ...profile.preferences,
    theme: "dark",
  },
};
~~~

数组中的某个对象要更新时，通常用 `map`：目标项返回新对象，其他项返回原项。“不可变更新”表示不修改旧版本，而是计算新版本；`readonly` 是编译期约束，并不会在运行时自动深度冻结数据。

## 阅读示例

打开并右键运行 `example.ts`。观察原对象与新对象为什么能同时保留不同的主题和技能。

## 独立练习（从空文件开始）

请在 `practice.ts` 中从头编写“学习资料不可变更新器”。

声明 `Profile`，包含：

- `readonly id: number`
- `name: string`
- `skills: readonly string[]`
- `preferences: { theme: "light" | "dark"; notifications: boolean }`
- `tasks: readonly { id: number; title: string; done: boolean }[]`

创建固定 `original`：

- id 为 1，name 为 `Ada`
- skills 为 `HTML、CSS`
- preferences 为 `light` 和 `true`
- 两项任务分别为 `复习变量`、`练习对象`，初始都未完成

实现 `updateProfile(profile: Profile): Profile`，返回 `updated`，要求：

- name 改为 `Ada Lin`
- skills 末尾加入 `TypeScript`
- theme 改为 `dark`，notifications 保持不变
- 只把 id 为 2 的任务改为完成
- 任何层级都不得修改 `original`

再从 `updated.skills` 解构出 `firstSkill` 和 `remainingSkills`，精确输出：

~~~text
原姓名：Ada
新姓名：Ada Lin
原主题：light
新主题：dark
原技能：HTML、CSS
新技能：HTML、CSS、TypeScript
第一项：HTML
其余：CSS、TypeScript
原状态：false,false
新状态：false,true
~~~

限制：

- 不得使用 `any`、类型断言、非空断言、`push`、`splice` 或直接属性赋值。
- 必须使用对象 spread、数组 spread、嵌套 spread、`map` 和数组 rest。
- `map` 的目标分支返回新任务对象，其他分支返回原任务。
- 输出必须同时读取 `original` 和 `updated`，证明两者没有共享修改。

完成标准：右键运行后显示 PASS；能解释为什么只 spread 最外层仍不足以更新嵌套对象。

## 容易出错的地方

- 写 `const updated = original`，两个名称仍指向同一对象。
- 只 spread 外层，随后修改共享的 `preferences`。
- 使用 `map` 却忘记返回值。
- 直接修改原数组元素或调用 `push`。
- 误以为 `readonly` 或 `as const` 会在运行时深度冻结。

## 拓展思考（不要求写代码）

如果每个任务内部又有一个 `history` 数组，要给第二项任务追加历史记录且保留所有旧数据，哪些层级必须创建新容器，哪些未改变的值可以安全复用？

## 官方资料

- [MDN：Destructuring assignment](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [MDN：Spread syntax](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Object Types：ReadonlyArray](https://www.typescriptlang.org/docs/handbook/2/objects.html#the-readonlyarray-type)
