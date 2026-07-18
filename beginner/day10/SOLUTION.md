# Day 10 参考答案说明

## 01 `typeof` 收窄

字符串分支可以安全调用 `toUpperCase()`；离开该分支后只剩数字可能，因此添加 `#`。没有使用 `as`。

## 02 字面量选项

答案明确处理 `small` 和 `medium`，最后剩下的合法选项只能是 `large`。每个尺寸都得到一个价格。

## 03 数组判断

`Array.isArray(value)` 为真时，`value.length` 是数组项数；否则 `value` 已收窄为字符串，`length` 是字符数。

## 04 属性判断

`"email" in contact` 为真后，TypeScript 知道当前是 `EmailContact`；否则就是 `PhoneContact`。每个分支只访问自己确定存在的属性。

```powershell
npm run beginner:solution -- day10 04
```
