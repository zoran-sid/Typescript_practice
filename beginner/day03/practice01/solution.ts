const studyMinutes: number[] = [30, 45, 60, 20];
let totalMinutes = 0;
let longestSession = 0;

// 调用关系：studyMinutes -> for...of -> 每轮 minutes -> 累加总时长并比较最长时长。
for (const minutes of studyMinutes) {
  totalMinutes = totalMinutes + minutes;
  const isLonger = minutes > longestSession;

  // 只有本轮更长时，才用本轮值覆盖旧记录。
  if (isLonger) {
    longestSession = minutes;
  }
}

// 调用关系：循环结束后的统计变量 -> console.log -> 学习时长报告。
console.log(`Sessions: ${studyMinutes.length}`);
console.log(`Total minutes: ${totalMinutes}`);
console.log(`Longest session: ${longestSession}`);
