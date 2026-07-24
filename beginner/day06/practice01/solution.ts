// 这是教学脚手架，不是完整答案。请完成所有 TODO。
const originalTask = {
  title: "完成对象练习",
  done: false,
  student: {
    name: "Mei",
    city: "成都",
  },
  scores: [88, 92, 90],
};
// 方案一骨架：全局循环直接修改外部数组。
const scoresFromGlobalLoop: number[] = [];
for (const score of originalTask.scores) {
  // score 是每轮的局部绑定；目标数组在循环外，因此循环结束后仍可访问。
  // TODO：把当前 score 加入 scoresFromGlobalLoop。
}
// 方案二骨架：源数组经参数进入函数，局部 result 经 return 离开函数。
function copyScores(source: number[]): number[] {
  const result: number[] = [];
  for (const score of source) {
    // source、result、score 都只在本次函数调用内可见。
    // TODO：把当前 score 加入 result。
  }
  return result;
}
const copiedScores = copyScores(originalTask.scores);
const copiedTask = {
  title: "", // TODO：读取原对象的对应属性。
  done: false, // TODO：先复制原状态。
  student: {
    name: "", // TODO：从原对象读取，并保持嵌套对象独立。
    city: "", // TODO：从原对象读取。
  },
  scores: copiedScores,
};
// TODO：只修改 copiedTask 的完成状态，不影响 originalTask。
function calculateAverage(record: { scores: number[] }): number {
  let total = 0;
  for (const score of record.scores) {
    // TODO：把当前分数累加到函数局部变量 total。
  }
  const average = 0; // TODO：使用 total 和数组长度计算。
  return average;
}
const averageScore = calculateAverage(copiedTask);
console.log(`原任务完成: ${originalTask.done}`);
console.log(`副本完成: ${copiedTask.done}`);
console.log(`学生: ${copiedTask.student.name}（${copiedTask.student.city}）`);
console.log(`平均分: ${averageScore}`);
