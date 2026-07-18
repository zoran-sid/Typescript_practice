# Day 06 参考答案说明

## 01 对象属性

题目要求任务尚未完成，所以只需把 `done` 修正为 `false`。日志从对象读取数据，不应再次写死一份答案。

## 02 对象参数

函数通过 `item.name`、`item.price` 和 `item.inStock` 读取本次传入的商品。布尔值再通过条件表达式转换成“有货”或“缺货”。

## 03 引用

答案明确创建第二个对象，并从原对象逐项复制初始值。修改 `copyTask.done` 时，原对象不再受到影响。

## 04 嵌套数据统计

总分除以 `student.scores.length` 才是平均值。不要把样例中的 3 写死，这样数组增加成绩后仍能正确工作。

```powershell
npm run beginner:solution -- day06 04
```
