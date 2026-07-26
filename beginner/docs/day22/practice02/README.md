# DAY22 · Practice 02：购物车回归测试

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day22/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day22/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

这是一道与 Practice 01 文件完全分开的闭卷迁移题。先理解并运行当天 `example.ts`，然后关闭它；不要复制代码，仅根据下面的流程与输出从空白重新实现。

## 场景背景

电商团队正在给购物车结算模块补回归测试，测试输入包括普通商品、空购物车、负数数量，以及需要等待的异步问候。若总价逻辑接受非法数量或测试没有真正检查异常，用户可能看到错误金额，而团队仍以为功能正常。你需要让测试逐项报告四种场景是否通过，作为以后修改结算逻辑时的安全网。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
price + quantity ──> cartTotal ──> total
正常、空值、边界输入 ──> assertEqual ──> 回归结果
失败输入 ──> cartTotal 抛错 ──> assertThrows
异步姓名 ──> greeting Promise ──> await actual ──> assertEqual
全部断言 ──> 逐项测试输出
```

## 必须练到的能力

业务函数 return 可断言结果，测试覆盖正常、边界和失败输入。

- 不得导入 `practice01` 或直接调用其他练习的实现。
- 输出必须由变量、计算或函数返回值产生，不把整行结果写死。
- 每个参数、局部变量和返回值都应能在流程图中找到位置。

## 精确期望输出

```text
通过: 正常总价
通过: 空购物车
通过: 负数数量会报错
通过: 异步问候
```

## 文件

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 代码骨架与 `SOLUTION.md` 的解题结构；两者都不提供完整答案。
