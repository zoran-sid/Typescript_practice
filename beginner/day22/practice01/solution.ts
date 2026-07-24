// 解题结构提示：类型、测试顺序和样例已保留，核心实现请完成 TODO。
function clampScore(score: number): number {
  // TODO 1：把分数限制在 0 到 100；注意上下边界的嵌套顺序。
  return 0;
}
function averageScore(scores: readonly number[]): number {
  // TODO 2：先处理空数组，再合计 clampScore(...) 的结果并计算平均值。
  return 0;
}
async function loadScores(): Promise<readonly number[]> {
  await Promise.resolve();
  return [90, 70];
}
function assertEqual<T>(actual: T, expected: T, label: string): void {
  // TODO 3：用 Object.is 比较；失败时报出 label、期望值和实际值。
}
function assertThrows(action: () => void, expectedMessage: string, label: string): void {
  // TODO 4：只把类型与消息都匹配的 RangeError 判为通过。
  // 提示：测试自己产生的“没有抛错”错误必须放在 try/catch 外。
}
let testCount = 0;
const ordinaryAverage = averageScore([20, 40, 60]);
assertEqual(ordinaryAverage, 40, "普通平均分");
// TODO 5：每条断言真正通过后再增加 testCount。
const clampedAverage = averageScore([-10, 120]);
assertEqual(clampedAverage, 50, "分数限制在 0 到 100");
assertThrows(() => averageScore([]), "成绩列表不能为空", "空列表会报错");
const loadedAverage = averageScore(await loadScores());
assertEqual(loadedAverage, 80, "异步成绩");
console.log(`当前已记录 ${testCount} 个通过测试（完成 TODO 后应更新）`);
