# Day 20 参考答案说明

## 解题路线

`isRecord` 先完成所有对象检查都需要的“对象且非 null”条件。`isLesson` 检查两个字段；`isProfile` 再逐层检查外层字符串、嵌套 contact、email、数组本身以及每个课程元素。

`parseProfile` 只把 `JSON.parse` 放进 `try/catch`，因此语法错误与解析后的结构错误保持不同原因。只有 `isProfile` 返回 `true` 后，成功结果才携带可安全使用的 `Profile`。

## 易错点

`as Profile` 不会验证或转换数据。类型谓词相当于你对检查器作出的保证，漏查任意嵌套层都会把危险数据放进业务代码。数组元素也必须逐个验证。

## 拓展思考参考方向

先判断对象上是否存在 `nickname`。不存在是合法的可选缺席；存在时必须继续检查它是字符串，否则整体无效。不能只写 `value.nickname === undefined`，因为“字段存在且值为 undefined”与 JSON 中真正缺席的语义可能不同。
