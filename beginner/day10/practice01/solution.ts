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
    // 字符串分支可以调用 string 的 toUpperCase，再 return 格式化结果。
    return `编号: ${id.toUpperCase()}`;
  }
  // 剩余分支中的 id 是 number，用模板字符串把它放在 # 后。
  return `编号: #${id}`;
}

function describeTopics(topics: TopicInput): string {
  if (Array.isArray(topics)) {
    // 数组分支用 join 连接所有主题，再 return 一行列表。
    return `主题列表: ${topics.join(", ")}`;
  }
  // 剩余分支是单个 string，直接放进主题文字。
  return `主题: ${topics}`;
}

function describeContact(contact: Contact): string {
  if ("email" in contact) {
    // 存在 email 字段时，contact 已收窄为 EmailContact。
    return `邮箱: ${contact.email}`;
  }
  // 剩余成员是 PhoneContact，因此可以安全读取 phone。
  return `电话: ${contact.phone}`;
}

function describePriority(priority: Priority): string {
  if (priority === "high") {
    // high 分支额外返回立即处理提示。
    return `优先级: ${priority}（立即处理）`;
  }
  return `优先级: ${priority}`;
}

const emailContact: EmailContact = {
  name: "Lin",
  email: "a@example.com",
};
const phoneContact: PhoneContact = {
  name: "Mei",
  phone: "13800000000",
};

// 调用关系：各固定输入 -> 对应收窄函数 -> string 返回值 -> console.log。
console.log(formatTicketId("ts-10"));
console.log(formatTicketId(42));
console.log(describeTopics("variables"));
console.log(describeTopics(["variables", "arrays"]));
console.log(describeContact(emailContact));
console.log(describeContact(phoneContact));
console.log(describePriority("high"));
