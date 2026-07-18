import { passingScore } from "./score-tools.js";

function formatScore(score: number): string {
  return "暂未格式化：" + score;
}

console.log(formatScore(55));
console.log(formatScore(80));
console.log("及格线：" + passingScore);
