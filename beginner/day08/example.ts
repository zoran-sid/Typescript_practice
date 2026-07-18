const contacts = [
  { name: "Lin", phone: "13800000000" },
  { name: "Mei" },
];

const selectedContact = contacts.find((contact) => contact.name === "Mei");
const phone = selectedContact?.phone ?? "未提供";

const score: number | undefined = 0;
const nickname: string | undefined = "";

console.log(`联系人: ${selectedContact?.name ?? "未找到"}`);
console.log(`电话: ${phone}`);
console.log(`分数显示: ${score ?? 100}`);
console.log(`昵称显示: ${JSON.stringify(nickname ?? "匿名")}`);

export {};
