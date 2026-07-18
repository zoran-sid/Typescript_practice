# Day 09：`type`、`interface` 与 `readonly`

预计用时：60–90 分钟。

前面曾在函数参数旁直接写对象形状。如果多个变量和函数都使用同一种数据，重复写会容易遗漏。今天学习给类型取名，并标记不应被重新赋值的属性。

## 完成目标

- 能用 `type` 给类型取名称。
- 能用 `interface` 描述对象形状。
- 能使用可选属性 `?` 和只读属性 `readonly`。
- 能使用 `ReadonlyArray<T>` 表达不应修改的数组。
- 理解 TypeScript 的 `readonly` 是编译期且默认浅层的。

## 今天暂时不学

不争论 `type` 与 `interface` 谁“更好”，不学习接口合并、继承和高级类型运算。普通对象两者都可用；课程会给出一致习惯。

## 前置复习（8 分钟）

1. 可选属性的属性名后写什么符号？
2. `find` 为什么可能得到 `undefined`？
3. `??` 与 `||` 对数字 0 有什么不同？
4. `const copy = object` 会不会创建新对象？

## 60–90 分钟安排

- 0–8 分钟：间隔复习 Day 06 和 Day 08。
- 8–30 分钟：类型别名、接口、可选与只读属性。
- 30–42 分钟：运行示例，尝试让编译器阻止修改 id。
- 42–78 分钟：完成四道练习。
- 78–90 分钟：总结“只读属性、只读数组、深层对象”的区别。

## 1. `type` 给类型取名

```ts
type UserId = string;
type Point = { x: number; y: number };
```

`UserId` 在运行时不会创建新值，它只是 TypeScript 检查代码时使用的名称。普通基础类型请写小写 `string`、`number`、`boolean`，不要写包装对象 `String`、`Number`、`Boolean`。

## 2. `interface` 描述对象

```ts
interface User {
  readonly id: string;
  name: string;
  bio?: string;
}
```

本课程习惯：对象可以使用 `interface`；联合类型和工具组合优先使用 `type`。重点是整个项目保持一致，而不是死记绝对规则。

## 3. `readonly` 防止重新赋值

```ts
const user: User = { id: "U-01", name: "Lin" };
// user.id = "U-02"; // TypeScript 会报错
```

它只影响类型检查，不会自动执行 `Object.freeze`。

## 4. `readonly` 默认是浅层的

```ts
interface Box {
  readonly info: { count: number };
}
```

不能把 `box.info` 换成另一个对象，但 `box.info.count` 仍然可以修改，因为内层 `count` 没有标成只读。练习 03 会亲自验证这一点。

`ReadonlyArray<string>` 同样防止通过类型接口执行 `push` 等修改操作，但不会深度冻结数组里的对象。

## 运行完整示例

```powershell
npm run beginner:example -- day09
```

实验：暂时取消下面代码的注释并观察编译错误，然后重新注释：

```ts
// task.id = "T-02";
// tags.push("新标签");
```

## 必做练习

```powershell
npm run beginner -- day09 01
npm run beginner -- day09 02
npm run beginner -- day09 03
npm run beginner -- day09 04
```

- 01：用类型别名和接口创建商品。
- 02：组合只读标识、可选简介和默认值。
- 03：验证 `readonly` 的浅层行为。
- 04：综合建模一个项目并生成摘要。

全部检查：

```powershell
npm run beginner -- day09 all
```

答案示例：

```powershell
npm run beginner:solution -- day09 03
```

## 常见坑

- 使用小写 `string`，不要使用 `String`。
- 类型名称只用于检查，不能像变量一样在终端打印。
- `readonly` 不等于运行时冻结。
- `readonly` 默认不自动深入嵌套对象。
- `ReadonlyArray<T>` 表达“不通过这里修改”，但元素对象也需要单独设计只读属性。

## 完成标准

- 四道练习全部通过。
- 能解释 `type` 和 `interface` 在本课各自的用途。
- 能预测对 `readonly` 顶层属性与嵌套属性赋值的区别。
- 不看答案写出包含只读 id、必填标题、可选备注的接口。

## 官方资料

- [Everyday Types：Type Aliases](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)
- [Everyday Types：Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces)
- [Object Types：readonly Properties](https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-properties)
