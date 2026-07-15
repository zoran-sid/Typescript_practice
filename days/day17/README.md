# Day 17：现代 Decorator 与 Mixin

## 今日目标

理解 TypeScript 5 的标准 Decorator 类型、装饰时机、方法上下文和 Mixin 模式；知道何时不应使用它们。

## 来自主站的素材

主站当前没有 Decorator 或 Mixin。这一课是面向未来服务层的候选实验，不是建议把现有纯函数重写掉。可对照：

- `src/lib/routes/display-geometry.ts:85-97` 的显式纯函数流水线易于追踪。
- `scripts/media-update.ts:363-389` 的显式步骤比隐藏式装饰器副作用更适合高风险写入。

## 核心讲解

现代方法 Decorator 接收原方法和 `ClassMethodDecoratorContext`，可返回替代方法。它在类定义阶段执行，不是每次调用时执行；真正的调用包装逻辑在返回函数中。

Mixin 是接受基类并返回扩展类的函数，用组合补充能力。它会增加实例类型和原型层次复杂度。安全/数据写入路径应优先显式依赖，除非装饰行为非常稳定、可测试且不会隐藏控制流。

旧式 `experimentalDecorators` 与标准 Decorator 语义不同。不要直接复制旧框架示例。

## 动手任务

1. 实现 `traced`，每次方法调用把方法名写入 auditLog，并保持 this、参数和返回类型。
2. 修复 Mixin 的 `verify`：重复调用应保持 true，而不是来回切换。
3. 说明为什么不应把原子写入事务隐藏在 Decorator 中。

## 常见故障

- 混用旧式和标准 Decorator 签名。
- 包装函数丢失 `this`。
- Decorator 改变返回值却未体现在类型中。
- Mixin 出现同名成员冲突。

## 验收

```powershell
npm.cmd --prefix typescript_practice run day -- day17
```
