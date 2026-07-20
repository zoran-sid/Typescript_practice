# Day 20：JSON 进入程序后，先把它当作 unknown

预计用时：75–90 分钟。

接口、文件和浏览器存储里的 JSON 即使“长得像”某个类型，也没有经过 TypeScript 检查。类型在运行后会被擦除，所以边界数据必须先作为 `unknown`，通过真实检查后才能进入业务代码。

## 核心讲解

正确顺序是：

1. 解析 JSON，并把结果放进 `unknown`。
2. 在运行时逐层验证。
3. 验证成功后，才把它当作业务类型使用。

`JSON.parse(raw) as User` 会跳过第二步。断言不会转换字符串，也不会补齐缺失字段。

类型谓词把真实检查结果告诉 TypeScript：

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

必须记住 `typeof null === "object"`，所以对象检查要排除 `null`。嵌套对象要逐层检查；数组不仅要用 `Array.isArray`，还要用 `every` 验证每个元素。谓词的承诺不能比实际检查更乐观。

JSON 语法错误发生在解析阶段；结构错误发生在解析成功之后。用结果联合保留这两种原因，调用者就能给出更准确的提示。

## 阅读示例

打开并右键运行 `example.ts`。逐个指出 `isCourse` 对外层对象、`null`、属性存在和属性类型做了哪些检查。

## 独立练习（从空文件开始）

请从头编写“课程资料 JSON 验证器”。

业务类型：

- `Lesson`：`title: string`、`completed: boolean`
- `Profile`：`name: string`、`contact: { email: string }`、`lessons: Lesson[]`
- `ParseResult<T>`：成功 `{ ok: true; value: T }`，失败 `{ ok: false; error: string }`

必须实现：

- `isRecord(value: unknown): value is Record<string, unknown>`：确认非 `null` 对象。
- `isLesson(value: unknown): value is Lesson`。
- `isProfile(value: unknown): value is Profile`：逐层验证 name、contact.email、lessons 数组及每个元素。
- `parseProfile(raw: string): ParseResult<Profile>`：
  - JSON 语法错误返回 `JSON 格式错误`
  - 结构不合格返回 `资料字段无效`
  - 验证成功返回安全的 `Profile`

固定输入 `rawProfiles` 必须依次包含：

~~~text
{"name":"Ada","contact":{"email":"ada@example.com"},"lessons":[{"title":"变量","completed":true},{"title":"联合","completed":false}]}
{"name":"Lin","contact":{"email":123},"lessons":[]}
{"name":
~~~

遍历结果并精确输出：

~~~text
资料：Ada / ada@example.com / 课程：变量、联合 / 已完成：1
失败：资料字段无效
失败：JSON 格式错误
~~~

限制：

- 不得使用 `any`、类型断言、非空断言或 `as Profile`。
- 每个类型谓词的检查必须与承诺完全一致。
- JSON 解析结果必须先存为 `unknown`。
- `contact` 必须单独确认是非空对象；`lessons` 必须检查数组中的每一项。
- 只捕获 `JSON.parse` 的语法失败，不能把字段错误混成同一原因。

完成标准：右键运行后显示 PASS；能解释“编译通过”为什么不代表外部数据可信。

## 容易出错的地方

- 只检查最外层对象就相信内部字段。
- 忘记排除 `null`。
- 数组只检查 `Array.isArray`，没有检查元素。
- 谓词声明 `value is Profile`，实际却漏查字段。
- 用 `as` 让编译器安静，却没有改变真实数据。
- 用一个大 `catch` 混淆语法错误与结构错误。

## 拓展思考（不要求写代码）

如果 `Profile` 新增可选 `nickname?: string`，验证器应怎样区分“字段完全缺席”“字段存在且为字符串”和“字段存在但类型错误”？

## 官方资料

- [TypeScript Handbook：Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [Everyday Types：Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)
