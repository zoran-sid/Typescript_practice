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
      "title": "温度观测报告",
      "expected": [
        "Readings: 3",
        "Total: 62",
        "Highest: 23"
      ],
      "success": "你已闭卷重建 温度观测报告 的完整数据流。",
      "hints": [
        "使用数字数组、for...of、累加变量和最大值判断。",
        "沿 README 流程图逐个检查输入、处理、分支/循环和输出。",
        "不要导入其他 practice 文件夹；每题必须独立运行。"
      ]
    }
  ]
};
