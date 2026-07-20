type ScoreFormatter = (score: number) => string;
type Reporter = (message: string) => void;

const formatScore: ScoreFormatter = (score) => {
  return score >= 60
    ? `成绩：${score}（通过）`
    : `成绩：${score}（未通过）`;
};

function greetStudent(
  name: string,
  title?: string,
  punctuation = "!",
): string {
  return `你好，${name}${title ?? "同学"}${punctuation}`;
}

function sumScores(...scores: number[]): number {
  return scores.reduce((total, score) => total + score, 0);
}

function reportScores(
  scores: readonly number[],
  formatter: ScoreFormatter,
  reporter: Reporter,
): number {
  let passedCount = 0;

  for (const score of scores) {
    reporter(formatter(score));
    if (score >= 60) {
      passedCount += 1;
    }
  }

  return passedCount;
}

const scores = [55, 80, 100] as const;

console.log(greetStudent("Ada"));
const passedCount = reportScores(scores, formatScore, console.log);
console.log(`总分：${sumScores(...scores)}`);
console.log(`通过数量：${passedCount}`);
