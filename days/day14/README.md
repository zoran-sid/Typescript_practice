# Day 14：模块、类型导入、命名空间与声明文件

## 今日目标

掌握 ESM 导入导出、`import type`、模块作用域、声明合并、命名空间、环境模块、`.d.ts` 与三斜线指令的适用边界。

## 来自主站的素材

- `src/lib/lab.ts:1-2` 区分 `import type` 与运行时导入。
- `src/lib/photos.ts:1-16` 使用 Astro 类型和 `import.meta.glob<T>`。
- `src/env.d.ts` 为 Astro 类型环境提供声明。

## 核心讲解

ESM 是当前项目的模块系统。每个含 import/export 的文件有独立作用域。`verbatimModuleSyntax` 下，纯类型应使用 `import type`，避免编译器和打包器误判运行时依赖。

interface 可声明合并，常用于扩展第三方类型。namespace 是旧式组织方式，在现代新代码中优先 ESM；它仍值得学习，以便阅读遗留声明。`.d.ts` 只提供类型，不生成 JavaScript。环境模块可为没有类型的 JS 包建立契约，但契约必须与真实运行时一致。

三斜线指令曾用于文件依赖或类型库引用；现代项目主要依赖 `tsconfig` 和 ESM。只有声明包等特殊场景才使用。

## 动手任务

1. 使用 `import type` 引入 `LabModule` 和 `ModuleFactory`，实现工厂函数。
2. 修复 `publicMetadata` 遗漏合并接口的 verified 字段。
3. 阅读 `legacy-widget.d.ts`，解释为何它不能让不存在的包在运行时出现。

## 常见故障

- 从 `.d.ts` 期待运行时代码。
- 类型导入被保留成无用运行时导入。
- namespace 与 ESM 混用造成双重来源。
- 声明文件写得比真实 JS 更乐观。

## 验收

```powershell
npm.cmd --prefix typescript_practice run day -- day14
```
