// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
const contacts: Array<{ name: string; phone?: string }> = [
  { name: "Lin", phone: "13800000000" },
  { name: "Mei" },
];
const selectedContact = contacts.find((contact) => {
  // TODO：当前输入是 contacts 中的一位 contact；判断 contact.name 是否为 "Mei"。
  // find 收到 true 会交回当前联系人，收到 false 会继续查找。下面的 false 只是 boolean 占位，完成时要替换。
  return false;
});
const selectedName = ""; // TODO：空字符串只是占位；安全读取 selectedContact.name，缺失时选择 "未找到"，并保存到 selectedName。
const phone = ""; // TODO：空字符串只是占位；安全读取 selectedContact.phone，缺失时选择 "未提供"，并保存到 phone。
const score: number | undefined = 0; // 这里的 0 是题目要求保留的有效输入，不是占位值。
const nickname: string | undefined = ""; // 这里的空字符串是题目要求保留的有效输入，不是占位值。
const displayedScore = -1; // TODO：-1 只是 number 类型占位；用 ?? 在 score 缺失时选择 100，不要让 || 错误替换有效的 0。
const displayedNickname = "TODO"; // TODO："TODO" 只是 string 占位；用 ?? 在 nickname 缺失时选择 "匿名"，并保留有效的空字符串。
console.log(`联系人: ${selectedName}`);
console.log(`电话: ${phone}`);
console.log(`分数显示: ${displayedScore}`);
console.log(`昵称显示: ${JSON.stringify(displayedNickname)}`);
