# Day 32 参考思路

完整答案在 `solution.ts`。

- tracedMethod 使用标准 `(value, context)`，三个泛型分别保存实例、参数列表和返回值。
- 包装函数显式声明 this，并用 target.call 传回原方法。
- 类装饰器只从 context 读取类名；withTag 用交叉类型保留原能力。
- MessageService 通过构造器组合 Formatter，依赖清楚且可替换。

## 拓展思考方向

当前通用 Return 会原样保留 Promise 类型，调用前日志仍可工作。若要等待完成后记录，包装函数必须变成 async，返回会统一成 Promise；可把目标约束为返回 Promise<Result>，再返回 Promise<Result>，避免把任意同步 Return 意外包装成 Promise。
