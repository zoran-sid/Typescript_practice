# Day 00：准备环境并运行第一段 TypeScript

预计用时：60–75 分钟。

今天不是背语法。你的目标是建立一条可靠的操作路径：找到文件、修改文字、保存、运行命令、读懂结果。以后所有课程都会重复这条路径。

## 完成后你会做到

- 知道 Node.js、npm、TypeScript 和 VS Code 各自负责什么。
- 知道 `.ts` 是 TypeScript 源文件。
- 能在正确目录运行一条 npm 命令。
- 能区分“类型检查”和“真正运行代码”。
- 能修改一行代码，并通过自动验收。

今天暂时不学习函数、数组、对象、`import`、`export`、测试框架和 Git 分支。

## 建议时间安排

| 阶段 | 时间 |
| --- | ---: |
| 环境检查与工具认识 | 15 分钟 |
| 运行并跟写示例 | 15 分钟 |
| 修改实验 | 10 分钟 |
| 独立练习与排错 | 20 分钟 |
| 回顾与记录 | 10 分钟 |

## 1. 四个工具分别做什么

### VS Code：编辑文件

你在 VS Code 中阅读和修改代码。保存文件的快捷键是 `Ctrl + S`。终端不会自动运行尚未保存的内容，因此“改完但忘记保存”是最常见的第一天问题。

### Node.js：运行 JavaScript

浏览器可以运行 JavaScript，Node.js 也可以。Node.js 让我们能在终端运行程序和课程工具。

### npm：安装依赖并运行项目命令

`npm install` 会读取根目录的 `package.json`，安装项目需要的 TypeScript 和 `tsx`。`npm run ...` 则运行项目已经定义好的命令。

### TypeScript：在运行前检查代码

TypeScript 是 JavaScript 的静态类型检查器。这里的“静态”表示它在代码运行前分析代码，提前指出某些不合理操作。类型检查结束后，真正运行的仍然是 JavaScript 行为。

先记住下面这条流程，不需要理解内部细节：

```text
你写 practice.ts
  → TypeScript 检查可能的类型错误
  → 检查通过后运行代码
  → 课程比较输出并给出中文提示
```

## 2. 检查当前环境

确认终端提示符位于项目根目录：

```text
PS F:\typescript_practice>
```

第一次使用时执行：

```powershell
npm install
npm run beginner:doctor
```

如果最后显示 `PASS`，说明 Node.js、TypeScript 和运行工具都已准备好。

如果 PowerShell 显示找不到 `package.json`，通常是终端目录不正确。执行：

```powershell
cd F:\typescript_practice
```

## 3. 阅读第一段程序

打开 `beginner/day00/example.ts`：

```ts
const message = "Hello from the Day 00 example!";

console.log(message);
```

逐部分阅读：

- `message` 是我们给一份数据起的名字。
- 双引号中的内容是一段文字。
- `console.log(...)` 把内容显示在终端。
- 分号 `;` 表示这一条语句结束；当前项目会保留分号，保持写法一致。

运行它：

```powershell
npm run beginner:example -- day00
```

终端应该显示：

```text
Hello from the Day 00 example!
```

### 跟写实验

把 `example.ts` 中双引号内的文字改成你喜欢的句子，保存，再运行同一条命令。观察终端输出怎样随源代码变化。实验结束后可以恢复原文字，也可以保留你的版本。

这里最重要的动作顺序是：

```text
修改 → 保存 → 运行 → 阅读结果
```

## 4. 必做练习

打开 `beginner/day00/practice.ts`。当前程序输出的是占位文字。

你的任务只有一个：让它准确输出：

```text
Hello, TypeScript!
```

要求：

- 只修改双引号中的文字。
- 保留 `const message =` 和 `console.log(message)`。
- 注意大写字母、英文逗号、空格和感叹号。

运行检查：

```powershell
npm run beginner -- day00
```

第一次失败时，终端会同时显示期望输出、实际输出和提示。根据差异修改，直到看到 `PASS Day 00`。

## 5. 常见故障排查

### 修改后输出没有变化

先按 `Ctrl + S`，确认文件标签上的未保存圆点已经消失，然后重新运行。

### 修改了文件但仍不通过

确认你修改的是：

```text
beginner/day00/practice.ts
```

不要修改 `example.ts`、`solution.ts` 或 `beginner/checks/`。

### 看起来一样却不通过

程序比较的是准确字符。中文标点 `，！` 与英文标点 `,!` 不同，多一个空格或少一个空格也不同。对照终端中的“期望输出”和“实际输出”。

### 终端报告依赖未安装

回到项目根目录运行：

```powershell
npm install
npm run beginner:doctor
```

## 6. 完成检查

不看答案，尝试用自己的话回答：

1. VS Code 和 Node.js 的职责有什么不同？
2. 为什么修改后要先保存再运行？
3. TypeScript 检查代码与 Node.js 运行代码，哪个先发生？
4. `.ts` 文件是什么？

只要你能完成“修改、保存、运行、读反馈”这条路径，就已经达成今天的目标。

## 7. 参考答案

完成练习后再打开：

- `beginner/day00/solution.ts`
- `beginner/day00/SOLUTION.md`

也可以运行：

```powershell
npm run beginner:solution -- day00
```

## 8. 与真实项目的联系（可选）

大型网站项目也会先检查源代码，再生成可运行或可部署的文件。区别只是工具更多、代码更大；今天的流程是这类工作流的最小版本。

## 官方资料

- [TypeScript Handbook：TypeScript 是什么](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Handbook：The Basics](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)

官方手册默认读者已经了解部分 JavaScript。这里不要求你提前阅读完整手册；链接用于完成课程后复习和核对概念。
