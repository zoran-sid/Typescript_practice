// 解题结构提示：本文件不是完整答案，请沿 TODO 自己补全。
type ScoreFormatter = (score: number) => string;
type Reporter = (message: string) => void;
const formatScore: ScoreFormatter = (score) => {
  // TODO：根据 60 分及格线返回两种格式；花括号函数体不要漏掉 return。
  return "";
};
function greetStudent(name: string, title?: string, punctuation = "!"): string {
  // TODO：先处理可选 title，再与默认 punctuation 组合。
  return "";
}
function sumScores(...scores: number[]): number {
  // TODO：scores 在函数内是数组，请累计所有元素。
  return 0;
}
function reportScores(
  scores: readonly number[],
  formatter: ScoreFormatter,
  reporter: Reporter,
): number {
  let passedCount = 0;
  for (const score of scores) {
    // TODO：先格式化再报告；满足及格条件时更新 passedCount。
  }
  return passedCount;
}
const scores = [55, 80, 100] as const;
// TODO：完成函数后，在这里依次调用问候、报告、求和并输出结果。
