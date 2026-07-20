# TypeScript 零基础练习

这个仓库面向没有 JavaScript 基础的学习者：Day 00–26 是主线，Day 27–32 是选修。现在每一天只有一道独立练习，并要求从空白文件写出完整程序。

## 最方便的学习方式：右键运行

1. 第一次先在项目根目录运行 `npm install`。
2. 用 VS Code 或 Cursor 打开整个 `F:\typescript_practice` 文件夹。
3. 编辑器提示推荐扩展时，安装 **Code Runner**。
4. 打开当天 `example.ts`，在编辑器或文件列表中右击，选择 **Run Code**。
5. 阅读当天 `README.md` 的“独立练习”，再打开 `practice.ts` 从头输入完整代码。
6. 在 `practice.ts` 上右击 **Run Code**；终端会自动进行类型检查、运行并比较输出。

项目已经配置好当前文件识别，不需要再手动输入 `npm run beginner:example -- day02`。

如果不安装 Code Runner，也可以打开当前课程文件后：

- 按 `F5`，选择“课程：运行当前文件”；或
- 使用 **Terminal → Run Task → 课程：运行当前文件**。

## 练习文件不会提供实现

`practice.ts` 只保留几行中文注释，用来指出题目位置和必须统一的变量名/函数名。它不会提供声明、循环、条件、函数框架或 TODO 代码。所有实现都由你从第一行开始输入。

每课 README 还包含一道“拓展思考（不要求写代码）”，用于解释边界、比较方案或把知识迁移到新场景。

## 可选命令

右键不方便时仍可使用：

```powershell
npm run beginner:doctor
npm run beginner:example -- day02
npm run beginner -- day02
npm run beginner:solution -- day02
npm run beginner:verify -- day02
npm test
```

## 课程导航

- [完整课程说明](./beginner/README.md)
- [间隔复习方法](./beginner/REVIEW.md)
- [学习进度表](./beginner/PROGRESS.md)

初始 `practice.ts` 运行失败是正常现象，因为它还没有实现。参考答案位于同一天的 `solution.ts`，建议只在独立尝试后查看。
