export default {
  expected: ["Sessions: 3", "Total minutes: 135", "Longest session: 60"],
  success: "你已经能用数组和循环汇总一组数据。",
  hints: [
    "循环每执行一次，minutes 就是当前学习时长。",
    "总时长需要累加：totalMinutes = totalMinutes + minutes。",
    "只有当前 minutes 更大时，才更新 longestSession。",
  ],
};
