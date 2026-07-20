const completedText = "3";
const plannedLessons = 2;
const totalLessons = Number(completedText) + plannedLessons;

let status = "Keep learning";

if (totalLessons >= 5) {
  status = "Goal reached";
}

console.log(`Total lessons: ${totalLessons}`);
console.log(`Status: ${status}`);
