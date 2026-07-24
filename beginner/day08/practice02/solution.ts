// 这是教学脚手架，不是完整答案。请完成所有 TODO。
const contacts: Array<{ name: string; phone?: string }> = [
  { name: "Lin", phone: "13800000000" },
  { name: "Mei" },
];
const selectedContact = contacts.find((contact) => {
  // TODO：返回姓名是否匹配。
  return false;
});
const selectedName = ""; // TODO：用 ?. 与 ?? 生成联系人显示值。
const phone = ""; // TODO：安全读取电话并提供后备文字。
const score: number | undefined = 0;
const nickname: string | undefined = "";
const displayedScore = -1; // TODO：用 ??，不要用 ||。
const displayedNickname = "TODO"; // TODO：保留空字符串。
console.log(`联系人: ${selectedName}`);
console.log(`电话: ${phone}`);
console.log(`分数显示: ${displayedScore}`);
console.log(`昵称显示: ${JSON.stringify(displayedNickname)}`);
