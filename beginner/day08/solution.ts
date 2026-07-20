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

const selectedContact = contacts.find(
  (contact) => contact.name === "Mei",
);

const selectedName = selectedContact?.name ?? "未找到";
const selectedPhone = selectedContact?.phone ?? "未提供";
const selectedCity =
  selectedContact?.address?.city ?? "未填写";

const score: number | undefined = 0;
const nickname: string | undefined = "";

console.log(`联系人: ${selectedName}`);
console.log(`电话: ${selectedPhone}`);
console.log(`城市: ${selectedCity}`);
console.log(`分数: ${score ?? 100}`);
console.log(`昵称: ${JSON.stringify(nickname ?? "匿名")}`);

export {};
