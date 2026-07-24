# DAY26 · Practice 03：异步天气面板

[返回当天课程](../README.md)

从异步仓库读取 unknown，验证天气数据并渲染 loading、success、failure 三种状态。

## 代码流程图

```mermaid
flowchart TD
  A["渲染 loading"] --> B
  B["await 仓库返回 unknown"] --> C
  C["验证 city 与 temperature"] --> D
  D["返回 success 或 failure"] --> E
  E["渲染两种最终状态"]
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

在本目录的 `practice.ts` 作答；完成后再查看 `solution.ts` 的 TODO 代码骨架与 `SOLUTION.md` 的解题结构；两者都不提供完整答案。
