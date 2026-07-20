export default {
  title: "Day 32 · 标准装饰器、Mixin 与组合独立综合题",
  exampleExpected: ["定义类: Calculator", "类别: utility", "调用方法: add", "结果: 5"],
  expected: ["注册类: PriceCalculator", "标签: advanced", "调用: total", "总价: 24", "消息: TYPESCRIPT"],
  success: "你已从零完成 TS5 标准装饰器、类型安全 Mixin 和显式组合。",
  hints: ["方法装饰器使用 target 与 context 两个参数。", "包装函数保留 this，并 return target.call(this, ...args)。", "withTag 返回原类型与只读 tag 的交叉类型。", "MessageService 调用注入的 formatter.format。"],
  typeHints: ["使用 Args extends unknown[]，不要用 any[] 或 legacy descriptor 签名。"],
  compilerOptions: { experimentalDecorators: false },
};
