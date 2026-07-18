# Day 16 参考答案说明

## 练习 01

keyof Profile 限制调用者只能传 name、age 或 active。profile[key] 的总体返回类型是三个属性值的联合，因为参数本身可能是其中任意键。

## 练习 02

formatId 不需要知道 title、name 或 active，只要求 id: number。Item extends { id: number } 保留调用者的完整类型，同时允许函数安全读取 id。

## 练习 03

Key extends keyof Item 保证 key 存在，Item[Key] 保留该键对应的值类型。传 title 得到 string[]，传 score 得到 number[]。map 回调仍必须 return item[key]。

## 练习 04

typeof featureFlags 在类型位置得到对象类型；keyof 再得到三个合法键。这样新增或删除配置键时，FeatureName 会自动同步。函数使用同一个 name 读取运行时值。
