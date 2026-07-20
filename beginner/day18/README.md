# Day 18：类——把数据与行为放在一起

预计用时：60–90 分钟。

普通对象和函数能解决很多问题。类适合“需要创建多个同类实例，而且每个实例长期保存自己的状态”的场景。今天会把字段、构造器、方法、可见性、接口、组合和 `this` 放进一个小型学习面板。

## 核心讲解

最小的有状态类：

~~~ts
class Counter {
  private count = 0;

  constructor(public readonly name: string) {}

  increment(): void {
    this.count += 1;
  }

  getCount(): number {
    return this.count;
  }
}
~~~

每次 `new Counter(...)` 都创建独立实例。方法通过 `this` 访问当前实例；`private` 限制 TypeScript 代码从外部访问，`readonly` 防止重新赋值，但它们都不是数据加密。

`implements` 只检查类是否符合接口，不会复制接口实现。一个面板需要摘要能力时，可以接收 `SummaryProvider`，而不是继承某个具体计数器。这叫组合：类使用另一个对象的能力，关系通常比深层继承清楚。

普通方法脱离实例单独调用时可能丢失 `this`。箭头函数字段会捕获创建实例时的 `this`：

~~~ts
format = (message: string): string => {
  return `${this.prefix} ${message}`;
};
~~~

`class` 在运行时真实存在；`type` 和 `interface` 编译后会消失。

## 阅读示例

打开并右键运行 `example.ts`。观察两个 `StudyCounter` 实例为什么保存不同分钟数，以及 `Dashboard` 为什么不需要继承计数器。

## 独立练习（从空文件开始）

请从头编写“学习计数与面板”：

- 接口 `SummaryProvider`，包含 `summary(): string`。
- 类 `StudyCounter implements SummaryProvider`：
  - 私有字段 `minutes` 初始为 0。
  - 构造器参数属性 `public readonly topic: string`。
  - `add(minutes): void` 只累加大于 0 的分钟数。
  - `summary(): string` 返回 `主题: 分钟 minutes`。
- 类 `Dashboard`：
  - 构造器接收并保存 `private readonly provider: SummaryProvider`。
  - `render()` 返回 `Dashboard | 摘要`。
- 类 `MessageFormatter`：
  - 构造器保存 `private readonly prefix: string`。
  - `format` 必须是箭头函数字段，返回 `前缀 消息`，保证它脱离实例调用时仍有正确的 `this`。

固定操作：

- 创建 `TypeScript` 和 `Modules` 两个计数器。
- 前者依次增加 30、15 和 -5，后者增加 20。
- 用前者创建面板。
- 用前缀 `[学习]` 创建格式器，把 `format` 赋给 `detachedFormat` 后再调用。

精确输出：

~~~text
TypeScript: 45 minutes
Modules: 20 minutes
Dashboard | TypeScript: 45 minutes
[学习] 完成复习
~~~

限制：

- 不得使用 `any`、类型断言或直接从类外访问 `minutes`。
- 两个计数器必须是独立实例，不能共享全局分钟数。
- `Dashboard` 必须依赖接口并使用组合，不能继承 `StudyCounter`。
- `MessageFormatter.format` 必须能作为独立回调使用，不能在调用处手工绑定。
- 所有计算方法用 `return` 交付文字，最后才统一输出。

完成标准：右键运行后显示 PASS；能解释 `implements`、组合和箭头函数字段分别解决什么问题。

## 容易出错的地方

- 方法里写 `minutes` 而不是 `this.minutes`。
- 误以为 `private` 会加密或冻结数据。
- 把普通方法单独传递，调用时丢失 `this`。
- 误以为 `implements` 会自动提供方法实现。
- 为“拥有/使用”关系建立很深的继承层级。

## 拓展思考（不要求写代码）

一个只保存姓名和邮箱、没有长期内部行为的 `Profile` 是否值得写成类？请从实例状态、行为、测试难度和代码复杂度四方面比较“类型加普通函数”与“类”。

## 官方资料

- [Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
