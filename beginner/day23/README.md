# Day 23｜读懂 TSConfig，也读懂第一条错误

`tsconfig.json` 决定 TypeScript 用哪些规则检查项目。今天从空文件写一个小程序，同时接受多项严格规则检查，练习把错误信息转化为明确分支。

建议用时：60–90 分钟。

## 今天会学到

- `strictNullChecks` 要求处理 `undefined` 和 `null`；
- `noImplicitAny` 要求参数有可解释的类型；
- `noUncheckedIndexedAccess` 提醒数组索引可能越界；
- `exactOptionalPropertyTypes` 区分“属性不存在”和“值为 undefined”；
- `target`、`module`、`noEmit` 的职责；
- 多条错误出现时先修第一条。

## 核心讲解

`target` 决定输出 JavaScript 的语法年代，`module` 决定 import/export 的模块规则，`noEmit` 表示只检查而不生成文件。它们都不能代替运行测试。

严格规则不是在刁难你，而是在强迫程序把缺失情况说清楚：`find` 可能找不到，`scores[0]` 可能不存在，可选属性可能根本没有这个键，`unknown` 必须先缩小类型才能参与计算。

读错误的顺序固定为：只看第一条 → 找行号和表达式 → 说清实际类型与需要类型 → 做最小修改 → 再检查。

## 独立练习（从空文件开始）

在 `practice.ts` 中从零完成“严格配置下的安全读取”程序。

必须使用这些名称：`Preferences`、`findCourse`、`showCourse`、`showFirst`、`clearTheme`、`double`。

需求：

1. `findCourse(courses, keyword)` 返回找到的课程或 `undefined`；`showCourse` 把两种情况转换成文字。
2. `showFirst(scores)` 安全读取第一项，空数组返回 `列表为空`。
3. `Preferences` 有可选的 `theme: "light" | "dark"`；`clearTheme` 返回真正移除该属性的新对象，不能把它赋成 `undefined`。
4. `double(value: unknown)` 只把数字乘 2，其他类型返回 `undefined`。
5. 使用固定输入依次打印下面的精确输出。

精确输出：

```text
找到: TypeScript
没有找到
第一项: 88
列表为空
主题字段: 不存在
结果: 8
无法计算
```

固定输入：课程为 `["TypeScript", "Git"]`，关键词依次为 `Type`、`Python`；成绩依次为 `[88, 92]`、`[]`；偏好为 `{ theme: "dark" }`；待计算值为 `4`、`"四"`。

限制：不使用 `any`、`as`、非空断言 `!`、`@ts-ignore` 或 `@ts-expect-error`；不要关闭严格规则。

完成标准：右击运行 `practice.ts` 后类型检查通过且输出完全一致；能解释每个 `undefined` 来自哪里，以及为什么删除属性不等于赋值为 `undefined`。

## 最容易踩的坑

- 用类型断言或非空断言压掉提示；
- 认为 `number[]` 的任意索引必然是数字；
- 对 `unknown` 直接做乘法；
- 用 `theme: undefined` 假装删除可选属性；
- 同时猜测多条错误，而没有先处理第一条。

## 拓展思考（不要求写代码）

如果开启 `noUncheckedIndexedAccess` 后，一个已经检查过 `scores.length > 0` 的函数仍提示 `scores[0]` 可能缺失，你会选择怎样重写代码来让“存在性”更直接地被 TypeScript 看见？

## 官方资料

- [TSConfig：strict](https://www.typescriptlang.org/tsconfig/strict.html)
- [TSConfig：noUncheckedIndexedAccess](https://www.typescriptlang.org/tsconfig/noUncheckedIndexedAccess.html)
- [TSConfig：exactOptionalPropertyTypes](https://www.typescriptlang.org/tsconfig/exactOptionalPropertyTypes.html)
- [TSConfig 总览](https://www.typescriptlang.org/tsconfig)
