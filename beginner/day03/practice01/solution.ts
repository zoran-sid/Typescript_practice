// 这是教学脚手架，不是完整答案。请完成所有 TODO。
const studyMinutes: number[] = [30, 45, 60, 20];
let totalMinutes = 0;
let longestSession = 0;
for (const minutes of studyMinutes) {
  // minutes 是本轮从数组取得的局部绑定，只在循环体中使用。
  // TODO：把当前 minutes 累加到旧的 totalMinutes。
  const isLonger = false; // TODO：比较当前项与最长记录。
  if (isLonger) {
    // TODO：更新 longestSession。
  }
}
console.log(`Sessions: ${studyMinutes.length}`);
console.log(`Total minutes: ${totalMinutes}`);
console.log(`Longest session: ${longestSession}`);
