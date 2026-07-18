# Day 14 参考答案说明

## 练习 01

courseTitle 和 lessonCount 都是 course-data.ts 的具名导出，所以在同一对花括号中导入。删除本地 lessonCount 后，入口只保留真正需要的使用代码。

## 练习 02

formatScore 是默认导出，passingScore 是具名导出。默认导入写在花括号之前。删除本地同名函数，否则会与导入名冲突。

## 练习 03

Student 只用于冒号后的类型位置，所以使用 import type。summarizeStudent 是运行时会调用的函数，必须使用普通值导入。共享 Student 把 track 限制为两个字面量，也避免多个文件各自维护不同定义。

## 为什么路径写 .js

当前课程使用 NodeNext 模块规则。TypeScript 检查 .ts 源文件，但运行时模块说明符描述的是生成后的 JavaScript 文件。工具会在开发时把 .js 路径解析到对应 .ts；这种写法也与真正编译后的输出保持一致。
