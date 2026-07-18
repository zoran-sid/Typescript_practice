const studyMinutes: number[] = [30, 45, 60];
let totalMinutes = 0;
let longestSession = 0;

for (const minutes of studyMinutes) {
  // TODO 1: 把当前 minutes 累加到 totalMinutes。

  // TODO 2: 如果当前 minutes 更大，就更新 longestSession。
}

console.log(`Sessions: ${studyMinutes.length}`);
console.log(`Total minutes: ${totalMinutes}`);
console.log(`Longest session: ${longestSession}`);
