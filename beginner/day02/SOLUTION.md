# Day 02 参考答案解释

关键修改只有一处：

```ts
const totalLessons = Number(completedText) + plannedLessons;
```

## 原代码的执行顺序

```ts
Number(completedText + plannedLessons)
```

1. `completedText` 是字符串 `"3"`。
2. `plannedLessons` 是数字 `2`。
3. 字符串参与 `+`，得到字符串 `"32"`。
4. `Number("32")` 得到数字 `32`。

最终类型确实是 `number`，所以 TypeScript 无法仅凭类型知道业务期待的是 `5`。自动验收负责发现这个运行结果错误。

## 修复后的执行顺序

```ts
Number(completedText) + plannedLessons
```

1. `Number("3")` 得到数字 `3`。
2. 计算数字 `3 + 2`，得到数字 `5`。
3. `5 >= 5` 为 `true`。
4. `if` 中的代码把 `status` 更新为 `"Goal reached"`。

这道题的通用原则是：

> 数据进入运算前先转换；不要先做错误运算，再转换错误结果。
