# DAY30 · Practice 02：模块增强与运行时补丁

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day30/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day30/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

这题专门验证声明文件和模块增强的运行时边界。辅助文件提供一个旧计分模块和一个没有 `label()` 方法的旧用户类；你要先观察真实原型，再同时补类型与实现。

## 场景背景

维护团队以 `import * as legacyScore` 接入旧计分模块，这里的导入结果是 ES 模块命名空间对象，不是 TypeScript 的 `namespace` 关键字。另一个 `LegacyUser` 运行时只有 `name`；模块增强可以让编译器知道未来会有 `label()`，却不会替你把方法装到原型上。你需要先证明方法不存在，再安装运行时补丁并调用它。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
legacy-score.js + legacy-score.d.ts
   └── import * as legacyScore ──> total / version

legacy-user.js ──> LegacyUser.prototype
                      ├── 补丁前 typeof label ──> "undefined"
                      └── 模块增强（只补类型）
                              + 原型赋值（补运行时实现）
                                      └── user.label() ──> 最终文字
```

## 和 Practice 01 的区别

Practice 01 站在调用者一侧，读取已有 `.d.ts`，并练声明合并与旧枚举转换。本题站在维护者一侧：先检查真实原型，再用模块增强补实例类型，同时亲自安装运行时方法；控制流包含“补丁前观察 → 类型扩展 → 运行时补丁 → 调用”四个阶段。

## 任务要求

1. 用 `import * as legacyScore from "../legacy-score.js"` 导入模块对象，调用 `total([10, 20, 30])` 并读取 `version`。
2. 从 `../legacy-user.js` 导入 `LegacyUser`。安装补丁前先读取 `typeof LegacyUser.prototype.label`，结果必须来自真实运行时。
3. 使用 `declare module "../legacy-user.js"` 增强 `LegacyUser` 的实例类型，增加 `label(): string`。
4. 模块增强之后仍要执行原型赋值，为 `label` 提供真实实现；返回 `名字 (legacy)`。
5. 创建 Ada 用户并输出补丁后的标签。不要使用 TypeScript `namespace` 关键字，也不要声称模块增强会生成 JavaScript。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

> **先看清输出标点：** 本题的输出是英文，所以 `Ada (legacy)` 使用英文半角括号。代码语法里的函数括号 `()` 和类型冒号 `:` 也必须使用英文半角符号。运行器不会因显示文字中的括号或冒号全半角差异判你失败，但其他文字、数字和顺序仍要一致。

## 精确期望输出

```text
Module total: 60
Module version: 1.0
Before patch: undefined
User label: Ada (legacy)
```

## 写完后自检

- 暂时注释掉原型赋值，只保留模块增强时，类型检查可能怎样，运行 `user.label()` 又会怎样？
- 为什么 `import * as legacyScore` 得到的“模块命名空间对象”和 `namespace LegacyScore {}` 不是同一套组织方式？
- 如果 `legacy-user.js` 下一版自己实现了不同含义的 `label()`，你的补丁会覆盖什么？真实项目应怎样避免这种冲突？

## 文件

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 代码骨架与 `SOLUTION.md` 的解题结构；两者都不提供完整答案。
