# DAY20 · Practice 02：通知批次的部分接收

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day20/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day20/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

## 场景背景

通知网关会收到一整个 JSON 数组。数组中某些项可能合法，某些项可能属于不支持的渠道或字段类型错误；业务允许保留合法项并丢弃坏项。但如果 JSON 本身无法解析，或最外层不是数组，这一批就不能继续处理。

## 和 Practice 01 的区别

Practice 01 的 `Profile` 是一个整体，任一嵌套字段错误都会拒绝整份资料。本题先验证批次容器，再逐项分流：合法通知进入 `valid`，坏项只增加 `rejectedCount`；只有语法错误或错误容器才返回失败 Result。

## 关联复习

通知的 `kind` 会复用 Day11 的判别联合，数组分流会复用 Day06 的追加与早期循环。批次层的成功/失败继续使用 Day19 的 Result，但单项错误不会升级成整批失败。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
rawBatches
   └── JSON.parse ──> unknown
          ├── 语法失败 ──> Result error
          └── Array.isArray
                 ├── false ──> Result error
                 └── true ──> 逐项 isNotification
                                ├── true ──> valid[]
                                └── false ──> rejectedCount + 1
成功批次 ──> 渠道列表 + 丢弃数量
失败批次 ──> 批次错误
```

## 要完成的功能

- `Notification` 是两种成员的联合：
  - `{ kind: "email"; address: string }`
  - `{ kind: "push"; token: string }`
- `BatchSummary`：`valid: Notification[]`、`rejectedCount: number`。
- 泛型 `ParseResult<T>`：成功含 `value`，失败含 `error`。
- `isRecord`：确认值是非 `null`、非数组的普通记录对象。
- `isNotification`：根据 `kind` 检查该成员真正需要的字段。
- `parseBatch(raw): ParseResult<BatchSummary>`：
  - JSON 语法错误返回 `JSON 格式错误`。
  - 解析结果不是数组返回 `批次必须是数组`。
  - 数组逐项验证，保留合法项并统计坏项。
- 固定第一批包含：合法 email、不支持的 sms、合法 push、address 为数字的坏 email；第二批为语法损坏文本。

## 约束

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 不得使用 `any`、类型断言、非空断言或直接相信 `JSON.parse`。
- 类型谓词承诺的字段必须全部经过运行时检查。
- 单项错误不能让第一批整体失败；JSON 语法错误也不能伪装成“丢弃一项”。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
可发送：email,push
丢弃数量：2
批次错误：JSON 格式错误
```

完成标准：右键运行显示 PASS；第一批保留 email、push 并丢弃两项，第二批只输出语法错误，未经守卫的字段不会进入业务输出。

## 写完后自检

- 把最外层数组换成 `{}`，它应进入哪一种失败分支？为什么不能直接 `for...of`？
- 加入 `{ "kind": "email", "address": "" }` 后，当前守卫会接受还是拒绝？“是字符串”和“是可用邮箱”属于同一层验证吗？
- 为什么本题逐项保留合法通知，而 Practice 01 使用 `every` 拒绝整份资料？两种策略分别保护什么业务目标？

## 文件

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 解题结构。
