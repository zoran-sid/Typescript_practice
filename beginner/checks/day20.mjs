export default {
  "title": "JSON、unknown 与运行时验证",
  "exampleExpected": [
    "课程: TypeScript / 90 分",
    "课程数据无效"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "JSON、unknown 与运行时验证",
      "expected": [
        "资料：Ada / ada@example.com / 课程：变量、联合 / 已完成：1",
        "失败：资料字段无效",
        "失败：JSON 格式错误"
      ],
      "success": "JSON 语法、嵌套对象和数组元素都经过了运行时验证，失败原因也被保留。",
      "hints": [
        "先用 isRecord 排除非对象和 null，再读取属性。",
        "isProfile 中 contact 也要经过 isRecord，lessons 使用 Array.isArray。",
        "数组确认后用 every(isLesson) 检查每一个课程。",
        "parseProfile 只捕获 JSON.parse；解析成功后再调用 isProfile。"
      ],
      "runtimeHints": [
        "若出现属性读取异常，说明你在完成某一层对象验证前就访问了内部字段。"
      ]
    },
    {
      "id": "practice02",
      "title": "课程 JSON 验证",
      "expected": [
        "课程: TypeScript / 90 分",
        "课程数据无效"
      ],
      "success": "你已闭卷重建 课程 JSON 验证 的完整数据流。",
      "hints": [
        "JSON.parse 的结果先当 unknown，再逐层验证运行时形状。",
        "沿 README 流程图逐个检查输入、处理、分支/循环和输出。",
        "不要导入其他 practice 文件夹；每题必须独立运行。"
      ]
    }
  ]
};
