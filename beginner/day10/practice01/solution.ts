// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type TicketId = string | number;
type TopicInput = string | string[];
type Priority = "low" | "medium" | "high";
interface EmailContact {
  name: string;
  email: string;
}
interface PhoneContact {
  name: string;
  phone: string;
}
type Contact = EmailContact | PhoneContact;
function formatTicketId(id: TicketId): string {
  if (typeof id === "string") {
    // 这里 id 已收窄为 string。
    return ""; // TODO：空字符串只是 string 占位；把当前 string 类型的 id 转成大写，并在前面加 "编号: " 后返回。
  }
  // 这里剩余成员是 number。
  return ""; // TODO：空字符串只是 string 占位；把当前 number 类型的 id 放在 "#" 后，再加 "编号: " 前缀并返回。
}
function describeTopics(topics: TopicInput): string {
  if (Array.isArray(topics)) {
    // 这里 topics 已收窄为 string[]。
    return ""; // TODO：空字符串只是 string 占位；用 ", " 连接当前 string[] topics，在前面加 "主题列表: " 并返回。
  }
  return ""; // TODO：空字符串只是 string 占位；当前 topics 是单个 string，在前面加 "主题: " 并返回。
}
function describeContact(contact: Contact): string {
  if ("email" in contact) {
    // 这里 contact 已收窄为 EmailContact。
    return ""; // TODO：空字符串只是 string 占位；读取 EmailContact 的 contact.email，在前面加 "邮箱: " 并返回。
  }
  // 这里 contact 已收窄为 PhoneContact。
  return ""; // TODO：空字符串只是 string 占位；读取 PhoneContact 的 contact.phone，在前面加 "电话: " 并返回。
}
function describePriority(priority: Priority): string {
  if (priority === "high") {
    return ""; // TODO：空字符串只是 string 占位；priority 为 "high" 时返回带“立即处理”提示的完整优先级文字。
  }
  return ""; // TODO：空字符串只是 string 占位；当前 priority 只能是 "low" 或 "medium"，在前面加 "优先级: " 并返回。
}
const emailContact: EmailContact = {
  name: "Lin",
  email: "a@example.com",
};
const phoneContact: PhoneContact = {
  name: "Mei",
  phone: "13800000000",
};
console.log(formatTicketId("ts-10"));
console.log(formatTicketId(42));
console.log(describeTopics("variables"));
console.log(describeTopics(["variables", "arrays"]));
console.log(describeContact(emailContact));
console.log(describeContact(phoneContact));
console.log(describePriority("high"));
