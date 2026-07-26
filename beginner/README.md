# TypeScript 零基础完整路线

这条路线不假设你已经学习 JavaScript。所有逐日 Markdown 集中在 `docs/dayXX/`，适合用 MD 阅读工具连续浏览；可运行代码仍放在 `dayXX/`。每一天先用 `example.ts` 与 Mermaid 流程图建立整体逻辑，再完成 1–3 道互相独立的练习。题目数量取决于难度，每题都有自己的场景背景、需求、流程图、作答文件与解题结构提示。

主线是 Day 00–26，每天按 60–90 分钟设计；Day 27–32 是按需选修。阅读入口是 [docs/README.md](./docs/README.md)。

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
- 每道题的背景、需求、Mermaid 流程图与方案说明集中在 `docs/dayXX/practiceXX/`。
- 每道题的 `practice.ts` 与 `solution.ts` 留在对应的 `dayXX/practiceXX/`，便于右击运行。
- 各题使用不同文件和独立运行入口，不允许导入另一题的实现。
- `practice.ts` 初始只有 2–8 行注释；完整代码由你从空白编写。
- 自动检查只关心类型、运行结果和精确输出，不要求逐字复制答案。
- Example 流程图在 `docs/dayXX/README.md`；每道练习还有自己的独立流程图。

## 错误示例与解题结构怎么读

- 每天 README 的“错误代码示例”是故意写错的代码，`// ❌` 会直接指出出错位置与原因；不要把它原样复制进 `practice.ts`。
- 紧随其后的“正确写法”用 `// ✅` 对应修正同一个问题，先比较符号、类型与数据流，再运行代码。
- 代码目录中的 `solution.ts` 只提供可通过类型检查的主要结构：必要类型、函数签名和控制流骨架；核心实现保留为 `TODO`，不会给出完整答案。
- 文档目录中的 `SOLUTION.md` 解释方案一；存在多种推荐做法时会比较方案二或方案三的结构与适用场景，但同样保留关键 `TODO`。
- 建议先独立完成，再对照错误示例定位问题，最后才打开结构提示。根据 `TODO` 自己补完后，关闭提示并重新写一次，避免“当时看懂、下次又忘”。
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
- `[88, 92]`：创建数组；项目用逗号分隔，通过 `[0]` 读取第一项。
- `const { name } = student;`：对象解构；花括号在等号左边，表示取同名属性。
- `student.scores[0]`：先用点号读取对象属性，再用方括号读取数组项目。

对象的值与类型要分开看：

```ts
const student: { name: string; scores: number[] } = {
  name: "Mei",
  scores: [88, 92],
};
```

逐字符是 const → 变量名 → : → 类型 → = → { → 属性名 → : → 属性值 → , → } → ;。类型花括号里推荐“属性名: 类型;”，值花括号里写“属性名: 值,”。空数组无法推断元素类型时写 `const scores: number[] = [];`。变量、赋值、调用和 return 语句通常用分号结束；对象变量关闭花括号后写 `};`；if、for、function 的关闭花括号后通常不加分号。

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

`student.scores`（实参）→ `source`（参数）→ `score`（循环局部变量）→ `result`（函数局部数组）→ return → `copiedScores`（接收变量）。参数与函数/代码块内的 const、let 只在各自作用域可用。计算函数优先从参数取数据，不偷偷依赖外部变量。数组和对象传入的是引用；直接对参数 push 会修改原数组，上例新建 result 后返回。const 只禁止重新赋值，仍允许数组 push。console.log 只显示，return 才交付结果。

从 Day 05 起，每次遇到函数都沿“实参 → 参数 → 局部变量 → return → 接收变量”检查。

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
