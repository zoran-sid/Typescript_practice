# Day 29（选修）｜从现有类型生成新类型

这一专题更接近库作者和复杂框架代码。只有当许多类型存在稳定、重复的转换规则时，才值得自定义映射类型、条件类型和模板字面量类型；日常业务优先使用清楚的内置工具类型。

建议用时：60–90 分钟。

## 今天会学到

- 用映射类型遍历已有对象的键；
- 用条件类型和 `infer` 提取数组元素；
- 用键重映射与模板字面量生成处理器名；
- 用品牌类型防止结构相同的标识符被误传；
- 区分类型层转换与运行时验证。

## 核心讲解

映射类型 `[Key in keyof T]` 逐个产生属性；条件类型 `T extends readonly (infer Item)[] ? Item : never` 从数组结构中提取元素。它们只在类型检查阶段工作，不会生成运行时循环。

键重映射可以把 `ready` 系统地变成 `onReady`，同时保留对应负载。品牌类型运行时仍是字符串；它只在类型层阻止误传，格式安全必须由一个集中构造函数先验证。验证后的窄断言应只留在这个边界。

## 独立练习（从空文件开始）

从零完成“类型派生工具箱”。

必须名称：`FeatureConfig`、`Flags`、`ElementOf`、`Events`、`Handlers`、`userIdBrand`、`UserId`、`createUserId`、`profilePath`。

需求：

1. `Flags<T>` 保留 T 的全部键，把值统一变成 boolean。
2. `ElementOf<T>` 从只读元组 `["types", "modules"] as const` 提取字面量联合，并选择 modules。
3. `Handlers<Events>` 把 ready、failed 重映射成 `onReady`、`onFailed`，各自参数保持对应负载类型。
4. `UserId` 是带 unique symbol 品牌的字符串；`createUserId` 只接受以 `usr_` 开头且后面非空的值，否则抛错；验证成功后只在这里使用一次窄断言。
5. `profilePath` 只接受 UserId。

精确输出：

```text
Flags: dark=true, retries=false
Selected: modules
Ready at 29
Failed: invalid
/users/usr_42
```

限制：不使用 `any`；不能把普通字符串直接断言成 UserId；品牌构造器必须先做运行时格式检查。

完成标准：右击运行 `practice.ts` 后输出完全一致且类型检查通过；能在纸上展开 Flags 和 Handlers 的最终对象形状。

## 常见错误

- 能用内置工具类型却先写复杂条件类型；
- 提取元素时写 `T[keyof T]`，混入数组方法；
- 模板键没有限制为字符串；
- 期待类型转换在运行时改造对象；
- 到处把 string 断言成品牌值。

## 拓展思考（不要求写代码）

哪些部分可以直接改用 `Record`、`Awaited` 或其他内置工具类型？在什么情况下“少写一个自定义高级类型”反而能让项目更安全？

## 官方资料

- [Creating Types from Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)
