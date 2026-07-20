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
    return `编号: ${id.toUpperCase()}`;
  }

  return `编号: #${id}`;
}

function describeTopics(topics: TopicInput): string {
  if (Array.isArray(topics)) {
    return `主题列表: ${topics.join(", ")}`;
  }

  return `主题: ${topics}`;
}

function describeContact(contact: Contact): string {
  if ("email" in contact) {
    return `邮箱: ${contact.email}`;
  }

  return `电话: ${contact.phone}`;
}

function describePriority(priority: Priority): string {
  if (priority === "high") {
    return "优先级: high（立即处理）";
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

console.log(formatTicketId("ts-10"));
console.log(formatTicketId(42));
console.log(describeTopics("variables"));
console.log(describeTopics(["variables", "arrays"]));
console.log(describeContact(emailContact));
console.log(describeContact(phoneContact));
console.log(describePriority("high"));

export {};
