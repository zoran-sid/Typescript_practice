const completedText = "3";
const plannedLessons = 2;

// 调用关系：表单文字 -> Number -> 可参与加法的数字。
const completed = Number(completedText);
const totalLessons = completed + plannedLessons;
let status = "Keep learning";
const reachedGoal = totalLessons >= 5;

// 判断达到目标后，才更新默认状态。
if (reachedGoal) {
  status = "Goal reached";
}

// 调用关系：totalLessons 和最终 status -> 模板字符串 -> 终端输出。
console.log(`Total lessons: ${totalLessons}`);
console.log(`Status: ${status}`);
