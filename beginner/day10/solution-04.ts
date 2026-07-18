type EmailContact = {
  name: string;
  email: string;
};

type PhoneContact = {
  name: string;
  phone: string;
};

function formatContact(contact: EmailContact | PhoneContact): string {
  if ("email" in contact) {
    return `邮箱: ${contact.email}`;
  }

  return `电话: ${contact.phone}`;
}

console.log(formatContact({ name: "Lin", email: "a@example.com" }));
console.log(formatContact({ name: "Mei", phone: "13800000000" }));

export {};
