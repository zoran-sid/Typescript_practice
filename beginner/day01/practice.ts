// TODO 1: 把课程名称改为 TypeScript。
const courseName = "TODO";

// completedLessons 会变化，所以这里使用 let。
let completedLessons = 0;

// TODO 2: 把它改为真正的布尔值 true。
const isBeginner = false;

completedLessons = completedLessons + 1;

const summary = `${courseName} | completed: ${completedLessons} | beginner: ${isBeginner}`;

console.log(summary);
