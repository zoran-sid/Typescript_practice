# Day 16：泛型约束、keyof、T[K] 与 typeof

预计用时：75–90 分钟。

普通泛型只能使用所有类型都具备的能力。今天学习声明“至少要有什么属性”，并从已有对象安全地取得键和值类型。

## 核心讲解

函数确实需要 `id` 时，把要求写进约束：

~~~ts
function describeId<Item extends { id: number }>(item: Item): string {
  return "ID=" + item.id;
}
~~~

这里的 `extends` 表示 `Item` 至少拥有数字 `id`，调用者仍可有更多属性。不要写成宽泛的 `object` 后再断言。

`keyof` 会从对象类型产生属性名联合。让键参数约束在这个联合中，再用索引访问类型描述返回值：

~~~ts
function getProperty<Item, Key extends keyof Item>(
  item: Item,
  key: Key,
): Item[Key] {
  return item[key];
}
~~~

具体 `Key` 决定具体返回类型，所以读取 `name` 得到字符串，读取 `age` 得到数字。`Item[keyof Item]` 会丢失这层精确关系。

类型位置的 `typeof` 可以从现有值取得静态类型：

~~~ts
const flags = { search: true, comments: false };
type FlagName = keyof typeof flags;
~~~

它不同于运行时 `typeof value`。`keyof` 和类型位置的 `typeof` 都不会产生可供输出的运行时值。

## 阅读示例

打开并右键运行 `example.ts`。观察 `getProperty(course, "title")` 和 `getProperty(course, "lessons")` 为什么有不同的返回类型。

## 独立练习（从空文件开始）

请从头编写“类型安全的课程取值工具”。

必须实现：

- `getProperty<Item, Key extends keyof Item>(item, key): Item[Key]`
- `pluck<Item, Key extends keyof Item>(items, key): Item[Key][]`，使用 `map` 收集同一属性
- `describeId<Item extends { id: number }>(item, prefix): string`
- 固定对象 `settings = { theme: "dark", fontSize: 16, compact: false }`
- `SettingName = keyof typeof settings`
- `selectedSetting: SettingName = "theme"`

固定课程数据：

~~~text
{id: 7, title: "变量", score: 80, published: true}
{id: 8, title: "泛型", score: 95, published: false}
~~~

精确输出：

~~~text
课程#7
标题：变量、泛型
分数：80、95
设置：theme=dark
~~~

限制：

- 不得使用 `any`、类型断言或非空断言。
- `getProperty` 与 `pluck` 的返回类型必须写成 `Item[Key]` 和 `Item[Key][]`。
- `pluck` 必须根据收到的 `key` 读取属性，不能为标题和分数写两套函数。
- `describeId` 只约束真正需要的数字 `id`。
- `SettingName` 必须从 `settings` 的真实值派生，不能手写字符串联合。

完成标准：右键运行后显示 PASS；能解释为什么任意 `string` 不能直接安全索引对象。

## 容易出错的地方

- 约束写成 `object`，却期待所有对象都有 `id`。
- 把 `keyof` 当成运行时的 `Object.keys`。
- 写 `key: string`，允许不存在的任意键。
- 返回 `Item[keyof Item]`，丢失具体键与值的关系。
- 混淆运行时与类型位置的 `typeof`。
- 用断言强迫外部字符串成为对象键。

## 拓展思考（不要求写代码）

如果键来自地址栏或输入框，它在运行时只是普通 `string`。在不使用类型断言的前提下，你需要做什么验证，才能安全地把它交给本题的 `getProperty`？

## 官方资料

- [Generics：Generic Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)
- [Keyof Type Operator](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)
- [Indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
