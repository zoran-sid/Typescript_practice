export default {
  title: "选修：元组、重载、this 与可变参数",
  exampleExpected: [
    "Functions: 45m",
    "42",
    "types, modules",
    "[TS] typed this",
  ],
  exercises: [
    {
      id: "01",
      title: "返回固定进度元组",
      expected: ["Progress: 3/4"],
      success: "固定位置的数据已经由元组精确表达。",
      hints: [
        "完成数可以用 values.filter(Boolean).length。",
        "总数是 values.length。",
        "返回 [completed, values.length]。",
      ],
    },
    {
      id: "02",
      title: "保留参数关系的调用器",
      expected: ["Total: 36", "Day 28"],
      success: "参数元组与返回类型都穿过了通用包装函数。",
      runtimeHints: ["占位异常应被替换为 `return fn(...args)`。"],
      hints: ["把 args 用展开语法传给 fn，并直接返回结果。"],
    },
    {
      id: "03",
      title: "实现字符串与数组重载",
      expected: ["types", "modules, generics"],
      success: "实现覆盖了所有公开重载，并保持对应返回类型。",
      hints: [
        "先用 typeof value === 'string' 收窄。",
        "字符串使用 trim().toLowerCase()。",
        "数组使用 map 对每一项转换。",
      ],
    },
    {
      id: "04",
      title: "使用显式 this 参数",
      expected: ["Elective Day 28: Advanced functions"],
      success: "调用者结构和运行时 this 都已对应。",
      hints: [
        "this 参数不是 prefix，它通过 this.title 和 this.day 读取。",
        "返回 `${prefix} Day ${this.day}: ${this.title}`。",
      ],
    },
  ],
};
