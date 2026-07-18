type Account = {
  id: number;
  name: string;
  email: string;
  active: boolean;
};

type PublicAccount = Omit<Account, "email">;

const account: Account = {
  id: 1,
  name: "Ada",
  email: "ada@example.com",
  active: true,
};

const { email: _privateEmail, ...publicAccount } = account;
const checkedPublicAccount: PublicAccount = publicAccount;

console.log("公开字段：" + Object.keys(checkedPublicAccount).join(","));
