# Day 26：结课项目（三）——异步加载、状态与测试

这是零基础主线的最后一天。你会让任务报告器从一个异步仓库加载外部数据，在“加载、成功、失败”之间安全转换，并用小型回归测试保护关键行为。

## 今天能做到什么

- 解释为什么 `async` 函数总是返回 `Promise`。
- 使用 `await` 得到 Promise 最终产生的值。
- 用 `Promise.all` 并发等待互不依赖的工作。
- 把加载状态建模为判别联合，避免互相矛盾的布尔变量。
- 在 `catch` 中把错误当作 `unknown` 收窄。
- 同时验证成功、边界和失败路径。

## 60–90 分钟安排

1. 10 分钟：复习 Day 21，口述 `Promise<Task[]>` 为什么不能直接当 `Task[]`。
2. 15 分钟：运行多文件示例，画出数据经过仓库、验证、报告的路径。
3. 15 分钟：练习 01，修复漏写 `await`。
4. 15 分钟：练习 02，并发加载两份互不依赖的数据。
5. 15 分钟：练习 03，把异步异常转换为失败状态。
6. 15–20 分钟：练习 04，运行四个回归测试并解释每个测试的价值。

## 最终数据流

```text
TaskRepository.load()
        ↓ Promise<unknown>
      await
        ↓
运行时验证 ──失败──→ { status: "failure", message }
        ↓成功
生成报告 ─────────→ { status: "success", tasks, totalMinutes }
```

加载状态使用联合，而不是 `isLoading`、`data?`、`error?` 三个可互相矛盾的字段：

```ts
type LoadState =
  | { status: "loading" }
  | { status: "success"; tasks: StudyTask[]; totalMinutes: number }
  | { status: "failure"; message: string };
```

## 练习

| 编号 | 内容 | 重点 |
| --- | --- | --- |
| 01 | 等待异步标题 | `Promise<T>` 与 `T`、漏写 `await` |
| 02 | 并发加载面板数据 | `Promise.all`、返回顺序 |
| 03 | 把异常变成失败状态 | `catch unknown`、判别联合 |
| 04 | 四类回归测试 | 正常、边界、无效数据、异步失败 |

```powershell
npm run beginner:example -- day26
npm run beginner -- day26 01
npm run beginner -- day26 02
npm run beginner -- day26 03
npm run beginner -- day26 04
npm run beginner -- day26 all
```

## 常见错误

- 忘记 `await`，于是拿到 Promise 对象而不是最终值。
- 在 `forEach(async () => ...)` 中期待外层自动等待全部回调。
- 可以并发的请求仍逐个等待，造成不必要的总等待时间。
- `catch (error)` 后直接访问 `error.message`，却没有先收窄。
- 只测试成功示例，不测空数组、坏数据和仓库失败。
- 用 `as StudyTask[]` 越过外部边界；异步不会让断言变成验证。

## 主线毕业检查

- `npm run beginner -- day26 all` 全部通过。
- `npm run beginner:verify` 验证全部示例和参考答案。
- 课程代码中没有用 `any` 或滥用 `as`、`!` 来关闭提示。
- 能用自己的话解释：
  1. 类型检查为什么不能验证 JSON；
  2. 判别联合如何避免矛盾状态；
  3. 不可变更新如何保护旧数据；
  4. `await` 在何处把 `Promise<T>` 变成 `T`；
  5. 编译通过与运行时测试通过为什么缺一不可。

完成这些后，你已经具备继续学习 Astro、React、Node 或其他 TypeScript 项目的共同基础。Day 27 以后是按需求选择的专题，不是毕业前必须背完的内容。

## 官方资料

- [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [Utility Types：Awaited](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype)
- [Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)
