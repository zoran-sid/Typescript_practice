function clampScore(score: number): number {
  // 分支关系：先处理下界，再处理上界，其余分数原样返回。
  if (score < 0) return 0;
  if (score > 100) return 100;
  return score;
}

function averageScore(scores: readonly number[]): number {
  if (scores.length === 0) {
    throw new RangeError("成绩列表不能为空");
  }

  // 回调关系：map 把每个原始分数交给 clampScore，得到受限后的新数组。
  const clampedScores = scores.map((score) => clampScore(score));
  // 回调关系：reduce 每轮把当前分数加进累计值，并把新累计值 return 给下一轮。
  const total = clampedScores.reduce((sum, score) => sum + score, 0);
  return total / clampedScores.length;
}

async function loadScores(): Promise<readonly number[]> {
  await Promise.resolve();
  return [90, 70];
}

function assertEqual<T>(actual: T, expected: T, label: string): void {
  if (!Object.is(actual, expected)) {
    throw new Error(`${label}: expected ${String(expected)}, actual ${String(actual)}`);
  }
  console.log(`通过: ${label}`);
}

function assertThrows(action: () => void, expectedMessage: string, label: string): void {
  try {
    action();
  } catch (error: unknown) {
    if (error instanceof RangeError && error.message === expectedMessage) {
      console.log(`通过: ${label}`);
      return;
    }
    throw error;
  }
  throw new Error(`${label}: expected RangeError("${expectedMessage}")`);
}

let testCount = 0;

// 调用关系：固定数据 -> averageScore -> ordinaryAverage -> assertEqual -> 计数。
const ordinaryAverage = averageScore([20, 40, 60]);
assertEqual(ordinaryAverage, 40, "普通平均分");
testCount += 1;

const clampedAverage = averageScore([-10, 120]);
assertEqual(clampedAverage, 50, "分数限制在 0 到 100");
testCount += 1;

// 调用关系：箭头函数延迟调用 averageScore([])，让 assertThrows 捕获指定错误。
assertThrows(() => averageScore([]), "成绩列表不能为空", "空列表会报错");
testCount += 1;

// 调用关系：loadScores -> await 得到数组 -> averageScore -> loadedAverage -> 断言。
const loadedAverage = averageScore(await loadScores());
assertEqual(loadedAverage, 80, "异步成绩");
testCount += 1;

console.log(`共 ${testCount} 个测试`);
