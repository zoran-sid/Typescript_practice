# DAY32 · Practice 01：Day 32 · 标准装饰器、Mixin 与组合独立综合题

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day32/practice01/practice.ts)
- 结构提示代码：[solution.ts](../../../day32/practice01/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

这是一道完整、独立的主练习。不要导入其他 practice 文件夹中的代码。

## 场景背景

商品服务团队希望在不改写核心价格算法的前提下记录类注册和方法调用，同时给服务对象增加标签，并组合可替换的消息格式器。装饰器接收的方法、参数组和实例上下文都是边界；若包装函数丢失 `this`、实参或返回值，价格会算错，旧式装饰器写法也无法匹配当前配置。你需要输出注册与调用轨迹、对象标签、准确总价和格式化后的消息。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
PriceCalculator.total + context ──> tracedMethod
   └── 普通 function 包装器 ──> target.call(this, ...args) ──> 原返回值
PriceCalculator 类 ──> registerClass ──> 注册日志
new PriceCalculator ──> withTag ──> calculator + tag
message ──> MessageService ──> Formatter ──> 最终文字
装饰、Mixin、组合三条结果 ──> 输出
```

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

## 本题易漏语法

标准方法装饰器接收原方法与 context；用 target.call(this, ...args) 保留 this、参数和返回值。

## 文件

- 在 `practice.ts` 中独立作答。
- 独立完成后，再查看 `solution.ts` 的 TODO 代码骨架与 `SOLUTION.md` 的解题结构；两者都不提供完整答案。
