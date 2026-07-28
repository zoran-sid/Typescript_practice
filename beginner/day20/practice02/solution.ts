// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type Notification =
  | { kind: "email"; address: string }
  | { kind: "push"; token: string };
type BatchSummary = {
  valid: Notification[];
  rejectedCount: number;
};
type ParseResult<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };
function isRecord(value: unknown): value is Record<string, unknown> {
  // TODO：value 的 typeof 为 object、不等于 null、也不是数组时返回 true。
  // 下面固定 false 会拒绝所有对象，只是占位。
  return false;
}
function isNotification(value: unknown): value is Notification {
  // TODO：先用 isRecord；kind 为 email 时检查 address 是 string，
  // kind 为 push 时检查 token 是 string，其他 kind 或字段错误返回 false。
  // 下面固定 false 是“全部拒绝”的占位。
  return false;
}
function parseBatch(raw: string): ParseResult<BatchSummary> {
  let value: unknown = undefined;
  try {
    // TODO：把 JSON.parse(raw) 的结果赋给 unknown 变量 value。
  } catch {
    return { ok: false, error: "JSON 格式错误" };
  }
  if (!Array.isArray(value)) {
    return { ok: false, error: "批次必须是数组" };
  }
  const valid: Notification[] = [];
  let rejectedCount = 0;
  for (const item of value) {
    // TODO：isNotification(item) 为 true 时加入 valid，否则增加 rejectedCount。
  }
  return { ok: true, value: { valid, rejectedCount } };
}
const rawBatches = [
  '[{"kind":"email","address":"ada@example.com"},{"kind":"sms","phone":"10086"},{"kind":"push","token":"device-1"},{"kind":"email","address":42}]',
  '[{"kind":',
];
for (const raw of rawBatches) {
  const result = parseBatch(raw);
  // TODO：成功时从 result.value.valid 读取 kind 列表，并输出 rejectedCount；
  // 失败时只读取 result.error。不要重新解析 raw 或读取未经验证的 item 字段。
}
