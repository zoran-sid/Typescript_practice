# TypeScript Project Lab

这是一套从 `zoranzhou.com` 真实 Astro 项目提炼出来的、可独立运行的 TypeScript 教程。它不会改写主站；课程代码、故障和参考答案全部封装在本目录中。

仓库名称为 `typescript_practice`。它支持按 `day01` 到 `day21` 分支切换练习，并提供对应的 `solution/dayXX` 分支；完整用法见 [GIT_WORKFLOW.md](./GIT_WORKFLOW.md)。

课程不是把语法按字典顺序抄一遍，而是沿着主站真实的数据流学习：本地化 → 内容模型 → 路线数据 → 搜索索引 → 浏览器交互 → 安全导入 → 测试与重构。每个 Day 都包含：

- 可独立阅读的中文教程；
- 对应的真实项目文件和行号；
- 一个需要完成的实现任务；
- 一个已经能编译、但行为错误或类型设计危险的故障排查题；
- 自动检查；
- 独立参考答案。

## 开始学习

本项目复用主项目已经安装的 TypeScript 和 `tsx`，无需再次安装依赖。在仓库根目录运行：

```powershell
npm.cmd --prefix typescript_practice run check
npm.cmd --prefix typescript_practice run day -- day01
```

`day01` 第一次失败是正常现象：练习代码保留了 `TODO` 和一个待排查故障。修改 `days/day01/practice.ts`，直到命令显示 `PASS`。完成后再查看 `solutions/day01.ts`。

验证所有参考答案：

```powershell
npm.cmd --prefix typescript_practice run verify
```

如果以后把本目录复制到仓库外，再在本目录执行 `npm install` 即可独立运行。

## 学习顺序

| Day | 主题                                        | 主站案例                          |
| --- | ------------------------------------------- | --------------------------------- |
| 01  | 基础类型、变量声明、推断                    | 雷达常量、本地化常量              |
| 02  | 数组、元组、对象、只读                      | GPX 路线点与分段                  |
| 03  | 函数、参数、重载、`void` / `never`          | 日期、距离和命令行格式化          |
| 04  | `interface`、`type`、结构类型               | Route / Media 内容模型            |
| 05  | 类、继承、抽象类、访问控制                  | 候选内容注册器                    |
| 06  | 联合、交叉、收窄、穷尽检查、枚举替代        | 状态与内容类型                    |
| 07  | 泛型、约束、泛型默认值                      | `groupBy<T>`                      |
| 08  | `keyof`、`typeof`、索引访问、`satisfies`    | Locale 与翻译表                   |
| 09  | Utility、映射、条件类型、`infer`            | Props 与更新补丁                  |
| 10  | 模板字面量、品牌类型                        | `route-xxxxxxxxxxxx` 与本地化路径 |
| 11  | `unknown`、`any`、类型守卫、断言            | 外部 JSON 导入                    |
| 12  | 错误建模、`Result`、异常边界                | Media 安全更新流程                |
| 13  | `Promise`、`async/await`、并发              | 搜索索引加载                      |
| 14  | 模块、类型导入、命名空间、声明合并、`.d.ts` | Astro 模块边界                    |
| 15  | DOM、事件、可空节点、JSX 概念               | 搜索弹窗与导航脚本                |
| 16  | 迭代器、生成器、`Symbol`                    | 多段路线遍历                      |
| 17  | Decorator 与 Mixin                          | 候选可观测服务（不改主站）        |
| 18  | TSConfig、模块解析、JS 检查                 | 主站严格配置                      |
| 19  | 单元测试、类型测试、回归不变量              | Radar 与 Media 测试               |
| 20  | 判别联合与状态机                            | 内容/交易工作流候选模型           |
| 21  | 综合项目：类型安全搜索流水线                | `search-index.json.ts`            |

完整覆盖关系见 [CURRICULUM.md](./CURRICULUM.md)，真实源码索引见 [PROJECT_CODE_MAP.md](./PROJECT_CODE_MAP.md)，PDF 对课程结构的影响记录在 [PDF_REFERENCE_NOTES.md](./PDF_REFERENCE_NOTES.md)。

## 学习纪律

1. 先读当天 `README.md`，不要先看答案。
2. 只修改当天的 `practice.ts`。
3. 先修类型边界，再修运行行为；不要用 `as any` 让错误消失。
4. 每次完成后记录：错误原因、类型系统为何没拦住、应该增加什么测试。
5. Day 21 完成后，再决定是否把候选改进迁移到主站；练习代码不能直接视为生产实现。
