# Day 14：现代 ES Modules 与类型导入

预计用时：60–80 分钟。

程序变大后，需要把数据、函数和类型分到不同文件。现代 JavaScript 使用 ES Modules，也就是 `export` 和 `import`。今天只练习日常项目最常用的具名导入、默认导入和类型导入。

## 核心讲解

具名导出可以在一个文件提供多个成员，导入时使用花括号：

~~~ts
export const courseTitle = "TypeScript";
export const lessonCount = 21;

import { courseTitle, lessonCount } from "./course-data.js";
~~~

默认导出每个模块最多一个，导入时不放在花括号中。默认导入和具名导入也能来自同一个模块：

~~~ts
import formatScore, { passingScore } from "./score-tools.js";
~~~

只需要类型时明确写 `import type`：

~~~ts
import type { Student } from "./student-types.js";
~~~

类型只参与检查，生成 JavaScript 时会被移除；值导入则必须在运行时找到真实导出。课程在 TypeScript 源文件里仍写 `.js` 扩展名，是因为 Node 的 ES Modules 最终运行 JavaScript 路径，`NodeNext` 会把它解析回对应的 `.ts` 源文件。

包含顶层 `import` 或 `export` 的文件是模块。模块内部名称默认只在本文件可见，除非明确导出。不要在多个入口复制同一份共享类型，否则定义会逐渐漂移。

## 阅读示例

打开并右键运行 `example.ts`，然后沿着四条导入路径查看 `course-data.ts`、`score-tools.ts`、`student-types.ts` 与 `student-tools.ts`。这些辅助模块不要修改。

## 独立练习（从空文件开始）

请把 `practice.ts` 当作一个全新的入口文件，组合已经准备好的四个模块：

- 从 `course-data.ts` 具名导入 `courseTitle` 和 `lessonCount`。
- 从 `score-tools.ts` 默认导入 `formatScore`，并具名导入 `passingScore`。
- 从 `student-types.ts` 只导入类型 `Student`。
- 从 `student-tools.ts` 具名导入 `summarizeStudent`。
- 创建 `student: Student`：name 为 `Ada`，completed 为 `12`，track 为 `beginner`。
- 创建只读数组 `scores`，内容为 `55、80`。
- 先输出课程和学生摘要，再逐项调用 `formatScore`，最后输出及格线。

必须精确输出：

~~~text
课程：TypeScript 零基础课（21 课）
Ada：完成 12 课（beginner）
55：未通过
80：通过
及格线：60
~~~

限制：

- 不得修改任何辅助模块，也不得复制它们的常量、函数或 `Student` 类型。
- 相对导入路径必须保留 `.js` 扩展名。
- `Student` 必须使用 `import type`；运行时值使用普通 `import`。
- 不得使用 `any`、类型断言或本地同名占位声明。

完成标准：右键运行 `practice.ts` 后显示 PASS；能指出五个导入中哪些会存在于运行时代码里。

## 容易出错的地方

- 默认导入误放进花括号，或具名导入忘记花括号。
- 导入后仍保留同名本地声明。
- 使用 `import type` 后尝试把类型当作运行时值输出。
- 删除 `NodeNext` 相对路径中的 `.js`。
- 复制共享类型，导致以后只更新其中一份。

## 拓展思考（不要求写代码）

如果 `Student` 新增必填字段 `email`，哪些文件会立刻收到类型提示，哪些只在运行时依赖值导出？这说明类型依赖和值依赖有什么差异？

## 官方资料

- [Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)
- [Modules：Type-only Import and Export](https://www.typescriptlang.org/docs/handbook/2/modules.html#type-only-imports-and-exports)
