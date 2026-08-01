# TypeScript 零基础完整路线

你不需要先学 JavaScript，可以从 Day 00 开始。

教程文档和代码分开放：

- 在 `docs/dayXX/` 阅读当天知识、流程图和练习要求。
- 在 `dayXX/` 打开并运行 TypeScript 代码。

每天先读 `example.ts` 对应的流程图，再做 1–3 道互相独立的练习。简单内容通常只有一道题，内容较多时会拆成两到三道。

Day 00–26 是主线，每天预计 60–90 分钟；Day 27–32 是选修。全部课程入口在 [docs/README.md](./docs/README.md)。

## 教程里的术语怎么看

看到新术语时不用马上背定义。教程会先用一组具体数据说明代码做了什么，再给出正式名称。例如先写“判断一个值是不是字符串，判断成功后才能使用字符串方法”，然后告诉你这个过程叫“类型收窄”。正式术语会保留，方便以后搜索文档。

## 函数、方法、参数和实参先分清

看到圆括号时，先判断是在“定义工具”还是“调用工具”：

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}

const message = greet("Ada");
console.log(message);
```

- 定义里的 `name` 叫**参数**：它是函数内部接收数据的位置。
- 调用里的 `"Ada"` 叫**实参**：它是这一次真正传进去的值。
- `greet(...)` 是直接调用函数。
- `console.log(...)` 是调用方法：点号左边的 `console` 提供 `log`。
- 多个实参写在同一对圆括号里，用逗号分开；传入顺序要和参数顺序对应。

上面代码的输出是：

```text
Hello, Ada
```

`Array.isArray(value)` 也属于方法调用。可以先拆成三块看：`Array` 是 JavaScript 提供的内置对象，`.isArray` 是“判断是不是数组”的方法，`(value)` 放这次要检查的值。它返回 `true` 或 `false`，不会把普通值转换成数组。课程第一次使用某个内置函数或方法时，会先按这种方式拆开说明，再进入 Example 或练习。

不要据此猜测 JavaScript 还有内置的 `isString()` 或 `isNumber()`：标准 JavaScript 没有这两个函数。字符串通常用 `typeof value === "string"` 判断；数字还要根据需求决定是只检查 `typeof`，还是继续用 `Number.isFinite(value)` 排除 `NaN` 和无穷值。教程里如果出现 `isString`、`isRecord` 之类的名称，会先给出 `function isString(...) { ... }` 的定义，并明确说明它是我们自己封装的判断函数。相关判断集中整理在 [JavaScript 值判断速查](./docs/VALUE-CHECKS.md)。

## 面试内容怎么学

每个 Day 的“面试时怎么回答”都会给出一版可以直接口述的回答，不再只列答题思路。回答中的技术结论以 TypeScript、MDN、Node.js 等官方资料为准，节末会列出对应链接，方便继续核对。

阅读时按下面三步进行：

1. 先读完整回答，找出第一句直接结论。
2. 再运行回答旁边的代码，确认自己能解释输入、输出和失败边界。
3. 最后关掉文档，用自己的话重说一次；说不清时再回到官方链接核对。

例如回答“类型断言有什么用”时，要明确说明 `value as number` 只改变 TypeScript 如何检查这段代码，不会把运行时字符串转换成数字，也不会验证接口数据。回答 `readonly` 时，则要说明它限制 TypeScript 中的写入、默认只保护标记到的层级，并不等于运行时执行了 `Object.freeze()`。这些边界往往是面试官继续追问的部分。

## 官方手册怎样作为扩展阅读

每个 Day 末尾都有一条可选的官方手册入口，统一指向 [按 Day 分类的官方阅读索引](./docs/OFFICIAL-READING.md)。先完成当天教程和练习，再选索引中的一篇阅读；官方手册不是开始 Practice 前必须完成的第二份作业。

需要离线 Markdown 时运行：

```powershell
npm run official:sync
```

命令只浅克隆微软官方文档和现有中文本地化，不下载网站构建依赖，并会自动生成适合普通 Markdown 软件的阅读版。

这些资料都保存在根目录 `official-reference/`，并被 `.gitignore` 排除，所以不会让你的 GitHub 提交变得臃肿。英文版更新更完整，中文官方本地化只在现有翻译可用时作为辅助。

## 推荐学习流程

1. 用 8–10 分钟回忆昨天、三天前和七天前的内容。
2. 从 `docs/README.md` 打开 `docs/dayXX/README.md`，阅读概念与 Example 代码流程图。
3. 运行代码目录 `dayXX/example.ts`，把流程图每个节点对应到具体代码。
4. 从当天文档导航选择一个 `docs/dayXX/practiceXX/README.md`，先理解场景、变量数据流和代码流程图。
5. 把题目中的“起始代码”复制到对应的 `dayXX/practiceXX/practice.ts`。固定数据、函数签名、调用和输出已经给出，只完成判断、循环、回调与 `return` 等核心逻辑。
6. 右击运行，根据中文类型提示或输出差异修改。
7. 关掉代码，完成题目末尾的“写完后自检”：先预测变式结果，再用自己的话解释设计选择。
8. 另一道练习必须重新打开独立目录作答，不导入上一题实现。
9. 实在卡住时，再查看代码目录中的 `solution.ts` 与文档目录中的 `SOLUTION.md`。

## 开启右键运行

项目包含 `.vscode` 配置。必须用 VS Code/Cursor 打开整个项目根目录，不要只打开某个 day 或 practice 子目录；然后安装编辑器推荐的 **Code Runner** 扩展。在编辑器或文件列表中右击 TypeScript 文件并选择 **Run Code** 即可。

右键以下文件时会自动选择正确模式：

| 文件 | 自动行为 |
| --- | --- |
| `example.ts` | 类型检查并运行完整示例 |
| `practiceXX/practice.ts` | 类型检查、运行并核对这一道独立练习 |
| `practiceXX/solution.ts` | 类型检查并运行完整参考答案；调用处带数据传递注释 |

如果不安装扩展，可以按 `F5`，或运行内置任务“课程：运行当前文件”。

## 独立练习目录的规则

- 每天有 1–3 个连续编号代码目录：`dayXX/practice01/`、`practice02/`、`practice03/`。
- 每道题的背景、需求、变量关联数据流与方案说明集中在 `docs/dayXX/practiceXX/`。
- 每道题的 `practice.ts` 与 `solution.ts` 留在对应的 `dayXX/practiceXX/`，便于右击运行。
- 各题使用不同文件和独立运行入口，不允许导入另一题的实现。
- `practice.ts` 初始保留题目路径和说明；每题 README 的“起始代码”提供固定数据、函数签名、调用与输出，复制后再完成核心逻辑。
- 自动检查只关心类型、运行结果和精确输出，不要求逐字复制答案。
- Example 流程图和实际输出在 `docs/dayXX/README.md`；每道练习同时提供变量关联数据流和与代码逐步对应的 Mermaid 流程图。

题目数量不按固定模板凑数：单一语法通常只有一道；同一知识既要会写又要会迁移时安排两道；需要同时练边界、组合或回归测试时才安排第三道。多道题始终在不同目录独立作答；如果题目之间有关联，关联的是同一条业务规则逐步升级，不是让后一题导入前一题答案。

`Practice 02` 不能只是把 `Practice 01` 换一组变量或删掉几步。它必须在业务目标、输入形状、控制流程、失败边界和输出用途里至少改变两项，让你重新判断该用什么写法。每份 Practice 02 文档都会直接说明“和 Practice 01 的区别”。精确输出只是用来验收当前示例，不代表只需记住这一组数据；题目末尾还会要求你预测另一组输入或边界。

## 写完一道题后，不要立刻算“已经会了”

固定输入和固定输出只能证明这一组数据跑通了，不能证明换个条件后仍然知道该怎么写。因此每道 Practice 都增加了“写完后自检”，把练习分成三层：

1. **先完成程序**：按照数据流得到要求的输出，确认语法和主要逻辑能独立写出来。
2. **再换一个条件**：暂时改动输入、边界值或失败场景，先在纸上预测会走哪条数据流，再运行核对。自检没有要求时，不要把这次临时改动提交到 `practice.ts`。
3. **最后解释选择**：用自己的话说明为什么这里使用当前类型或写法，以及 TypeScript 能帮你检查什么、运行时仍要由谁负责。

例如 `find` 题不只要得到第一笔大额订单，还要能预测“没有任何订单达到边界”时会得到什么；JSON 题不只要通过一份合法数据，还要能说明为什么 `as User` 不能代替运行时验证。面试追问通常就在这一层，但这里不要求背术语答案。

## 错误示例与完整参考答案怎么读

- 每天 README 的“错误代码示例”来自项目开发中常见的误写：先说明业务背景和为什么容易写成这样，再展示编译错误、运行异常或错误结果。`// ❌` 会标出真正出问题的位置。
- 错误代码可能故意无法通过类型检查，也可能在运行时抛错，不要整段复制进 `practice.ts` 运行。先沿变量追踪后果，再看修正版。
- 紧随其后的“正确写法”会在相同背景下修正问题，`// ✅` 标出关键变化。重点比较数据从哪里进入、哪一步改变、最后返回或输出什么。
- 每题 README 的“起始代码”会提前给出不需要猜的部分：固定数据、类型与函数签名、调用顺序和输出位置。TODO 只落在本题真正要练的判断、循环、回调或 `return`。
- 代码目录中的 `solution.ts` 是完整参考答案。它会通过类型检查并产生题目规定的输出；`// 调用关系：...` 注释解释实参怎样进入函数、返回值怎样被变量接住，以及结果怎样继续进入下一次调用或输出。
- 文档目录中的 `SOLUTION.md` 解释标准方案和直接调用链；存在多种推荐方案时，会说明替代写法的适用条件。
- 建议先独立完成，再对照错误示例定位问题，最后运行完整答案。看完后关闭答案，重新写一次关键判断或回调，避免只记住表面代码。

## 怎样阅读完整 `solution.ts`

先找固定数据，再沿 `// 调用关系：...` 往下读。函数调用圆括号里的值是实参，它们会进入函数参数；函数执行到 `return` 后，把结果送回原来的调用位置。调用处通常用变量接住结果，再把这个变量交给下一步。

以 Day 07 的 `find` 为例，数组方法负责逐项读取订单以及在找到后停止；回调负责定义“哪一项算找到”。题目把大额订单写成 `amount >= 100`，完整答案可以使用单表达式箭头函数：

```ts
const firstLargeOrder = orders.find((order) => order.amount >= 100);
```

也可以使用带花括号的写法：

```ts
const firstLargeOrder = orders.find((order) => {
  return order.amount >= 100;
});
```

两种写法完全等价。比较结果为 `true` 时，`find` 交回当前订单并停止；为 `false` 时，当前订单不匹配，继续检查下一项。题目的起始代码会把回调位置标成 TODO；完整答案会把这里替换成真实比较，并用注释说明返回的布尔值怎样控制查找。

## 可选命令行方式

```powershell
# 环境检查
npm run beginner:doctor

# Example
npm run beginner:example -- day10

# 指定一道独立练习 / 对应完整参考答案
npm run beginner -- day10 practice01
npm run beginner -- day10 practice02
npm run beginner:solution -- day10 practice02

# 验证一天或全部课程
npm run beginner:verify -- day10
npm run beginner:verify

# 检查教程结构；练习目录已经保存作答时使用第二条
npm run beginner:audit
npm run beginner:audit -- --allow-answers

# 一次完成“保留个人答案”的结构、类型和运行检查
npm run test:practice
```

不填写练习编号时默认运行 `practice01`；右击嵌套目录中的文件会自动识别正确的 day 与 practice 编号。

## 语法符号速查：先看 `=`、`:`、`{}`、`[]`

```ts
const student = { name: "Mei", scores: [88, 92] };
const { name } = student;
const firstScore = student.scores[0];
```

- `const student = ...;`：变量名后用 `=`，把右边的值交给左边变量，整条语句最后用 `;`。
- `{ name: "Mei" }`：创建对象值；内部写“属性名: 值”，不能写成“属性名 = 值”。
- `[88, 92]`：创建数组；数组中的项目用逗号分隔，通过 `[0]` 读取第一项。
- `const { name } = student;`：对象解构；花括号在等号左边，表示取同名属性。
- `student.scores[0]`：先用点号读取对象属性，再用方括号读取数组项目。

对象的值与类型要分开看：

```ts
const student: { name: string; scores: number[] } = {
  name: "Mei",
  scores: [88, 92],
};
```

把上面的声明分成三块看：

1. `const student`：创建变量，变量名是 `student`。
2. `: { name: string; scores: number[] }`：说明这个变量允许保存什么数据。这里描述的是类型，所以两个属性之间用分号 `;`。
3. `= { name: "Mei", scores: [88, 92] };`：把实际数据交给变量。对象里的属性用逗号 `,` 分隔，整条声明最后用分号 `;` 结束。

容易混淆的符号可以这样记：

| 写法 | 这里的作用 |
| --- | --- |
| `:` | 左边叫什么，右边是什么类型或属性值 |
| `=` | 把右边的值交给左边的变量 |
| `{}` | 放对象属性，或包住一段代码 |
| `[]` | 创建数组、写数组类型，或按位置读取数组项 |
| `,` | 分隔对象值或数组中的项目 |
| `;` | 结束一条语句；类型里的属性也常用它分隔 |

空数组里没有项目可供 TypeScript 判断类型，所以要主动写清楚：`const scores: number[] = [];`。

对象变量通常以 `};` 结束。`if`、`for`、`function` 后面的花括号表示代码块，关闭花括号后通常不加分号。

## 代码符号和输出文字的标点不一样

TypeScript 语法要使用英文半角符号。下面函数声明里的 `()`、参数后的 `:`、字符串两边的直引号 `"` 都是代码的一部分：

```ts
type Channel = "email" | "sms" | "push";

function formatMinutes(minutes: number): string {
  return `学习中：函数（${minutes} 分钟）`;
}

console.log(formatMinutes(45));
```

运行结果：

```text
学习中：函数（45 分钟）
```

函数内部的模板字符串是最终展示给读者的文字，所以这里可以使用中文全角冒号 `：` 和中文全角括号 `（ ）`。它们与英文半角 `:`、`( )` 是不同字符，但不会改变计算逻辑。课程运行器不会只因为这些显示标点的全半角差异判练习失败。

代码里的符号不能随意替换：

- `formatMinutes(45)` 必须使用英文半角括号 `()`，不能写成 `formatMinutes（45）`。
- `minutes: number` 必须使用英文半角冒号 `:`。
- 字符串可以使用英文直双引号 `"sms"` 或英文直单引号 `'sms'`；本教程统一使用双引号。中文弯引号 `“sms”` 是排版符号，不能作为代码引号。
- 输出代码块会保留推荐的文字排版。除括号、冒号及其邻近空格外，文字、数字、行数和顺序仍会参与检查。

## 函数变量数据流：参数进，返回值出

```ts
function copyScores(source: number[]): number[] {
  const result: number[] = [];
  for (const score of source) {
    result.push(score);
  }
  return result;
}
const copiedScores = copyScores(student.scores);
```

假设 `student.scores` 现在是 `[88, 92]`。调用函数时，数据这样移动：

1. 执行 `copyScores(student.scores)`，把 `[88, 92]` 交给函数。
2. 函数里的参数 `source` 接到这个数组。调用时传入的 `student.scores` 叫实参，函数声明里的 `source` 叫形参。
3. `result` 先创建一个新的空数组 `[]`。
4. 循环第一轮，`score` 是 `88`，把它加入 `result`；第二轮，`score` 是 `92`，再加入一次。
5. `return result` 把新数组交出函数。
6. `copiedScores` 接住返回值，所以它最后是 `[88, 92]`。

`source`、`result` 和 `score` 都在函数内部声明，只能在各自的函数或代码块中使用。这个可使用的范围叫作用域。

数组和对象还有一个容易忽略的地方：传给函数后，参数仍可能指向原来的数组或对象。写 `source.push(100)` 会修改 `student.scores`；上面的代码把项目加入新数组 `result`，所以原数组不变。

另外记住三点：

- `const` 只是不允许把变量换成另一个值，仍然允许对数组调用 `push`。
- `console.log(...)` 只把内容显示在终端。
- `return` 才会把结果交给调用函数的位置。

从 Day 05 起，看到函数时按这个顺序检查：传入什么 → 哪个参数接收 → 函数内部怎样处理 → `return` 交出什么 → 哪个变量接收。

## 主线课程地图

| 阶段 | Day | 内容 | 完成后的能力 |
| --- | --- | --- | --- |
| 起步 | 00–03 | 环境、变量、转换、条件、数组、循环 | 能独立写出第一批小程序 |
| JavaScript 桥梁 | 04–08 | 布尔分支、函数、对象、数组方法、缺失值 | 补齐阅读 TypeScript 所需的 JS 基础 |
| 日常建模 | 09–13 | type/interface、联合收窄、函数类型、不可变更新 | 用类型表达应用数据与行为 |
| 组织与复用 | 14–18 | ES 模块、泛型、keyof、工具类型、类 | 拆分多文件代码并安全复用 |
| 边界与质量 | 19–23 | 错误、JSON 验证、异步、测试、TSConfig | 处理外部数据、失败与工程检查 |
| 结课项目 | 24–26 | 模型、验证、业务逻辑、异步状态、回归测试 | 完成任务与进度报告器全流程 |

逐日主题与 +1/+3/+7 复习格见 [PROGRESS.md](./PROGRESS.md)。

## 按需选修

| Day | 专题 | 什么时候学 |
| --- | --- | --- |
| 27 | 浏览器、请求与命令行边界 | 准备写网页、请求适配器或 CLI |
| 28 | 元组、重载、显式 this、可变参数元组 | 阅读或设计复杂函数 API |
| 29 | 映射、条件、infer、模板字面量、品牌类型 | 需要消除稳定重复的类型时 |
| 30 | `.d.ts`、声明合并、枚举与历史代码 | 维护无类型 JavaScript 或旧项目 |
| 31 | Iterable、Iterator、Generator、Symbol、bigint | 处理惰性序列或协议 |
| 32 | TypeScript 5+ 标准装饰器与对象 Mixin | 框架或库明确依赖时 |

## 文档与代码目录结构

```text
beginner/
  docs/                         集中式 Markdown 阅读目录
    README.md                   Day 00–32 总导航
    dayXX/
      README.md                 概念、Example 流程图、练习导航
      practice01/
        README.md               场景背景、独立需求与流程图
        SOLUTION.md             完整方案、直接调用链与易错提示
      practice02/               另一道完全独立的题目文档
      practice03/               仅较难或综合课程提供

  dayXX/                        可运行代码目录
    example.ts                  完整示例
    practice01/
      practice.ts               个人作答入口；同步时保留已有答案
      solution.ts               可运行的完整参考答案与调用关系注释
    practice02/
    practice03/
```

文档目录与代码目录使用完全相同的 Day/Practice 编号。少数模块、声明文件或异步课程会在代码 day 根目录保留 Example 所需的辅助文件；独立练习始终从各自的 `dayXX/practiceXX/practice.ts` 进入。

## 复习与资料

详细复习方式见 [REVIEW.md](./REVIEW.md)。课程顺序以零基础认知负担为优先，并参考 TypeScript 官方资料：

- [TypeScript Handbook 介绍](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)
- [Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [Creating Types from Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
- [Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)
- [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [TSConfig Reference](https://www.typescriptlang.org/tsconfig/)
