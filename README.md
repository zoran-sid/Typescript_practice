# TypeScript 零基础练习

这是一套可以直接运行的 TypeScript 零基础课程，不要求先学过 JavaScript。Day 00–26 是主线，Day 27–32 是选修。每一天先用 Example、实际输出和详细流程图理解代码，再完成 1–3 道文件完全分开的练习。案例会在订单、库存、联系人、工单、JSON、异步数据加载和旧模块等场景之间切换，帮助学习者把同一知识迁移到不同问题。

## 最方便的学习方式：右键运行

1. 第一次在项目根目录运行 `npm install`。
2. 用 VS Code 或 Cursor 打开克隆后的项目根目录并安装推荐的 **Code Runner**；不要只打开某个 day 或 practice 子文件夹。
3. 从 [每日文档中心](./beginner/docs/README.md) 选择当天课程，先沿 Example Mermaid 流程图预测执行顺序。
4. 右击对应代码目录中的 `beginner/dayXX/example.ts`，选择 **Run Code**，再把流程图节点对应到代码行。
5. 从当天文档导航进入 `practice01`、`practice02` 或 `practice03` 的独立题目。
6. 阅读 `beginner/docs/dayXX/practiceXX/README.md` 的背景、需求与流程图。
7. 在对应的 `beginner/dayXX/practiceXX/practice.ts` 中独立完成代码，再右击运行并核对输出。

每道题都有自己的文档目录、代码目录、作答文件和完整参考答案。练习之间不导入代码，也不共享实现；完成一题不代表另一题自动完成。

## 练习题先给起始结构，核心逻辑由你完成

每道 Practice 的 README 都提供一段“起始代码”：固定数据、类型与函数签名、函数调用和输出位置已经写好。你把它复制到 `practice.ts` 后，只需要完成题目真正要练的判断、循环、回调和 `return`。README 同时保留变量数据流，并增加一张与起始代码逐项对应的 Mermaid 流程图。

独立完成并运行通过后，再打开 `solution.ts`。它现在提供完整参考答案，并在调用处用 `// 调用关系：...` 说明数据怎样进入函数、返回值怎样传给下一步以及最后如何输出。已有的 `practice.ts` 作答不会因同步教程而被覆盖。

每天教程还包含一组来自实际开发习惯的错误与修正：先交代项目背景，再展示编译错误、运行异常或错误结果。面试章节提供可直接口述的回答，并附 TypeScript、MDN 或 Node.js 官方链接用于核对。

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

尚未填写练习的课程模板使用 `npm test`，它会检查所有 `practice.ts` 是否保持初始空白。已经开始作答后使用 `npm run test:practice`，这项检查允许保留练习代码。

## 课程导航

- [每日文档中心](./beginner/docs/README.md)
- [完整课程说明](./beginner/README.md)
- [间隔复习方法](./beginner/REVIEW.md)
- [学习进度表](./beginner/PROGRESS.md)

起始代码中的 TODO 尚未完成时，练习运行失败是正常现象。独立尝试后，再查看代码目录中的完整 `solution.ts`，以及文档目录 `beginner/docs/dayXX/practiceXX/SOLUTION.md` 中的调用关系说明。
