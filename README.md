# TypeScript 零基础练习

这个仓库面向没有 JavaScript 基础的学习者：Day 00–26 是主线，Day 27–32 是选修。每一天先用 example 与流程图理解代码，再完成 1–3 道文件完全分开的独立练习。案例覆盖订单、库存、联系人、工单、JSON、异步面板、旧模块等场景，不只围绕学生系统。

## 最方便的学习方式：右键运行

1. 第一次在项目根目录运行 `npm install`。
2. 用 VS Code 或 Cursor 打开克隆后的项目根目录并安装推荐的 **Code Runner**；不要只打开某个 day 或 practice 子文件夹。
3. 从 [每日文档中心](./beginner/docs/README.md) 选择当天课程，先沿 Example Mermaid 流程图预测执行顺序。
4. 右击对应代码目录中的 `beginner/dayXX/example.ts`，选择 **Run Code**，再把流程图节点对应到代码行。
5. 从当天文档导航进入 `practice01`、`practice02` 或 `practice03` 的独立题目。
6. 阅读 `beginner/docs/dayXX/practiceXX/README.md` 的背景、需求与流程图。
7. 在对应的 `beginner/dayXX/practiceXX/practice.ts` 中独立完成代码，再右击运行并核对输出。

每道题都有自己的文档目录、代码目录、作答文件和结构提示。练习之间不导入代码，也不共享实现；完成一题不代表另一题自动完成。

## 练习文件不会提供实现

每个 `practiceXX/practice.ts` 初始只有几行中文注释。完整声明、循环、条件、函数、类型与输出都由你输入。流程图展示数据怎样进入、处理、分支和输出，但不会替你提供代码框架。

课程总规则、符号速查与函数变量数据流见 [完整课程说明](./beginner/README.md)。

## 可选命令

```powershell
npm run beginner:doctor
npm run beginner:example -- day06
npm run beginner -- day06 practice01
npm run beginner -- day06 practice02
npm run beginner:solution -- day06 practice02
npm run beginner:verify -- day06
npm run test:practice
npm test
```

`npm run test:practice` 适合这个保存了你个人答案的练习仓库；`npm test` 还会检查所有 `practice.ts` 是否保持初始空白，主要用于维护干净模板。

## 课程导航

- [每日文档中心](./beginner/docs/README.md)
- [完整课程说明](./beginner/README.md)
- [间隔复习方法](./beginner/REVIEW.md)
- [学习进度表](./beginner/PROGRESS.md)

初始练习运行失败是正常现象。独立尝试后，再查看代码目录中的 `solution.ts`，以及文档目录 `beginner/docs/dayXX/practiceXX/SOLUTION.md` 中的方案说明。
