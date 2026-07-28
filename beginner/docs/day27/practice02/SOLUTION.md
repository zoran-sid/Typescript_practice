# 解题结构

[返回题目](./README.md) · [打开 solution.ts](../../../day27/practice02/solution.ts)

本文件不提供完整答案。`solution.ts` 是可通过类型检查的 TODO 脚手架，只展示主要声明顺序、类型边界和待完成位置。

## 方案一：让搜索、请求和命令行逻辑可注入

### 搭建顺序

1. 先写 `normalizeQuery`，让它只接收字符串并交回去空格后的字符串。
2. 在浏览器入口只绑定事件，把输入框的值经过 `normalizeQuery` 后交给回调；普通 Node 运行不触发这条 DOM 路径。
3. Node 直接用固定字符串测试 `normalizeQuery`；请求与 CLI 分别完成 unknown 验证和缺失值检查。

### 类型与数据流

DOM → 浏览器适配器 → `normalizeQuery`；固定字符串/客户端/参数数组 → 可测试函数 → query、标题或 day → 调用者。

### 关键自检点

- 核心逻辑不要直接读取全局 DOM、fetch 或 process。
- 不要硬打印 `typed`，也不要伪造 `HTMLInputElement`；让纯函数的返回值进入输出。
- 数字转换后还要检查结果是否满足题目范围。

完成 TODO 后，请以本题 README 的精确输出和限制逐项自检；不要把显示结果直接写死。
