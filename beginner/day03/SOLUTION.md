# Day 03 参考答案解释

循环中的完整实现：

```ts
for (const minutes of studyMinutes) {
  totalMinutes = totalMinutes + minutes;

  if (minutes > longestSession) {
    longestSession = minutes;
  }
}
```

## 总时长

`totalMinutes` 在循环前从 `0` 开始。每轮把“旧总计 + 当前时长”的结果放回变量：

```text
0 + 30 = 30
30 + 45 = 75
75 + 60 = 135
```

如果只写 `totalMinutes = minutes`，旧总计会被覆盖，最后只剩 `60`。

## 最长时长

`longestSession` 也从 `0` 开始，但它不是累加。每轮先比较：

```ts
minutes > longestSession
```

只有当前值更大时才更新，因此记录只会逐渐变大：`0 → 30 → 45 → 60`。

## 为什么输出使用 `.length`

```ts
studyMinutes.length
```

直接读取数组数量。以后增加或删除一项，不需要手工修改 Sessions 数字。

## 可选验证

完成本题后，可以暂时把数组改为：

```ts
const studyMinutes: number[] = [15, 90, 30, 45];
```

在运行前先手算期望结果，再检查程序是否输出：

```text
Sessions: 4
Total minutes: 180
Longest session: 90
```

验证后恢复原数组，以便课程自动检查通过。
