# Day 23｜读懂 TSConfig，也读懂第一条错误

`tsconfig.json` 是 TypeScript 项目的检查规则。它不会让业务代码自动正确，但会决定编译器愿意帮你发现多少风险，以及代码要按什么 JavaScript 和模块规则处理。

建议用时：60–90 分钟。

## 今天会学到

- 先读第一条 TypeScript 错误，而不是被几十条红线吓住；
- `strict` 是一组严格检查的总开关；
- `strictNullChecks` 让 `undefined` 和 `null` 不再被忽略；
- `noImplicitAny` 要求参数与值有可解释的类型；
- `noUncheckedIndexedAccess` 提醒数组索引可能越界；
- `exactOptionalPropertyTypes` 区分“属性不存在”和“属性值为 undefined”；
- `noEmit`、`target`、`module` 各自负责什么。

## 先分清三个配置

- `target`：输出要兼容哪个 JavaScript 语法年代；
- `module`：文件之间的 import/export 按什么模块规则理解；
- `noEmit`：只做类型检查，不生成 JavaScript 文件。

这些配置没有一个能替代运行测试。类型检查保护形状和用法，测试保护业务行为。

## 读错误的固定顺序

1. 只看最上面的第一条错误；
2. 找到文件、行号和红线所在表达式；
3. 用自己的话说出“实际类型”和“需要类型”；
4. 做最小修改，再运行；
5. 第一条消失后再看下一条。

一处错误可能引发很多后续错误，所以不要同时猜。

## 今日路线

1. 10 分钟：复习 Day 22 的“类型检查 vs 运行测试”；
2. 15 分钟：运行示例并找到本项目的 `beginner/tsconfig.json`；
3. 35–50 分钟：完成 4 个带不同严格规则的练习；
4. 10 分钟：把每个配置的作用写成一句自己的话。

## 命令

```bash
npm run beginner:example -- day23
npm run beginner -- day23 1
npm run beginner -- day23 2
npm run beginner -- day23 3
npm run beginner -- day23 4
```

## 最容易踩的坑

- 看到错误就用类型断言把它压下去；
- 只读最后一条错误，错过真正的起点；
- 认为数组写了 `number[]`，任何索引就一定有数字；
- 把可选属性理解成“永远存在，只是可能为 undefined”；
- 为了少报错关闭 `strict`；
- 把 `target` 和 `module` 当成同一件事；
- 只运行代码、不运行类型检查，或反过来。

## 间隔复习

明天不看本页，给六个配置各写一句解释。三天后重做第 03、04 题；它们最容易在真实项目里被忘记。

## 完成标准

- 4 个练习全部通过；
- 能按顺序解释 `strictNullChecks`、`noUncheckedIndexedAccess` 和 `exactOptionalPropertyTypes`；
- 遇到多条错误时会先修第一条；
- 知道 `noEmit` 不会运行测试；
- 能说清 `target` 与 `module` 的区别。

## 官方资料

- [TSConfig：strict](https://www.typescriptlang.org/tsconfig/strict.html)
- [TSConfig：strictNullChecks](https://www.typescriptlang.org/tsconfig/strictNullChecks.html)
- [TSConfig：noImplicitAny](https://www.typescriptlang.org/tsconfig/noImplicitAny.html)
- [TSConfig：noUncheckedIndexedAccess](https://www.typescriptlang.org/tsconfig/noUncheckedIndexedAccess.html)
- [TSConfig：exactOptionalPropertyTypes](https://www.typescriptlang.org/tsconfig/exactOptionalPropertyTypes.html)
- [TSConfig：target、module 与 noEmit](https://www.typescriptlang.org/tsconfig)
