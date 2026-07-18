# Day 08 参考答案说明

## 01 可选链与默认值

`profile.address?.city` 在地址缺失时得到 `undefined`，然后 `?? "未填写"` 使用题目要求的默认文字。

## 02 保留 0 和空字符串

答案把 `||` 改为 `??`。0 与空字符串不是 `null` 或 `undefined`，因此会原样保留。

## 03 `find` 未找到

搜索 99 会得到 `undefined`。`foundUser?.name` 安全停止访问，再由 `??` 提供“未找到”。

## 04 设置对象

音量 0 和空主题是对象中明确保存的值；语言属性才真正缺失。三个位置都用 `??`，行为一致且不会误伤有效空值。

```powershell
npm run beginner:solution -- day08 04
```
