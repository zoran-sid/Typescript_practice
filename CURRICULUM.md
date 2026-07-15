# 课程覆盖矩阵

“掌握 TypeScript”不仅是记住类型关键字，还包括理解 JavaScript 运行时、编译器边界、外部数据验证、模块系统和测试。本课程覆盖现代工程中需要掌握的主要 TypeScript 能力；历史特性会说明用途，但不会鼓励在新代码中滥用。

## 语言核心

- `boolean`、`number`、`bigint`、`string`、`symbol`、`null`、`undefined`、对象类型：Day 01–02
- `let`、`const`、作用域、字面量、推断、上下文类型、类型兼容：Day 01–04
- 数组、只读数组、元组、可选属性、索引签名：Day 02、04
- 函数声明、表达式、回调、可选/默认/剩余参数、重载、`this`、`void`、`never`：Day 03
- `type`、`interface`、扩展、交叉、结构类型、声明合并：Day 04、06、14
- 类、构造器、参数属性、`public/protected/private/#private`、`readonly`、getter、static、abstract、implements、override：Day 05
- 联合、字面量、枚举、`as const`、`satisfies`、控制流收窄、判别联合、穷尽检查：Day 06、08、20

## 类型系统进阶

- 泛型、约束、默认值、泛型函数/接口/类：Day 07
- `keyof`、`typeof`、索引访问、条件索引：Day 08
- `Partial`、`Required`、`Readonly`、`Pick`、`Omit`、`Record`、`Exclude`、`Extract`、`ReturnType`、`Parameters`：Day 09
- 映射类型、条件类型、分布式条件、`infer`：Day 09
- 模板字面量、品牌类型、字符串协议：Day 10
- `any`、`unknown`、`never`、类型谓词、断言函数、用户定义守卫：Day 11

## 运行时与工程

- 异常、`unknown` catch、Result 模型、失败边界：Day 12
- `Promise`、`async/await`、并发、依赖注入、异步错误：Day 13
- ESM、导入导出、`import type`、命名空间、声明文件、环境模块、三斜线指令：Day 14
- DOM 泛型查询、事件类型、可空处理、JSX 类型概念：Day 15
- `Iterable`、`Iterator`、生成器、`Symbol.iterator`：Day 16
- 标准 Decorator、Mixin 与采用边界：Day 17
- `strict` 系列、`noUncheckedIndexedAccess`、`exactOptionalPropertyTypes`、`verbatimModuleSyntax`、`allowJs/checkJs`、模块解析：Day 18
- 运行时测试、类型级测试、`@ts-expect-error`、回归不变量：Day 19
- 状态机和综合数据流水线：Day 20–21

## 有意不作为主线的内容

- 旧式内部模块（namespace）只在 Day 14 用于阅读遗留代码；新代码优先 ESM。
- 旧式实验性 Decorator 与新版标准 Decorator 语义不同；Day 17 使用现代语义并明确兼容风险。
- TypeScript 类型在运行时会被擦除；课程不会把类型断言伪装成数据验证。
- Astro、Zod、MapLibre 等库的完整 API 不是 TypeScript 语言本身；课程只使用它们来解释真实类型边界。
