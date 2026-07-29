# Day 27（选修）｜浏览器、请求与命令行边界

## 写 Example 前先认识这些写法

### `querySelector` 与 `addEventListener`：找到网页元素，再监听它

这两个 API 由浏览器提供，不是 TypeScript 或本课程自带的业务函数。

- `document.querySelector("#search")` 中，点号左边的 `document` 代表当前网页；参数 `"#search"` 是 CSS 选择器；返回第一个匹配元素，找不到时返回 `null`。
- `input.addEventListener("input", callback)` 中，点号左边的 `input` 是找到的输入框；第一个参数 `"input"` 是事件名，第二个参数是事件发生后才执行的回调；这个调用本身返回 `undefined`。

它们解决的是“用户操作发生时，怎样让代码开始工作”。注册监听器不会立刻运行回调，只有用户真的输入时才会执行。

```html
<input id="search" />
<script>
  const input = document.querySelector("#search");

  input?.addEventListener("input", (event) => {
    console.log("输入:", event.currentTarget.value);
  });
</script>
```

用户在输入框键入 `ts` 后，控制台输出：

```text
输入: ts
```

浏览器才有 `document`；直接在 Node.js 中运行会找不到它。选择器里的 `#` 表示按 `id` 查找，事件名是小写的 `"input"`。`querySelector` 可能返回 `null`，所以必须先判断或像示例一样使用 `?.`。本日的 `normalizeQuery` 则是课程自定义函数，它只处理普通字符串，不负责监听浏览器。

同一份 TypeScript 放到不同地方运行，能用的东西不一样。网页里的输入框由浏览器提供；命令行参数和文件系统由 Node.js 提供。代码中写得出 `document`，不代表当前运行的 Node 进程真的有 `document`。

今天分别处理三个入口：浏览器输入事件、请求返回值和命令行参数。每个入口先把环境提供的数据转成普通值，再交给业务函数，这样才能在 Node 中用假数据单独测试。

建议用时：60–90 分钟。

## 今天会学到

- 用结构类型表达输入事件，并处理空目标；
- 把客户端响应保留为 `Promise<unknown>`；
- 把命令行参数解析成可测试的纯函数；
- 区分环境声明、运行时 API 与外部数据验证。

## 核心讲解

先按来源分开看：

| 数据从哪里来 | 入口拿到什么 | 转成什么普通值 | 失败时怎样处理 |
| --- | --- | --- | --- |
| 浏览器输入框 | `event.currentTarget` | 去掉首尾空格的搜索文字 | 目标不是输入框时不调用搜索 |
| 请求客户端 | `Promise<unknown>` | 验证后的课程标题 | 字段不对就返回失败或抛出明确错误 |
| Node 命令行 | `readonly string[]` | 合法的 day 数字 | 缺标志、缺值或不是整数时返回 `undefined` |

真实网页中，事件目标可以用 `HTMLInputElement` 检查，再读取它的 `value`。本课程的示例最终由 Node 运行，所以不直接操作 `document`；浏览器绑定留在最外层，去空格的普通字符串处理拆成 `normalizeQuery`，Node 只测试这个纯函数。

请求代码写成 TypeScript，也不能约束另一台服务器实际返回什么。`await client.get("/lesson")` 后先得到 `unknown`，确认它是非空对象并且 `title` 是字符串，才返回标题。`await` 只负责等待异步操作完成，不负责验证响应内容。

命令行也一样。给 `parseDay` 传入 `["--day", "27"]`，结果是 `27`；传入 `["--day"]`，标志后面没有值，结果应是 `undefined`。函数自己不读取全局 `process.argv`，测试就能直接传入这两组数据。更通用的解析器也可以写成 `parseArgs(args)`；重点都是让环境入口把参数数组传进来。

## 为什么要这样设计

浏览器事件、网络响应和命令行参数都来自程序外部：目标元素可能缺失，JSON 字段可能写错，标志后也可能没有值。若入口处直接断言类型，错误会带着不可信数据进入业务层，最后在离来源很远的地方爆发。

浏览器和 Node 提供事件、Promise、请求及参数数组，TypeScript 的环境类型负责说明这些 API 的已知外形；你仍要决定要读取哪个元素、响应必须有哪些字段、参数缺失时使用默认值还是报错。环境类型也有边界：DOM 类型不代表代码能在 Node 中运行，请求成功不代表数据结构正确，而每一种外部格式都需要维护自己的验证与错误处理。

## 函数变量追踪

三个入口的变量路线分别是：`event → currentTarget → value → query`；`client.get() → Promise → await 后的 value → title`；`args → index → raw → day`。每一步只做一次转换，也都保留失败分支。

这类入口函数常被称为“边界适配函数”。它们负责认识浏览器、请求客户端或 Node；后面的纯业务函数只认识字符串、数字和普通对象。

## Example 实际输出

运行 `example.ts` 后，终端会按下面的顺序显示。先用代码推测结果，再逐行对照：

```text
Normalized query: typed
Fetched title: Runtime boundaries
CLI day: 27
```

## Example 代码流程图

运行 `example.ts` 前先沿图预测执行顺序；运行后再把每个节点对应到代码行。

```mermaid
flowchart TD
  A["执行 void bindSearch<br/>只读取函数本身，不调用它，也不会绑定 input 事件"] --> B["调用 normalizeQuery('  typed  ')"]
  B --> C["trim 删除两端空格<br/>return 'typed'"]
  C --> D["console.log 输出 Normalized query: typed"]
  D --> E["调用并 await loadTitle(fakeClient)"]
  E --> F["loadTitle 调用 fakeClient.get('/lesson')"]
  F --> G["fakeClient return { title: 'Runtime boundaries' }<br/>loadTitle 把它先当作 unknown"]
  G --> H{"isRecord(value)？<br/>不是 null 且 typeof 是 object"}
  H -- "否" --> I["throw Error('Invalid lesson response')<br/>loadTitle 变为 rejected"]
  H -- "是，本例走这里" --> J{"typeof value.title === 'string'？"}
  J -- "否" --> I
  J -- "是，本例走这里" --> K["return value.title<br/>也就是 'Runtime boundaries'"]
  K --> L["console.log 输出 Fetched title: Runtime boundaries"]
  L --> M["调用 parseDay(['--day', '27'])"]
  M --> N["indexOf('--day') 得到 index = 0"]
  N --> O{"index < 0？"}
  O -- "是，参数中没有 --day" --> P["return undefined"]
  O -- "否，本例走这里" --> Q["raw = args[index + 1]<br/>得到 '27'"]
  Q --> R{"raw 不存在或 trim 后为空？"}
  R -- "是" --> P
  R -- "否，本例走这里" --> S["Number(raw)<br/>day = 27"]
  S --> T{"day 是整数且 day >= 0？"}
  T -- "否" --> P
  T -- "是，本例走这里" --> U["return 27"]
  P --> V["?? 使用备用文字 'missing'"]
  U --> W["?? 保留 27"]
  V --> X["console.log 输出 CLI day: missing"]
  W --> Y["console.log 输出 CLI day: 27"]
```

## 官方手册扩展阅读（可选）

完成当天教程后，如果还想加深理解，再到 [Day 27 官方手册索引](../OFFICIAL-READING.md#day-27) 只选 1 篇阅读；这不是开始练习前的必修内容。

## 独立练习导航

本日共有 2 道独立练习。每道题都有单独目录、说明、作答文件和解题结构提示；题目之间不共享代码。

| 目录 | 场景 | 类型 |
| --- | --- | --- |
| [practice01](./practice01/README.md) | 跨环境课程搜索入口 | 主任务 |
| [practice02](./practice02/README.md) | 搜索与命令行边界 | 闭卷迁移 |

右击任意练习目录中的 `practice.ts` 即可单独检查；命令行也可运行 `npm run beginner -- day27 practice02`。

## 常见错误

- 在 Node 中直接执行 `document.querySelector`；
- 把响应断言成 Lesson 而没有验证；
- 忘记标志后的数组项可能不存在；
- 把全局环境藏进业务函数。

### 错误代码示例

```ts
async function loadLesson(): Promise<Lesson> {
  const response = await fetch("/lesson");
  // ❌ 类型断言不会验证服务器实际返回的字段。
  return (await response.json()) as Lesson;
}

function parseDay(): number {
  // ❌ 纯业务逻辑偷偷依赖全局 process.argv，难以单独测试。
  return Number(process.argv[process.argv.indexOf("--day") + 1]);
}
```

### 正确写法

```ts
interface Lesson {
  title: string;
}

interface JsonClient {
  get(path: string): Promise<unknown>;
}

async function loadLesson(client: JsonClient): Promise<Lesson | null> {
  const value = await client.get("/lesson");
  // ✅ 响应先保持 unknown，并在边界逐字段验证。
  if (
    value === null ||
    typeof value !== "object" ||
    !("title" in value) ||
    typeof value.title !== "string"
  ) {
    return null;
  }
  return { title: value.title };
}

function parseDay(args: readonly string[]): number | undefined {
  const index = args.indexOf("--day");
  const raw = index < 0 ? undefined : args[index + 1];
  const day =
    raw === undefined || raw.trim() === "" ? Number.NaN : Number(raw);
  // ✅ 环境入口负责传入 args，函数只处理普通数据。
  return Number.isInteger(day) && day >= 0 ? day : undefined;
}
```

## 面试时怎么回答

**问：** 同一套 TypeScript 代码怎样处理浏览器、Node 和外部请求的边界？

**答：** 我会先把环境值转换成普通参数。浏览器最外层可以读取已经绑定的输入框，也可以先确认 `event.currentTarget` 是输入框，再把 `.value` 交给字符串函数；请求返回值先作为 `unknown` 验证字段；Node 的 `process.argv` 只是字符串数组，要检查 `--day` 后一项是否存在并真的是非负整数。比如 `["--day", "27"]` 可得到 `27`，`["--day"]` 只能进入缺失分支。这样业务函数不直接依赖 `document`、网络或全局参数，更容易测试。

**容易答错或追问：** 普通 Node 进程没有真实的 `document`、输入框或 `HTMLInputElement` 构造器，除非测试环境另外提供了 DOM 实现，不能为了凑输出伪造一个对象就说浏览器路径已经运行。在浏览器回调里可以用 `currentTarget instanceof HTMLInputElement`；读出 `.value` 后，跨环境的业务函数最好只接收普通字符串。面试官还可能问 DOM 类型为什么能编译却不能运行：类型声明只帮助检查，不会给 Node 创建这些运行时对象。

## 拓展思考（不要求写代码）

真实网页中应把哪一小段代码留在最外层，负责把 `HTMLInputElement`、`fetch` 和这里的纯函数连接起来？这样拆分对测试有什么帮助？
