// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
const studyMinutes: number[] = [30, 45, 60, 20];
let totalMinutes = 0;
let longestSession = 0;
for (const minutes of studyMinutes) {
  // minutes 是本轮从数组取得的局部绑定，只在循环体中使用。
  // TODO：读取旧的 totalMinutes，加上本轮 minutes，再把新总和赋值回 totalMinutes。
  const isLonger = false; // TODO：false 只是 boolean 类型占位；比较本轮 minutes 是否大于 longestSession，并把结果保存到 isLonger。
  if (isLonger) {
    // TODO：当前分支表示本轮 minutes 更长；把这个 minutes 保存到 longestSession，替换旧的最长记录。
  }
}
console.log(`Sessions: ${studyMinutes.length}`);
console.log(`Total minutes: ${totalMinutes}`);
console.log(`Longest session: ${longestSession}`);
