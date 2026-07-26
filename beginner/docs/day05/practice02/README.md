# DAY05 · Practice 02：书桌面积函数

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day05/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day05/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

## 场景背景

家具店正在录入一张宽 12、高 10 的书桌桌面，希望自动生成商品尺寸标签。程序需要先根据尺寸得到面积，再把商品名称与面积交给另一个功能生成可展示文字。最终产物是一行书桌面积标签，供商品卡片直接使用。

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
width + height
   │
   └── calculateArea ──> deskArea
                              │
                              └── createLabel ──> label
                                                        │
                                                        └── console.log ──> 输出
```

## 必须练到的能力

声明参数类型与返回类型，用 return 交付计算结果。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
书桌面积: 120
```

## 文件

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 解题结构与 `SOLUTION.md` 的结构提示，它们不提供完整答案。
