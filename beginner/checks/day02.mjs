export default {
  title: "Day 02：课程计划统计器",
  expected: ["Total lessons: 5", "Status: Goal reached"],
  success: "你已经能从空文件完成显式转换、数字运算和条件判断。",
  hints: [
    "completedText 是字符串，先调用 Number(completedText)。",
    "转换结果再与 plannedLessons 相加，不要先拼接。",
    "status 从 Keep learning 开始，在 totalLessons >= 5 时更新。",
  ],
  typeHints: [
    "类型标注或 as number 不会转换运行时的字符串。",
    "真正需要的是 Number(completedText) 的返回值。",
  ],
};
