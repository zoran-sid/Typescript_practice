# DAY25 · Practice 01：学习任务快照更新

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day25/practice01/practice.ts)
- 结构提示代码：[solution.ts](../../../day25/practice01/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

这是一道完整、独立的主练习。不要导入其他 practice 文件夹中的代码。

## 场景背景

学习计划应用要在多个界面之间共享同一批任务，业务服务接收任务数组和待完成的任务编号，再生成更新结果与统计报告。若服务直接修改原数组或原对象，历史视图、缓存和当前页面会同时被意外改变，排序也可能破坏原顺序。你需要交付新的任务集合、按时长排列的待办清单和完整状态报告，同时证明原数据仍保持不变。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
original
   ├── completeTask(id) ──> updated
   │                          ├── plannedByDuration ──> planned
   │                          └── buildReport ──> report
   └── 保持不变 ────────────────────────────────┐
original + updated + planned + report ────────┴──> 业务输出
```

## 要完成的功能

在 `practice.ts` 中从零完成“任务业务服务与报告”。

先在文件顶层**分别声明**下面三个类型：

```ts
type TaskStatus = "todo" | "doing" | "done";

type StudyTask = {
  readonly id: string;
  title: string;
  minutes: number;
  status: TaskStatus;
};

type Report = {
  counts: Record<TaskStatus, number>;
  totalMinutes: number;
};
```

- `TaskStatus` 是状态类型。
- `StudyTask` 是单个任务的类型，`status` 字段必须使用 `TaskStatus`。
- `Report` 是报告返回对象的类型：`counts` 必须同时有 `todo`、`doing`、`done` 三个计数字段，`totalMinutes` 保存所有任务的分钟总数。

把这些对象结构直接内联到函数参数或返回类型里，TypeScript 可能仍会接受，但不符合本题“声明并复用 `TaskStatus`、`StudyTask`、`Report`”的结构练习。

接着实现四个函数：

1. 泛型函数 `updateById<T extends { readonly id: string }>(items: readonly T[], id: string, update: (item: T) => T): T[]`：
   - `items` 是要检查的数组；
   - `id` 是要查找的目标编号；
   - `update` 是“命中后怎样产生新对象”的回调函数；
   - 返回值是 `map` 创建的新数组，只有命中项交给 `update`，未命中项原样保留。
2. 函数 `completeTask(tasks: readonly StudyTask[], id: string): StudyTask[]`：复用 `updateById`，把目标任务的 `status` 改为 `"done"`。
3. 函数 `plannedByDuration(tasks: readonly StudyTask[]): StudyTask[]`：只保留 todo，再按 `minutes` 升序排列，不能改动传入数组。
4. 函数 `buildReport(tasks: readonly StudyTask[]): Report`：返回一个 `Report` 对象；`counts` 记录三种状态的数量，`totalMinutes` 记录总分钟数。

核心函数可以先写成下面的结构，`TODO` 仍由你完成：

```ts
function updateById<
  T extends { readonly id: string },
>(
  items: readonly T[],
  id: string,
  update: (item: T) => T,
): T[] {
  // TODO：用 map 判断 id，并在命中时调用 update。
}

function buildReport(
  tasks: readonly StudyTask[],
): Report {
  // TODO：统计 counts 和 totalMinutes。
}
```

最后声明并使用这些变量：

- `original: StudyTask[]`：固定任务 a / Types / 30 / todo；b / Modules / 45 / doing；c / Validation / 20 / todo；d / Variables / 50 / todo。
- `updated`：保存 `completeTask(original, "a")` 的返回数组。
- `planned`：保存 `plannedByDuration(updated)` 的返回数组。
- `report`：保存 `buildReport(updated)` 的返回对象。

输出时比较 `original` 与 `updated`，读取 `planned` 的标题顺序，并从 `report.counts` 和 `report.totalMinutes` 读取报告数据。

精确输出：

```text
Original first: todo
Updated first: done
Same array: false
Same untouched task: true
Planned: Validation, Variables
Counts: todo=2, doing=1, done=1
Minutes: 145
```

限制：不使用 `any`、非空断言 `!`；不得给原数组调用会修改它的方法，不得直接赋值修改任务属性。

完成标准：右击运行 `practice.ts` 后输出完全一致；能解释为何目标项是新对象、未命中项可以复用，以及 `Record` 如何防止遗漏状态。

## 本题易漏语法

数组方法每一步都返回值；用 const 保存中间结果。sort 前先复制，避免修改参数数组。

## 写完后自检

- 把目标 id 改成不存在的 `"x"` 时，返回数组和每个任务引用应该怎样变化？你的实现是否仍满足约定？
- 为什么只写 `[...tasks]` 还不够完成不可变更新，而命中项需要 `{ ...task, status: "done" }`？
- 给任务增加可修改的 `details.notes` 后，若要更新一条 note，还需要复制哪些层？

## 文件

- 在 `practice.ts` 中独立作答。
- 独立完成后，再查看 `solution.ts` 的 TODO 代码骨架与 `SOLUTION.md` 的解题结构；两者都不提供完整答案。
