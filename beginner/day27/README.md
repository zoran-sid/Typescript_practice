# Day 27（选修）：浏览器、请求与命令行边界

从这里开始是选修专题。主线 Day 00–26 已足够支撑普通 TypeScript 学习；当你准备做网页、调用接口或写命令行工具时，再进入本篇。

TypeScript 程序总在某个运行环境中执行。浏览器提供 DOM、事件和 `fetch`，Node.js 提供 `process`、文件系统等能力。类型会随着环境的库声明而变化，但外部输入仍必须在运行时验证。

## 今天能做到什么

- 认识 DOM 元素与事件的常用类型，并安全处理可能为空的目标。
- 把 `fetch`/客户端返回的数据视为 `unknown`。
- 把命令行参数解析写成可测试的纯函数。
- 理解 `lib` 与 `@types/...` 为环境 API 提供声明，不会安装运行时本身。

## 60–90 分钟安排

1. 15 分钟：运行示例，区分浏览器、Node 与课程中的假客户端。
2. 15 分钟：练习 01，用结构类型模拟输入事件。
3. 20 分钟：练习 02，验证异步请求结果。
4. 20 分钟：练习 03，解析可能缺失的 CLI 参数。
5. 10 分钟：在浏览器控制台观察 `document.querySelector`，但不要把真实网络请求写进自动练习。

## 环境类型不是运行时能力

```ts
const input = document.querySelector<HTMLInputElement>("#search");
input?.addEventListener("input", (event) => {
  const target = event.currentTarget;
  if (target instanceof HTMLInputElement) console.log(target.value);
});
```

上面的代码只能在浏览器中真实执行。课程运行器在 Node 中运行，所以示例只声明并类型检查 DOM 绑定函数，不会假装 Node 有 `document`。相反，业务部分通过小接口注入假客户端，这让练习稳定、快速、无需联网。

Node 命令行里常见 `process.argv.slice(2)`。练习先写 `parseArgs(args)` 纯函数；真实项目只在最外层把 `process.argv` 传进去。这样解析逻辑不依赖全局环境，也容易测试。

## 练习

```powershell
npm run beginner:example -- day27
npm run beginner -- day27 01
npm run beginner -- day27 02
npm run beginner -- day27 03
npm run beginner -- day27 all
```

| 编号 | 内容 | 重点 |
| --- | --- | --- |
| 01 | 读取输入事件 | 事件目标可能为空、结构类型 |
| 02 | 读取请求结果 | `Promise<unknown>`、运行时验证 |
| 03 | 解析命令行参数 | 数组越界、`undefined`、默认值 |

## 常见错误

- 在 Node 中直接执行 `document.querySelector`。
- 写了 `fetch(...).then(response => response.json() as User)` 就认为数据已验证。
- 用非空断言 `document.querySelector(...)!` 隐藏元素缺失。
- 在业务函数内部直接读取 `process.argv`，使测试必须篡改全局状态。
- 误以为加入 DOM 类型或 `@types/node` 会自动提供浏览器/Node 运行时。

## 完成标准

- 三题通过，且练习不依赖网络或真实 DOM。
- 能指出“环境声明”“外部数据验证”“运行时 API”三者的职责。
- 能把真实边界留在入口，把可测试逻辑写成普通函数。

## 官方资料

- [TypeScript for the New Programmer](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [DOM Manipulation](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html)
- [Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)
- [Type Declarations](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html)
