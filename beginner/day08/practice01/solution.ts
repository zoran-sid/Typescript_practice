// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
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
  // TODO：当前输入是 contacts 中的一位 contact；判断 contact.name 是否为 "Mei"。
  // find 收到 true 会交回当前联系人，收到 false 会继续查找。下面的 false 只是 boolean 占位，完成时要替换。
  return false;
});
const selectedName = ""; // TODO：空字符串只是占位；用 ?. 读取 selectedContact 的 name，缺失时用 ?? 选择 "未找到"，并保存到 selectedName。
const selectedPhone = ""; // TODO：空字符串只是占位；安全读取 selectedContact 的 phone，缺失时选择 "未提供"，并保存到 selectedPhone。
const selectedCity = ""; // TODO：空字符串只是占位；依次安全访问 selectedContact、address、city，缺失时选择 "未填写"，并保存到 selectedCity。
const score: number | undefined = 0; // 这里的 0 是题目要求保留的有效输入，不是占位值。
const nickname: string | undefined = ""; // 这里的空字符串是题目要求保留的有效输入，不是占位值。
const displayedScore = -1; // TODO：-1 只是 number 类型占位；用 ?? 在 score 缺失时选择 100，保留有效的 0，并把结果保存到 displayedScore。
const displayedNickname = "TODO"; // TODO："TODO" 只是 string 占位；用 ?? 在 nickname 缺失时选择 "匿名"，保留有效空字符串，并保存到 displayedNickname。
console.log(`联系人: ${selectedName}`);
console.log(`电话: ${selectedPhone}`);
console.log(`城市: ${selectedCity}`);
console.log(`分数: ${displayedScore}`);
console.log(`昵称: ${JSON.stringify(displayedNickname)}`);
