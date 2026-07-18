# Day 28（选修）：元组、重载、`this` 与可变参数

普通业务函数优先使用简单参数和联合类型。本专题面向“需要设计或阅读库 API”的场景：返回固定位置的数据、保留一组参数的精确类型、描述依赖调用者的 `this`，以及理解函数重载。

## 今天能做到什么

- 用元组表达“固定长度、每个位置含义不同”的数组。
- 用剩余参数和可变参数元组保留参数列表。
- 阅读重载签名，并知道联合参数通常更简单。
- 用显式 `this` 参数检查调用方式。

## 60–90 分钟安排

1. 15 分钟：运行示例，对比数组与元组。
2. 15 分钟：练习 01，返回固定二元组。
3. 20 分钟：练习 02，写保留参数关系的通用调用器。
4. 15 分钟：练习 03，完成两个重载分支。
5. 15 分钟：练习 04，使用显式 `this`。
6. 5 分钟：把一个重载改写成联合版本，比较可读性。

## 四个核心形状

```ts
type Pair = readonly [title: string, minutes: number];

function call<Args extends unknown[], Result>(
  fn: (...args: Args) => Result,
  ...args: Args
): Result {
  return fn(...args);
}

function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
  return String(value);
}

function describe(this: { title: string }): string {
  return this.title;
}
```

元组的标签帮助阅读，但不会在运行时创建属性。重载把调用签名放在实现上方，实现签名通常不直接对调用者可见。若输入与输出关系不随重载改变，优先考虑简单联合。

## 练习

```powershell
npm run beginner:example -- day28
npm run beginner -- day28 01
npm run beginner -- day28 02
npm run beginner -- day28 03
npm run beginner -- day28 04
npm run beginner -- day28 all
```

## 常见错误

- 把任意长度的普通数组断言成固定元组。
- 用 `any[]` 写包装函数，导致参数和返回类型关系丢失。
- 只写重载签名却忘记实现，或实现无法覆盖所有重载。
- 以为 `this` 参数是运行时第一个实参；它只存在于类型位置。
- 能用联合清楚表达却堆很多重载，使调用者与实现都更难维护。

## 完成标准

- 四题全部通过。
- 能解释 `[string, number]` 与 `(string | number)[]` 的差别。
- 能指出可变参数元组里的 `Args` 同时连接了函数参数和实参数组。
- 能说明重载与联合各适合什么场景。

## 官方资料

- [More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)
- [Object Types：Tuple Types](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)
- [TypeScript 4.0：Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
