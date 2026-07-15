# Day 15：DOM、事件、可空节点与 JSX 类型概念

## 今日目标

安全使用 `querySelector<T>`、DOM 元素类型、事件类型、dataset、可空节点和浏览器/服务端环境边界；理解 JSX 类型检查与运行时框架是两件事。

## 来自主站的素材

- `src/components/SearchModal.astro:50-120` 使用 DOM 泛型、键盘事件、动态 import 和 fetch。
- `src/components/Navigation.astro:351-448` 处理主题、菜单、dataset、Cookie 和动画帧。
- `src/lib/theme.ts:8-22` 先判断 browser API 是否存在。

## 核心讲解

`document.querySelector` 可能返回 null。只有当 HTML 与脚本由同一组件控制且缺失即为编程错误时，才适合集中封装 `requireElement` 并抛错；否则应保留可选链。

事件监听器会根据目标推断事件类型，也可用 `KeyboardEvent`、`MouseEvent` 等显式说明。dataset 的值永远是 `string | undefined`，需要验证后才能变成 Locale 等业务联合。

JSX 需要 `jsx` / `jsxImportSource` 配置以及对应命名空间声明。Astro 模板不是 React JSX；不要因为语法相似就混用组件类型。

## 动手任务

1. 实现 `keyboardAction`，识别 Ctrl/Cmd+K、Escape、ArrowUp/Down。
2. 修复 `datasetLocale` 的盲目断言。
3. 阅读但不执行 `requireElement`，说明其泛型返回值和抛错契约。

## 常见故障

- 到处使用非空断言 `!`。
- 把 dataset 字符串当 boolean（`"false"` 仍为 truthy）。
- 在 Astro 服务端阶段直接访问 window/document。
- 用 `HTMLElement` 读取 input.value，而不是 `HTMLInputElement`。

## 验收

```powershell
npm.cmd --prefix typescript_practice run day -- day15
```
