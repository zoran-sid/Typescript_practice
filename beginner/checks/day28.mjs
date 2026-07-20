export default {
  title: "Day 28 · 高级函数独立综合题",
  exampleExpected: ["Functions: 45m", "42", "types, modules", "[TS] typed this"],
  expected: ["Progress: 3/4", "Total: 36", "Day 28", "types", "modules, generics", "Elective Day 28: Advanced functions"],
  success: "你已从零组合使用元组、可变参数泛型、重载和显式 this。",
  hints: ["progress 返回固定二元组。", "invoke 直接 return fn(...args)。", "normalize 先写两条公开重载，再写联合实现。", "describe 通过 this.title 与 this.day 读取上下文。"],
  typeHints: ["使用 unknown[] 保留参数关系，不要换成 any[]。"],
};
