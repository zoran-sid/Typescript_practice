# Day 18：TSConfig、模块解析与 JavaScript 迁移

## 今日目标

理解 `target`、`module`、`moduleResolution`、`lib`、`strict`、`noUncheckedIndexedAccess`、`exactOptionalPropertyTypes`、`isolatedModules`、`verbatimModuleSyntax`、`allowJs/checkJs` 和 emit 边界。

## 来自主站的素材

- 根 `tsconfig.json` 继承 `astro/tsconfigs/strict`，配置路径别名和 DOM/JSX 环境。
- `astro.config.mjs` 使用 `// @ts-check` 检查 JavaScript 配置。
- `package.json` 用 `astro check` 和 TypeScript 分别检查组件与纯 TS。

## 核心讲解

`target` 控制输出所需 JavaScript 级别，`lib` 控制可用环境类型；有 DOM 类型不代表运行时一定存在 document。`module` 决定输出模块语义，`moduleResolution` 决定编译器如何寻找导入。

严格选项不是“更漂亮的红线”，而是让数组越界、可选字段、catch 错误等风险进入设计。`noEmit` 适用于只做检查或由 Astro/Vite 负责构建。JavaScript 迁移可先 `allowJs + checkJs + // @ts-check`，再逐文件转 TS。

NodeNext ESM 的相对导入通常在源代码中写运行时 `.js` 扩展名，即使开发文件是 `.ts`；编译器会解析对应源文件。

## 动手任务

1. 实现 `strictnessWarnings`，返回缺失的关键严格选项。
2. 修复 `runtimeImport`，不要生成运行时不存在的 `.ts` 路径。
3. 对比本课程 tsconfig 与主站 tsconfig，解释为何 lib 不同。

## 常见故障

- 把路径别名当作运行时自动可用。
- DOM 类型存在就认为 Node 中有 window。
- 关闭 strict 以消除一个局部错误。
- `@ts-ignore` 长期掩盖失效问题；应优先 `@ts-expect-error` 做类型测试。

## 验收

```powershell
npm.cmd --prefix typescript_practice run day -- day18
```
