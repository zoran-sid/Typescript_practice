// 解题结构提示：本文件不是完整答案，请沿 TODO 自己补全。
interface Lesson { title: string; completed: boolean; }
interface Profile { name: string; contact: { email: string }; lessons: Lesson[]; }
type ParseResult<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };
function isRecord(value: unknown): value is Record<string, unknown> {
  // TODO：检查 object，并明确排除 null。
  return false;
}
function isLesson(value: unknown): value is Lesson {
  // TODO：先复用 isRecord，再逐项检查 title 与 completed。
  return false;
}
function isProfile(value: unknown): value is Profile {
  // TODO：逐层验证 name、contact.email、lessons 数组及每个元素。
  return false;
}
function parseProfile(raw: string): ParseResult<Profile> {
  let value: unknown = undefined;
  try {
    // TODO：把 JSON.parse(raw) 的结果保存在 value 中。
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
  // TODO：检查 result.ok 后，再访问 value 或 error 并输出。
}
