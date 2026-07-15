# PDF 参考说明

本课程参考了学习者提供的本地文件 `TypeScript 快速上手.pdf`（48 页）。PDF 不随仓库分发，课程也不复制其原文；这里只记录它如何影响课程结构。

## PDF 对课程的校准

| PDF 主线                              | 本课程对应位置    | 项目化扩展                                     |
| ------------------------------------- | ----------------- | ---------------------------------------------- |
| TypeScript 价值、编译、类型声明和推断 | Day 01、Day 18    | 使用本仓库 strict TSConfig，而不是全局安装示例 |
| JavaScript / TypeScript 类型总览      | Day 01–04、Day 11 | 外部 JSON、DOM dataset 和 Astro 内容边界       |
| `any`、`unknown`、`never`、`void`     | Day 03、Day 11–12 | 类型守卫、错误收窄、穷尽检查                   |
| object、函数、数组、tuple             | Day 02–04         | 经纬度元组、多段路线和纯函数数据流             |
| enum、type、联合、交叉                | Day 06、Day 08    | 对比 `as const` 和字符串协议                   |
| 类、修饰符、抽象类                    | Day 05            | 判断类是否真的比纯函数更合适                   |
| interface 及与 type / 抽象类的区别    | Day 04–06、Day 14 | 结构类型、声明合并、模块增强                   |
| 泛型与约束                            | Day 07–09         | `keyof`、Utility、条件类型和 `infer`           |
| `.d.ts` 类型声明文件                  | Day 14、Day 18    | ESM、环境模块、JS 迁移和模块解析               |

## 本课程额外补足

PDF 是快速入门材料，因此本课程继续补足现代项目实践：

- `satisfies`、模板字面量、品牌类型；
- 映射类型、条件类型、`infer`；
- 运行时验证与静态类型擦除；
- Promise、并发、错误结果建模；
- DOM / 事件 / JSX 类型概念；
- 迭代器、生成器、Symbol、现代 Decorator、Mixin；
- 严格 TSConfig、ESM 模块解析、类型测试；
- 判别联合状态机和 Astro 搜索索引综合练习。

这份映射的目的，是保证基础概念不遗漏，同时避免把速成示例直接当成生产代码。
