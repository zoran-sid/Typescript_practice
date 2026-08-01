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

// 调用关系：contacts -> find 回调判断姓名 -> selectedContact。
const selectedContact = contacts.find((contact) => {
  return contact.name === "Mei";
});

// ?. 遇到缺失值就停止访问并得到 undefined；?? 再换成界面默认文字。
const selectedName = selectedContact?.name ?? "未找到";
const selectedPhone = selectedContact?.phone ?? "未提供";
const selectedCity = selectedContact?.address?.city ?? "未填写";

const score: number | undefined = 0;
const nickname: string | undefined = "";
// ?? 只替换 null/undefined，因此会保留有效的 0 和空字符串。
const displayedScore = score ?? 100;
const displayedNickname = nickname ?? "匿名";

// 调用关系：安全访问结果和默认值结果 -> console.log -> 联系人展示。
console.log(`联系人: ${selectedName}`);
console.log(`电话: ${selectedPhone}`);
console.log(`城市: ${selectedCity}`);
console.log(`分数: ${displayedScore}`);
console.log(`昵称: ${JSON.stringify(displayedNickname)}`);
