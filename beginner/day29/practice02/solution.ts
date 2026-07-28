// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type ApiModel = {
  user: { readonly id: string; name: string };
  orders: readonly { readonly id: string; item: string }[];
};
// TODO 1：把 string 占位换成模板字面量：`get${Capitalize<Name>}`。
type GetterName<Name extends string> = string;
type Getters<T> = {
  // TODO 2：遍历 T 的字符串键，用 GetterName<Key> 重映射键；
  // 每个值应是无参函数，并返回 Promise<T[Key]>。可选标记只是让下方占位客户端暂时通过，
  // 完成时要删除 ?，让新增资源会强制要求实现对应方法。
  [Key in keyof T as Key extends string ? GetterName<Key> : never]?: unknown;
};
type Resolved<T> = T extends Promise<unknown>
  ? unknown // TODO 3：在 Promise 的匹配位置用 infer 命名内部值，并替换此 unknown。
  : T;
type ElementOf<T> = T extends readonly unknown[]
  ? unknown // TODO 4：在只读数组的匹配位置用 infer 提取单项类型。
  : never;
const client = {
  async getUser(): Promise<ApiModel["user"]> {
    // TODO 5：返回题目指定的用户字段；空值只是运行时占位。
    return { id: "", name: "" };
  },
  async getOrders(): Promise<ApiModel["orders"]> {
    // TODO 6：返回 keyboard、mouse 两项订单；[] 是“尚未填写”，不是本题固定数据。
    return [];
  },
};
// TODO 7：完成 Getters 后让 client 使用 `satisfies Getters<ApiModel>` 接受完整契约检查；
// 再创建 LoadedUser = Resolved<ReturnType<typeof client.getUser>> 与
// Order = ElementOf<ApiModel["orders"]>，用测试变量确认它们保留字段。
type ClientContract = Getters<ApiModel>;
// 先把鼠标移到 ClientContract 上观察当前占位结构；完成 TODO 2 后，它应要求 getUser 与 getOrders。
const method: GetterName<"user"> = "getUser";
const user = await client.getUser();
const orders = await client.getOrders();
console.log(`Method: ${method}`);
console.log(`User: ${user.name}`);
console.log(`First order: ${orders[0]?.item ?? "none"}`);
console.log(`Loaded orders: ${orders.length}`);
