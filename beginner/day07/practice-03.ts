const users = [
  { id: 1, name: "Lin" },
  { id: 2, name: "Mei" },
  { id: 3, name: "Chen" },
];

// TODO：查找 id 为 3 的用户。
const foundUser = users.find((user) => user.id === 99);
let foundName = "未找到";

if (foundUser !== undefined) {
  foundName = foundUser.name;
}

console.log(`找到: ${foundName}`);

export {};
