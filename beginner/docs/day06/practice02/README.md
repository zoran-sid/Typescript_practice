# DAY06 · Practice 02：图书借阅卡

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day06/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day06/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

## 场景背景

图书馆终端取得一本《TypeScript 入门》的借阅记录，其中包含书名、320 页以及当前可借阅状态。读者不需要看到原始对象，而需要一段清楚的三行图书说明。你的程序要把整条记录交给独立功能处理，再将生成的借阅卡显示出来。

这题只练“对象通过参数进入函数”这条路线。关闭 `example.ts` 后，根据借阅规则独立创建对象、函数和输出。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
book
   ├── title ───────────┐
   ├── pages ────────────┼──> describeBook(book)
   └── available ──> 状态文字 ─┘
                              │
                              └── description ──> 输出
```

## 必须练到的能力

创建对象、读取属性，并让函数只通过参数取得对象数据。

- 固定对象 `book` 包含 `title: "TypeScript 入门"`、`pages: 320`、`available: true`。
- 实现 `describeBook(item: { title: string; pages: number; available: boolean }): string`。
- `item.available` 为 `true` 时状态是 `"可借阅"`，否则是 `"已借出"`；函数返回书名、页数和状态组成的三行字符串。
- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
书名: TypeScript 入门
页数: 320
状态: 可借阅
```

## 和 Practice 01 的区别

Practice 01 要复制带嵌套对象与数组的任务数据，再比较原数据和副本是否互相影响。这里不复制也不修改对象，只让一个对象通过参数进入函数，并根据布尔属性生成说明文字。

## 迁移挑战（不要求提交输出）

不改本题三行输出，另写一个独立的 `describeDevice(device)`。设备至少包含 `model: string` 和 `online: boolean`，分别用一台在线设备、一台离线设备调用它。重点检查函数是否只读取自己的参数，而不是偷偷读取外部某个固定设备。

## 写完后自检

- 如果 `available` 改成 `false`，第三行应该显示什么？前两行是否变化？
- 为什么 `describeBook` 只读取参数 `item`，而不是直接读取外部变量 `book`？
- 为什么函数返回三行字符串，再由调用处输出，而不是在函数内部连续调用三次 `console.log`？

## 文件

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 解题结构与 `SOLUTION.md` 的结构提示，它们不提供完整答案。
