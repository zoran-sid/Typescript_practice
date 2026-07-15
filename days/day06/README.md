# Day 06：联合、交叉、收窄与穷尽检查

## 今日目标

掌握字符串字面量联合、交叉类型、控制流收窄、判别联合、`in` / `typeof` / 等值收窄、穷尽检查，以及 enum 与 `as const` 的取舍。

## 来自主站的素材

- `src/lib/media/list.ts:1-22` 用字符串联合约束分类和状态。
- `src/content/config.ts:144-179` 用运行时枚举约束 Lab 类型、状态和验证状态。
- `src/lib/routes/endpoints.ts:9-18` 使用联合参数和 `in` 操作符读取可选名称。

## 核心讲解

联合 `A | B` 表示值满足其中一种形状，交叉 `A & B` 表示同时满足两种形状。判别联合给每个分支一个共同字面量字段（如 `kind`），`switch` 后 TypeScript 能精确知道该分支的其他字段。

穷尽检查把 `default` 中剩余的值赋给 `never`。以后新增状态却忘记处理时，编译器会在这里报警，比返回一个模糊默认值更安全。

数字 enum 会生成运行时代码和反向映射；字符串 enum 也会生成对象。对于主站这种静态数据协议，`as const` 数组/对象加派生联合通常更透明。需要真实运行时命名空间或与既有库兼容时再考虑 enum。

## 动手任务

1. 实现 `describeState` 的所有三个分支。
2. 修复 `canFeature`：只有已完成且有验证日期的项目才能 featured。
3. 尝试增加 `blocked` 分支，观察穷尽检查如何提醒你。

## 常见故障

- 使用宽泛 `string`，丢失状态集合。
- 在 `switch` 外访问只属于某个分支的字段。
- 加了“永远返回默认值”的 default，掩盖新状态。
- 用 `as State` 绕过构造约束。

## 验收

```powershell
npm.cmd --prefix typescript_practice run day -- day06
```
