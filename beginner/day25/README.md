# Day 25：结课项目（二）——业务逻辑、不可变更新与模块

昨天把外部数据安全地变成了任务，今天处理这些任务：开始、完成、筛选、排序和统计。重点不是写更多语法，而是让每个函数职责单一，并且不偷偷修改调用者传入的数据。

## 今天能做到什么

- 用展开语法更新数组中的一个对象，同时保留旧数据。
- 区分“新数组”“新对象”和仍然共享的嵌套引用。
- 用 `Record` 保证每种状态都有统计结果。
- 用一个小泛型表达“输入实体和输出实体保持同一种类型”。
- 把模型、业务逻辑和报告拆进不同模块。

## 60–90 分钟安排

1. 10 分钟：复习 Day 13 的浅复制，预测 `array === [...array]` 与 `array[0] === [...array][0]`。
2. 15 分钟：阅读并运行多文件 `example.ts`。
3. 15 分钟：练习 01，完成单项不可变更新。
4. 15 分钟：练习 02，筛选并排序，同时保护原数组。
5. 15 分钟：练习 03，用 `Record` 汇总所有状态。
6. 15 分钟：练习 04，用受约束的泛型复用按 id 更新。

## 示例的模块关系

```text
models.ts ← task-service.ts
     ↑            ↑
     └── report.ts ── example.ts
```

- `models.ts` 只放共享类型。
- `task-service.ts` 负责更新任务。
- `report.ts` 负责从任务派生统计结果。
- `example.ts` 组合它们，不重复业务规则。

## 不可变更新的三步

```ts
const next = tasks.map((task) =>
  task.id === targetId ? { ...task, status: "done" } : task,
);
```

`map` 创建新数组；命中的项通过展开创建新对象；未命中的项可安全复用原对象。展开是浅复制，如果对象内还有可修改的嵌套对象，修改嵌套字段前还要再复制一层。

## 练习与命令

| 编号 | 内容 | 重点 |
| --- | --- | --- |
| 01 | 完成一个任务 | 不修改原数组，保留未命中引用 |
| 02 | 筛选并排序 | `sort` 会原地修改，先复制 |
| 03 | 生成状态报告 | `Record` 不漏掉任何状态 |
| 04 | 通用按 id 更新器 | 泛型表达输入输出关系 |

```powershell
npm run beginner:example -- day25
npm run beginner -- day25 01
npm run beginner -- day25 02
npm run beginner -- day25 03
npm run beginner -- day25 04
npm run beginner -- day25 all
```

## 常见错误

- 直接写 `task.status = "done"`，使旧页面或测试中的对象也发生变化。
- 以为 `{ ...task }` 会递归复制全部嵌套对象。
- 对传入数组直接调用 `sort`；它返回同一个、已经被修改的数组。
- 用 `{ [key: string]: number }` 统计状态，拼错键也不报错；这里更适合 `Record<TaskStatus, number>`。
- 泛型 `T` 只出现一次。泛型应表达至少两个位置之间的类型关系。

## 完成标准

- 四题全部通过，原数组和原对象未被意外修改。
- 能解释为什么未命中的任务可以复用旧引用。
- 能指出 `T extends { readonly id: string }` 的约束解决了什么问题。
- 能画出示例中四个模块的依赖方向。

## 官方资料

- [Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Utility Types：Record](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)
- [Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)
