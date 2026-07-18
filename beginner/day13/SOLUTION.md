# Day 13 参考答案说明

## 练习 01

对象解构按属性名取值；数组解构按位置取值。数组 rest 把第一项之后的元素收集到 remainingLessons，因此它仍是 string[]。

## 练习 02

const updated = original 只增加了另一个名字，没有创建新对象。答案同时创建新文章对象和新 tags 数组。只复制文章却复用 tags，之后修改 tags 仍会影响旧文章。

## 练习 03

外层 spread 让 updated 与 original 成为两个外层对象，但 preferences 仍指向同一个内部对象。答案在 preferences 层再次 spread，旧主题才会保持 light。

## 练习 04

map 为每个输入元素返回一个输出元素。非目标任务可以直接返回原对象；目标任务返回 spread 后的新对象。filter 在新数组上统计完成项。readonly 帮助阻止直接赋值，但真正的不修改旧值来自更新写法本身。
