# Day 00 参考答案解释

最小答案在 `solution.ts`：

```ts
const message = "Hello, TypeScript!";

console.log(message);
```

第一行把文字 `Hello, TypeScript!` 保存为名叫 `message` 的数据。第二行把这份数据交给 `console.log`，于是终端显示相同文字。

本题不需要修改检查脚本，也不需要增加更多输出。自动检查要求文字完全一致，是为了练习可靠地观察“源代码”和“运行结果”之间的关系。

如果你的答案没有通过，请依次比较：

1. `Hello` 的首字母是否大写。
2. 逗号是否为英文 `,`。
3. 逗号后是否只有一个空格。
4. `TypeScript` 的 `T` 和 `S` 是否大写。
5. 结尾是否为英文感叹号 `!`。
