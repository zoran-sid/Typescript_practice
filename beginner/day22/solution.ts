function clampScore(score: number): number {
  return Math.min(100, Math.max(0, score));
}

function averageScore(scores: readonly number[]): number {
  if (scores.length === 0) {
    throw new RangeError("成绩列表不能为空");
  }

  const total = scores.reduce((sum, score) => sum + clampScore(score), 0);
  return total / scores.length;
}

async function loadScores(): Promise<readonly number[]> {
  await Promise.resolve();
  return [90, 70];
}

function assertEqual<T>(actual: T, expected: T, label: string): void {
  if (!Object.is(actual, expected)) {
    throw new Error(`${label} 失败：期望 ${String(expected)}，实际 ${String(actual)}`);
  }

  console.log(`通过: ${label}`);
}

function assertThrows(
  action: () => void,
  expectedMessage: string,
  label: string,
): void {
  try {
    action();
  } catch (error: unknown) {
    if (error instanceof RangeError && error.message === expectedMessage) {
      console.log(`通过: ${label}`);
      return;
    }

    throw error;
  }

  throw new Error(`${label} 失败：没有抛出预期错误`);
}

let testCount = 0;

const ordinaryScores = [20, 40, 60];
const ordinaryAverage = averageScore(ordinaryScores);
assertEqual(ordinaryAverage, 40, "普通平均分");
testCount += 1;

const outOfRangeScores = [-10, 120];
const clampedAverage = averageScore(outOfRangeScores);
assertEqual(clampedAverage, 50, "分数限制在 0 到 100");
testCount += 1;

assertThrows(
  () => averageScore([]),
  "成绩列表不能为空",
  "空列表会报错",
);
testCount += 1;

const loadedScores = await loadScores();
const loadedAverage = averageScore(loadedScores);
assertEqual(loadedAverage, 80, "异步成绩");
testCount += 1;

console.log(`共 ${testCount} 个测试`);
