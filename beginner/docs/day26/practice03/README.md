# DAY26 · Practice 03：异步天气面板

[返回当天课程](../README.md)

## 文件位置

- 作答文件：[practice.ts](../../../day26/practice03/practice.ts)
- 结构提示代码：[solution.ts](../../../day26/practice03/solution.ts)
- 方案说明：[SOLUTION.md](./SOLUTION.md)

从异步仓库读取 unknown，验证天气数据并渲染 loading、success、failure 三种状态。

## 场景背景

校园活动页需要从第三方天气仓库异步读取城市和温度，但外部响应可能正确，也可能缺字段或提供错误类型。若界面不验证响应就渲染，活动负责人会看到错误天气并据此作出安排。你需要让面板先显示 loading，再对合法数据输出城市与温度，对无效数据输出明确的 failure 信息。

## 数据流

先沿变量名看数据怎样分叉和汇合；`──>` 表示值被交给下一步。

```text
MemoryWeatherRepository.load() ──> Promise<unknown>
                                          └── await ──> isWeather
                                                         ├── 合法 ──> success
                                                         └── 非法 ──> failure
Promise 抛错 ─────────────────────────────────────────────────> failure
success / failure ──> render ──> 天气面板输出
```

## 要求

- 从空白文件完成本题需要的类型、函数、固定输入与输出。
- 不得导入其他 practice 文件夹。
- 计算必须来自参数和局部变量；函数用 return 交付结果。
- 保持原数据不变，并按流程图处理边界或状态。

## 精确期望输出

```text
State: loading
State: success
City: Shanghai
Temperature: 31
State: failure
Message: Weather data is invalid
```

## 文件

在上方链接的 `practice.ts` 作答；完成后再查看 `solution.ts` 的 TODO 代码骨架与 `SOLUTION.md` 的解题结构；两者都不提供完整答案。
