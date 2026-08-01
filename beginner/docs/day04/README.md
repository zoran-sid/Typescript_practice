# Day 04：布尔逻辑与多分支

预计用时：60–90 分钟。

订单优惠通常不只看一个条件：订单满 200 元先减 40；没到 200 元时，会员满 100 元再减 20；其余情况可能只减 10。程序要先判断条件，再按规定的先后顺序选中一个结果。

## 完成目标

- 使用 `===`、`!==`、`>`、`>=`、`<`、`<=` 比较值。
- 使用 `&&`、`||`、`!` 组合布尔条件。
- 使用 `if / else if / else` 按优先级处理规则。
- 主动检查“刚好等于边界”的情况。

## 比较与边界

比较表达式只会得到 `true` 或 `false`，这类结果的正式类型名是 `boolean`。以分数 60 为例：

| 条件 | 60 是否通过 | 原因 |
| --- | --- | --- |
| `score > 60` | 否 | `>` 不包含 60 本身 |
| `score >= 60` | 是 | `>=` 包含 60 本身 |

题目写“至少 60”“满 100”“不低于 80”时，通常要把边界算进去。严格相等使用 `===`，严格不等使用 `!==`；初学阶段不要使用会自动转换类型的 `==` 和 `!=`。

## 组合条件

- `A && B`：两个条件都通过，结果才是 `true`。
- `A || B`：两个条件中至少一个通过，结果就是 `true`。
- `!A`：把结果反过来，`true` 变 `false`，`false` 变 `true`。

“是会员、订单满 100、并且没有使用优惠券”要同时检查三件事：

| 检查 | 示例结果 |
| --- | --- |
| `isMember` | 是会员：`true` |
| `orderTotal >= 100` | 订单 120 元：`true` |
| `!hasCoupon` | 没用优惠券：`true` |

三个结果都为 `true`，整条会员优惠规则才通过。条件较长时，先把它保存成名字清楚的布尔变量，后面的 `if` 会更容易读。

## 多分支与优先级

`if / else if / else` 从上往下检查。遇到第一个 `true` 就执行对应花括号，整组判断随即结束，下面的分支不会再检查。

因此顺序要直接照业务优先级写：

1. 先检查最高优惠。
2. 没选中时，再检查会员优惠。
3. 仍没选中时，再检查普通优惠。
4. 都没选中，就使用 `else` 或最开始准备的默认值。

同一笔 200 元会员订单可能同时满足多个条件。最高优惠写在前面，程序才会选中 40 元，而不会提前停在 20 元。

## 为什么要这样设计

优惠和票价通常有多条规则，而且同一份数据可能同时满足几条。如果把互斥规则写成多个独立 `if`，后面的分支可能再次修改前面的结果，甚至让多项优惠意外叠加。`if / else if / else` 表达的是“按顺序检查，只采用第一个满足的分支”。

比较运算和布尔运算负责把多个事实合成 `true` 或 `false`，分支结构负责按照顺序选择一条路径。你仍要决定边界是 `>` 还是 `>=`、条件如何组合，以及哪条规则优先；代码不会自动理解“满 100”是否包含 100。

分支顺序本身就是业务含义，调换顺序可能改变结果。条件很多时，长表达式也会变得难读，可以先保存为有名字的布尔变量，再交给分支判断。

## 阅读完整示例

打开并右击运行 `example.ts`。按顺序判断年龄属于哪个分支，再计算是否允许独自入场。临时把年龄改成边界值 12、25、65，分别预测结果，再运行验证并恢复。

## Example 实际输出

运行 `example.ts` 后，终端会按下面的顺序显示。先用代码推测结果，再逐行对照：

```text
年龄: 20
票价: 30
允许独自入场: true
```

## Example 代码流程图

运行 `example.ts` 前先沿图预测执行顺序；运行后再把每个节点对应到代码行。

```mermaid
flowchart TD
  A["ageText = '20'；hasStudentCard = true"] --> B
  B["Number(ageText) 得到 age = 20"] --> C{"age < 12？"}
  C -- "是" --> D["ticketPrice = 15"]
  C -- "否" --> E{"age >= 65？"}
  E -- "是" --> F["ticketPrice = 20"]
  E -- "否" --> G{"hasStudentCard && age <= 25？"}
  G -- "是" --> H["ticketPrice = 30"]
  G -- "否" --> I["ticketPrice = 40"]
  D --> J["票价分支结束"]
  F --> J
  H --> J
  I --> J
  J --> K["计算 canEnterAlone = age >= 18 && ticketPrice > 0"]
  K --> L["console.log 输出 age"]
  L --> M["console.log 输出 ticketPrice"]
  M --> N["console.log 输出 canEnterAlone"]
```

## 官方手册扩展阅读（可选）

完成当天教程后，如想继续确认概念，只选 [Day 04 对应的 1 篇官方阅读](../OFFICIAL-READING.md#day-04) 即可。它不是练习前置，不需要先读完才能作答。

## 独立练习导航

本日共有 2 道独立练习。每道题都有单独目录、说明、作答文件和完整参考答案；题目之间不共享代码。

| 目录 | 场景 | 类型 |
| --- | --- | --- |
| [practice01](./practice01/README.md) | Day 04：订单优惠计算器 | 主任务 |
| [practice02](./practice02/README.md) | 部署闸门判断 | 独立迁移 |

右击任意练习目录中的 `practice.ts` 即可单独检查；命令行也可运行 `npm run beginner -- day04 practice02`。

## 常见错误

恰好 100 元没有优惠时，先看是不是把 `>= 100` 写成了 `> 100`。200 元订单只减了 20 时，检查会员分支是不是放在最高优惠前面。已经使用优惠券却仍得到会员优惠时，检查 `hasCoupon` 前面的 `!`。

### 错误代码示例

假设客服队列有三条互斥规则：系统故障工单进入 `"P0"`；否则，等待超过 120 分钟或 VIP 已等待至少 30 分钟的工单进入 `"P1"`；其余进入普通队列。下面把三条规则写成了互不关联的 `if`：

```ts
const serviceDown = true;
const isVipCustomer = true;
const waitingMinutes = 180;
let queue = "normal";

if (serviceDown) {
  queue = "P0";
}

if (isVipCustomer && waitingMinutes >= 30) {
  queue = "P1"; // ❌ 独立 if 继续执行并覆盖更高优先级结果。
}

if (waitingMinutes >= 120) {
  queue = "P1";
}

console.log(`Queue: ${queue}`);
```

实际输出：

```text
Queue: P1
```

第一条规则已经选中最高优先级 `"P0"`，但程序不会自动停止。后两个 `if` 仍会执行，并把结果覆盖成 `"P1"`。这种问题常出现在新增业务规则时：每一条单独看都正确，组合后却破坏了原有优先级。

### 正确写法

```ts
const serviceDown = true;
const isVipCustomer = true;
const waitingMinutes = 180;

const isVipOverdue =
  isVipCustomer && waitingMinutes >= 30;

let queue = "normal";

if (serviceDown) {
  queue = "P0"; // ✅ 命中后，else if 分支不再执行。
} else if (waitingMinutes >= 120 || isVipOverdue) {
  queue = "P1";
} else {
  queue = "normal";
}

console.log(`Queue: ${queue}`);
```

实际输出：

```text
Queue: P0
```

`if / else if / else` 表达“只采用第一条成立的规则”。最高优先级放在最前面后，一旦 `serviceDown` 为 `true`，后面的队列规则就不会再覆盖结果。`isVipOverdue` 把一段组合条件起了名字，便于核对 VIP 与等待边界是否同时满足。

## 面试时怎么回答

**问：为什么组合业务条件时要关心短路和优先级？**

可以这样回答：

`&&` 左侧为假时，右侧不会执行；`||` 左侧为真时，右侧不会执行，这就是短路。它常用于“先确认前提，再执行后续检查”，但 JavaScript 的 `&&` 和 `||` 返回的是某个操作数，不一定是字面量 `true` 或 `false`。业务代码里若需要明确布尔值，参与组合的表达式本身也应清楚。

运算符优先级决定表达式先组合哪一部分，分支顺序则决定多条规则同时成立时采用哪一条。复杂条件最好加括号或保存成有名字的布尔变量。`>= 100` 是否应包含 100、哪条规则优先，都来自业务需求，类型系统不会替开发者决定。

官方参考：

- [MDN：if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN：Logical AND (`&&`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [MDN：Logical OR (`||`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)

## 拓展思考（不要求写代码）

如果 `orderTotal` 改成 200，同时仍是会员且没有优惠券，程序为什么应该只优惠 40 而不是先优惠 40 再优惠 20，这与分支顺序有什么关系？

## 完整参考答案

代码目录中的 `solution.ts` 提供可运行的完整答案，题目文档目录中的 `SOLUTION.md` 解释直接调用逻辑。

完成后再通过对应练习文档的“文件位置”链接查看 `solution.ts` 与 `SOLUTION.md`，重点对照条件名称和分支优先级。
