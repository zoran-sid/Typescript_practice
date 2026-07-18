# Day 29（选修）：从现有类型生成新类型

这一专题更接近库作者和复杂框架代码。日常应用先熟练使用 Day 17 的内置工具类型；只有当很多类型存在稳定、重复的转换规则时，才值得自定义映射类型、条件类型和模板字面量类型。

## 今天能做到什么

- 用映射类型遍历已有对象类型的键。
- 用条件类型表达“类型层面的分支”。
- 用 `infer` 从数组、Promise 或函数中提取一部分类型。
- 用模板字面量类型生成有规律的字符串键。
- 认识品牌类型如何防止结构相同的标识符被混用。

## 60–90 分钟安排

1. 15 分钟：运行示例，在纸上分别写出每个派生类型的最终形状。
2. 15 分钟：练习 01，把配置字段映射成布尔开关。
3. 15 分钟：练习 02，从只读元组提取元素联合。
4. 20 分钟：练习 03，生成事件处理器键。
5. 15 分钟：练习 04，用构造函数集中验证品牌值。
6. 5 分钟：思考能否直接用 `Pick`/`Record` 代替自己的复杂类型。

## 先读懂，再抽象

```ts
type Flags<T> = {
  [Key in keyof T]: boolean;
};

type ElementOf<T> = T extends readonly (infer Item)[] ? Item : never;

type HandlerName<Name extends string> = `on${Capitalize<Name>}`;
```

这些代码只在类型检查阶段运行，不会生成 JavaScript 循环或字符串。`infer` 只能在条件类型的匹配结构中声明待提取的类型变量。

品牌类型仍是字符串在运行时的值，只通过一个只存在于类型层的标记防止误传。它不是安全或加密机制；真正的格式检查仍必须由运行时代码完成。

## 练习

```powershell
npm run beginner:example -- day29
npm run beginner -- day29 01
npm run beginner -- day29 02
npm run beginner -- day29 03
npm run beginner -- day29 04
npm run beginner -- day29 all
```

练习 01–04 的初始文件可能先出现 TypeScript 错误。这是刻意的“类型修复题”：阅读第一条提示，修正类型定义，不要加入 `any` 或删除有价值的检查。

## 常见错误

- 可以用 `Pick`/`Omit` 完成，却先写难读的条件类型。
- 忘记数组也有很多方法键，提取元素时直接写 `T[keyof T]`。
- 条件类型对联合分发后得到意外结果，却用断言掩盖。
- 模板键没有限制为字符串，导致 symbol/number 键不适用。
- 直接把普通字符串断言成品牌值，使品牌保护失去意义。
- 期待类型转换在运行时验证或转换对象。

## 完成标准

- 四题通过，并能手写展开后的具体类型。
- 每个自定义高级类型都能说出一个真实复用场景。
- 明白品牌构造器中的窄断言为什么应集中在验证之后。

## 官方资料

- [Creating Types from Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)
