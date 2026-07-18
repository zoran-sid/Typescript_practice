# Day 30 参考思路

## 练习 01

先读真实的 `.js`：`score` 对数组做数值相加，因此声明应为：

```ts
export declare function score(points: readonly number[]): number;
```

只改调用者或加断言会隐藏声明错误，其他调用处仍会被误导。

## 练习 02

两个同名 `interface LessonInfo` 会合并成 `{ title: string; minutes: number }`，所以对象必须同时提供两项。声明合并发生在类型检查阶段。

## 练习 03

旧数字枚举的 Draft/Published 在运行时分别是 0/1；现代对象的值是字面量字符串。函数接收两套表示，在边界统一为 `"draft" | "published"`，其余新代码只使用现代状态。

## 维护原则

声明文件描述事实，不是愿望。优先从文档、实现和真实测试确认 API；若要扩展第三方声明，范围越小越好，并为关键调用补运行时测试。
