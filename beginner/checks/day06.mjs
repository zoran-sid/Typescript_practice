export default {
  title: "Day 06：学习任务副本与成绩报告",
  exampleExpected: [
    "书名: TypeScript 入门",
    "页数: 320",
    "状态: 可借阅",
  ],
  expected: [
    "原任务完成: false",
    "副本完成: true",
    "学生: Mei（成都）",
    "平均分: 90",
  ],
  success: "你已经能从空文件组合对象、嵌套数据、对象参数与独立副本。",
  hints: [
    "copiedTask 必须是新对象，student 与 scores 也要使用新创建的数据。",
    "只修改 copiedTask.done，不要修改 originalTask.done。",
    "calculateAverage 循环累加 record.scores，再除以数组长度。",
  ],
};
