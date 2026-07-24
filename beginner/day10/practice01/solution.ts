// 这是教学脚手架，不是完整答案。请完成所有 TODO。
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
    return ""; // TODO：使用字符串专属方法并按要求格式化。
  }
  // 这里剩余成员是 number。
  return ""; // TODO：格式化数字编号。
}
function describeTopics(topics: TopicInput): string {
  if (Array.isArray(topics)) {
    // 这里 topics 已收窄为 string[]。
    return ""; // TODO：连接数组并加正确前缀。
  }
  return ""; // TODO：处理单个 string 主题。
}
function describeContact(contact: Contact): string {
  if ("email" in contact) {
    // 这里 contact 已收窄为 EmailContact。
    return ""; // TODO：返回邮箱说明。
  }
  // 这里 contact 已收窄为 PhoneContact。
  return ""; // TODO：返回电话说明。
}
function describePriority(priority: Priority): string {
  if (priority === "high") {
    return ""; // TODO：处理高优先级的特殊文字。
  }
  return ""; // TODO：处理其余合法字面量。
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
