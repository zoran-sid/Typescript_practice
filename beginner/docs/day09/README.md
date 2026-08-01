# Day 09：`type`、`interface` 与 `readonly`

预计用时：60–90 分钟。

多个函数都要接收“用户对象”时，如果每次都重写 `{ id: string; name: string; bio?: string }`，很容易少写一个字段或写错类型。`type` 和 `interface` 可以给这套规则取名；`readonly` 则告诉 TypeScript，某个位置不允许通过当前引用重新赋值。

## 完成目标

- 使用 `type` 给类型取名称。
- 使用 `interface` 描述可复用的对象形状。
- 使用可选属性 `?` 与只读属性 `readonly`。
- 使用 `ReadonlyArray<T>` 表达不应修改的数组。
- 让函数返回一个符合命名对象类型的结果。
- 理解 TypeScript 类型只用于检查。
- 理解 `readonly` 只在 TypeScript 检查时生效，而且默认只保护标记的那一层。

## `type` 给类型取名

```ts
type UserId = string;
type Point = { x: number; y: number };
```

`type UserId = string` 可以读成：“以后写到 `UserId`，类型要求就是 `string`。”它只是给类型规则起名字，不会在程序运行时创建一个叫 `UserId` 的变量。

基础类型固定写成小写 `string`、`number`、`boolean`。大写的 `String`、`Number`、`Boolean` 是另一类包装对象，初学阶段不要用来代替基础类型。

## `interface` 描述对象形状

```ts
interface User {
  readonly id: string;
  name: string;
  bio?: string;
}
```

逐项看这份对象规则：

| 属性 | 要求 |
| --- | --- |
| `readonly id: string` | 必须有字符串 `id`，并且不能通过这个类型给它重新赋值 |
| `name: string` | 必须有字符串 `name` |
| `bio?: string` | `bio` 可以没有；如果有，必须是字符串 |

普通对象既可以用 `type`，也可以用 `interface`。本课程用 `interface` 描述主要对象，用 `type` 表示别名或联合，方便你看到名字时判断它大概扮演什么角色。

## 命名对象类型也能说明函数要交回什么

Day 05 中的函数返回数字或字符串。对象也可以作为一个返回值；只是这个对象里面能同时装几项有关联的结果。

```ts
type TaskId = string;

interface Task {
  readonly id: TaskId;
  title: string;
  done: boolean;
  note?: string;
}

interface TaskSummary {
  mainText: string;
  noteText: string;
}

function createTaskSummary(task: Task): TaskSummary {
  const status = task.done ? "已完成" : "未完成";
  const note = task.note ?? "无";
  return {
    mainText: `${task.id} | ${task.title} | ${status}`,
    noteText: `备注: ${note}`,
  };
}

const task: Task = {
  id: "T-01",
  title: "学习 type 和 interface",
  done: false,
};

const summary = createTaskSummary(task);
console.log(summary.mainText);
console.log(summary.noteText);
```

实际输出：

```text
T-01 | 学习 type 和 interface | 未完成
备注: 无
```

把函数声明拆开读：

- `task: Task` 在圆括号里面，说明函数接收一个 `Task` 对象。
- 圆括号后面的 `: TaskSummary` 说明函数必须交回一个符合 `TaskSummary` 的对象。它不是第二个函数，也不会创建一个名为 `TaskSummary` 的值。
- `return { ... }` 每次只交回一个值，这个值是对象，里面有 `mainText` 和 `noteText` 两个字段。
- 外面的 `summary` 接住整个对象，再分别读取 `summary.mainText` 和 `summary.noteText`。

如果函数只返回一段字符串，就无法再用有明确名称的字段区分“主要文字”和“备注文字”。把两项有关联的结果放进一个对象，调用处能清楚看到每一项的用途。

## `readonly` 与只读数组

```ts
const tags: ReadonlyArray<string> = ["TypeScript", "基础"];
```

通过变量 `tags` 读取数组没有问题，但不能调用 `push`、`pop` 等修改方法。对象的 `readonly id` 也不能通过当前类型改成另一个值。

这些限制发生在 TypeScript 检查阶段。它们不会自动执行 `Object.freeze`，程序运行后的 JavaScript 也不会保留完整的类型规则。可以把 `readonly` 理解成“让编辑器和类型检查提前拦住这类修改”。

## `readonly` 默认是浅层的

```ts
interface Box {
  readonly info: {
    count: number;
  };
}
```

这里 `readonly` 修饰的是 `box.info` 这一层：不能写 `box.info = 另一个对象`。但更里面的 `box.info.count` 没有 `readonly`，所以 `box.info.count = 2` 仍然允许。

这叫浅层只读：只保护明确标记的那一层。内层也不能改时，需要在内层属性前继续写 `readonly`。

## 为什么要这样设计

同一种项目或任务形状如果在每个函数旁边重复写，新增字段时容易只改到一处，调用方和实现方就会逐渐不一致。`type` 和 `interface` 给数据契约一个名字，让多个变量与函数共用同一份说明；`readonly` 再表达“这段代码只应读取，不能重新赋值”。

TypeScript 负责在编译时检查对象是否符合契约，并阻止明显的只读写入；编辑器也能据此提示属性。同一个命名类型还能用于变量、函数参数和函数返回值，让调用函数的人知道会收到什么。你仍要决定哪些字段必填、哪些可选、哪些应该只读，以及一个概念更适合对象接口还是其他类型组合。类型名只是约束，不会替你生成或保存真实数据。

这些保护在运行后的 JavaScript 中不会自动变成权限系统，而且 `readonly` 默认只约束标记到的那一层。嵌套对象是否也只读，需要在类型中继续明确。

## 阅读完整示例

打开并右击运行 `example.ts`。先找到 `createTaskSummary(task): TaskSummary`，指出输入类型、返回类型、真正被 `return` 交回的对象，以及外部哪个变量接住了它。然后临时尝试给 `task.id` 重新赋值，以及对 `tags` 调用 `push`，观察类型错误后撤销。

## Example 实际输出

运行 `example.ts` 后，终端会按下面的顺序显示。先用代码推测结果，再逐行对照：

```text
T-01 | 学习 type 和 interface | 未完成
备注: 无
标签: TypeScript, 基础
```

## Example 代码流程图

运行 `example.ts` 前先沿图预测执行顺序；运行后再把每个节点对应到代码行。

```mermaid
flowchart TD
  A["声明 Task 和 TaskSummary 对象类型"] --> B
  B["创建 task 和只读数组 tags"] --> C
  C["调用 createTaskSummary(task)"] --> D
  D["参数 task 接到任务对象"] --> E
  E{"task.done 是 true 吗？"}
  E -- "是" --> F["status = 已完成"]
  E -- "否" --> G["status = 未完成"]
  F --> H
  G --> H
  H["task.note ?? 无 得到 note"] --> I
  I["return 一个对象：mainText + noteText"] --> J
  J["summary 接住整个返回对象"] --> K
  K["summary.mainText ──> 第 1 行输出"] --> L
  L["summary.noteText ──> 第 2 行输出"] --> M
  M["tags.join 生成标签文字"] --> N
  N["console.log ──> 第 3 行输出"]
```

## 官方手册扩展阅读（可选）

完成当天教程后，如想继续确认概念，只选 [Day 09 对应的 1 篇官方阅读](../OFFICIAL-READING.md#day-09) 即可。它不是练习前置，不需要先读完才能作答。

## 独立练习导航

本日共有 2 道独立练习。每道题都有单独目录、说明、作答文件和完整参考答案；题目之间不共享代码。

| 目录 | 场景 | 类型 |
| --- | --- | --- |
| [practice01](./practice01/README.md) | Day 09：项目进度摘要 | 主任务 |
| [practice02](./practice02/README.md) | 任务卡片类型 | 闭卷迁移 |

右击任意练习目录中的 `practice.ts` 即可单独检查；命令行也可运行 `npm run beginner -- day09 practice02`。

## 常见错误

把类型名称拿去 `console.log` 却提示不存在，是因为类型只参与检查，不是运行时变量。读取可选属性后，还要处理它可能是 `undefined` 的情况。数组调用 `push` 被拦住时，检查它是不是 `ReadonlyArray<T>`。内层属性还能修改时，不要以为外层一个 `readonly` 会自动保护所有层级；逐层查看哪些属性真正写了 `readonly`。

### 错误代码示例

假设多个接口请求共用一份客户端配置。为了让一次健康检查更快超时，开发者在临时逻辑中修改了 `config.retry.timeoutMs`。接口把 `retry` 标成了 `readonly`，于是开发者误以为里面的超时时间也不能变化：

```ts
interface ClientConfig {
  readonly service: string;
  readonly retry: {
    timeoutMs: number;
  };
  endpoints: ReadonlyArray<string>;
}

const config: ClientConfig = {
  service: "inventory",
  retry: { timeoutMs: 5000 },
  endpoints: ["/items", "/stock"],
};

config.retry.timeoutMs = 100;
// ❌ 外层 readonly 没有保护内层 timeoutMs。

console.log(`Next request timeout: ${config.retry.timeoutMs}`);
```

实际输出：

```text
Next request timeout: 100
```

这行修改能通过类型检查，因为 `readonly retry` 只禁止 `config.retry = 另一个对象`，没有限制里面的 `timeoutMs`。临时健康检查修改了共享对象后，后续普通请求也只剩 100 毫秒，可能产生大量意外超时。

同一个接口里的 `endpoints: ReadonlyArray<string>` 则会让下面的代码在检查阶段失败：

```ts
config.endpoints.push("/admin");
// TypeScript：ReadonlyArray 没有 push 方法。
```

`readonly` 修饰到哪一层，只保护哪一层；不能只看外层出现了这个单词，就假设整棵对象都不可变。

### 正确写法

```ts
interface ClientConfig {
  readonly service: string;
  readonly retry: {
    readonly timeoutMs: number;
  };
  endpoints: ReadonlyArray<string>;
}

const config: ClientConfig = {
  service: "inventory",
  retry: { timeoutMs: 5000 },
  endpoints: ["/items", "/stock"],
};

const healthCheckConfig: ClientConfig = {
  service: config.service,
  retry: { timeoutMs: 100 }, // ✅ 创建新的嵌套对象。
  endpoints: config.endpoints,
};

console.log(`Normal timeout: ${config.retry.timeoutMs}`);
console.log(
  `Health check timeout: ${healthCheckConfig.retry.timeoutMs}`,
);
```

实际输出：

```text
Normal timeout: 5000
Health check timeout: 100
```

内层 `timeoutMs` 也明确标记为 `readonly`。健康检查需要不同配置时，代码创建新的外层对象和新的 `retry` 对象；原配置继续保持 5000。`endpoints` 本身是只读数组，两个配置共享它时，这两个变量都不能通过当前类型调用 `push`。

## 面试时怎么回答

**问：`interface` 和 `type` 应该怎么选？`readonly` 能让对象完全不可变吗？**

可以这样回答：

`interface` 和对象类型别名都能描述对象形状。`interface` 可以重新打开并合并同名声明，常用于需要扩展的对象契约；`type` 还能直接给联合类型、元组和其他类型组合取名。大多数普通对象两者都能用，团队应保持一致，只有需要声明合并或类型组合时再利用各自差异。

`readonly` 主要是编译期写入限制，而且默认是浅层的。`readonly profile: { name: string }` 会阻止把 `profile` 换成另一个对象，却不一定阻止 `profile.name = "新名字"`；生成 JavaScript 后也没有自动的冻结代码。复制可以避免改动原对象，但副本仍然可变；要在运行时阻止当前对象的写入，需要冻结对象或封装修改入口，嵌套对象仍要逐层处理。需要深层只读时则要设计递归类型，并理解它仍只是静态约束。

官方参考：

- [TypeScript：Everyday Types 中的 `type` 与 `interface`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)
- [TypeScript：Object Types 中的 `readonly`](https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-properties)
- [TypeScript：Object Types 中的 `ReadonlyArray`](https://www.typescriptlang.org/docs/handbook/2/objects.html#the-readonlyarray-type)

## 拓展思考（不要求写代码）

接口中 `readonly progress: { completed: number; total: number }` 为什么只阻止替换整个 `progress` 对象，却不阻止 `progress.completed = 3`，若业务要求完全只读还需要改变哪里？

## 完整参考答案

代码目录中的 `solution.ts` 提供可运行的完整答案，题目文档目录中的 `SOLUTION.md` 解释直接调用逻辑。

完成后再通过对应练习文档的“文件位置”链接查看 `solution.ts` 与 `SOLUTION.md`，重点检查类型设计是否表达了题目意图。
