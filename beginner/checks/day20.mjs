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
      "title": "通知批次的部分接收",
      "expected": [
        "可发送：email,push",
        "丢弃数量：2",
        "批次错误：JSON 格式错误"
      ],
      "success": "批次容器与单项数据已分层验证，合法通知被保留，语法错误也有独立结果。",
      "hints": [
        "JSON.parse 的结果先存成 unknown，catch 只处理语法错误。",
        "先用 Array.isArray 检查容器，再逐项调用 isNotification。",
        "email 检查 address，push 检查 token；只看 kind 不够。",
        "合法项 push 到 valid，其他项增加 rejectedCount，不要让单项错误拒绝整批。"
      ]
    }
  ]
};
