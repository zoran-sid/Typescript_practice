const student = {
  name: "Mei",
  address: {
    city: "成都",
  },
  scores: [80, 90, 100],
};

let total = 0;
for (const score of student.scores) {
  total += score;
}

const average = total / student.scores.length;

console.log(`姓名: ${student.name}`);
console.log(`城市: ${student.address.city}`);
console.log(`平均分: ${average}`);

export {};
