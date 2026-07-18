# Day 01 参考答案解释

## 最小答案

```ts
const courseName = "TypeScript";
let completedLessons = 0;
const isBeginner = true;

completedLessons = completedLessons + 1;

const summary = `${courseName} | completed: ${completedLessons} | beginner: ${isBeginner}`;

console.log(summary);
```

## 逐步解释

`courseName` 保存一段不会重新赋值的文字，因此使用 `const`。TypeScript 从 `"TypeScript"` 推断它是 `string`。

`completedLessons` 从数字 `0` 开始，稍后会被重新赋值，因此使用 `let`。TypeScript 推断它是 `number`。

`isBeginner` 保存没有引号的 `true`，因此是 `boolean`。如果写成 `"true"`，它会变成 `string`。

```ts
completedLessons = completedLessons + 1;
```

这一行先读取旧值 `0`，计算 `0 + 1`，再把结果 `1` 赋回同一个变量。

最后使用反引号创建模板字符串。`${...}` 读取变量当时的值，生成验收需要的完整文字。

## 为什么没有到处写类型标注

下面两种写法都正确：

```ts
const courseName: string = "TypeScript";
const courseName = "TypeScript";
```

第二种更简洁，TypeScript 仍然能推断出 `string`。当类型已经能从初始值清楚推断时，不必为了“看起来像 TypeScript”而重复标注。
