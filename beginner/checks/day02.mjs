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
      "title": "批量订单金额",
      "expected": [
        "Total price: 24",
        "Status: Large order"
      ],
      "success": "你已闭卷重建 批量订单金额 的完整数据流。",
      "hints": [
        "先用 Number 转换文本，再计算并用 if 判断状态。",
        "沿 README 流程图逐个检查输入、处理、分支/循环和输出。",
        "不要导入其他 practice 文件夹；每题必须独立运行。"
      ]
    }
  ]
};
