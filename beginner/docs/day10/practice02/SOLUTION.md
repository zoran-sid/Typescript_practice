# Day 10 · Practice 02 解题结构提示

[返回题目](./README.md) · [打开 solution.ts](../../../day10/practice02/solution.ts)

> 本文件不提供完整答案。这里只给收窄、规范化和策略层的骨架；三个 `false` 都有各自含义。

## 第一层：把输入统一成布尔值

`normalizeToggle` 的承诺是：不管收到哪种合法格式，调用处最终只会拿到 `boolean`。

```text
boolean | "on" | "off" ──> normalizeToggle ──> boolean
```

`typeof` 分支成立时，输入已经是布尔值，不需要再猜字符串内容。另一条路径中的输入只可能是 `"on"` 或 `"off"`，比较一次即可得到布尔结果。

## 第二层：把请求交给环境策略

规范结果 `requested` 只表示“输入请求开启”，并不表示最终一定允许。`canEnable` 还要同时检查环境。这样，输入格式的规则与生产安全规则不会揉在同一个长条件里。

## TODO 应怎样推进

1. 完成布尔分支的 `booleanResult`。这里的 `false` 只是占位；最终应反映本次传入值。
2. 完成字符串分支的 `textResult`，让比较表达式直接产生布尔值。
3. 在 `describeDebug` 中组合请求结果和环境限制。
4. 只在确实允许时把默认状态改成 `"enabled"`。

## 常见错误示例

```ts
return Boolean(input);
```

非空字符串 `"off"` 也会被 `Boolean(...)` 转成 `true`，与配置语义相反。这里需要解释具体字符串，而不是只判断它是否为空。

```ts
const canEnable = requested;
```

这漏掉了生产环境限制。规范化解决的是输入格式问题，环境策略仍需单独执行。
