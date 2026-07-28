# 解题结构

[返回题目](./README.md) · [打开 solution.ts](../../../day23/practice02/solution.ts)

本文件不提供完整答案。`solution.ts` 是可通过类型检查的 TODO 脚手架，只展示主要声明顺序、类型边界和待完成位置。

## 方案一：把诊断顺序与构建配置分开

### 搭建顺序

1. 先写 `firstDiagnostic`，让空诊断与非空诊断都有明确返回类型。
2. 用同一 `BuildProfile` 描述 type-check、build 两份配置，通过 `noEmit` 分支得到不同结果。
3. 最后单独验证外部配置键；不要把未知字符串直接当成 `KnownOption`。

### 类型与数据流

诊断数组 → 第一项；两个 profile → 输出行为；外部字符串 → 配置键守卫。

### 关键自检点

- `firstDiagnostic([])` 必须允许 `undefined`，不能用非空断言掩盖空列表。
- `noEmit`、`target`、`module` 与 `strict` 的职责不同，守卫也不能把任意键放行。

完成 TODO 后，请以本题 README 的精确输出和限制逐项自检；不要把显示结果直接写死。
