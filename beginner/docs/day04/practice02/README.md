# DAY04 · Practice 02：部署闸门判断

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day04/practice02/practice.ts)
- 结构提示代码：[solution.ts](../../../day04/practice02/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

## 场景背景

发布系统准备上线一个热修复版本。当前自动检查失败数是 0，负责人已经审批，而且这次发布标记为热修复。系统需要给出一条人能读懂的决策文字，同时提供一个给程序使用的 `canDeploy` 布尔值。

为什么同一组输入要算出文字和布尔值？界面需要展示 `"Fast track"` 这样的具体原因，后续发布按钮只需要知道能不能继续。把两个结果分开，既保留解释，也方便程序判断。

## 业务规则与优先级

规则必须从上到下判断，而且只选择第一条成立的：

1. `failedChecks > 0`：`"Blocked"`。
2. 否则，热修复并且已有审批：`"Fast track"`。
3. 否则，已有审批：`"Ready"`。
4. 其余情况：`"Waiting approval"`。

`canDeploy` 的规则更简单：没有失败检查，并且已经审批。

## 数据流

```text
failedChecks ──> > 0 ────────────────> hasFailure ──┐
                                                   │
isHotfix ───────┐                                  ├── if / else if / else ──> decision
                ├── && ──> canFastTrack ───────────┤
hasApproval ────┘                                  │
                └──────────────────────────────────┘

hasFailure ──> 取反 ──┐
                      ├── && ──> canDeploy
hasApproval ──────────┘

decision + canDeploy + failedChecks ──> 三行输出
```

## 需要完成

- 固定使用 `failedChecks = 0`、`hasApproval = true`、`isHotfix = true`。
- 让 `hasFailure` 表示是否至少有一项检查失败。
- 让 `canFastTrack` 同时检查热修复和审批。
- 按上面的互斥优先级为 `decision` 赋值。
- 单独计算 `canDeploy`，不要把 `"Fast track"` 当成布尔值使用。
- 本题独立运行，不导入 `practice01` 或其他练习。

## `false` 占位值到底是什么

`solution.ts` 里的 `false` 只是让未完成的骨架暂时符合布尔类型，并不表示业务答案永远是假。例如：

```ts
const hasFailure = false; // TODO：替换成 failedChecks 的比较结果
```

完成时，右侧应当由输入计算出 `true` 或 `false`。如果保留占位值，输入以后变成 1，程序仍会错误地认为没有失败。

## 精确期望输出

```text
Decision: Fast track
Can deploy: true
Failed checks: 0
```

## 和 Practice 01 的区别

Practice 01 的业务输入是订单金额、会员与优惠券，分支结果还会继续参与应付金额计算。这里的输入是失败数、审批和热修复状态：控制流程先处理阻断分支，再区分快速或普通发布，并同时输出解释文字与程序布尔值。

## 写完后自检

- 如果 `failedChecks` 改成 1，而其他两个值不变，三行输出应怎样变化？
- 为什么失败检查必须放在热修复分支之前？
- 为什么 `canDeploy` 应由原始条件计算，而不是比较 `decision === "Fast track"`？

## 文件

在上方链接的 `practice.ts` 作答；独立完成后再查看 `solution.ts` 的 TODO 结构和 `SOLUTION.md`。它们只提示步骤，不提供完整答案。
