# Day 11：判别联合、switch 与完整分支

预计用时：75–90 分钟。

今天把“一个值可能处于几种状态”写成 TypeScript 能检查的模型。重点不在记住 switch，而在于：先找判别字段，再让每一种状态都有自己的数据和处理分支。

## 前置复习（10 分钟）

先口头回答：

1. 联合类型中的竖线表示什么？
2. 为什么读取可选属性时可能得到 undefined？
3. if 或 switch 的一个分支漏掉 return，会发生什么？

如果答不完整也没关系。今天的练习会再次遇到这些问题。

## 1. 判别联合是什么

下面每个成员都有同名字段 status，但字段值不同：

~~~ts
type LoadState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; items: string[] }
  | { status: "error"; message: string };
~~~

status 叫作判别字段（discriminant）。检查它之后，TypeScript 就知道当前成员有哪些属性：

~~~ts
if (state.status === "success") {
  console.log(state.items.length);
}
~~~

不要把所有属性都写成可选属性。那样会允许“成功但没有 items”这类不合理对象。

## 2. switch 与 never

switch 很适合逐个处理字面量成员。never 表示“这里不应该再有任何可能值”：

~~~ts
function assertNever(value: never): never {
  throw new Error("未处理的状态：" + JSON.stringify(value));
}
~~~

把 assertNever 放在 default 中后，未来给联合增加成员却忘记补分支，TypeScript 会在检查阶段提醒你。

注意：assertNever 会在真的到达时抛错；它不是为了隐藏错误，而是把“漏分支”变成明显错误。

## 3. 运行完整示例

~~~powershell
npm run beginner:example -- day11
~~~

阅读 example.ts，依次指出每个 case 中 state 的具体类型。

## 4. 必做练习

### 练习 01：回忆判别字段

为订单的 pending、paid、cancelled 三种状态返回正确说明。

~~~powershell
npm run beginner -- day11 01
~~~

### 练习 02：修复错误分支并补穷尽检查

现有程序把 failed 错写成完成。修复它，并用 assertNever 保证所有任务状态都被处理。

~~~powershell
npm run beginner -- day11 02
~~~

### 练习 03：迁移到图形计算

使用 kind 判别正方形、长方形和三角形，计算面积。不要在分支外读取某个成员独有的属性。

~~~powershell
npm run beginner -- day11 03
~~~

### 练习 04：联合与 undefined 综合

处理成功、拒绝、错误三种支付结果。成功结果中的 receiptId 仍可能缺席，要用空值合并提供明确文字。

~~~powershell
npm run beginner -- day11 04
~~~

每题完成后可以查看对应答案，例如：

~~~powershell
npm run beginner:solution -- day11 02
~~~

## 5. 容易出错的地方

- 只检查“是否有某属性”，却没有稳定的字面量判别字段。
- 把每种状态的数据全写成可选属性，导致非法组合也能通过检查。
- default 直接返回“未知”，让新成员悄悄漏掉。
- 忘记一个 case 中的 return，继续落入后续分支。
- 在 success 分支外直接使用只属于 success 的 items。
- 用非空断言掩盖可选 receiptId；断言不会创造运行时数据。

## 完成标准

- 四个练习全部显示 PASS。
- 能解释判别字段如何帮助收窄。
- 能写出接受 never 的 assertNever。
- 给联合新增一个成员时，知道编译错误是在提醒哪个分支缺失。

## 官方资料

- [Narrowing：Discriminated unions](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions)
- [Narrowing：The never type](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type)
- [Everyday Types：Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
