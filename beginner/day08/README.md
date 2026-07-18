# Day 08：缺失值与安全访问

预计用时：60–90 分钟。

现实数据经常缺少某项：用户可能没填电话，`find` 可能找不到结果。JavaScript 用 `undefined` 和 `null` 表示缺失；TypeScript 在严格模式下会要求你先处理这种可能。

## 完成目标

- 知道 `undefined` 与 `null` 都表示“没有可用值”。
- 能用 `?` 描述可选属性。
- 能用 `?.` 在前一层存在时才继续访问。
- 能用 `??` 只为 `null`/`undefined` 提供默认值。
- 不使用非空断言 `!` 掩盖未处理的情况。

## 今天暂时不学

不学习复杂类型守卫和外部 JSON 验证。今天只处理程序内已经具有明确类型的数据。

## 前置复习（8 分钟）

1. `find` 找到时返回什么？找不到时返回什么？
2. 对象的嵌套属性怎样用点号读取？
3. `filter` 与 `find` 的结果有什么区别？
4. `0` 是一个有效数字吗？空字符串一定表示“缺失”吗？

## 60–90 分钟安排

- 0–8 分钟：回忆对象和 `find`。
- 8–30 分钟：学习可选属性、`?.` 和 `??`。
- 30–42 分钟：运行示例并分别搜索 Lin、Mei、不存在的人。
- 42–78 分钟：完成四道练习。
- 78–90 分钟：整理 `||` 与 `??` 的差异表。

## 1. 可选属性

```ts
const user: { name: string; phone?: string } = {
  name: "Lin",
};
```

`phone?: string` 表示这个属性可以是字符串，也可以不存在。读取它时，TypeScript 会把“可能是 `undefined`”保留下来提醒你。

## 2. 可选链 `?.`

```ts
const city = user.address?.city;
```

如果 `address` 存在，就继续读取 `city`；如果不存在，整个表达式得到 `undefined`，而不是在运行时崩溃。

## 3. 空值合并 `??`

```ts
const shownCity = city ?? "未填写";
```

只有左边是 `null` 或 `undefined` 时才使用右边默认值。

`||` 的含义更宽：`0`、`""`、`false` 也会被当作“不成立”而使用默认值。因此当 0 或空字符串是合法数据时，应使用 `??`。

## 4. 不要急着写非空断言

`foundUser!.name` 是在对编译器说“我保证它存在”，但不会添加运行时保护。保证错误时程序仍会崩溃。初学阶段优先显式判断、`?.` 或 `??`。

## 运行完整示例

```powershell
npm run beginner:example -- day08
```

将搜索名字改成 `"Nobody"`，先预测四行输出。再把 `score` 改成 `undefined`（同时给它合适的联合类型）观察默认值。

## 必做练习

```powershell
npm run beginner -- day08 01
npm run beginner -- day08 02
npm run beginner -- day08 03
npm run beginner -- day08 04
```

- 01：安全读取缺失的嵌套地址。
- 02：比较 `||` 与 `??` 对 0、空字符串的影响。
- 03：再次处理 `find` 返回 `undefined`。
- 04：综合处理设置对象里的有效空值和真正缺失值。

全部检查：

```powershell
npm run beginner -- day08 all
```

答案示例：

```powershell
npm run beginner:solution -- day08 02
```

## 常见坑

- 可选属性不是“肯定有，只是暂时没写类型”。它真的可能不存在。
- `?.` 只避免访问崩溃，不会自动提供默认文字。
- `??` 只处理 `null` 和 `undefined`。
- `||` 还会替换 0、空字符串和 `false`。
- 非空断言 `!` 不会产生任何运行时检查。

## 完成标准

- 四道练习全部通过。
- 能解释为什么音量 0 不该被 `|| 50` 替换。
- 每次使用 `find` 后都会考虑未找到的情况。
- 能在不使用 `!` 的情况下安全读取可选嵌套属性。

## 官方资料

- [Everyday Types：Optional Properties](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#optional-properties)
- [Everyday Types：null and undefined](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined)
