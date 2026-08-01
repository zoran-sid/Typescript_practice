type ApiModel = {
  user: { readonly id: string; name: string };
  orders: readonly { readonly id: string; item: string }[];
};
type GetterName<Name extends string> = `get${Capitalize<Name>}`;
type Getters<T> = {
  [Key in keyof T as Key extends string ? GetterName<Key> : never]: () => Promise<T[Key]>;
};
type Resolved<T> = T extends Promise<infer Value> ? Value : T;
type ElementOf<T> = T extends readonly (infer Item)[] ? Item : never;

const client = {
  async getUser(): Promise<ApiModel["user"]> {
    return { id: "usr_1", name: "Ada" };
  },
  async getOrders(): Promise<ApiModel["orders"]> {
    return [
      { id: "order_1", item: "keyboard" },
      { id: "order_2", item: "mouse" },
    ];
  },
} satisfies Getters<ApiModel>;

type LoadedUser = Resolved<ReturnType<typeof client.getUser>>;
type Order = ElementOf<ApiModel["orders"]>;
const checkedUser: LoadedUser = { id: "usr_1", name: "Ada" };
const checkedOrder: Order = { id: "order_1", item: "keyboard" };
void checkedUser;
void checkedOrder;

const method: GetterName<"user"> = "getUser";
// 调用关系：client getter -> await Promise -> user/orders -> 读取字段 -> 输出。
const user = await client.getUser();
const orders = await client.getOrders();
console.log(`Method: ${method}`);
console.log(`User: ${user.name}`);
console.log(`First order: ${orders[0]?.item ?? "none"}`);
console.log(`Loaded orders: ${orders.length}`);
