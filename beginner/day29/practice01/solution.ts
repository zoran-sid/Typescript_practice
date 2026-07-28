// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type FeatureConfig = { darkMode: string; retries: number };
type Flags<T> = {
  // TODO 1：Key 已遍历 T 的每一个键；把右侧 unknown 占位类型替换为 boolean，
  // 让 Flags<FeatureConfig> 仍有 darkMode/retries，但两个值都只能是布尔标记。
  [Key in keyof T]: unknown;
};
type ElementOf<T> = T extends readonly unknown[]
  ? unknown // TODO 2：在 readonly 数组结构里声明 infer 元素类型，并用它替换此 unknown 占位。
  : never;
type Events = { ready: { at: number }; failed: { message: string } };
type Handlers<T> = {
  // TODO 3：当前模板键要把 ready/failed 重映射成 onReady/onFailed；
  // 把 unknown 占位替换成接收对应 T[Key] 负载并返回 void 的函数类型。
  // 这里的 ? 只让下面的空对象占位暂时通过检查；完成 TODO 5 时要删除 ?，让两个处理器都成为必填项。
  [Key in keyof T as `on${Capitalize<Key & string>}`]?: unknown;
};
declare const userIdBrand: unique symbol;
type UserId = string & { readonly [userIdBrand]: true };
function createUserId(value: string): UserId {
  // TODO 4：检查当前 value 以 usr_ 开头且前缀后仍有内容；
  // 未通过时抛出 Error，通过时才在这个构造边界做一次窄断言并返回 UserId。
  // 当前签名选择“失败时抛错”，不能再返回 undefined；下面的 Error 只是未实现验证时的占位。
  throw new Error("TODO: 验证并创建 UserId");
}
function profilePath(id: UserId): string { return `/users/${id}`; }
const flags: Flags<FeatureConfig> = { darkMode: true, retries: false };
const topics = ["types", "modules"] as const;
type Topic = ElementOf<typeof topics>;
const selected: Topic = "modules";
// 下面的 {} 表示两个处理器还没有填写，只是等待替换的占位对象。
const handlers: Handlers<Events> = {};
// TODO 5：用包含 onReady/onFailed 的对象替换 {}，同时删除 TODO 3 里的可选标记 ?；
// 每个函数使用各自负载中的 at/message，再用固定负载调用它们，使输出来自处理器而不是写死文字。
console.log(`Flags present: ${Object.keys(flags).length}`);
console.log(`Selected: ${String(selected)}`);
console.log(`Handlers to complete: ${Object.keys(handlers).length}`);
// TODO 6：删除上面的三行占位输出；改为一行读取 flags 的两个键值、一行输出 selected，
// 再由 onReady、onFailed 各输出一行。profilePath 保持为第五行输出。
try {
  const userId = createUserId("usr_42");
  console.log(profilePath(userId));
} catch (error: unknown) {
  // TODO 7：这个 catch 只处理意外失败，不增加题目精确输出；
  // 若调试时要读取原因，先用 instanceof Error 收窄，不能假定捕获值一定是 Error。
  void error;
}
