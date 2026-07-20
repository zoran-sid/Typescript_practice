export default {
  title: "JSON、unknown 与运行时验证",
  exampleExpected: [
    "课程: TypeScript / 90 分",
    "课程数据无效",
  ],
  expected: [
    "资料：Ada / ada@example.com / 课程：变量、联合 / 已完成：1",
    "失败：资料字段无效",
    "失败：JSON 格式错误",
  ],
  success: "JSON 语法、嵌套对象和数组元素都经过了运行时验证，失败原因也被保留。",
  hints: [
    "先用 isRecord 排除非对象和 null，再读取属性。",
    "isProfile 中 contact 也要经过 isRecord，lessons 使用 Array.isArray。",
    "数组确认后用 every(isLesson) 检查每一个课程。",
    "parseProfile 只捕获 JSON.parse；解析成功后再调用 isProfile。",
  ],
  runtimeHints: [
    "若出现属性读取异常，说明你在完成某一层对象验证前就访问了内部字段。",
  ],
};
