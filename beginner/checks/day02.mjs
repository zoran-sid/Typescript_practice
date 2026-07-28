export default {
  "title": "Day 02：课程计划统计器",
  "exampleExpected": [
    "Total price: 24",
    "Status: Large order"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "Day 02：课程计划统计器",
      "expected": [
        "Total lessons: 5",
        "Status: Goal reached"
      ],
      "success": "你已经能从空文件完成显式转换、数字运算和条件判断。",
      "hints": [
        "completedText 是字符串，先调用 Number(completedText)。",
        "转换结果再与 plannedLessons 相加，不要先拼接。",
        "status 从 Keep learning 开始，在 totalLessons >= 5 时更新。"
      ],
      "typeHints": [
        "类型标注或 as number 不会转换运行时的字符串。",
        "真正需要的是 Number(completedText) 的返回值。"
      ]
    },
    {
      "id": "practice02",
      "title": "同城配送报价",
      "expected": [
        "Weight: 2.5 kg",
        "Distance: 30 km",
        "Fee: 16",
        "Route: Long distance"
      ],
      "success": "你已经能转换两项表单文本，让它们参与同一个费用公式和边界判断。",
      "hints": [
        "weightText 和 distanceText 要分别调用 Number(...)。",
        "费用由基础费、重量费和里程费三部分相加。",
        "30 公里本身也属于 Long distance。"
      ]
    }
  ]
};
