# Day 16：泛型约束、keyof、T[K] 与 typeof

预计用时：75–90 分钟。

Day 15 的泛型只能使用所有类型都具备的能力。今天学习如何声明“至少要有什么属性”，以及如何从已有对象类型安全地取得键和值类型。

## 前置复习（10 分钟）

1. 泛型与 any 的关键区别是什么？
2. 对象属性名拼错时，TypeScript 如何帮助你？
3. 联合类型 string | number 与“根据具体键得到具体类型”有什么差别？

## 1. 泛型约束

如果函数确实需要 id，就把要求写进约束：

~~~ts
function readId<Item extends { id: number }>(item: Item): number {
  return item.id;
}
~~~

extends 在这里读作“Item 至少符合这个形状”。调用者可以有更多属性，但 id 必须是 number。

不要为了访问属性就写 as，也不要把 Item 改成 any；约束才是在类型中表达真实需求。

## 2. keyof

keyof 对对象类型产生属性名的联合：

~~~ts
type Profile = {
  name: string;
  age: number;
};

type ProfileKey = keyof Profile;
// "name" | "age"
~~~

参数是 keyof Profile 时，调用者不能传入不存在的键。

## 3. T[K]：键决定返回类型

~~~ts
function getProperty<Item, Key extends keyof Item>(
  item: Item,
  key: Key,
): Item[Key] {
  return item[key];
}
~~~

Key 被限制为 Item 的键；Item[Key] 表示该键对应的值类型。传入 name 得到 string，传入 age 得到 number。它比直接返回所有属性值的联合更精确。

## 4. 类型位置的 typeof

JavaScript 的 typeof value 在运行时返回字符串。TypeScript 在类型位置还能根据已有值取得其静态类型：

~~~ts
const flags = {
  search: true,
  comments: false,
};

type Flags = typeof flags;
type FlagName = keyof typeof flags;
~~~

值空间和类型空间用途不同。不能把 type 当成 console.log 的运行时值。

## 5. 运行示例

~~~powershell
npm run beginner:example -- day16
~~~

## 6. 必做练习

### 练习 01：keyof 读取属性

让 key 真正决定读取哪个 Profile 属性。

~~~powershell
npm run beginner -- day16 01
~~~

### 练习 02：迁移泛型约束

Article 和 User 结构不同，但都具有数字 id。只约束函数真正需要的部分。

~~~powershell
npm run beginner -- day16 02
~~~

### 练习 03：使用 T[K] 批量取值

实现 pluck，让键决定输出数组的元素类型。

~~~powershell
npm run beginner -- day16 03
~~~

### 练习 04：从值派生键

用 keyof typeof featureFlags 得到合法功能名，再按键读取布尔值。

~~~powershell
npm run beginner -- day16 04
~~~

查看答案：

~~~powershell
npm run beginner:solution -- day16 03
~~~

## 7. 容易出错的地方

- 约束写成 object，却期待任意 object 都有 id。
- 把 keyof 当成运行时 Object.keys；keyof 只产生类型。
- 写 key: string 后直接 item[key]，允许了不存在的任意字符串。
- 返回 Item[keyof Item]，丢掉“具体 Key 对应具体值”的关系。
- 混淆运行时 typeof value 与类型位置的 typeof value。
- 通过 as keyof Item 强迫任意外部字符串通过检查；断言没有验证键真的存在。

## 完成标准

- 四题全部 PASS。
- 能解释约束只要求“至少拥有”哪些属性。
- 能从一个对象类型得到键联合。
- 能读懂 Item[Key]，并说明它为何比宽泛联合精确。
- 能写出 keyof typeof existingValue。

## 官方资料

- [Generics：Generic Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)
- [Keyof Type Operator](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)
- [Typeof Type Operator](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html)
- [Indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
