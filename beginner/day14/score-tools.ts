export const passingScore = 60;

export default function formatScore(score: number): string {
  const label = score >= passingScore ? "通过" : "未通过";
  return score + "：" + label;
}
