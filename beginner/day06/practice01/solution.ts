const originalTask = {
  title: "完成对象练习",
  done: false,
  student: {
    name: "Mei",
    city: "成都",
  },
  scores: [88, 92, 90],
};

// 方案一：固定数据 -> 全局 for...of -> copiedScores。
const copiedScores: number[] = [];
for (const score of originalTask.scores) {
  // 循环每次把当前 score 追加到循环外的数组。
  copiedScores.push(score);
}

// 方案二：source 参数 -> 局部 result -> return -> 调用处。
function copyScores(source: number[]): number[] {
  const result: number[] = [];
  for (const score of source) {
    result.push(score);
  }
  return result;
}

// 调用关系：originalTask.scores -> copyScores -> scoresFromFunction。
const scoresFromFunction = copyScores(originalTask.scores);
void scoresFromFunction;

const copiedTask = {
  title: originalTask.title,
  done: originalTask.done,
  // 新建 student 对象，避免副本与原对象共用同一层嵌套对象。
  student: {
    name: originalTask.student.name,
    city: originalTask.student.city,
  },
  scores: copiedScores,
};
copiedTask.done = true;

function calculateAverage(record: { scores: number[] }): number {
  let total = 0;
  for (const score of record.scores) {
    total = total + score;
  }
  // return 把局部计算结果交回 calculateAverage 的调用处。
  return total / record.scores.length;
}

// 调用关系：copiedTask -> calculateAverage -> averageScore -> console.log。
const averageScore = calculateAverage(copiedTask);
console.log(`原任务完成: ${originalTask.done}`);
console.log(`副本完成: ${copiedTask.done}`);
console.log(`学生: ${copiedTask.student.name}（${copiedTask.student.city}）`);
console.log(`平均分: ${averageScore}`);
