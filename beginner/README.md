# TypeScript 零基础完整路线

这条路线专门写给还没有 JavaScript 基础的学习者。它把完成当天 TypeScript 学习所需的 JavaScript 知识一起讲清楚，不要求你先理解 Git 分支、框架、模块或测试工具。

主线是 Day 00–26，每天按 60–90 分钟设计；Day 27–32 是遇到真实需求时再学的选修。

## 第一次开始

在项目根目录 `F:\typescript_practice` 打开 PowerShell：

```powershell
npm install
npm run beginner:doctor
npm run beginner:example -- day00
npm run beginner -- day00
```

练习第一次不通过是正常现象。先阅读当天 `README.md`，修改对应的 `practice.ts` 或 `practice-XX.ts`，保存后重新运行同一条命令。

## Day 04 以后的多题命令

易错内容被拆成多道短题。题号始终是两位数字：

```powershell
# 先运行当天完整示例
npm run beginner:example -- day10

# 只检查一道练习
npm run beginner -- day10 01

# 按顺序检查当天全部练习
npm run beginner -- day10 all

# 卡住后再核对指定参考答案
npm run beginner:solution -- day10 01

# 核对当天所有参考答案
npm run beginner:solution -- day10 all
```

`day10` 也可写成 `10`。Day 00–03 保留单文件形式，省略题号即可。

验证命令不会检查你的初始练习，而是检查课程示例与参考答案：

```powershell
# 统一类型检查（排除刻意未完成的 practice）
npm run beginner:check

# 只验证一天
npm run beginner:verify -- day10

# 验证全部课程
npm run beginner:verify
```

## 每天怎样学习

1. 用 8–10 分钟复习昨天、三天前和七天前的易错点。
2. 阅读当天目标和必要概念，不要求一次背完。
3. 运行 `example.ts`，修改数据并预测输出。
4. 依次完成短练习：回忆、修错、迁移、综合。
5. 根据中文的期望/实际输出和提示自行定位。
6. 卡住后阅读 `SOLUTION.md`，最后才运行答案。
7. 用自己的话记录错误原因，而不是只记正确代码。

详细复习方法见 [REVIEW.md](./REVIEW.md)，可打印或复制的进度表见 [PROGRESS.md](./PROGRESS.md)。

## 主线课程地图

| 阶段 | Day | 内容 | 完成后的能力 |
| --- | --- | --- | --- |
| 起步 | 00–03 | 环境、变量、转换、条件、数组、循环 | 能运行和修改第一批 TypeScript 程序 |
| JavaScript 桥梁 | 04–08 | 布尔分支、函数、对象、数组方法、缺失值 | 补齐阅读 TypeScript 代码所需的 JS 基础 |
| 日常建模 | 09–13 | type/interface、联合收窄、函数类型、不可变更新 | 用类型表达普通应用数据和行为 |
| 组织与复用 | 14–18 | ES 模块、泛型、keyof、工具类型、类 | 拆分多文件代码并安全复用 |
| 边界与质量 | 19–23 | 错误、JSON 验证、异步、测试、TSConfig | 处理外部数据、失败和工程检查 |
| 结课项目 | 24–26 | 模型、验证、业务逻辑、异步状态、回归测试 | 完成“学习任务与进度报告器”全流程 |

Day 00–26 的逐日主题和 +1/+3/+7 复习格位于 [PROGRESS.md](./PROGRESS.md)。

## 按需选修

| Day | 专题 | 什么时候学 |
| --- | --- | --- |
| 27 | 浏览器、请求与命令行边界 | 准备写网页、请求适配器或 CLI |
| 28 | 元组、重载、显式 this、可变参数元组 | 阅读或设计复杂函数 API |
| 29 | 映射、条件、infer、模板字面量、品牌类型 | 需要消除稳定重复的类型时 |
| 30 | `.d.ts`、声明合并、枚举与历史代码 | 维护无类型 JavaScript 或旧项目 |
| 31 | Iterable、Iterator、Generator、Symbol、bigint | 处理惰性序列或协议 |
| 32 | TypeScript 5+ 标准装饰器与对象 Mixin | 框架或库明确依赖这些能力时 |

选修不是主线毕业要求。条件类型、声明文件和装饰器都很有用，但零基础阶段过早学习会遮住更常用的函数、对象和收窄。

## 文件结构

Day 00–03：

```text
dayXX/
  README.md
  example.ts
  practice.ts
  solution.ts
  SOLUTION.md
```

Day 04 以后：

```text
dayXX/
  README.md
  example.ts
  practice-01.ts
  practice-02.ts
  ...
  solution-01.ts
  solution-02.ts
  ...
  SOLUTION.md
```

自动检查元数据位于 `beginner/checks/`，不混入学习文件。少数多文件课程还会包含模型、工具或 JavaScript 模块。

某些高级“类型修复题”会故意从 TypeScript 错误开始。全局课程检查排除初始 `practice-XX.ts`，但逐题运行器仍会检查你正在做的文件，并优先显示前三条类型提示。

## 高频内容为什么会重复

课程把容易遗忘的知识放入不同领域重复使用：

- `return` 与 `console.log`：Day 05、07、12、22。
- `undefined`、越界和 `find`：Day 03、08、10、20、23–26。
- 对象引用、浅复制与不可变更新：Day 06、13、17、25。
- 联合收窄：Day 10、11、19–21、24、26。
- 类型擦除与运行时验证：Day 00、19、20、22–24、26、30。
- `await` 与异步错误：Day 21、22、26、27。

不要跳过看似相似的题；换领域重新回忆，正是加强长期记忆的部分。

## 资料依据

课程不机械照搬官方手册顺序。官方说明 Handbook 不完整教授 JavaScript 基础，因此本路线先补必要的 JavaScript 桥梁，再进入 TypeScript 建模和工程主题：

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

课程案例优先采用通用场景；完成主线后，再把同样的思路迁移到你选择的真实项目。
