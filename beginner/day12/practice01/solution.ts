type ScoreFormatter = (score: number) => string;
type Reporter = (message: string) => void;

const formatScore: ScoreFormatter = (score) => {
  // 回调收到当前分数，判断后必须 return 本轮要展示的文字。
  const result = score >= 60 ? "通过" : "未通过";
  return `成绩：${score}（${result}）`;
};

function greetStudent(
  name: string,
  title?: string,
  punctuation = "!",
): string {
  const displayTitle = title ?? "同学";
  return `你好，${name}${displayTitle}${punctuation}`;
}

function sumScores(...scores: number[]): number {
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  return total;
}

function reportScores(
  scores: readonly number[],
  formatter: ScoreFormatter,
  reporter: Reporter,
): number {
  let passedCount = 0;
  for (const score of scores) {
    // 调用关系：score -> formatter(score) -> message -> reporter(message)。
    const message = formatter(score);
    reporter(message);
    if (score >= 60) {
      passedCount += 1;
    }
  }
  return passedCount;
}

const scores = [55, 80, 100] as const;

// 调用关系：固定姓名 -> greetStudent(...) -> greeting -> console.log。
const greeting = greetStudent("Ada");
console.log(greeting);

// 调用关系：scores + formatScore + console.log -> reportScores -> passedCount。
const passedCount = reportScores(scores, formatScore, console.log);
// 调用关系：scores 展开为三个参数 -> sumScores -> totalScore。
const totalScore = sumScores(...scores);
console.log(`总分：${totalScore}`);
console.log(`通过数量：${passedCount}`);
