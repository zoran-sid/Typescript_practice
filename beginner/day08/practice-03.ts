const users = [
  { id: 1, name: "Lin" },
  { id: 2, name: "Mei" },
];

const foundUser = users.find((user) => user.id === 99);

// TODO：找不到时使用题目指定的文字。
const resultText = foundUser?.name ?? "请稍后";

console.log(`结果: ${resultText}`);

export {};
