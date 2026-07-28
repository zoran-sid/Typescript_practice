// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
function clampScore(score: number): number {
  // TODO 1：输入是当前 score；小于 0 时交回 0，大于 100 时交回 100，
  // 其余情况交回 score。下面的 0 暂时让函数符合 number 返回类型，不能保留为统一结果。
  return 0;
}
function averageScore(scores: readonly number[]): number {
  // TODO 2：输入是整组 scores；空数组要抛出消息为“成绩列表不能为空”的 RangeError。
  // 非空时先让每一项经过 clampScore，再用受限后的总和除以项数。
  // 下面的 0 是临时平均值，不表示任何输入都应得到 0。
  return 0;
}
async function loadScores(): Promise<readonly number[]> {
  await Promise.resolve();
  return [90, 70];
}
function assertEqual<T>(actual: T, expected: T, label: string): void {
  // TODO 3：比较本次 actual 与 expected。Object.is 为 true 时输出“通过: label”；
  // 为 false 时抛错，错误信息要同时带上 label、expected 和 actual，不能继续报告通过。
}
function assertThrows(action: () => void, expectedMessage: string, label: string): void {
  // TODO 4：调用 action；只有捕获到 RangeError 且 message 等于 expectedMessage，
  // 才输出“通过: label”。其他错误要继续抛出；action 没抛错时，在 catch 外报告测试失败。
}
let testCount = 0;
const ordinaryAverage = averageScore([20, 40, 60]);
assertEqual(ordinaryAverage, 40, "普通平均分");
// TODO 5：四条断言各自真正通过后才把 testCount 加 1；不要在断言前或无条件累加。
const clampedAverage = averageScore([-10, 120]);
assertEqual(clampedAverage, 50, "分数限制在 0 到 100");
assertThrows(() => averageScore([]), "成绩列表不能为空", "空列表会报错");
const loadedAverage = averageScore(await loadScores());
assertEqual(loadedAverage, 80, "异步成绩");
// TODO 6：用最终 testCount 输出题目要求的“共 4 个测试”格式。
console.log(`当前已记录 ${testCount} 个通过测试（完成 TODO 后应更新）`);
