// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
interface Lesson { title: string; completed: boolean; }
interface Profile { name: string; contact: { email: string }; lessons: Lesson[]; }
type ParseResult<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };
function isRecord(value: unknown): value is Record<string, unknown> {
  // TODO：当且仅当 value 的 typeof 是 object、不是 null、也不是数组时返回 true。
  // true 表示该输入可按普通对象继续查字段；false 表示拒绝当前输入。下面固定 false 会拒绝所有值，只是占位。
  return false;
}
function isLesson(value: unknown): value is Lesson {
  // TODO：先用 isRecord 检查当前 value，再确认 value.title 是 string、value.completed 是 boolean。
  // 全部通过才返回 true；任一项失败就返回 false。下面固定 false 只是“全部拒绝”的临时占位。
  return false;
}
function isProfile(value: unknown): value is Profile {
  // TODO：先确认当前 value 是对象且 name 是 string；再确认 contact 是对象、contact.email 是 string。
  // lessons 必须是数组，且每一项都让 isLesson 返回 true。全部通过才返回 true，否则返回 false。
  // 下面固定 false 会让所有 Profile 验证失败，只为脚手架暂时通过类型检查，完成时必须替换。
  return false;
}
function parseProfile(raw: string): ParseResult<Profile> {
  let value: unknown = undefined;
  try {
    // TODO：解析当前 raw，并把 JSON.parse 的结果赋给上方 unknown 变量 value；不要用 as Profile 跳过验证。
  } catch {
    return { ok: false, error: "JSON 格式错误" };
  }
  if (isProfile(value)) return { ok: true, value };
  return { ok: false, error: "资料字段无效" };
}
const rawProfiles = [
  '{"name":"Ada","contact":{"email":"ada@example.com"},"lessons":[{"title":"变量","completed":true}]}',
  '{"name":"Lin","contact":{"email":123},"lessons":[]}',
  '{"name":',
];
for (const raw of rawProfiles) {
  const result = parseProfile(raw);
  // TODO：result.ok 为 true 时，读取 result.value 中已经验证过的资料字段；false 时只读取 result.error，并输出对应结果。
}
