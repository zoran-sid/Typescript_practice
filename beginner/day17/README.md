# Day 17：Utility Types、as const 与 satisfies

预计用时：75–90 分钟。

真实项目常常已经有一个可靠类型，我们只想从它得到“更新输入”“公开字段”或“键值表”，而不是复制一份几乎相同的定义。TypeScript 内置 Utility Types 用于常见变换；as const 与 satisfies 则帮助对象和数组保留精确信息并接受形状检查。

## 前置复习（10 分钟）

1. keyof typeof object 会得到什么？
2. spread 更新对象时，如何保留原对象？
3. 类型断言会不会在运行时验证数据？

## 1. 常用 Utility Types

假设已有类型：

~~~ts
type Article = {
  id: number;
  title: string;
  summary: string;
  published: boolean;
};
~~~

常用派生：

- Partial<Article>：所有属性可选，适合补丁对象。
- Required<Article>：所有属性必填。
- Readonly<Article>：属性只读。
- Pick<Article, "id" | "title">：只挑选指定属性。
- Omit<Article, "summary">：排除指定属性。
- Record<Keys, Value>：每个指定键对应同一种值类型。
- ReturnType<typeof fn>：取得函数返回类型。
- Awaited<PromiseType>：取得 await 后的结果类型。

工具类型只改变静态描述，不会自动删除运行时字段，也不会自动复制或冻结对象。

## 2. as const

普通数组中的文字通常被推断为 string。as const 保留每一项的字面量，并把数组变成 readonly 元组：

~~~ts
const levels = ["初级", "中级", "高级"] as const;
type Level = (typeof levels)[number];
~~~

Level 会得到三个字符串字面量的联合，而不是宽泛的 string。

as const 仍然不是运行时深度冻结；嵌套引用可能继续指向可变对象。

## 3. satisfies

satisfies 验证表达式符合目标类型，同时尽量保留表达式本身的精确推断：

~~~ts
type RouteName = "home" | "about";

const paths = {
  home: "/",
  about: "/about",
} satisfies Record<RouteName, string>;
~~~

键拼错、漏键或值类型不正确会得到提示。它不是类型转换，也不会验证网络返回的未知数据。

## 4. 运行示例

~~~powershell
npm run beginner:example -- day17
~~~

## 5. 必做练习

### 练习 01：Omit 与真实运行时字段

从 Account 派生 PublicAccount，并在运行时真正排除 email。只改类型但继续输出原对象不会删除字段。

~~~powershell
npm run beginner -- day17 01
~~~

### 练习 02：Partial 与不可变补丁

updateProfile 接受 Partial<Profile>，返回合并后的新对象，同时保留原对象。

~~~powershell
npm run beginner -- day17 02
~~~

### 练习 03：as const 派生字面量联合

让 Level 从 levels 数组派生，并把当前级别改为合法成员。

~~~powershell
npm run beginner -- day17 03
~~~

### 练习 04：Record 与 satisfies

让路径表精确覆盖 RouteName，并修复两个错误路径。

~~~powershell
npm run beginner -- day17 04
~~~

查看答案：

~~~powershell
npm run beginner:solution -- day17 04
~~~

## 6. 容易出错的地方

- 复制粘贴一份新 interface，原类型变化后忘记同步。
- 认为 Omit 会在运行时从对象删除字段；类型操作不会改值。
- 使用 Partial 后直接修改原对象，仍然破坏旧状态。
- 把 as const 当作深度 Object.freeze。
- 用 as Record<...> 强制断言，掩盖漏键；satisfies 更适合检查对象字面量。
- 认为 satisfies 会清洗或转换外部数据；它只做编译期兼容性检查。
- 派生数组成员联合时忘记 [number]，只得到整个数组的类型。

## 完成标准

- 四题全部 PASS。
- 能从已有类型派生更新类型与公开类型。
- 能解释类型层的 Omit 与运行时删除字段是两回事。
- 能用 as const 从数组得到字面量联合。
- 能用 satisfies 检查一个完整键值表而不依赖断言。

## 官方资料

- [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [TypeScript 3.4：const assertions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions)
- [TypeScript 4.9：satisfies](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator)
- [Creating Types from Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
