// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
const temperatures: number[] = [18, 21, 23];
let totalTemperature = 0;
let highestTemperature = 0;
for (const temperature of temperatures) {
  // TODO：读取旧的 totalTemperature，加上本轮 temperature，再把新总和赋值回 totalTemperature。
  const isHigher = false; // TODO：false 只是 boolean 类型占位；比较本轮 temperature 是否大于 highestTemperature，并把结果保存到 isHigher。
  if (isHigher) {
    // TODO：当前分支表示本轮 temperature 更高；把这个 temperature 保存到 highestTemperature，替换旧最高值。
  }
}
console.log(`Readings: ${temperatures.length}`);
console.log(`Total: ${totalTemperature}`);
console.log(`Highest: ${highestTemperature}`);
