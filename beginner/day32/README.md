# Day 32（选修）：现代装饰器、Mixin 与组合

预计用时：60–90 分钟。

装饰器（decorator）能在类或类成员定义时观察、包装或替换它们，常见于框架注册、日志、验证等横切需求。TypeScript 5.0 起支持现代 ECMAScript 标准装饰器语义。本课只使用这种新语义，不开启旧版 `experimentalDecorators`。

## 适合什么时候学

先完成类、泛型、函数类型和模块。大多数应用代码不需要自己编写装饰器；当项目所用框架明确依赖装饰器，或许多类确实需要同一种横切行为时再使用。

## 完成目标

- 能辨认 TypeScript 5+ 标准装饰器签名 `(value, context)`。
- 能编写保持参数、`this` 和返回类型的方法装饰器。
- 能读取 `ClassDecoratorContext` 中的类名。
- 理解标准装饰器与旧 `experimentalDecorators` 的差异。
- 能写一个不使用 `any` 的基础对象 Mixin，并知道组合通常更清楚。

## 今天暂时不学

不学习旧版 descriptor 三参数写法、`emitDecoratorMetadata`、参数装饰器、依赖注入框架内部实现和复杂装饰器工厂。

## 前置复习（8 分钟）

1. 类方法本质上是否仍是函数？
2. 泛型怎样保留输入和输出之间的类型关系？
3. `this` 指向哪个实例？
4. 继承与组合分别表示“是一个”和“拥有一个”中的哪一种关系？

## 60–90 分钟安排

- 0–8 分钟：前置复习。
- 8–30 分钟：标准方法装饰器和值/上下文参数。
- 30–42 分钟：类装饰器与新旧语义边界。
- 42–55 分钟：Mixin 与组合的取舍。
- 55–82 分钟：完成四道练习。
- 82–90 分钟：判断三个场景应使用普通函数、组合还是装饰器。

## 1. TypeScript 5+ 标准装饰器

现代方法装饰器接收两个参数：

- `target`：原方法函数。
- `context`：方法名、静态/私有状态、初始化器等上下文。

```ts
function loggedMethod<This, Args extends unknown[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >,
): (this: This, ...args: Args) => Return {
  const name = String(context.name);

  return function (this: This, ...args: Args): Return {
    console.log(`调用 ${name}`);
    return target.call(this, ...args);
  };
}
```

`This`、`Args`、`Return` 分别保留实例、参数列表和返回值类型。这里使用 `unknown[]`，没有用 `any` 放弃检查。

## 2. 与 legacy experimentalDecorators 明确区分

旧教程常见：

```ts
// 旧语义示意，本课不要照写
// function oldDecorator(target, propertyKey, descriptor) {}
```

旧实现需要 `experimentalDecorators: true`，方法装饰器通常接收 target、属性名和 descriptor。现代标准语义使用 `(value, context)`，类型检查和运行时调用方式都不同。两者的装饰器函数通常不能直接互换。

现代标准装饰器目前不支持参数装饰器，也不兼容旧的 `emitDecoratorMetadata` 工作方式。本项目保持 `experimentalDecorators` 关闭。

## 3. 类装饰器基础

类装饰器也接收类值与上下文：

```ts
function announce<Value extends abstract new (...args: never[]) => object>(
  _target: Value,
  context: ClassDecoratorContext<Value>,
): void {
  console.log(context.name);
}
```

返回 `void` 表示保留原类；也可以返回兼容的新类，但这会明显增加类型和运行时复杂度。初学阶段只观察或注册。

## 4. 类型安全的对象 Mixin

```ts
function withTag<Value extends object>(
  value: Value,
): Value & { readonly tag: string } {
  return Object.assign(value, { tag: "advanced" });
}
```

Mixin 的核心是把一组能力混入已有值。这里用交叉类型保留原对象能力并增加 `tag`。`Object.assign` 会修改传入对象，因此调用处必须明确接受这一点。

许多旧教程展示“接收构造器并返回匿名子类”的 class Mixin。TypeScript 对这种模式要求非常宽的构造器参数，示例常出现 `any[]`。本课程坚持不使用 `any`，因此选择范围更小、类型更诚实的对象 Mixin。真实项目若需要保留任意构造参数、静态成员和复杂约束，应先评估普通组合是否更简单。

## 5. 默认优先组合

如果一个服务只需要日志器、格式器或存储器提供功能，把它作为构造器参数传入通常更直接：

```ts
class Service {
  constructor(private readonly formatter: Formatter) {}
}
```

组合让依赖显式、容易替换和测试。选择顺序可参考：普通函数 → 组合 → 必要的类/继承 → 确有横切需求时的装饰器或 Mixin。

## 运行完整示例

当前项目的 TypeScript 5+ 配置和本地 `tsx` 支持标准装饰器，可直接运行：

```powershell
npm run beginner:example -- day32
```

实验：给 `Calculator` 添加另一个不同签名的方法并加 `@loggedMethod`，确认参数和返回值仍能被 TypeScript 检查。

## 必做练习

```powershell
npm run beginner -- day32 01
npm run beginner -- day32 02
npm run beginner -- day32 03
npm run beginner -- day32 04
```

- 01：补全类型安全的方法日志装饰器。
- 02：从标准类装饰器上下文取得类名。
- 03：用对象 Mixin 为实例增加标签。
- 04：把可替换的格式行为作为依赖组合进服务。

全部检查：

```powershell
npm run beginner -- day32 all
```

答案示例：

```powershell
npm run beginner:solution -- day32 01
```

## 常见坑

- 从旧文章复制 `(target, key, descriptor)`，却在新语义项目中使用。
- 为迁就旧库随意开启 `experimentalDecorators`，改变整个项目语义。
- 装饰器包装后丢失 `this`、参数或返回值类型。
- 认为装饰器能让 TypeScript 自动知道所有新增实例属性。
- 用 Mixin 隐藏修改或依赖，导致成员来自哪里难以追踪。
- 本来一个普通函数或组合就能解决，却为“高级感”加入元编程。

## 完成标准

- 四道练习全部通过。
- 能说出标准方法装饰器的两个参数。
- 能解释新旧装饰器至少三个差异。
- 能说明一个适合装饰器的场景，以及一个应优先组合的场景。
- 所有装饰器代码保持 `strict` 通过且不使用 `any`。

## 官方资料

- [TypeScript 5.0：Decorators](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#decorators)
- [TypeScript 5.0：Writing Well-Typed Decorators](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#writing-well-typed-decorators)
- [TypeScript：旧版 Decorators 页面（用于辨认 legacy，勿与本课混用）](https://www.typescriptlang.org/docs/handbook/decorators)
