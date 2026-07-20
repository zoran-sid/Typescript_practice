# Day 14 参考答案说明

## 解题路线

`courseTitle`、`lessonCount`、`passingScore` 和 `summarizeStudent` 都是具名值，所以放在花括号中。`formatScore` 是默认导出，放在花括号外。`Student` 只出现在类型位置，因此使用 `import type`。

入口只负责组合模块：创建符合共享类型的学生和分数，然后调用模块提供的能力。路径保留 `.js`，让 Node ESM 的运行时路径与 `NodeNext` 解析保持一致。

## 易错点

不要复制辅助模块的实现来“绕过”导入。默认导入和具名导入的语法不同；类型导入会在编译后消失，不能在 `console.log` 中当作值使用。

## 拓展思考参考方向

`student` 对象和所有构造 `Student` 的 TypeScript 文件会因缺少 `email` 得到检查错误；只调用运行时函数且不使用该类型的代码未必立即报错。类型依赖用于编译期契约，值依赖会保留到运行时模块加载。
