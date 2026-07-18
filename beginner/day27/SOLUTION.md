# Day 27 参考思路

## 练习 01

`event.currentTarget?.value.trim() ?? ""` 先安全访问目标，再只在结果确实是 `null`/`undefined` 时使用空字符串。真实 DOM 事件的目标类型更复杂，结构化小接口让业务逻辑可以在 Node 测试。

## 练习 02

客户端承诺的是 `Promise<unknown>`，所以先 `await`，再排除 `null`、检查对象和两个字段。返回一个新建的 `Lesson`，而不是断言整个外部对象。

## 练习 03

数组索引可能越界，辅助函数应返回 `string | undefined`。数字转换后还要检查整数和范围；模式只接受两个允许的字面量，其他输入回落到默认值。

## 真实项目连接

- 浏览器入口负责查询 DOM 并把元素交给纯函数。
- 请求适配器负责发起 `fetch`，领域函数负责验证 `unknown`。
- Node 入口负责读取 `process.argv`，解析器只接收字符串数组。
