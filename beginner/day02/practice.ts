const completedText = "3";
const plannedLessons = 2;

// BUG: 这里先拼接成 "32"，然后才转换。调整括号，让转换先发生。
const totalLessons = Number(completedText + plannedLessons);

let status = "Keep learning";

if (totalLessons >= 5) {
  status = "Goal reached";
}

console.log(`Total lessons: ${totalLessons}`);
console.log(`Status: ${status}`);
