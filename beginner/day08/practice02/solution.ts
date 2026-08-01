const contacts: Array<{ name: string; phone?: string }> = [
  { name: "Lin", phone: "13800000000" },
  { name: "Mei" },
];

// 调用关系：contacts -> find 回调 -> selectedContact。
const selectedContact = contacts.find((contact) => {
  return contact.name === "Mei";
});

const selectedName = selectedContact?.name ?? "未找到";
const phone = selectedContact?.phone ?? "未提供";

const score: number | undefined = 0;
const nickname: string | undefined = "";
// ?? 只把 null/undefined 当作缺失，不会误伤 0 或空字符串。
const displayedScore = score ?? 100;
const displayedNickname = nickname ?? "匿名";

// 调用关系：查找结果 -> 安全读取和默认值 -> console.log。
console.log(`联系人: ${selectedName}`);
console.log(`电话: ${phone}`);
console.log(`分数显示: ${displayedScore}`);
console.log(`昵称显示: ${JSON.stringify(displayedNickname)}`);
