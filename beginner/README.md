# TypeScript 零基础完整路线

你不需要先学 JavaScript，可以从 Day 00 开始。

教程文档和代码分开放：

- 在 `docs/dayXX/` 阅读当天知识、流程图和练习要求。
- 在 `dayXX/` 打开并运行 TypeScript 代码。

每天先读 `example.ts` 对应的流程图，再做 1–3 道互相独立的练习。简单内容通常只有一道题，内容较多时会拆成两到三道。

Day 00–26 是主线，每天预计 60–90 分钟；Day 27–32 是选修。全部课程入口在 [docs/README.md](./docs/README.md)。

## 教程里的术语怎么看

看到新术语时不用马上背定义。教程会先用一组具体数据说明代码做了什么，再给出正式名称。例如先写“判断一个值是不是字符串，判断成功后才能使用字符串方法”，然后告诉你这个过程叫“类型收窄”。正式术语会保留，方便以后搜索文档。

## 面试内容怎么学

每个 Day 都有“面试时怎么回答”，但它不是让你背标准答案。回答会按同一条思路展开：

1. 先说这项设计要解决什么真实问题。
2. 再说 TypeScript、JavaScript 或数组方法替你做了什么。
3. 接着说仍要由开发者决定的业务规则。
4. 最后用一段代码或一组输入输出说明边界。

例如回答“类型断言有什么用”时，不能只说 `value as number` 会改变编译器眼中的类型；还要说明它不会转换或验证运行时数据。回答 `readonly` 时，也要说明它主要限制编译期写入、默认是浅层的，并不会自动执行 `Object.freeze()`。教程会把这类容易说错的追问放回相关 Day，让面试复习和当天代码练习使用同一套例子。

## 推荐学习流程

1. 用 8–10 分钟回忆昨天、三天前和七天前的内容。
2. 从 `docs/README.md` 打开 `docs/dayXX/README.md`，阅读概念与 Example 代码流程图。
3. 运行代码目录 `dayXX/example.ts`，把流程图每个节点对应到具体代码。
4. 从当天文档导航选择一个 `docs/dayXX/practiceXX/README.md`，先理解场景、需求和流程图。
5. 在对应代码目录 `dayXX/practiceXX/practice.ts` 中从空白完成全部代码。
6. 右击运行，根据中文类型提示或输出差异修改。
7. 另一道练习必须重新打开独立目录作答，不导入上一题实现。
8. 实在卡住时，再查看代码目录中的 `solution.ts` 与文档目录中的 `SOLUTION.md`。

## 开启右键运行

项目包含 `.vscode` 配置。必须用 VS Code/Cursor 打开整个项目根目录，不要只打开某个 day 或 practice 子目录；然后安装编辑器推荐的 **Code Runner** 扩展。在编辑器或文件列表中右击 TypeScript 文件并选择 **Run Code** 即可。

右键以下文件时会自动选择正确模式：

| 文件 | 自动行为 |
| --- | --- |
| `example.ts` | 类型检查并运行完整示例 |
| `practiceXX/practice.ts` | 类型检查、运行并核对这一道独立练习 |
| `practiceXX/solution.ts` | 类型检查解题结构；不会运行或显示完整答案 |

如果不安装扩展，可以按 `F5`，或运行内置任务“课程：运行当前文件”。

## 独立练习目录的规则

- 每天有 1–3 个连续编号代码目录：`dayXX/practice01/`、`practice02/`、`practice03/`。
- 每道题的背景、需求、变量关联数据流与方案说明集中在 `docs/dayXX/practiceXX/`。
- 每道题的 `practice.ts` 与 `solution.ts` 留在对应的 `dayXX/practiceXX/`，便于右击运行。
- 各题使用不同文件和独立运行入口，不允许导入另一题的实现。
- `practice.ts` 初始只有 2–8 行注释；完整代码由你从空白编写。
- 自动检查只关心类型、运行结果和精确输出，不要求逐字复制答案。
- Example 流程图和实际输出在 `docs/dayXX/README.md`；每道练习还有自己的变量关联数据流。

## 错误示例与解题结构怎么读

- 每天 README 的“错误代码示例”是故意写错的代码，`// ❌` 会直接指出出错位置与原因；不要把它原样复制进 `practice.ts`。
- 紧随其后的“正确写法”用 `// ✅` 对应修正同一个问题，先比较符号、类型与数据流，再运行代码。
- 代码目录中的 `solution.ts` 只提供可通过类型检查的主要结构：必要类型、函数签名和控制流骨架；核心实现保留为 `TODO`，不会给出完整答案。
- 文档目录中的 `SOLUTION.md` 解释方案一；存在多种推荐做法时会比较方案二或方案三的结构与适用场景，但同样保留关键 `TODO`。
- 建议先独立完成，再对照错误示例定位问题，最后才打开结构提示。根据 `TODO` 自己补完后，关闭提示并重新写一次，避免“当时看懂、下次又忘”。

## `solution.ts` 里的占位值不是答案

`solution.ts` 会保留函数、分支和变量之间的主要结构，但不会替你完成核心判断。为了让这份未完成的文件仍能被 TypeScript 读取，某些 TODO 后面暂时放了一个类型正确的值：

| 占位写法 | 暂时满足的类型 | 完成 TODO 时怎么处理 |
| --- | --- | --- |
| `return false;` | 函数必须交回 `boolean` | 用题目要求的真实判断替换这一行 |
| `return "";` | 函数必须交回 `string` | 用拼接、格式化或读取字段的结果替换 |
| `const total = 0;` | 变量需要一个 `number` | 用题目要求的计算结果替换右侧的 `0` |
| `return [];` | 函数必须交回数组 | 建立并交回题目要求的新数组 |
| `return undefined;` | 返回类型允许“没有结果” | 按 TODO 判断它是临时占位，还是某条合法的未找到分支 |

只要旁边写着 TODO 和“占位”，这个值就不是还要保留的一步。不要在 `return false;` 后面另加答案，因为函数执行到 `return` 就已经结束了；应当替换整行。

以 Day 07 的 `find` 为例，数组方法负责逐项读取订单以及在找到后停止，你负责定义“哪一项算找到”。题目把大额订单写成 `amount >= 100`，所以可以用单表达式箭头函数：

```ts
const firstLargeOrder = orders.find((order) => order.amount >= 100);
```

也可以使用带花括号的写法：

```ts
const firstLargeOrder = orders.find((order) => {
  return order.amount >= 100;
});
```

两种写法完全等价。比较结果为 `true` 时，`find` 交回当前订单并停止；为 `false` 时，当前订单不匹配，继续检查下一项。脚手架原来的 `return false;` 只是临时占位，不是 `find` 要求你额外保留的代码。

## 可选命令行方式

```powershell
# 环境检查
npm run beginner:doctor

# Example
npm run beginner:example -- day10

# 指定一道独立练习 / 对应解题结构提示
npm run beginner -- day10 practice01
npm run beginner -- day10 practice02
npm run beginner:solution -- day10 practice02

# 验证一天或全部课程
npm run beginner:verify -- day10
npm run beginner:verify
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
        SOLUTION.md             方案结构、变量流向与易错提示
      practice02/               另一道完全独立的题目文档
      practice03/               仅较难或综合课程提供

  dayXX/                        可运行代码目录
    example.ts                  完整示例
    practice01/
      practice.ts               空白作答入口
      solution.ts               仅含主结构与关键 TODO，不含完整答案
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
