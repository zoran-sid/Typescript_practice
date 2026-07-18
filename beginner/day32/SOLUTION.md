# Day 32 参考答案说明

## 01 类型安全方法装饰器

包装函数在调用原方法前输出 `context.name`。泛型 `This`、`Args`、`Return` 没有改变，因此 `total` 仍只接受两个数字并返回数字。

## 02 类装饰器上下文

标准类装饰器通过 `ClassDecoratorContext` 读取 `context.name`。返回 `void`，所以没有替换 `Report` 类。

## 03 对象 Mixin

Mixin 接收原实例，并通过 `Object.assign` 增加标签。交叉类型保留原来的 `Task` 成员，同时加入只读的 `tag` 类型。答案将标签设为 `advanced`。

## 04 组合优先

`MessageService` 不继承格式器，也不需要 Mixin。它只持有 `Formatter` 接口并调用 `format`，因此测试时可以轻松替换另一种格式器。

```powershell
npm run beginner:solution -- day32 04
```
