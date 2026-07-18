# Day 20｜JSON 进入程序后，先把它当作 unknown

今天解决一个非常真实的问题：接口、文件和浏览器存储里的 JSON 即使“长得像”某个类型，也没有经过 TypeScript 检查。类型只在编译时帮助你；程序运行后，类型会被擦除。

建议用时：60–90 分钟。

## 今天会学到

- `JSON.parse` 为什么应该接到 `unknown`；
- `as User` 只是告诉编译器“相信我”，不会检查真实数据；
- 用 `typeof`、`null` 检查、`in` 和 `Array.isArray` 逐层缩小类型；
- 编写返回 `value is SomeType` 的类型谓词；
- 验证嵌套对象和数组；
- 区分 JSON 语法错误与数据结构错误。

## 先建立一个重要画面

JSON 是程序边界外来的包裹。TypeScript 看不见包裹里面是什么，所以顺序应该是：

1. 解析为 `unknown`；
2. 在运行时验证；
3. 验证成功后，才把它当作业务类型使用。

`JSON.parse(raw) as User` 跳过了第 2 步。它不会转换字符串，也不会阻止缺字段。

## 今日路线

1. 10 分钟：不看答案，回忆 Day 19 的 `unknown` 缩小；
2. 15 分钟：运行并逐句读 `example.ts`；
3. 35–50 分钟：完成 4 个练习；
4. 10 分钟：用自己的话解释“类型检查”和“运行时验证”的区别。

## 命令

```bash
npm run beginner:example -- day20
npm run beginner -- day20 1
npm run beginner -- day20 2
npm run beginner -- day20 3
npm run beginner -- day20 4
```

需要对照时，把 `beginner` 换成 `beginner:solution`。

## 最容易踩的坑

- 只检查最外层是对象，却直接相信内部字段；
- 忘记 `typeof null === "object"`，所以必须排除 `null`；
- 类型谓词写得比实际检查更“乐观”，等于向编译器撒谎；
- 数组只检查了 `Array.isArray`，却没检查每个元素；
- 用一个 catch 把语法错误和字段错误混成同一句话。

## 间隔复习

明天开始前，先重做第 01 题，并口述：

> `as` 不会验证；`unknown` 会迫使我先检查。

## 完成标准

- 4 个练习全部通过；
- 能写出一个不使用 `any` 的类型谓词；
- 能指出嵌套对象需要逐层验证；
- 能解释“编译通过”不代表外部数据一定安全。

## 官方资料

- [TypeScript Handbook：Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [TypeScript Handbook：Everyday Types 中的类型断言](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)
