# Day 15：泛型基础与输入输出关系

预计用时：70–90 分钟。

泛型让一份函数或对象类型在复用时仍保留具体类型信息。最重要的不是背尖括号，而是看清同一个类型参数出现在哪些输入和输出位置，它表达了什么关系。

## 核心讲解

字符串数组和数字数组的“取最后一项”逻辑相同。类型参数可以表达：数组元素、回退值和返回值必须保持同一种类型。

~~~ts
function lastOrFallback<Item>(
  items: readonly Item[],
  fallback: Item,
): Item {
  let result = fallback;
  for (const item of items) result = item;
  return result;
}
~~~

泛型不同于 `any`。`any` 会丢失输入与输出关系，泛型会保存它：传入字符串得到字符串，传入数字得到数字。调用时通常让 TypeScript 从实参推断类型参数。

多个类型参数可以描述不同位置的关系：

~~~ts
function makePair<Left, Right>(left: Left, right: Right): [Left, Right] {
  return [left, right];
}
~~~

泛型对象同样可以保留值类型。类型参数不是“拥有所有属性的对象”；如果函数需要读取某个属性，下一章会用约束明确表达。

## 阅读示例

打开并右键运行 `example.ts`。在编辑器中悬停观察 `firstName`、`firstScore` 与 `course.value` 的推断类型。

## 独立练习（从空文件开始）

请在 `practice.ts` 中从头编写一个小型“泛型工具箱”，必须包含：

- `lastOrFallback<Item>(items, fallback): Item`：返回最后一项；空数组返回同类型回退值。
- `Box<Value>`：包含 `label: string` 和 `value: Value`。
- `makeBox<Value>(label, value): Box<Value>`：保留标签和值。
- `repeat<Item>(value, count): Item[]`：创建含 `count` 个相同值的新数组。
- `makePair<Left, Right>(left, right): [Left, Right]`：保持输入顺序。

使用以下固定调用：

- `lastOrFallback(["变量", "泛型"], "无")`
- `lastOrFallback([], 0)`
- `makeBox("课程", "TypeScript")`
- `repeat(7, 3)`
- `makePair("level", 3)`

精确输出：

~~~text
最后主题：泛型
空分数：0
盒子：课程=TypeScript
重复：7+7+7
配对：level=3
~~~

限制：

- 不得使用 `any`、`unknown`、类型断言或非空断言。
- 每个类型参数必须至少出现在两个有关系的位置。
- `lastOrFallback` 必须安全处理空数组，不能直接断言最后一项存在。
- `repeat` 必须根据 `count` 生成数组，不能写死三项。
- `makePair` 的返回类型与返回值顺序都必须是 `[Left, Right]`。

完成标准：右键运行后显示 PASS；能用一句话解释每个泛型函数保存了什么类型关系。

## 容易出错的地方

- 用 `any` 假装实现泛型，返回类型信息随即丢失。
- 声明一个只出现一次的类型参数，没有表达关系。
- 为每次调用都手写类型参数，忽略推断。
- 以为 `Item` 自动拥有任意属性。
- 通过 `as Item` 伪造一个运行时并不存在的值。
- 忘记空数组可能没有最后一项。

## 拓展思考（不要求写代码）

为什么不带回退值的 `firstOrUndefined<Item>` 必须返回 `Item | undefined`，而本题的 `lastOrFallback<Item>` 可以只返回 `Item`？这个区别是谁提供的保证？

## 官方资料

- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Guidelines for Writing Good Generic Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html#guidelines-for-writing-good-generic-functions)
