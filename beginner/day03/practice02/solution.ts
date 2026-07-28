// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
const taskMinutes: number[] = [5, 12, 8, 15];
const slowBoundary = 10;
let slowCount = 0;
let slowPositionsText = "";

for (let index = 0; index < taskMinutes.length; index++) {
  const minutes = taskMinutes[index];
  const isSlow = false; // TODO：判断 minutes 是否达到或超过 slowBoundary。

  if (isSlow) {
    // TODO：慢任务数量增加 1。
    // TODO：把 index + 1 追加到 slowPositionsText；第二个及之后的序号前先补 ", "。
  }
}

console.log(`Tasks: ${taskMinutes.length}`);
console.log(`Slow tasks: ${slowCount}`);
console.log(`Slow positions: ${slowPositionsText}`);
