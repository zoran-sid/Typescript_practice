# Day 20：JSON 进入程序后，先把它当作 unknown

预计用时：75–90 分钟。

接口、文件或浏览器存储给程序的是一段外部数据。即使里面写着 `name`、`contact` 等熟悉字段，TypeScript 也没有检查过它们是否存在、类型是否正确。先把解析结果放进 `unknown`，意思是“现在还不知道它能不能安全使用”；验证通过后，再交给业务代码。

## 核心讲解

从 JSON 文本进入业务代码，按这个顺序走：

1. `JSON.parse` 把文本解析成 JavaScript 值，并把这个值保存在 `unknown` 变量中。
2. 用真正会执行的条件判断，逐层检查对象、字段、数组和数组成员。
3. 所有必要检查都通过后，TypeScript 才允许把这个值当作业务类型使用。

写 `JSON.parse(raw) as User` 只是告诉 TypeScript“请相信我”，没有执行任何字段检查。真实数据里的数字不会因此变成字符串，缺失的字段也不会自动出现。程序可能顺利通过编译，却在读取深层字段时崩溃。

验证函数在运行时返回 `true` 或 `false`。返回类型中的 `value is Course` 进一步告诉 TypeScript：“只有返回 `true` 时，`value` 才可以当作 `Course`。”这种写法叫类型谓词：

~~~ts
function isCourse(value: unknown): value is Course {
  return (
    typeof value === "object" &&
    value !== null &&
    "title" in value &&
    typeof value.title === "string"
  );
}
~~~

逐行看这个检查：

1. `typeof value === "object"` 先排除字符串、数字等值。
2. `value !== null` 单独排除 `null`，因为 JavaScript 中 `typeof null === "object"` 的结果是 `true`。
3. `"title" in value` 确认属性存在。
4. `typeof value.title === "string"` 再确认属性值确实是字符串。

嵌套对象要在进入下一层前重复对象检查。数组先用 `Array.isArray` 确认容器，再用 `every` 让每个元素都通过元素验证函数。只要漏查一个必填字段，`value is Course` 的承诺就比真实检查更乐观，后面的业务代码仍可能出错。

还要区分两种错误：

| 失败发生在哪里 | 例子 | 调用者可以看到什么 |
| --- | --- | --- |
| 解析阶段 | 少了引号、括号不配对 | JSON 文本语法错误 |
| 验证阶段 | 能解析，但 `title` 缺失或类型不对 | 数据结构不符合业务要求 |

`JSON.parse` 遇到语法错误会抛出异常；解析成功不代表结构正确，还要继续验证。用结果联合分别保存这两种原因，界面才能给出对应提示，而不是只显示一个模糊的“读取失败”。

## 阅读示例

打开并右键运行 `example.ts`。给 `isCourse` 的每个条件标出问题：它在排除哪种错误数据？然后看条件全部为 `true` 后，调用处为什么可以读取课程字段。

## 验证函数的数据流

把一次验证调用按顺序看：

1. 外部值进入验证函数的 `value` 参数，此时类型仍是 `unknown`。
2. 条件从外到内检查；前一个条件通过后，后一个条件才安全地读取更深一层。
3. 任一条件失败，函数返回 `false`，调用处进入失败分支，不能读取业务字段。
4. 所有条件通过，函数返回 `true`。类型谓词让调用处的值收窄为 `Course`。
5. 业务代码只在成功分支中读取课程字段。

类型谓词本身不会替你检查数据；真正提供保证的是函数体里这些会在运行时执行的条件。

## Example 实际输出

运行 `example.ts` 后，终端会按下面的顺序显示。先用代码推测结果，再逐行对照：

```text
课程: TypeScript / 90 分
课程数据无效
```

## Example 代码流程图

运行 `example.ts` 前先沿图预测执行顺序；运行后再把每个节点对应到代码行。

```mermaid
flowchart TD
  A["准备合法与非法 JSON"] --> B
  B["JSON.parse 得到 unknown"] --> C
  C["类型守卫验证课程字段"] --> D
  D["合法输出课程，非法输出提示"]
```

## 独立练习导航

本日共有 2 道独立练习。每道题都有单独目录、说明、作答文件和解题结构；题目之间不共享代码。

| 目录 | 场景 | 类型 |
| --- | --- | --- |
| [practice01](./practice01/README.md) | JSON、unknown 与运行时验证 | 主任务 |
| [practice02](./practice02/README.md) | 课程 JSON 验证 | 闭卷迁移 |

右击任意练习目录中的 `practice.ts` 即可单独检查；命令行也可运行 `npm run beginner -- day20 practice02`。

## 容易出错的地方

- 只检查最外层对象就相信内部字段。
- 忘记排除 `null`。
- 数组只检查 `Array.isArray`，没有检查元素。
- 谓词声明 `value is Profile`，实际却漏查字段。
- 用 `as` 让编译器安静，却没有改变真实数据。
- 用一个大 `catch` 混淆语法错误与结构错误。

### 错误代码示例

```ts
const profile = JSON.parse(raw) as Profile;
console.log(profile.contact.email.toLowerCase());
// ❌ as Profile 没有验证 contact 或 email，真实数据缺字段时仍会崩溃。

function isProfile(value: unknown): value is Profile {
  return typeof value === "object"; // ❌ null 也满足，而且完全没检查嵌套字段。
}
```

### 正确写法

```ts
function isProfile(value: unknown): value is Profile {
  return (
    isRecord(value) &&
    typeof value.name === "string" &&
    isRecord(value.contact) &&
    typeof value.contact.email === "string" &&
    Array.isArray(value.lessons) &&
    value.lessons.every(isLesson) // ✅ 数组中的每个元素也必须通过验证。
  );
}

const value: unknown = JSON.parse(raw);
if (isProfile(value)) {
  console.log(value.contact.email.toLowerCase()); // ✅ 收窄后再进入业务逻辑。
}
```

## 拓展思考（不要求写代码）

如果 `Profile` 新增可选 `nickname?: string`，验证器应怎样区分“字段完全缺席”“字段存在且为字符串”和“字段存在但类型错误”？

## 官方资料

- [TypeScript Handbook：Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [Everyday Types：Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)
