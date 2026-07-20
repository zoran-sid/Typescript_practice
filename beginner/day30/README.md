# Day 30（选修）｜声明文件与旧式 TypeScript

现代 npm 包通常自带类型，但维护旧 JavaScript 或历史代码时会遇到 `.d.ts`、声明合并、枚举与命名空间。目标是准确消费这些边界，不是在新项目中默认复制旧风格。

建议用时：60–90 分钟。

## 今天会学到

- 理解 `.d.ts` 只描述运行时，不生成 JavaScript；
- 对照 JavaScript 导出与声明文件；
- 识别同名 interface 的声明合并；
- 把旧 enum 归一化成现代字面量状态；
- 知道错误声明会让编译器相信不真实的行为。

## 核心讲解

```text
真实 JavaScript 行为 ←必须吻合→ .d.ts 声明 ←供检查→ TypeScript 调用者
```

本目录的 `score.js` 是运行时代码，`score.d.ts` 描述其参数和返回值。声明里的 `declare function` 不会创建函数；删除真实 JS 后，运行时仍会失败。

同名 interface 会合并，适合扩展外部声明；type alias 不会这样合并。`enum` 常见于旧代码，新代码通常可用 `as const` 对象加字面量联合，既直观又符合 ES 模块习惯。

## 独立练习（从空文件开始）

只编辑 `practice.ts`，从零完成“旧模块兼容入口”；不要修改 `score.js` 或 `score.d.ts`。

必须名称：`LessonInfo`、`LegacyStatus`、`ModernStatus`、`normalizeStatus`。还要从 `./score.js` 导入 `score`。

需求：

1. 阅读两个 score 文件，给 `[10, 20, 30]` 求和，并用 number 接收结果。
2. 写两段同名 `LessonInfo` interface：第一段 title，第二段 minutes；创建 Declarations / 35 对象。
3. 写 `LegacyStatus` 数字枚举 Draft、Published。
4. 写现代 `ModernStatus` 常量对象与同名字面量联合类型，值为 draft、published。
5. `normalizeStatus` 同时接受旧枚举和现代状态，并统一返回 ModernStatus。

精确输出：

```text
Score: 60
Declarations: 35 minutes
Legacy: published
Modern: draft
```

限制：不使用 `any`、类型断言或 namespace；不要修改辅助模块来迎合调用代码。

完成标准：右击运行 `practice.ts` 后输出完全一致；能指出 `.js`、`.d.ts`、`.ts` 中哪些代码会在运行时执行，以及声明错误会造成什么风险。

## 常见错误

- 以为 `.d.ts` 会生成实现；
- 声明与真实 JS 的参数或返回类型不一致；
- 期待 type alias 像 interface 一样合并；
- 新模块继续用 namespace 组织代码；
- 用断言掩盖错误声明。

## 拓展思考（不要求写代码）

如果 `score.js` 实际开始忽略负数，但 `.d.ts` 完全没有变化，TypeScript 能发现这次业务行为变更吗？应由哪类测试保护它？

## 官方资料

- [Type Declarations](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html)
- [Declaration Files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)
- [Declaration Merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html)
- [Enums](https://www.typescriptlang.org/docs/handbook/enums.html)
