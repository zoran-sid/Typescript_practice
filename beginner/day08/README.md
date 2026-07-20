# Day 08：缺失值与安全访问

预计用时：60–90 分钟。

`find` 可能找不到项目，对象的可选属性也可能不存在。今天学习把这种可能性诚实地写进类型，并使用 `?.` 和 `??` 安全地生成显示内容。

## 完成目标

- 理解 `undefined` 与 `null` 表示缺失值。
- 使用 `? `描述可选属性。
- 使用 `?.` 在前一层存在时继续访问。
- 使用 `??` 只为 `null` 或 `undefined` 提供默认值。
- 区分 `??` 与 `||` 对 0、空字符串、`false` 的不同处理。
- 不使用非空断言 `!` 掩盖风险。

## 可选属性

```ts
const user: { name: string; phone?: string } = {
  name: "Lin",
};
```

`phone?: string` 表示属性可以是字符串，也可以不存在。读取它时，TypeScript 会保留“可能为 `undefined`”的提醒。

## 可选链 `?.`

```ts
const city = user.address?.city;
```

如果 `address` 存在，就继续读取 `city`；如果不存在，整个表达式得到 `undefined`，不会因为访问缺失对象而崩溃。可选链负责安全停止，但不会自动提供显示文字。

## 空值合并 `??`

```ts
const shownCity = city ?? "未填写";
```

只有左侧是 `null` 或 `undefined` 时，才使用右侧默认值。

`||` 的范围更宽，它还会把 `0`、`""` 和 `false` 当作不成立。当这些值是合法数据时，使用 `||` 会误换成默认值；只处理真正缺失时应使用 `??`。

## 不要用非空断言跳过处理

`foundUser!.name` 只是在告诉编译器“相信我”，不会增加任何运行时检查。如果保证错误，程序仍会崩溃。初学阶段优先显式判断、`?.` 与 `??`。

## 阅读完整示例

打开并右击运行 `example.ts`。观察缺少电话的联系人如何得到默认值，同时数字 0 和空字符串为何被保留。临时把搜索名字改成不存在的名字，先预测四行输出，再运行并恢复。

## 独立练习（从空文件开始）

在 `practice.ts` 中从零完成“联系人安全摘要”。

声明 `contacts`，显式标注为具有下列形状的对象数组：

- 必填 `name: string`。
- 可选 `phone?: string`。
- 可选 `address?: { city?: string }`。

固定数据：

- 第一项是 `{ name: "Lin", phone: "13800000000", address: { city: "上海" } }`。
- 第二项是 `{ name: "Mei", address: {} }`。

程序要求：

1. 使用 `find` 创建 `selectedContact`，查找名字为 `"Mei"` 的联系人。
2. 使用 `selectedContact?.name ?? "未找到"` 得到 `selectedName`。
3. 用相同思路得到 `selectedPhone`，缺失时显示 `"未提供"`。
4. 安全访问嵌套城市得到 `selectedCity`，缺失时显示 `"未填写"`。
5. 声明 `score: number | undefined = 0` 和 `nickname: string | undefined = ""`。
6. 使用 `??` 为分数提供默认值 100、为昵称提供默认值 `"匿名"`，并用 `JSON.stringify` 显示昵称。

精确期望输出：

```text
联系人: Mei
电话: 未提供
城市: 未填写
分数: 0
昵称: ""
```

限制：

- 不使用非空断言 `!` 或类型断言 `as`。
- 不使用 `||` 提供默认值。
- 不假设 `find` 一定成功。
- 所有结果必须从固定数据安全推导。

完成标准：

- 能指出每条可选链可能在哪一层停止。
- 0 和空字符串不会被默认值替换。
- 右击运行 `practice.ts`，五行输出完全一致。

## 常见错误

`?.` 不会自动提供默认文字；`??` 只处理 `null` 与 `undefined`；`||` 会误替换有效的 0 和空字符串；非空断言不会产生运行时保护。

## 拓展思考（不要求写代码）

若把 `score ?? 100` 改成 `score || 100`，当前分数为什么会从合法的 0 变成 100，而 `??` 不会？

## 参考答案

完成后再阅读 `solution.ts` 与 `SOLUTION.md`，重点对照每一层缺失值是怎样被处理的。

## 官方资料

- [Everyday Types：Optional Properties](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#optional-properties)
- [Everyday Types：null and undefined](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined)
