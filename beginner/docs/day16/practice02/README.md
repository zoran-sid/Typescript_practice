# DAY16 · Practice 02：安全读取配置字段

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day16/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day16/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

## 场景背景

你正在制作一个配置检查工具，它要从课程信息和页面设置中按名称读取字段。输入是带有 id 的课程对象、设置对象以及选中的键，字段名称不能任意拼写。程序需要交付课程标识、课程数据和当前设置值，供管理员核对配置。

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
course + 合法 key ──> getProperty ──> 对应字段值 T[K]
带 id 的 course ──> describeId ──> id 描述
settings
   └── keyof typeof settings ──> SettingName
                                      └── selectedSetting
三个结果 ──> 输出
```

## 必须练到的能力

使用泛型约束、keyof 与 T[K] 安全读取属性。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
ID=7
标题：TypeScript
课数：21
设置：theme=dark
```

## 文件

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 解题结构。
