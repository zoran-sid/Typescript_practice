# Day 05：类、继承、抽象类与访问控制

## 今日目标

掌握构造器、参数属性、`public` / `protected` / `private` / `#private`、`readonly`、getter、static、abstract、implements 和 `override`。

## 来自主站的素材

主站当前多数逻辑采用纯函数和接口，没有为了“面向对象”而强行加入类。这是正确的设计信号。今天的 `BuildCatalog` 是一个候选改进：若未来需要维护有状态的内存索引，类可以封装不变量；若只是一次 `map/filter`，纯函数仍更清晰。

可对照：

- `src/pages/[locale]/search-index.json.ts:23-48` 当前使用无状态数组流水线。
- `src/lib/photos.ts:63-105` 当前用局部 Map 聚合相册。

## 核心讲解

类同时产生运行时构造函数和值，以及实例的静态类型。`private` 是 TypeScript 级限制；`#field` 是 JavaScript 运行时私有字段。`protected` 允许子类访问。`readonly` 阻止重新赋值，但不会深度冻结对象。

抽象类可以提供共享实现并要求子类补充行为。`implements` 只检查实例形状，不会自动复制代码。启用 `noImplicitOverride` 后，覆盖父类成员应显式写 `override`，避免重命名造成静默错误。

## 动手任务

1. 实现 `BuildCatalog.find` 和 `size` getter。
2. 修复 `add`：重复 ID 必须被拒绝，不能静默覆盖。
3. 观察 `BuildLabeler` 的 abstract / override 用法。

## 常见故障

- 把所有函数塞进类，制造无意义状态。
- 以为 `private` 能在运行时保护序列化数据。
- 在构造器中泄露尚未完全初始化的 `this`。
- 子类覆盖方法却破坏父类契约。

## 验收

```powershell
npm.cmd --prefix typescript_practice run day -- day05
```
