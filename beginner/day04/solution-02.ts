const score = 60;

const passed = score >= 60;
let level = "不及格";

if (score >= 90) {
  level = "优秀";
} else if (score >= 60) {
  level = "及格";
}

console.log(`是否及格: ${passed}`);
console.log(`等级: ${level}`);

export {};
