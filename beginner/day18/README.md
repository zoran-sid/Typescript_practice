# Day 18：类——把数据与行为放在一起

普通对象和函数已经能解决很多问题。类适合“需要创建多个同类实例，而且每个实例长期保存自己的状态”的场景。今天的目标是会读、会写基础类，也知道何时继续使用对象与函数更简单。

## 今天能做到什么

- 声明字段、构造器和方法，并用 `new` 创建实例。
- 理解 `public`、`private`、`readonly` 和 `implements`。
- 通过组合让一个类使用另一个对象的能力。
- 识别方法脱离实例后丢失 `this` 的问题。
- 区分运行时存在的 `class` 与编译后消失的 `type`/`interface`。

## 60–90 分钟安排

1. 10 分钟：复习对象、函数和模块，写下“对象有哪些数据、能做什么”。
2. 15 分钟：运行示例，观察两个计数器实例拥有独立状态。
3. 15 分钟：练习 01，写字段、构造器和方法。
4. 15 分钟：练习 02，实现接口并保护内部状态。
5. 15 分钟：练习 03，修复脱离实例的 `this`。
6. 10 分钟：把一个简单类改写成对象加函数，比较哪种更清楚。

## 最小类结构

```ts
class Counter {
  private count = 0;

  constructor(public readonly name: string) {}

  increment(): void {
    this.count += 1;
  }

  getCount(): number {
    return this.count;
  }
}
```

`constructor` 在 `new Counter(...)` 时执行。方法中必须通过 `this` 访问当前实例。`private` 是 TypeScript 的可见性检查；JavaScript 的 `#field` 才是运行时私有字段。两者都值得认识，但今天先使用 `private`。

`implements` 只检查类是否满足接口，不会把接口中的实现复制进类。继承 `extends` 可以复用基类行为，但层级很容易变复杂；普通业务代码通常先考虑让对象彼此组合。

## 练习

```powershell
npm run beginner:example -- day18
npm run beginner -- day18 01
npm run beginner -- day18 02
npm run beginner -- day18 03
npm run beginner -- day18 all
```

| 编号 | 内容 | 重点 |
| --- | --- | --- |
| 01 | 学习时长计数器 | 字段、构造器、方法、`this` |
| 02 | 实现进度摘要接口 | `implements`、`private`、`readonly` |
| 03 | 修复脱离实例的方法 | `this` 与箭头函数字段 |

## 常见错误

- 在方法里写 `count` 而不是 `this.count`。
- 误以为 `private` 会把值加密或自动冻结。
- 把类的方法单独传给回调，调用时没有原实例作为 `this`。
- 只因为“TypeScript 支持类”就把每个数据对象都做成类。
- 用很深的继承层级表达“拥有/使用”关系；这通常更适合组合。

## 完成标准

- 三题通过，能解释每个实例为什么保存不同状态。
- 能说明 `implements` 只做检查，不提供运行时代码。
- 能复现并修复一次 `this` 丢失。
- 能为“纯数据模型”和“有长期内部状态的对象”分别选择 type 与 class。

## 官方资料

- [Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
