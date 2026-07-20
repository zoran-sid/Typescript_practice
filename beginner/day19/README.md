# Day 19：错误不是字符串——throw、unknown 与 Result

预计用时：60–90 分钟。

失败不是一个模糊的“没成功”。有些失败让当前函数无法继续，适合抛出 `Error`；有些是调用者经常要处理的业务结果，适合返回判别联合。今天会在一个端口配置流程中同时使用两种通道。

## 核心讲解

无法交付可信正常结果时，可以抛出标准错误对象：

~~~ts
function requirePositive(value: number): number {
  if (value <= 0) {
    throw new RangeError("数值必须大于 0");
  }
  return value;
}
~~~

`throw` 会中断当前路径，直到有边界使用 `try/catch`。任何 JavaScript 值理论上都可能被抛出，因此捕获值应先作为 `unknown`，收窄后再读取：

~~~ts
function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "未知错误";
}
~~~

不要抛字符串、不要用 `any` 直接读属性，也不要用空 `catch {}` 吞掉失败。

如果失败是普通业务分支，可以返回结果联合：

~~~ts
type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };
~~~

检查 `result.ok` 后，TypeScript 会知道当前能读取 `value` 还是 `error`。关键不是所有地方统一选择一种风格，而是让失败通道清楚、信息不丢失。

## 阅读示例

打开并右键运行 `example.ts`。区分 `parsePort` 抛出的异常与 `savePort` 返回的失败结果，并找出捕获 `unknown` 的边界。

## 独立练习（从空文件开始）

请从头编写“端口解析与保存器”。

必须创建：

- 泛型判别联合 `Result<T>`，成功成员为 `{ ok: true; value: T }`，失败成员为 `{ ok: false; error: string }`。
- `parsePort(text: string): number`：使用 `Number` 转换；若结果不是 1 到 65535 的整数，抛出 `RangeError("端口必须是 1 到 65535 的整数")`。
- `savePort(port: number): Result<number>`：端口为 13 时返回失败 `端口 13 不可用`，其他端口返回成功值。
- `errorMessage(error: unknown): string`：`Error` 实例返回 `message`，否则返回“未知错误”。
- 固定输入 `inputs = ["3000", "13", "abc"]`。

逐项处理：先解析，再保存；保存失败是普通结果，不要抛异常。解析失败在外层捕获。精确输出：

~~~text
已保存端口：3000
保存失败：端口 13 不可用
解析失败：端口必须是 1 到 65535 的整数
~~~

限制：

- 不得使用 `any`、类型断言、抛字符串或空 `catch`。
- `parsePort` 必须验证整数与范围，非法时不得返回伪造默认值。
- `savePort` 不得为预期的端口占用抛异常。
- `catch` 参数保持 `unknown`，只通过 `errorMessage` 安全取得文字。
- 成功与失败分支必须通过 `ok` 收窄，不能用非空断言读取字段。

完成标准：右键运行后显示 PASS；能说明为什么“格式非法”和“端口不可用”选择了不同失败通道。

## 容易出错的地方

- `throw "bad"`，丢失标准错误信息和堆栈。
- 把捕获值写成 `any`，直接读取任意属性。
- 捕获后返回看似正常的假数据，调用者无法分辨失败。
- 未检查 `Number` 得到的 `NaN`、小数或越界值。
- 底层与上层重复输出同一错误。

## 拓展思考（不要求写代码）

如果保存端口要访问网络，临时断网、端口已占用和程序内部 bug 分别更适合“重试结果”“业务 Result”还是“异常”？请给出你的分类理由。

## 官方资料

- [Narrowing：instanceof](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing)
- [TSConfig：useUnknownInCatchVariables](https://www.typescriptlang.org/tsconfig/useUnknownInCatchVariables.html)
