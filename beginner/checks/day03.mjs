export default {
  "title": "Day 03：学习时长报告",
  "exampleExpected": [
    "Readings: 3",
    "Total: 62",
    "Highest: 23"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "Day 03：学习时长报告",
      "expected": [
        "Sessions: 4",
        "Total minutes: 155",
        "Longest session: 60"
      ],
      "success": "你已经能从空文件使用数组、for...of、累加器和条件比较生成报告。",
      "hints": [
        "studyMinutes 必须是 [30, 45, 60, 20]，数量读取 .length。",
        "每轮执行 totalMinutes = totalMinutes + minutes。",
        "只有当前 minutes 更大时才更新 longestSession。"
      ]
    },
    {
      "id": "practice02",
      "title": "慢任务位置报告",
      "expected": [
        "Tasks: 4",
        "Slow tasks: 2",
        "Slow positions: 2, 4"
      ],
      "success": "你已经能用数组下标遍历数据，并把满足边界的任务计数与序号文字同步构建出来。",
      "hints": [
        "循环条件要让 index 从 0 走到 length - 1。",
        "慢任务包含刚好 10 分钟的情况。",
        "输出给人的序号比数组下标大 1，多个序号之间要补逗号和空格。"
      ]
    }
  ]
};
