const users = [
  { id: 1, name: "Lin" },
  { id: 2, name: "Mei" },
];

const foundUser = users.find((user) => user.id === 99);
const resultText = foundUser?.name ?? "未找到";

console.log(`结果: ${resultText}`);

export {};
