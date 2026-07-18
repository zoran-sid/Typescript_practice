# Day 23 参考答案与记忆卡

## 01：undefined 是真实分支

`find` 找不到时返回 `undefined`。开启 `strictNullChecks` 后，先检查再把值当作字符串使用。

## 02：未知输入先写 unknown

`noImplicitAny` 不让没有说明的参数悄悄失去检查。边界输入可以写成 `unknown`，再用 `typeof` 缩小。遇到许多错误时，先修第一条。

## 03：数组索引可能越界

`number[]` 表示元素如果存在就是数字，不保证 `scores[0]` 一定存在。`noUncheckedIndexedAccess` 会把索引结果视为 `number | undefined`。

## 04：不存在不等于值为 undefined

开启 `exactOptionalPropertyTypes` 后，`theme?: ...` 表示属性可以缺席。删除属性要构造一个不含它的新对象，而不是给它赋 `undefined`。

记忆卡：

- `strict`：严格检查组；
- `strictNullChecks`：缺失值必须处理；
- `noImplicitAny`：别让类型信息悄悄丢失；
- `noUncheckedIndexedAccess`：索引可能越界；
- `exactOptionalPropertyTypes`：可选属性可以不存在；
- `noEmit`：只检查，不输出；
- `target` 管 JavaScript 语法，`module` 管模块规则；
- 多条错误：永远先读第一条。

间隔复习：三天后重做第 03、04 题；一周后给别人解释这八行记忆卡。
