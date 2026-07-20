# Day 00 参考答案说明

`solution.ts` 是这一道独立练习的完整程序：

```ts
const message = "Hello, TypeScript!";

console.log(message);
```

第一行创建变量 `message` 并保存字符串。第二行把变量当前的值交给 `console.log`，所以终端显示相同文字。

如果输出不一致，请依次核对 `Hello` 的大写字母、英文逗号后的一个空格、`TypeScript` 中的大写 `T` 和 `S`，以及最后的英文感叹号。

## 拓展思考参考方向

TypeScript 能确认 `message` 是字符串，也能确认 `console.log` 可以接收它，但“这句话在业务上应该使用感叹号”不是类型规则。类型正确和内容正确是两种不同的验证目标，所以仍需核对实际输出。
