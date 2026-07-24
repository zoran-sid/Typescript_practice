// 这是教学脚手架，不是完整答案。请完成所有 TODO。
const contacts: {
  name: string;
  phone?: string;
  address?: {
    city?: string;
  };
}[] = [
  {
    name: "Lin",
    phone: "13800000000",
    address: { city: "上海" },
  },
  {
    name: "Mei",
    address: {},
  },
];
const selectedContact = contacts.find((contact) => {
  // TODO：比较姓名并返回 boolean。
  return false;
});
const selectedName = ""; // TODO：使用 ?. 与 ?? 安全读取姓名。
const selectedPhone = ""; // TODO：为缺失电话提供题目指定后备值。
const selectedCity = ""; // TODO：安全访问两层可选属性。
const score: number | undefined = 0;
const nickname: string | undefined = "";
const displayedScore = -1; // TODO：用 ?? 保留有效的 0。
const displayedNickname = "TODO"; // TODO：用 ?? 保留有效的空字符串。
console.log(`联系人: ${selectedName}`);
console.log(`电话: ${selectedPhone}`);
console.log(`城市: ${selectedCity}`);
console.log(`分数: ${displayedScore}`);
console.log(`昵称: ${JSON.stringify(displayedNickname)}`);
