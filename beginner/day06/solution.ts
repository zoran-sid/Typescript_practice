const originalTask = {
  title: "完成对象练习",
  done: false,
  student: {
    name: "Mei",
    city: "成都",
  },
  scores: [88, 92, 90],
};

const copiedScores: number[] = [];

for (const score of originalTask.scores) {
  copiedScores.push(score);
}

const copiedTask = {
  title: originalTask.title,
  done: originalTask.done,
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

  return total / record.scores.length;
}

const averageScore = calculateAverage(copiedTask);

console.log(`原任务完成: ${originalTask.done}`);
console.log(`副本完成: ${copiedTask.done}`);
console.log(
  `学生: ${copiedTask.student.name}（${copiedTask.student.city}）`,
);
console.log(`平均分: ${averageScore}`);

export {};
