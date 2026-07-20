# Day 09 参考答案说明

`ProjectId` 给字符串编号取了业务名称。`Project` 集中描述项目对象，使变量和函数参数共用同一份类型规则。

`id` 与整个 `progress` 引用是只读属性，`members` 使用 `ReadonlyArray<string>`，因此函数只能读取这些数据。`note?` 允许属性缺失，`describeProject` 使用 `?? "无"` 生成明确显示。

函数创建局部的成员文字和备注文字，再把四行放进数组并用换行连接。它只读取参数，不修改项目，最终一次 `console.log` 就产生四行报告。

## 拓展思考参考方向

`readonly progress` 修饰的是 `progress` 这个顶层属性，所以不能让它指向另一个对象；内部 `completed` 和 `total` 仍是普通可写数字。若要求深层只读，需要在内层也写 `readonly completed` 与 `readonly total`，或使用表达相同约束的只读类型。
