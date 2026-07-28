// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
const completedText = "3";
const plannedLessons = 2;
const completed = 0; // TODO：0 只是 number 类型占位；用 Number(...) 转换 completedText，并把转换结果保存到 completed。
const totalLessons = 0; // TODO：0 只是 number 类型占位；把 completed 与 plannedLessons 相加，并把和保存到 totalLessons。
let status = "Keep learning";
const reachedGoal = false; // TODO：false 只是 boolean 类型占位；判断 totalLessons 是否大于或等于题目给出的目标 5，并把比较结果保存到 reachedGoal。
if (reachedGoal) {
  status = "Goal reached";
}
console.log(`Total lessons: ${totalLessons}`);
console.log(`Status: ${status}`);
