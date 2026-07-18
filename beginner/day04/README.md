# Day 04：布尔逻辑与多分支

预计用时：60–90 分钟。

今天要把 Day 02 的一个 `if` 扩展成能处理真实规则的多分支判断。你不需要有 JavaScript 基础；比较符号和逻辑符号都会从含义开始说明。

## 完成目标

- 能用 `===`、`!==`、`>`、`>=`、`<`、`<=` 做比较。
- 能用 `&&`、`||`、`!` 组合布尔条件。
- 能用 `if / else if / else` 按优先级处理规则。
- 能主动检查“刚好等于边界”的情况。

## 今天暂时不学

不学习复杂三元表达式、`switch` 和 TypeScript 联合类型。先把普通条件判断写稳。

## 前置复习（8 分钟）

先口头回答，再运行代码验证：

1. `Number("3")` 得到数字还是文字？
2. `5 > 3` 的结果属于 `number` 还是 `boolean`？
3. `if` 后面的条件为 `true` 时会发生什么？
4. 数组 `[10, 20]` 的第一个索引是多少？

## 60–90 分钟安排

- 0–8 分钟：完成前置复习。
- 8–25 分钟：阅读下面的概念和边界示例。
- 25–35 分钟：运行并修改 `example.ts`。
- 35–70 分钟：完成四道练习。
- 70–90 分钟：查看提示、修正错误并记录最容易忘的一点。

## 1. 比较会产生布尔值

```ts
const age = 18;

console.log(age >= 18); // true
console.log(age === 18); // true
console.log(age !== 18); // false
```

`===` 表示“值和类型都相同”。初学阶段不要使用会自动转换类型的 `==`。

边界是最常见的错误来源：

```ts
const score = 60;
console.log(score > 60);  // false，不包含 60
console.log(score >= 60); // true，包含 60
```

## 2. 组合多个条件

- `A && B`：A 和 B 都为 `true` 才为 `true`。
- `A || B`：A、B 至少一个为 `true` 就为 `true`。
- `!A`：把布尔值反过来。

```ts
const age = 20;
const hasTicket = true;
const canEnter = age >= 18 && hasTicket;
```

## 3. 分支从上往下检查

第一个满足的分支执行后，后面的 `else if` 不再检查。因此更具体、优先级更高的规则通常写在上面。

## 运行完整示例

```powershell
npm run beginner:example -- day04
```

尝试把 `ageText` 改成 `"70"`，再改成 `"10"`，预测票价后再运行。

## 必做练习

按顺序完成，每次只改当前 `practice-XX.ts`：

```powershell
npm run beginner -- day04 01
npm run beginner -- day04 02
npm run beginner -- day04 03
npm run beginner -- day04 04
```

- 01：组合温度、范围和天气条件。
- 02：修复“刚好 60 分”这个边界错误。
- 03：复习字符串转数字，再判断运费。
- 04：把多条优惠规则按正确优先级组合。

也可以一次检查全部练习：

```powershell
npm run beginner -- day04 all
```

卡住时先看命令给出的中文提示。最后才运行答案：

```powershell
npm run beginner:solution -- day04 01
```

## 常见坑

- `=` 是赋值，`===` 才是严格比较。
- “至少 60”应写 `>= 60`，不是 `> 60`。
- 来自输入框或文件的 `"3"` 是字符串，计算前要 `Number(...)`。
- `&&` 两边都要成立；`||` 只需一边成立。
- 多分支的顺序本身就是业务规则的一部分。

## 完成标准

- 四道练习全部通过。
- 能解释 `>` 与 `>=` 的区别。
- 能不用看答案写出 `A && !B`。
- 能为一个数字边界主动测试“少 1、刚好、加 1”三个值。

## 官方资料

- [TypeScript for the New Programmer](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [Everyday Types：基础类型和联合类型入口](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
