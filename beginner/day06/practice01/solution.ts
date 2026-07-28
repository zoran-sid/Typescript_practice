// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
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
// 上面的 [] 是准备接收分数的真实空数组，不是占位答案。
for (const score of originalTask.scores) {
  // score 是每轮的局部绑定；目标数组在循环外，因此循环结束后仍可访问。
  // TODO：本轮输入是 originalTask.scores 中的 score；把它追加到外部数组 scoresFromGlobalLoop。
}
// 方案二骨架：源数组经参数进入函数，局部 result 经 return 离开函数。
function copyScores(source: number[]): number[] {
  const result: number[] = [];
  // 上面的 [] 是本次调用用来收集副本的真实空数组，不是占位答案。
  for (const score of source) {
    // source、result、score 都只在本次函数调用内可见。
    // TODO：本轮输入是 source 中的 score；把它追加到函数局部数组 result，最后由 return 交回完整副本。
  }
  return result;
}
const copiedScores = copyScores(originalTask.scores);
const copiedTask = {
  title: "", // TODO：空字符串只是 string 类型占位；读取 originalTask.title，并把它保存为 copiedTask.title。
  done: false, // TODO：false 是 boolean 类型占位；读取 originalTask.done 作为副本初始状态，不要在这里写死结果。
  student: {
    name: "", // TODO：空字符串只是占位；读取 originalTask.student.name。当前这对新花括号要保持为独立的 student 对象。
    city: "", // TODO：空字符串只是占位；读取 originalTask.student.city，并保存到新 student 对象的 city。
  },
  scores: copiedScores,
};
// TODO：创建副本后，只把 copiedTask.done 更新为 true；不要写入 originalTask.done。
function calculateAverage(record: { scores: number[] }): number {
  let total = 0;
  for (const score of record.scores) {
    // TODO：本轮输入是 record.scores 中的 score；读取旧 total，加上 score，再把新总和赋值回局部变量 total。
  }
  const average = 0; // TODO：0 只是 number 类型占位；用 total 除以 record.scores.length，并把结果保存到 average。
  return average;
}
const averageScore = calculateAverage(copiedTask);
console.log(`原任务完成: ${originalTask.done}`);
console.log(`副本完成: ${copiedTask.done}`);
console.log(`学生: ${copiedTask.student.name}（${copiedTask.student.city}）`);
console.log(`平均分: ${averageScore}`);
