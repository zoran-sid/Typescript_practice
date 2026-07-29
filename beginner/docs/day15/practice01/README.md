# DAY15 · Practice 01：泛型基础与输入输出关系

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day15/practice01/practice.ts)
- 结构提示代码：[solution.ts](../../../day15/practice01/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

## 场景背景

你正在为课程项目整理一组可复用的小工具，它们既可能处理字符串，也可能处理数字或其他数据。调用方会提供列表、回退值、标签、重复次数和一对不同类型的值。你需要让每个工具在交付结果时保留输入的具体类型，供后续业务代码安全使用。

这是一道完整、独立的主练习。不要导入其他 practice 文件夹中的代码。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
不同类型实参
   ├── lastOrFallback<T> ──> 保留 T 的最后一项/后备值
   ├── makeBox<T> ──> Box<T>
   ├── repeat<T> ──> T[]
   └── makePair<A, B> ──> [A, B]

各次调用推断出的具体结果 ──> 输出
```

## 要完成的功能

请在 `practice.ts` 中从头编写一个小型“泛型工具箱”。

先在文件顶层**单独声明**泛型类型 `Box<Value>`：

```ts
type Box<Value> = {
  label: string;
  value: Value;
};
```

这里的 `Value` 是类型参数，不是对象字段。它表示“调用 `makeBox` 时传入的值是什么类型，盒子里的 `value` 就保持什么类型”。把 `{ label: string; value: Value }` 直接写在 `makeBox` 的返回类型中虽然合法，但不符合本题练习和复用 `Box<Value>` 的要求。

再分别实现下面四个**泛型函数**。尖括号里的 `Item`、`Value`、`Left`、`Right` 都是类型参数：

- 函数 `lastOrFallback<Item>(items: readonly Item[], fallback: Item): Item`：数组有内容时返回最后一项；空数组返回参数 `fallback`。返回值仍是本次调用的 `Item`。
- 函数 `makeBox<Value>(label: string, value: Value): Box<Value>`：返回对象的 `label` 字段来自参数 `label`，`value` 字段来自参数 `value`。
- 函数 `repeat<Item>(value: Item, count: number): Item[]`：创建一个新数组，里面有 `count` 个 `value`；返回数组中的每一项仍是 `Item`。
- 函数 `makePair<Left, Right>(left: Left, right: Right): [Left, Right]`：返回一个两项元组，第一项是 `left`，第二项是 `right`，两项可以是不同类型。

函数体由你完成，结构可以先写成下面这样：

```ts
function lastOrFallback<Item>(
  items: readonly Item[],
  fallback: Item,
): Item {
  // TODO：处理非空数组和空数组。
}

function makeBox<Value>(
  label: string,
  value: Value,
): Box<Value> {
  // TODO：返回含 label、value 两个字段的对象。
}

// TODO：用相同方式补出 repeat 和 makePair 的参数与返回类型。
```

上面的代码只说明函数的输入与输出关系；`TODO` 仍需要你自己实现。

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

## 本题易漏语法

泛型参数放函数名后的尖括号，如 function first<T>(items: T[]): T；T 应连接至少两个位置。

## 写完后自检

- 把 `lastOrFallback` 的输入改成空字符串数组，并提供 `"无"` 作为回退值，返回类型和值分别应是什么？
- 把 `repeat(7, 3)` 的次数改为 `0`，你预计返回什么？函数能否在不特判数字类型的情况下工作？
- 为什么这些函数使用泛型关系，而不是把参数和返回值都写成 `string | number` 或 `any`？

## 文件

- 在 `practice.ts` 中独立作答。
- 完成并运行通过后，再查看 `solution.ts` 的 TODO 解题结构与 `SOLUTION.md` 的结构提示。
