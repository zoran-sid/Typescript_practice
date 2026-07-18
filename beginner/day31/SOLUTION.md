# Day 31 参考答案说明

## 01 生成偶数

循环仍负责推进数字，只有 `current % 2 === 0` 时才执行 `yield`。生成器不会先创建六项数组再筛选，而是按请求逐个产生符合条件的值。

## 02 手写迭代协议

`current` 应从传入的 `start` 开始。每次 `next()` 先保存本次值，再减 1；小于 1 后返回 `{ done: true, value: undefined }`。

## 03 超大整数与 JSON

`bigint` 必须与 `bigint` 运算，因此递增量是 `1n`。原生 JSON 不支持 `bigint`，答案通过 `toString()` 明确把标识保存成字符串。

```powershell
npm run beginner:solution -- day31 03
```
