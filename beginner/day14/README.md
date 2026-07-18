# Day 14：现代 ES Modules 与类型导入

预计用时：60–80 分钟。

程序变大后，需要把数据、函数和类型分到不同文件。现代 JavaScript 使用 ES Modules，也就是 export 和 import。今天只学习日常项目最常用的写法，不学习旧式 namespace、AMD 或 require。

## 前置复习（10 分钟）

1. 函数和对象在运行时真的存在吗？
2. type 或 interface 会在运行时产生对象吗？
3. 两个文件中同名的局部变量为什么不应该互相冲突？

## 1. 导出与导入

具名导出（named export）可以在一个文件中提供多个成员：

~~~ts
export const courseTitle = "TypeScript";
export const lessonCount = 21;
~~~

使用者在花括号中按名字导入：

~~~ts
import { courseTitle, lessonCount } from "./course-data.js";
~~~

默认导出（default export）每个模块最多一个，导入时不写花括号：

~~~ts
import formatScore from "./score-tools.js";
~~~

默认导入和具名导入可以来自同一模块：

~~~ts
import formatScore, { passingScore } from "./score-tools.js";
~~~

## 2. import type

如果只需要一个类型，明确写 import type：

~~~ts
import type { Student } from "./student-types.js";
~~~

类型只参与检查，生成 JavaScript 时会被移除。值导入则必须在运行时找到真正的导出。

本课程在 TypeScript 文件中写 .js 扩展名，是因为 Node 的 ES Modules 最终运行的是 JavaScript 路径；TypeScript 的 NodeNext 解析会把它对应回本地 .ts 源文件。不要因为源文件后缀是 .ts 就随意删除导入路径的 .js。

## 3. 文件作用域

包含顶层 import 或 export 的文件是模块。模块内部声明默认只在本文件可见，除非明确 export。这样可以减少全局命名冲突，也能让依赖关系更清楚。

## 4. 运行示例

~~~powershell
npm run beginner:example -- day14
~~~

example.ts 同时使用具名值、默认函数和类型导入。沿着每条导入路径打开对应辅助文件。

## 5. 必做练习

练习只修改 practice-XX.ts；辅助模块已经准备好。

### 练习 01：具名导入

从 course-data.ts 同时导入课程名和课数，删除本地占位值。

~~~powershell
npm run beginner -- day14 01
~~~

### 练习 02：默认导入与具名导入

删除本地占位 formatScore，从 score-tools.ts 导入默认函数，同时保留 passingScore。

~~~powershell
npm run beginner -- day14 02
~~~

### 练习 03：只导入类型

删除本地重复的 Student 类型，改用 import type；再让数据符合共享类型。

~~~powershell
npm run beginner -- day14 03
~~~

查看答案：

~~~powershell
npm run beginner:solution -- day14 03
~~~

## 6. 容易出错的地方

- 具名导入忘记花括号，或默认导入多写花括号。
- 导入名与导出名拼写不同，又没有使用 as 重命名。
- 把只用于类型位置的名字当作运行时值。
- 使用 import type 后尝试在 console.log 中输出这个类型。
- 在 NodeNext 项目中删除相对路径的 .js 扩展名。
- 从多个文件复制同一份类型，之后只修改其中一份，造成定义漂移。
- 把 namespace 当作新项目默认模块方案；现代项目优先 ES Modules。

## 完成标准

- 三题全部 PASS。
- 能区分具名导入、默认导入和类型导入。
- 能说明 import type 为什么不会产生运行时代码。
- 能从入口文件追踪到它依赖的三个辅助模块。

## 官方资料

- [Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)
- [Modules：Type-only Import and Export](https://www.typescriptlang.org/docs/handbook/2/modules.html#type-only-imports-and-exports)
- [Modules Reference：Theory](https://www.typescriptlang.org/docs/handbook/modules/theory.html)
- [Choosing Compiler Options](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html)
