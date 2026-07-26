# Day 18：类——把数据与行为放在一起

预计用时：60–90 分钟。

假设要同时记录几名学生各自学习了多少分钟。每一份记录都有相同的数据和操作，但分钟数不能互相影响。类可以把“每个对象要保存什么”和“这些对象能做什么”写在一起，再用 `new` 创建多份互相独立的对象。

## 核心讲解

先看一个会记住次数的类。字段保存数据，方法读取或修改当前对象的数据：

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

读这段代码时，先把几个词落到具体动作上：

- 每次执行 `new Counter(...)` 都会创建独立对象；例如 `new Counter("练习")` 还会把名称传给 `constructor`。
- `constructor(public readonly name: string)` 接收名称，同时声明并保存 `name` 字段。
- `counter.increment()` 中，点号左边的 `counter` 就是方法里的 `this`。
- `this.count += 1` 只修改当前这个对象的 `count`；另一个 `Counter` 不会跟着改变。
- `getCount()` 读取当前对象保存的次数，再用 `return` 交给调用处。

`private` 会让 TypeScript 阻止外部代码直接访问 `count`，`readonly` 会阻止重新给 `name` 赋值。它们是代码检查规则，不是数据加密，也不会把整个对象冻结。

接口可以规定“这个类必须提供哪些字段或方法”。这里的接口名是 `SummaryProvider`。类写 `implements SummaryProvider` 时，TypeScript 会检查它有没有把要求实现完整，但接口不会自动替类生成任何代码。缺少的方法仍要自己写。

如果 `Dashboard` 只需要调用某个对象的摘要方法，就把这个对象传给它使用，不必让 `Dashboard` 继承计数器。一个对象持有并使用另一个对象，这叫组合。判断时问一句：面板“是一种计数器”，还是“使用计数器提供的数据”？后者通常更适合组合。

调用 `formatter.format("完成")` 时，点号让 `formatter` 成为 `this`。如果先把普通方法取出来放进变量，再直接调用，方法前面没有实例，原来的 `this` 就丢了。

箭头函数字段会记住创建它的那个实例，所以把函数单独传出去后，仍能读取该实例的 `prefix`：

~~~ts
format = (message: string): string => {
  return `${this.prefix} ${message}`;
};
~~~

`class` 会生成运行时真实存在的 JavaScript 代码，所以程序可以执行 `new Counter()`。`type` 和 `interface` 只负责检查，编译后会消失，不能拿它们去 `new` 或在控制台中当值输出。

## 阅读示例

打开并右键运行 `example.ts`。先分别记下两个 `StudyCounter` 变量，再逐次看方法调用的点号左边是谁。运行后检查分钟数：只有被调用的那个实例应该变化。接着看 `Dashboard` 构造器接收了什么对象，以及它实际调用了对方的哪个方法。

## 函数变量追踪

方法调用有两类输入，分开看就不容易乱：

1. 点号左边的对象决定 `this`。例如 `session.addMinutes(20)` 中，`session` 成为 `this`。
2. 圆括号里的值进入普通参数。这里的 `20` 进入分钟参数。
3. 方法用 `this.minutes` 读取或更新当前实例保存的字段。
4. 方法里的普通局部变量只属于这一次调用，调用结束后不会自动变成实例字段。
5. 方法有返回值时，`return` 再把结果交回调用处。

如果看到 `this` 是 `undefined` 或字段读不到，先检查这个方法是不是离开了点号左边的实例，被单独传递或调用了。

## Example 实际输出

运行 `example.ts` 后，终端会按下面的顺序显示。先用代码推测结果，再逐行对照：

```text
Types: 45 minutes
Modules: 20 minutes
Dashboard | Types: 45 minutes
```

## Example 代码流程图

运行 `example.ts` 前先沿图预测执行顺序；运行后再把每个节点对应到代码行。

```mermaid
flowchart TD
  A["new 创建学习 Session"] --> B
  B["方法读取 minutes 与 topic"] --> C
  C["Dashboard 接收多个实例"] --> D
  D["输出单项和汇总"]
```

## 独立练习导航

本日共有 2 道独立练习。每道题都有单独目录、说明、作答文件和解题结构；题目之间不共享代码。

| 目录 | 场景 | 类型 |
| --- | --- | --- |
| [practice01](./practice01/README.md) | 类：把数据与行为放在一起 | 主任务 |
| [practice02](./practice02/README.md) | 学习时段类 | 闭卷迁移 |

右击任意练习目录中的 `practice.ts` 即可单独检查；命令行也可运行 `npm run beginner -- day18 practice02`。

## 容易出错的地方

- 方法里写 `minutes` 而不是 `this.minutes`。
- 误以为 `private` 会加密或冻结数据。
- 把普通方法单独传递，调用时丢失 `this`。
- 误以为 `implements` 会自动提供方法实现。
- 为“拥有/使用”关系建立很深的继承层级。

### 错误代码示例

```ts
class MessageFormatter {
  constructor(private readonly prefix: string) {}

  format(message: string): string {
    return `${this.prefix} ${message}`;
  }
}

const format = new MessageFormatter("[学习]").format;
format("完成"); // ❌ 普通方法脱离实例后，this 不再指向原对象。
```

### 正确写法

```ts
class MessageFormatter {
  constructor(private readonly prefix: string) {}

  format = (message: string): string => {
    return `${this.prefix} ${message}`; // ✅ 箭头函数字段捕获当前实例的 this。
  };
}

const format = new MessageFormatter("[学习]").format;
format("完成");
```

## 拓展思考（不要求写代码）

一个只保存姓名和邮箱、没有长期内部行为的 `Profile` 是否值得写成类？请从实例状态、行为、测试难度和代码复杂度四方面比较“类型加普通函数”与“类”。

## 官方资料

- [Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
