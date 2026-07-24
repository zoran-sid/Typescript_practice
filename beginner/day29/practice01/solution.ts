// 解题结构提示：高级类型保留转换形状，但关键右侧类型留作 TODO。
type FeatureConfig = { darkMode: string; retries: number };
type Flags<T> = {
  // TODO 1：确认遍历哪些键，并把 unknown 改成题目要求的标记类型。
  [Key in keyof T]: unknown;
};
type ElementOf<T> = T extends readonly unknown[]
  ? unknown // TODO 2：在数组结构中用 infer 提取元素。
  : never;
type Events = { ready: { at: number }; failed: { message: string } };
type Handlers<T> = {
  // TODO 3：重映射成 onXxx，并把 unknown 改成接收 T[Key] 的处理函数。
  [Key in keyof T as `on${Capitalize<Key & string>}`]?: unknown;
};
declare const userIdBrand: unique symbol;
type UserId = string & { readonly [userIdBrand]: true };
function createUserId(value: string): UserId | undefined {
  // TODO 4：先验证 usr_ 前缀与有效内容，成功时才在此边界建立品牌值。
  return undefined;
}
function profilePath(id: UserId): string { return `/users/${id}`; }
const flags: Flags<FeatureConfig> = { darkMode: true, retries: false };
const topics = ["types", "modules"] as const;
type Topic = ElementOf<typeof topics>;
const selected: Topic = "modules";
const handlers: Handlers<Events> = {};
console.log(`Flags present: ${Object.keys(flags).length}`);
console.log(`Selected: ${String(selected)}`);
console.log(`Handlers to complete: ${Object.keys(handlers).length}`);
const userId = createUserId("usr_42");
if (userId !== undefined) console.log(profilePath(userId));
