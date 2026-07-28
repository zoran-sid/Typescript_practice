// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type ScoreFormatter = (score: number) => string;
type Reporter = (message: string) => void;
const formatScore: ScoreFormatter = (score) => {
  // TODO：检查当前 score 是否大于等于 60；分别生成“成绩：分数（通过）”或“成绩：分数（未通过）”。
  // 花括号函数体必须明确 return；下面的 "" 只是临时占位，完成时要替换。
  return "";
};
function greetStudent(name: string, title?: string, punctuation = "!"): string {
  // TODO：title 缺席时改用“同学”，再按“你好、name、称呼、punctuation”的顺序组成问候语。
  // 下面的 "" 只是临时占位；punctuation 已由参数默认值处理，不要在函数里写死。
  return "";
}
function sumScores(...scores: number[]): number {
  // TODO：遍历 rest 参数收集到的 scores 数组，把每个分数累加后返回总分。
  // 下面的 0 是初始/空数组占位；有元素时必须返回真实累计结果。
  return 0;
}
function reportScores(
  scores: readonly number[],
  formatter: ScoreFormatter,
  reporter: Reporter,
): number {
  let passedCount = 0;
  for (const score of scores) {
    // TODO：把当前 score 交给 formatter，将它返回的文字交给 reporter；score >= 60 时让 passedCount 增加 1。
  }
  return passedCount;
}
const scores = [55, 80, 100] as const;
// TODO：输出 greetStudent 的问候；以 console.log 作为 Reporter 调用 reportScores；再输出 sumScores 的总分和 reportScores 返回的及格数。
