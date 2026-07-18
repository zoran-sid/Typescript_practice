# Day 30（选修）：声明文件与旧式 TypeScript

现代项目通常从 npm 包直接获得类型，但维护旧 JavaScript、无类型库或历史代码时会遇到 `.d.ts`、声明合并、枚举与命名空间。今天的目标是能消费和修正这些类型，不是把新项目写成旧风格。

## 今天能做到什么

- 解释 `.d.ts` 只描述现有运行时，不生成 JavaScript。
- 为一个小型 JavaScript 模块写匹配的导出声明。
- 识别接口声明合并，并理解它和 type alias 的差别。
- 阅读 `enum`、`namespace`，新代码中优先考虑字面量联合、对象与 ES 模块。
- 知道错误声明可能让编译器“相信谎言”。

## 60–90 分钟安排

1. 15 分钟：同时打开 `legacy-score.js`、`legacy-score.d.ts` 和 `example.ts`。
2. 20 分钟：练习 01，修正与真实 JS 不一致的声明文件。
3. 15 分钟：练习 02，观察两个同名 interface 如何合并。
4. 20 分钟：练习 03，把旧枚举值归一化为现代字面量状态。
5. 10 分钟：在 `node_modules` 中任选一个包，只观察其 `.d.ts` 入口。

## 三层必须一致

```text
真实 JavaScript 行为  ←必须吻合→  .d.ts 声明  ←供检查→  TypeScript 调用者
```

声明文件中的这段代码不会创建函数：

```ts
export declare function total(values: readonly number[]): number;
```

运行时仍必须存在一个真正导出的 `total`。如果声明写成返回 `string`、真实代码却返回 `number`，TypeScript 会按照错误声明继续推理，直到运行时出现问题。

同名 `interface` 可以合并，这对扩展外部声明有用，也可能让来源不清晰。`type` 别名不能同名重复。模块增强、ambient module、triple-slash、`export =` 等属于维护具体旧库时再查的专项内容。

## 练习

```powershell
npm run beginner:example -- day30
npm run beginner -- day30 01
npm run beginner -- day30 02
npm run beginner -- day30 03
npm run beginner -- day30 all
```

练习 01 需要同时修正 `practice-legacy-score.d.ts`，终端的类型提示会指出当前声明与调用方式的冲突。

## 常见错误

- 在 `.d.ts` 里写实现，期待它生成运行时代码。
- 为了尽快消除红线，把无类型模块整体声明成 `any`。
- 声明的可选性、返回值或异常行为与真实 JS 不一致。
- 不知道接口已在别处合并，误判某个字段从哪里来。
- 认为 enum 已“不能用”；它仍受支持，但很多现代场景用 `as const` 对象或字面量联合更直观。
- 新代码继续使用 namespace 组织模块，而项目已经采用 ESM。

## 完成标准

- 三题通过，能明确指出哪些文件在运行时执行。
- 能为给定 JS 导出写最小、非 `any` 的声明。
- 能读懂 enum/namespace，但不会因为历史代码存在就默认在新代码中复制。

## 官方资料

- [Type Declarations](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html)
- [Declaration Files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)
- [Declaration Merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html)
- [Enums：Objects vs Enums](https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums)
- [Namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html)
