# Day 32（选修）｜现代装饰器、Mixin 与组合

装饰器可在类定义时观察、包装或替换类及成员，常用于框架注册、日志和验证。这里严格使用 TypeScript 5+ 的 ECMAScript 标准装饰器语义，不开启旧版 `experimentalDecorators`。

建议用时：60–90 分钟。

## 今天会学到

- 使用标准装饰器签名 `(value, context)`；
- 保留方法的 `this`、参数元组和返回类型；
- 从 `ClassDecoratorContext` 读取类名；
- 写一个不使用 any 的对象 Mixin；
- 在横切功能、Mixin 与普通组合之间做选择。

## 核心讲解

标准方法装饰器的第一个参数是原方法，第二个是 context。包装函数必须保持相同 `This`、`Args`、`Return`，并用 `target.call(this, ...args)` 调用原方法。旧教程中的 `(target, key, descriptor)` 属于 legacy 语义，不能直接混用。

类装饰器同样接收类值和 context。本练习只读取类名，不替换类。对象 Mixin 用交叉类型保留原对象能力并增加 tag；`Object.assign` 会修改传入对象，这一点必须明确。

许多可替换依赖用普通组合更清楚：把 Formatter 作为构造器参数注入服务，依赖来源显式，也容易测试。

## 独立练习（从空文件开始）

从零完成“带追踪的价格服务”。

必须名称：`tracedMethod`、`registerClass`、`withTag`、`PriceCalculator`、`Formatter`、`UppercaseFormatter`、`MessageService`。

需求：

1. `tracedMethod<This, Args extends unknown[], Return>` 使用标准 `ClassMethodDecoratorContext`，调用前输出方法名并保持原签名。
2. `registerClass` 使用标准 `ClassDecoratorContext`，类定义时输出类名。
3. PriceCalculator 同时应用类装饰器；其 `total(quantity, unitPrice)` 应用方法装饰器并返回乘积。
4. `withTag` 给对象增加只读字面量 tag `advanced`，保留原对象类型。
5. UppercaseFormatter 实现 Formatter；MessageService 通过构造器组合 Formatter，`create` 返回带前缀的格式化消息。

固定调用：为 new PriceCalculator 混入 tag；计算 3×8；服务处理 `TypeScript`。

精确输出：

```text
注册类: PriceCalculator
标签: advanced
调用: total
总价: 24
消息: TYPESCRIPT
```

限制：不使用 `any`；不写 descriptor 三参数装饰器；不启用 `experimentalDecorators`；包装方法不能丢失 this、参数或返回类型。

完成标准：右击运行 `practice.ts` 后输出完全一致；能说出标准方法装饰器的两个参数，并解释这里为什么对格式器使用组合。

## 常见错误

- 从旧文章复制三参数装饰器；
- 包装方法时忘记传递 this；
- 用 any[] 放弃参数检查；
- 认为装饰器会自动把新增属性加入实例类型；
- 普通依赖也用装饰器隐藏起来。

## 拓展思考（不要求写代码）

如果 `total` 改成返回 Promise 的异步方法，当前装饰器会保留什么？若还要在异步完成后记录结果，包装器应在哪一步等待，又会怎样影响 Return 的类型设计？

## 官方资料

- [TypeScript 5.0：Decorators](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#decorators)
- [Writing Well-Typed Decorators](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#writing-well-typed-decorators)
- [旧版 Decorators 页面（仅用于辨认 legacy）](https://www.typescriptlang.org/docs/handbook/decorators)
