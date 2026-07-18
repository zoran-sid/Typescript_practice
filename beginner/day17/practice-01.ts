type Account = {
  id: number;
  name: string;
  email: string;
  active: boolean;
};

type PublicAccount = Account;

const account: Account = {
  id: 1,
  name: "Ada",
  email: "ada@example.com",
  active: true,
};

const publicAccount: PublicAccount = account;

console.log("公开字段：" + Object.keys(publicAccount).join(","));
