export default {
  expected: ["Total lessons: 5", "Status: Goal reached"],
  success: "你已经能区分字符串和数字，并在运算前完成显式转换。",
  hints: [
    "completedText 是字符串 \"3\"，plannedLessons 是数字 2。",
    "先执行 Number(completedText)，再与 plannedLessons 相加。",
    "比较正确后，if 分支会把 status 改为 Goal reached。",
  ],
  typeHints: [
    "不要用 as number 强迫 TypeScript 接受字符串；类型断言不会转换运行时的值。",
    "本题真正需要的是 Number(...) 转换。",
  ],
};
