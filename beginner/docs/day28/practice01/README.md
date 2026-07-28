# DAY28 · Practice 01：课程函数工具箱

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day28/practice01/practice.ts)
- 结构提示代码：[solution.ts](../../../day28/practice01/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

这是一道完整、独立的主练习。不要导入其他 practice 文件夹中的代码。

## 场景背景

课程平台团队准备建立一套高级函数工具，用于统计学习进度、转发不同参数的计算、规范化标签，并借助上下文生成课程说明。输入边界包括位置固定的进度数据、长度各异的参数组、单个或多个字符串以及显式调用上下文；包装器若丢失参数、`this` 或返回类型，业务结果就会出错。你需要交付保持这些关系的通用调用结果，并输出进度、计算值、规范化内容和课程描述。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
boolean[] ──> progress ──> [completed, total]
fn + args 元组 ──> invoke ──> fn(...args) ──> Result
string | string[] ──> normalize 重载 ──> 对应返回类型
CourseContext + prefix ──> describe.call ──> this + 普通参数
四条精确类型结果 ──> 输出
```

从零完成一个“高级函数工具箱”。

必须名称：`ProgressPair`、`progress`、`invoke`、`normalize`、`CourseContext`、`describe`。

需求：

1. `progress([true, false, true, true])` 返回只读元组 `[3, 4]`。
2. `invoke` 使用 `Args extends unknown[]` 与 `Result`，分别调用数字乘法和标题拼接函数。
3. `normalize` 提供字符串重载和只读字符串数组重载；都执行 trim + 小写，返回类型分别是 string 和 string[]。
4. `describe` 有显式 `this: CourseContext` 和 prefix 参数，通过 `.call` 输出课程说明。

精确输出：

```text
Progress: 3/4
Total: 36
Day 28
types
modules, generics
Elective Day 28: Advanced functions
```

固定输入：乘法 12×3；标题函数接收 `"Day "`、28；normalize 输入 `"  TYPES "` 及 `[" Modules ", " GENERICS "]`；上下文 title 为 Advanced functions、day 为 28。

限制：不使用 `any`、类型断言或普通数组冒充元组；实现签名必须覆盖两个重载。

完成标准：右击运行 `practice.ts` 后输出完全一致；能指出每个泛型参数连接了哪些位置，并说明 `this` 参数为何不出现在运行时实参数组中。

## 本题易漏语法

元组类型用 [] 且位置固定；rest 参数写 ...args: Args；显式 this 不是运行时第一个实参。

## 写完后自检

- 给 `invoke` 传入三个参数的函数，或让函数返回对象时，参数提示与返回类型是否仍能跟着原函数变化？
- 为什么 `normalize` 用重载，而 `progress` 只需要一个元组返回类型？两者要保留的对应关系有什么不同？
- 如果直接调用 `describe("Elective")` 而不提供 `this`，类型检查为什么应该拒绝？

## 文件

- 在 `practice.ts` 中独立作答。
- 独立完成后，再查看 `solution.ts` 的 TODO 代码骨架与 `SOLUTION.md` 的解题结构；两者都不提供完整答案。
