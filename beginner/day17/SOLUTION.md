# Day 17 参考答案说明

## 练习 01

Omit<Account, "email"> 只产生类型，不会从 account 的运行时对象删除 email。答案用对象 rest 真正取出 email 并收集其余字段，再让 PublicAccount 检查结果形状。

## 练习 02

Partial<Profile> 允许补丁只提供部分属性。返回 { ...profile, ...patch } 创建新对象，后展开的 patch 覆盖同名属性；original 保持不变。

## 练习 03

as const 保留数组每项的字面量。typeof levels 得到 readonly 元组类型，再用 [number] 取得所有数字索引位置的元素联合，Level 因此只允许三个级别。

## 练习 04

Record<RouteName, string> 要求三个键完整存在且值为 string。satisfies 检查对象字面量是否符合要求，同时保留 paths 自身的具体属性。它不会自动修复错误路径，运行时字符串仍需我们写正确。
