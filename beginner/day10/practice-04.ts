type EmailContact = {
  name: string;
  email: string;
};

type PhoneContact = {
  name: string;
  phone: string;
};

function formatContact(contact: EmailContact | PhoneContact): string {
  // TODO：用 "email" in contact 判断当前对象拥有哪个属性。
  if ("email" in contact) {
    return contact.email;
  }

  return contact.phone;
}

console.log(formatContact({ name: "Lin", email: "a@example.com" }));
console.log(formatContact({ name: "Mei", phone: "13800000000" }));

export {};
