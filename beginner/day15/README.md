# Day 15：泛型基础与输入输出关系

预计用时：70–90 分钟。

泛型（generics）让一份函数或对象类型在保留类型信息的同时复用于多种数据。最重要的不是尖括号，而是看清同一个类型参数在哪些位置重复出现，它表达了什么关系。

## 前置复习（10 分钟）

1. 函数参数类型与返回类型分别描述什么？
2. 数组没有元素时，读取第一项可能得到什么？
3. 为什么 any 会让检查器失去信息？

## 1. 从重复函数发现关系

下面两个函数只有具体类型不同：

~~~ts
function firstString(items: string[]): string | undefined {
  return items[0];
}

function firstNumber(items: number[]): number | undefined {
  return items[0];
}
~~~

用类型参数 Item 可以表达：“输入数组的元素类型，与返回值中非 undefined 的类型相同。”

~~~ts
function firstOrUndefined<Item>(
  items: readonly Item[],
): Item | undefined {
  return items[0];
}
~~~

调用时通常不需要手写尖括号。TypeScript 会从实参推断 Item。

## 2. 泛型不是 any

any 会丢失输入与输出的关系。泛型会保存关系：

~~~ts
const name = firstOrUndefined(["Ada", "Lin"]);
// name 是 string | undefined

const score = firstOrUndefined([80, 90]);
// score 是 number | undefined
~~~

Item 并不表示函数内部能对它做任何操作。还不知道 Item 具有哪些属性时，不能直接访问 item.id；Day 16 会使用约束说明必要能力。

## 3. 多个类型参数与泛型对象

~~~ts
function makePair<Left, Right>(
  left: Left,
  right: Right,
): [Left, Right] {
  return [left, right];
}

type Box<Value> = {
  label: string;
  value: Value;
};
~~~

Left、Right、Value 只是清晰的类型参数名，不是固定关键字。

## 4. 运行示例

~~~powershell
npm run beginner:example -- day15
~~~

把示例中的 string 数组临时换成 boolean 数组，先预测编辑器推断的返回类型，再观察结果。

## 5. 必做练习

### 练习 01：同类型回退值

lastOrFallback 的数组元素、回退值和返回值必须保持同一类型。非空数组返回最后一项，空数组返回 fallback。

~~~powershell
npm run beginner -- day15 01
~~~

### 练习 02：两个类型参数

现有元组顺序反了。让输入 Left、Right 对应输出 [Left, Right]。

~~~powershell
npm run beginner -- day15 02
~~~

### 练习 03：泛型对象

makeBox 应保留传入的 label 和 value，分别创建 number 与 string 盒子。

~~~powershell
npm run beginner -- day15 03
~~~

### 练习 04：迁移到重复函数

repeat 对 string 与 number 都应工作，并返回相同元素类型的数组。

~~~powershell
npm run beginner -- day15 04
~~~

查看答案：

~~~powershell
npm run beginner:solution -- day15 01
~~~

## 6. 容易出错的地方

- 用 any 假装实现了泛型，导致返回类型信息丢失。
- 声明了 Type，却只使用一次；这种类型参数通常没有表达关系。
- 为每个调用都手写类型参数，忽略了 TypeScript 的推断。
- 以为 Item 代表“拥有所有属性的对象”，直接读取未知属性。
- 用 as Item 伪造返回值；断言不能保证运行时真的得到 Item。
- 忘记空数组可能没有第一项或最后一项。

## 完成标准

- 四题全部 PASS。
- 能用一句话解释每题的类型参数关系。
- 能说明泛型与 any 的区别。
- 能判断什么时候应让 TypeScript 自动推断类型参数。
- 能在不使用断言的情况下返回正确的泛型值。

## 官方资料

- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [More on Functions：Generic Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions)
- [Guidelines for Writing Good Generic Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html#guidelines-for-writing-good-generic-functions)
