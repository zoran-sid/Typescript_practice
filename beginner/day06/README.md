# Day 06：对象与引用

预计用时：60–90 分钟。

前几天的变量一次只保存一个值。对象（object）可以把同一事物的多个信息放在一起，例如任务的标题和完成状态。本课还会解释一个很容易隐藏很久的错误：两个变量可能指向同一个对象。

## 完成目标

- 能创建对象并用点号读取、修改属性。
- 能把对象传给函数，并描述函数需要的对象形状。
- 能读取嵌套对象和对象里的数组。
- 理解对象赋值复制的是引用，不是新的独立对象。

## 今天暂时不学

不学习 `interface`、`type`、可选属性和展开语法。Day 09 和 Day 13 会在对象基础上继续学习这些工具。

## 前置复习（8 分钟）

1. 函数的参数和 `return` 分别是什么？
2. `console.log` 与 `return` 有什么区别？
3. `for...of` 怎样逐个取得数组元素？
4. 调用相同的纯计算函数两次，为什么应得到相同结果？

## 60–90 分钟安排

- 0–8 分钟：前置复习。
- 8–28 分钟：对象、属性、嵌套与对象参数。
- 28–40 分钟：运行示例并添加一个新属性。
- 40–75 分钟：完成四道练习。
- 75–90 分钟：用纸画出练习 03 中两个变量指向哪里。

## 1. 对象把相关数据组合起来

```ts
const task = {
  title: "学习对象",
  done: false,
};

console.log(task.title);
```

花括号里每一项是一个属性。属性名后使用 `:`，变量赋值仍使用 `=`。

TypeScript 会从初始值推断 `title` 是字符串、`done` 是布尔值，因此 `task.done = "是"` 会产生类型错误。

## 2. 函数可以要求一种对象形状

```ts
function printPoint(point: { x: number; y: number }): void {
  console.log(point.x, point.y);
}
```

`{ x: number; y: number }` 描述参数必须有哪些属性。重复使用的形状会在 Day 09 取一个类型名称。

## 3. 嵌套对象

```ts
const user = {
  name: "Lin",
  address: { city: "上海" },
};

console.log(user.address.city);
```

每一层都使用一次点号。

## 4. 对象变量保存的是引用

```ts
const original = { done: false };
const alias = original;
alias.done = true;
```

此时 `original.done` 也变成 `true`，因为两个变量指向同一个对象。要得到独立对象，今天先明确创建一个新对象并逐项复制；Day 13 再学习简洁的展开语法。

## 运行完整示例

```powershell
npm run beginner:example -- day06
```

尝试新增 `author` 属性，并让 `describeBook` 接收和显示它。留意：对象和函数参数形状都需要同步修改。

## 必做练习

```powershell
npm run beginner -- day06 01
npm run beginner -- day06 02
npm run beginner -- day06 03
npm run beginner -- day06 04
```

- 01：创建并读取任务对象。
- 02：把对象属性交给格式化函数。
- 03：修复两个变量共享对象的错误。
- 04：组合嵌套对象、数组、循环和函数思维。

全部检查：

```powershell
npm run beginner -- day06 all
```

答案示例：

```powershell
npm run beginner:solution -- day06 03
```

## 常见坑

- 对象属性写 `name: "Lin"`，不是 `name = "Lin"`。
- `student.address.city` 少一层就会得到不同数据。
- 属性拼写必须一致，`user.name` 与 `user.Name` 不同。
- `const copy = original` 不会复制对象。
- 修改传入对象会影响调用者手里的同一个对象；先确认这是否是你的本意。

## 完成标准

- 四道练习全部通过。
- 能画出“两个变量指向同一个对象”的示意图。
- 能写一个接收对象并返回字符串的函数。
- 能解释对象属性中的 `:` 和变量赋值 `=` 分别出现在哪里。

## 官方资料

- [Everyday Types：Object Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types)
- [Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
