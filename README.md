# TypeScript 零基础练习

这个仓库面向没有 JavaScript 基础的学习者：Day 00–26 是主线，Day 27–32 是选修。每一天先用 example 与流程图理解代码，再完成 1–3 道文件完全分开的独立练习。案例覆盖订单、库存、联系人、工单、JSON、异步面板、旧模块等场景，不只围绕学生系统。

## 最方便的学习方式：右键运行

1. 第一次在项目根目录运行 `npm install`。
2. 用 VS Code 或 Cursor 打开整个 `F:\typescript_practice` 文件夹并安装推荐的 **Code Runner**。
3. 打开当天 `README.md`，先沿 Example Mermaid 流程图预测执行顺序。
4. 右击当天 `example.ts`，选择 **Run Code**，再把流程图节点对应到代码行。
5. 从当天导航进入 `practice01/`、`practice02/` 或 `practice03/`。
6. 阅读练习自己的 README 与流程图，在该目录的空白 `practice.ts` 中独立完成。
7. 右击 `practice.ts` 自动进行类型检查、运行并核对输出。

每道题都有自己的目录、题目、作答文件和参考答案。练习之间不导入代码，也不共享实现；完成一题不代表另一题自动完成。

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
npm test
```

## 课程导航

- [完整课程说明](./beginner/README.md)
- [间隔复习方法](./beginner/REVIEW.md)
- [学习进度表](./beginner/PROGRESS.md)

初始练习运行失败是正常现象。独立尝试后，再查看同一 `practiceXX` 目录中的 `solution.ts` 与 `SOLUTION.md`。
