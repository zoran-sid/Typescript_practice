const taskMinutes: number[] = [5, 12, 8, 15];
const slowBoundary = 10;
let slowCount = 0;
let slowPositionsText = "";

// 调用关系：数组下标 -> 当前 minutes -> 边界判断 -> 更新数量和位置文字。
for (let index = 0; index < taskMinutes.length; index++) {
  const minutes = taskMinutes[index];
  const isSlow = minutes >= slowBoundary;

  if (isSlow) {
    slowCount = slowCount + 1;
    // 第一个序号不加逗号；后续序号先补分隔符，再拼接人类习惯的 1 起始序号。
    const separator = slowPositionsText === "" ? "" : ", ";
    slowPositionsText = slowPositionsText + separator + (index + 1);
  }
}

// 调用关系：循环统计结果 -> console.log -> 慢任务报告。
console.log(`Tasks: ${taskMinutes.length}`);
console.log(`Slow tasks: ${slowCount}`);
console.log(`Slow positions: ${slowPositionsText}`);
