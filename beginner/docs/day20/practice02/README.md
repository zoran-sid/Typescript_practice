# DAY20 · Practice 02：课程 JSON 验证

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day20/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day20/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

## 场景背景

课程看板会从接口收到 JSON 文本，但接口返回的数据不能直接信任。测试数据中既有字段完整的课程，也有结构不符合约定的内容。你需要在读取课程名称和分数前完成运行时检查，最终展示有效课程或统一的无效数据提示。

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
rawCourses
   └── JSON.parse ──> unknown
                         └── isCourse
                                ├── 对象与字段检查
                                └── topics.every(...)
验证通过 ──> Course 字段输出
验证失败 ──> 非法数据提示
```

## 必须练到的能力

JSON.parse 的结果先当 unknown，再逐层验证运行时形状。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
课程: TypeScript / 90 分
课程数据无效
```

## 文件

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 解题结构。
