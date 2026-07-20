export default {
  title: "Day 03：学习时长报告",
  expected: [
    "Sessions: 4",
    "Total minutes: 155",
    "Longest session: 60",
  ],
  success: "你已经能从空文件使用数组、for...of、累加器和条件比较生成报告。",
  hints: [
    "studyMinutes 必须是 [30, 45, 60, 20]，数量读取 .length。",
    "每轮执行 totalMinutes = totalMinutes + minutes。",
    "只有当前 minutes 更大时才更新 longestSession。",
  ],
};
