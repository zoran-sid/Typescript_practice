# TypeScript 零基础完整路线

这条路线不假设你已经学习 JavaScript。每一天先用 `example.ts` 展示完整做法，再由你在几乎空白的 `practice.ts` 中从头写出一道完整程序。

主线是 Day 00–26，每天按 60–90 分钟设计；Day 27–32 是按需选修。

## 推荐学习流程

1. 用 8–10 分钟回忆昨天、三天前和七天前的内容。
2. 阅读当天 README 的概念与完整示例说明。
3. 右击 `example.ts`，选择 **Run Code**，然后修改输入并预测输出。
4. 阅读“独立练习（从空文件开始）”中的需求、固定命名和期望输出。
5. 打开 `practice.ts`，从第一行开始写全部代码。
6. 右击 `practice.ts` → **Run Code**，根据中文类型提示或输出差异修改。
7. 回答 README 最后的一道拓展思考题。
8. 实在卡住时再阅读 `SOLUTION.md` 或右击 `solution.ts`。

## 开启右键运行

项目包含 `.vscode` 配置。用 VS Code/Cursor 打开项目根目录后，安装编辑器推荐的 **Code Runner** 扩展。官方扩展支持在编辑器或文件列表中右击并选择 **Run Code**。

右键以下文件时会自动选择正确模式：

| 文件 | 自动行为 |
| --- | --- |
| `example.ts` | 类型检查并运行完整示例 |
| `practice.ts` | 类型检查、运行并核对你的输出 |
| `solution.ts` | 验证参考答案 |

如果不安装扩展，可以按 `F5`，或运行内置任务“课程：运行当前文件”。

## practice.ts 的规则

- 每天只有一个 `practice.ts`。
- 文件初始只有 3–6 行注释，没有任何起始代码。
- 注释最多规定必要名称，例如 `tasks`、`calculateTotal`。
- 完整输入、处理、分支、函数和输出都由你自己编写。
- 自动检查只关心类型、运行结果和精确输出，不要求代码与答案逐字相同。

## 可选命令行方式

```powershell
# 环境检查
npm run beginner:doctor

# 示例 / 自己的练习 / 参考答案
npm run beginner:example -- day10
npm run beginner -- day10
npm run beginner:solution -- day10

# 验证一天或全部课程
npm run beginner:verify -- day10
npm run beginner:verify
```

现在每天只有一道题，不再填写题号，也不再使用 `all`。

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

## 每日文件结构

```text
dayXX/
  README.md      概念、一道独立练习、一道拓展思考
  example.ts     完整示例
  practice.ts    只有命名提示，由你从零编写
  solution.ts    唯一参考答案
  SOLUTION.md    解题思路与拓展思考方向
```

少数模块、声明文件或异步课程会保留示例所需的辅助文件，但练习入口始终只有 `practice.ts`。

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
