# Day 19：运行时测试、类型测试与回归不变量

## 今日目标

区分运行时行为测试与编译期类型测试；掌握边界值、回归用例、属性不变量、mock 边界和 `@ts-expect-error`。

## 来自主站的素材

- `scripts/test-radar.ts:8-47` 测试角度环绕、跳帧和边界触碰。
- `scripts/media-update.test.ts:45-283` 测试解析、幂等、分页、mock fetch、临时文件清理。
- `scripts/test-route-logic.ts` 保护路线身份、端点、分段和显示几何不变量。

## 核心讲解

类型测试证明“错误代码不能通过编译”，运行时测试证明“合法代码产生正确结果”。`@ts-expect-error` 要求下一行确实有错误；未来错误消失时编译器会提醒。`@ts-ignore` 不具备这个回归能力。

好的测试围绕不变量：角度永远在 `[0, 360)`；坐标边界 ±90/±180 合法；显示清理不能改源端点；重复导入幂等。测试内部实现细节会阻碍重构。

## 动手任务

1. 实现 `normalizeAngle`，处理负数和超过一圈的角度。
2. 修复 `coordinateInBounds` 对边界点的错误排除。
3. 阅读类型级 `Equal/Expect` 和预期错误示例。

## 常见故障

- 只测试正常输入。
- 异步断言忘记 await。
- mock 与真实接口形状不同。
- 为了让测试通过而删除安全检查。

## 验收

```powershell
npm.cmd --prefix typescript_practice run day -- day19
```
