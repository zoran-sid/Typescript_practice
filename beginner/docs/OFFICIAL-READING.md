# TypeScript 官方手册：按 Day 分类的扩展阅读

这份索引不是第二套必修教程。当天课程和 Practice 能独立完成时，再从对应 Day 选择一篇官方文档；不需要把链接全部读完。

官方手册默认读者已经了解 JavaScript 基础，也明确说明它不会完整教授函数、类、Promise 等 JavaScript 知识。因此本课程继续负责零基础解释，官方资料主要用于补充正式术语、完整类型规则和更深边界。

## 本地官方文档怎样更新

第一次阅读或需要更新时，在项目根目录运行：

```powershell
npm run official:sync
```

命令会下载或更新官方资料，并自动生成适合普通 Markdown 软件的本地阅读版。完成后即可点击下方的“本地英文”或“本地中文”。

英文文档更新更完整；官方中文本地化目前只覆盖部分页面，而且可能落后于英文版。下面优先给出当前英文原文，本地中文存在时会额外标注。每条同时保留官网链接，即使没有下载本地缓存也能阅读。

官方文档与内容来自 [Microsoft TypeScript Website](https://github.com/microsoft/TypeScript-Website)，遵循 CC BY 4.0；仓库代码遵循 MIT。中文文件来自 [Microsoft TypeScript Website Localizations](https://github.com/microsoft/TypeScript-Website-Localizations)。

## Day 00

- [本地中文：TypeScript 新手入门](<../../official-reference/reader/typescript-localizations/docs/documentation/zh/get-started/TS for the New Programmer.md>) · [官网英文](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)：只看“TypeScript 在代码运行前检查 JavaScript”这一条主线。
- 当前先跳过大型项目和工具链部分；能解释“类型检查通过不等于运行一定正确”即可。

## Day 01

- [本地中文：Everyday Types](<../../official-reference/reader/typescript-localizations/docs/documentation/zh/handbook-v2/Everyday Types.md>) · [官网英文](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)：阅读 `string`、`number`、`boolean`、变量类型推断。
- [本地英文：Variable Declarations](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/reference/Variable Declarations.md>) · [官网](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)：重点比较 `const` 与 `let`，暂时不用读作用域提升的全部细节。

## Day 02

- [本地中文：The Basics](<../../official-reference/reader/typescript-localizations/docs/documentation/zh/handbook-v2/Basics.md>) · [官网英文](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)：关注“值支持哪些操作”以及类型错误为什么在运行前出现。
- 数字文本转换、运算符和 `NaN` 属于 JavaScript 运行时知识，以本日教程为主；官方 TypeScript 手册不会系统教授这些 JS 基础。

## Day 03

- [本地英文：Everyday Types](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Everyday Types.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)：阅读数组类型与数组元素类型。
- [本地英文：noUncheckedIndexedAccess](<../../official-reference/reader/typescript-website/packages/tsconfig-reference/copy/en/options/noUncheckedIndexedAccess.md>) · [官网](https://www.typescriptlang.org/tsconfig/noUncheckedIndexedAccess.html)：理解按索引读取为什么可能得到 `undefined`。

## Day 04

- [本地英文：Narrowing](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Narrowing.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)：先看真值判断和相等判断，联系本日多分支条件。
- 官方页面包含更多收窄方式，本日只要求能画出每个布尔条件为 `true` 或 `false` 时走向哪里。

## Day 05

- [本地英文：More on Functions](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/More on Functions.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/functions.html)：阅读参数类型、返回类型与可选参数。
- 先忽略重载、泛型函数和显式 `this`；它们会分别在 Day 15 和 Day 28 学习。

## Day 06

- [本地英文：Object Types](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Object Types.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/objects.html)：关注属性类型、可选属性、只读属性和数组对象。
- 对象引用、浅复制与深复制是 JavaScript 运行时行为。官方类型说明不能代替本日对引用变化的实际观察。

## Day 07

- [本地英文：More on Functions](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/More on Functions.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/functions.html)：把回调看成“作为参数传入的函数”。
- `map`、`filter`、`find` 是 JavaScript 数组方法，不是 TypeScript 专属语法；它们的逐项数据流和输出仍以本日教程为主。

## Day 08

- [本地英文：Everyday Types](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Everyday Types.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)：阅读可选属性、联合类型和类型断言。
- [本地英文：strictNullChecks](<../../official-reference/reader/typescript-website/packages/tsconfig-reference/copy/en/options/strictNullChecks.md>) · [官网](https://www.typescriptlang.org/tsconfig/strictNullChecks.html)：理解为什么缺失值不能假装成普通字符串或数字。

## Day 09

- [本地英文：Object Types](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Object Types.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/objects.html)：阅读 `interface`、属性、可选属性与 `readonly`。
- [本地英文：Everyday Types](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Everyday Types.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)：比较 type alias 与 interface 的基本写法，不必背成“二选一规则”。

## Day 10

- [本地英文：Narrowing](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Narrowing.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)：重点读 `typeof`、真值、相等、`in`、`instanceof` 和自定义类型守卫。
- [本地英文：Everyday Types](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Everyday Types.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)：补充联合类型与字面量类型。

## Day 11

- [本地英文：Narrowing](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Narrowing.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)：直接定位 Discriminated unions 与 Exhaustiveness checking。
- 重点理解 `never` 为什么能暴露漏掉的成员，不需要背完整页面。

## Day 12

- [本地英文：More on Functions](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/More on Functions.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/functions.html)：阅读函数类型表达式、回调参数、可选参数、`void`。
- 对照本日输出确认：`void` 表示调用方不使用返回结果，不等于函数体不能执行代码。

## Day 13

- [本地英文：Variable Declarations](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/reference/Variable Declarations.md>) · [官网](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)：阅读数组/对象解构与展开。
- [本地英文：Object Types](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Object Types.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/objects.html)：复习 `readonly` 只限制写入，不代表运行时自动深冻结。

## Day 14

- [本地英文：Modules](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Modules.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/modules.html)：阅读 import/export、类型导入与模块边界。
- [本地英文：Modules Reference](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/modules-reference/Reference.md>) · [官网](https://www.typescriptlang.org/docs/handbook/modules/reference.html)：作为查阅资料，不建议现在从头读完。

## Day 15

- [本地英文：Generics](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Type Manipulation/Generics.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/generics.html)：观察类型参数怎样连接输入与输出。
- 先看 Identity、Generic Types 和 Generic Constraints；复杂构造签名可留到以后。

## Day 16

- [Keyof 本地英文](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Type Manipulation/Keyof Type Operator.md>) · [Indexed Access 本地英文](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Type Manipulation/Indexed Access Types.md>) · [官网 Keyof](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)：理解键与对应值类型的关系。
- [Typeof 本地英文](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Type Manipulation/Typeof Type Operator.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html)：区分类型位置的 `typeof` 与运行时判断。

## Day 17

- [本地英文：Utility Types](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/reference/Utility Types.md>) · [官网](https://www.typescriptlang.org/docs/handbook/utility-types.html)：按需查 `Partial`、`Pick`、`Omit`、`Record`，不用一次背完。
- [本地英文：TypeScript 4.9](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/release-notes/TypeScript 4.9.md>) · [官网](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html)：定位 `satisfies`，比较它与类型注解的推断差异。

## Day 18

- [本地英文：Classes](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Classes.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/classes.html)：阅读字段、构造器、方法、可见性和 `readonly`。
- 类章节较长；当天先读实例成员与构造器，不必提前学习抽象类和静态初始化块。

## Day 19

- [本地英文：Narrowing](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Narrowing.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)：复习 `unknown` 必须拿到证据后才能使用。
- [本地英文：useUnknownInCatchVariables](<../../official-reference/reader/typescript-website/packages/tsconfig-reference/copy/en/options/useUnknownInCatchVariables.md>) · [官网](https://www.typescriptlang.org/tsconfig/useUnknownInCatchVariables.html)：理解 catch 里的值为什么不能直接读取 `.message`。

## Day 20

- [本地英文：Narrowing](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Narrowing.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)：阅读用户定义的类型守卫 `value is Type`。
- 官方类型手册不会替你验证 JSON；`JSON.parse` 后逐字段检查属于运行时责任，以本日教程和 [值判断速查](./VALUE-CHECKS.md) 为主。

## Day 21

- [本地英文：More on Functions](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/More on Functions.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/functions.html)：关注异步函数仍要诚实描述输入和返回的 Promise 类型。
- Promise、`await`、`Promise.all` 是 JavaScript 运行时能力，官方 Handbook 不完整教授其执行顺序；本日数据流是主教材。

## Day 22

- [本地英文：Understanding Errors](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Understanding Errors.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/understanding-errors.html)：学习先读第一条诊断和最内层原因。
- TypeScript 官方 Handbook 不规定测试框架；测试的 Arrange、Act、Assert 与边界设计以本日练习为主。

## Day 23

- [本地中文：tsconfig.json](<../../official-reference/reader/typescript-localizations/docs/documentation/zh/project-config/tsconfig.json.md>) · [官网英文](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)：了解配置文件决定哪些文件和规则进入编译。
- [本地英文：strict](<../../official-reference/reader/typescript-website/packages/tsconfig-reference/copy/en/options/strict.md>) · [官网](https://www.typescriptlang.org/tsconfig/strict.html)：从 `strict` 入口再按错误需要查具体选项，不要复制所谓“万能配置”。

## Day 24

- [本地英文：Narrowing](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Narrowing.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)：复习类型守卫、判别联合和完整分支。
- 官方文档解释收窄规则，但不会自动生成业务验证器；JSON 字段允许什么仍由项目需求决定。

## Day 25

- [本地英文：Object Types](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Object Types.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/objects.html)：复习 `readonly` 数组、属性和对象契约。
- [本地英文：Utility Types](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/reference/Utility Types.md>) · [官网](https://www.typescriptlang.org/docs/handbook/utility-types.html)：按需查看 `Readonly`、`Record`、`Partial`；不可变更新本身仍是运行时设计。

## Day 26

- [本地英文：Narrowing](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Narrowing.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)：把 loading/success/failure 看成判别联合并检查完整分支。
- 官方 Handbook 不负责 Promise 调度和测试策略；本日重点是 unknown → 验证 → 状态 → 渲染的整体数据流。

## Day 27

- [本地英文：DOM Manipulation](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/tutorials/DOM Manipulation.md>) · [官网](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html)：阅读 DOM 类型如何描述浏览器对象。
- 浏览器、请求和命令行是三个不同运行环境；官方 DOM 文档只覆盖浏览器部分，不要把 `document` 代码直接拿到 Node 中运行。

## Day 28

- [本地英文：More on Functions](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/More on Functions.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/functions.html)：定位 Function Overloads、Rest Parameters、Parameter Destructuring 和 `this`。
- 阅读时重点比较“联合参数已经足够”与“调用形式确实不同才使用重载”，不要把重载当默认写法。

## Day 29

- [本地英文：Mapped Types](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Type Manipulation/Mapped Types.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)：阅读键遍历和键重映射。
- [本地英文：Conditional Types](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/handbook-v2/Type Manipulation/Conditional Types.md>) · [官网](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)：阅读条件分支与 `infer`；模板字面量类型按练习需要再查。

## Day 30

- [本地英文：Declaration Files Introduction](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/declaration-files/Introduction.md>) · [官网](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)：先理解 `.d.ts` 只描述运行时已经存在的东西。
- [本地英文：Declaration Merging](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/reference/Declaration Merging.md>) · [官网](https://www.typescriptlang.org/docs/handbook/declaration-merging.html)：区分声明合并、模块增强和真正的运行时实现。

## Day 31

- [本地英文：Iterators and Generators](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/reference/Iterators and Generators.md>) · [官网](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)：对照 iterable、iterator、`next()` 与 generator。
- [本地英文：TypeScript 3.2](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/release-notes/TypeScript 3.2.md>) · [官网](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html)：定位 bigint 支持；运行时精度和 JSON 限制仍以本日实验为准。

## Day 32

- [本地英文：TypeScript 5.0](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/release-notes/TypeScript 5.0.md>) · [官网](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html)：定位标准装饰器示例，这是本日装饰器模型。
- [本地英文：Mixins](<../../official-reference/reader/typescript-website/packages/documentation/copy/en/reference/Mixins.md>) · [官网](https://www.typescriptlang.org/docs/handbook/mixins.html)：比较 mixin 与普通组合。旧的 Decorators reference 主要描述 legacy 模式，不要和标准装饰器混用。

[返回文档中心](./README.md)
