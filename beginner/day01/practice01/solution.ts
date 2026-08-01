const learnerName = "Lin";
const courseName = "TypeScript";
let completedLessons = 0;
const isBeginner = true;

// 调用关系：第一次完成课程 -> 读取旧值 0 -> 加 1 -> 写回 completedLessons。
completedLessons = completedLessons + 1;
// 调用关系：第二次完成课程 -> 读取旧值 1 -> 加 1 -> 写回 completedLessons。
completedLessons = completedLessons + 1;

// 调用关系：四个变量 -> 模板字符串 -> console.log -> 四行学习档案。
console.log(`学习者: ${learnerName}`);
console.log(`课程: ${courseName}`);
console.log(`已完成: ${completedLessons}`);
console.log(`初学者: ${isBeginner}`);
