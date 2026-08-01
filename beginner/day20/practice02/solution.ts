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
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isNotification(value: unknown): value is Notification {
  if (!isRecord(value)) {
    return false;
  }
  if (value.kind === "email") {
    return typeof value.address === "string";
  }
  if (value.kind === "push") {
    return typeof value.token === "string";
  }
  return false;
}

function parseBatch(raw: string): ParseResult<BatchSummary> {
  let value: unknown;
  try {
    value = JSON.parse(raw);
  } catch {
    return { ok: false, error: "JSON 格式错误" };
  }

  if (!Array.isArray(value)) {
    return { ok: false, error: "批次必须是数组" };
  }

  const valid: Notification[] = [];
  let rejectedCount = 0;
  for (const item of value) {
    // 守卫通过后 item 才是 Notification；失败项只增加计数。
    if (isNotification(item)) {
      valid.push(item);
    } else {
      rejectedCount += 1;
    }
  }
  return { ok: true, value: { valid, rejectedCount } };
}

const rawBatches = [
  '[{"kind":"email","address":"ada@example.com"},{"kind":"sms","phone":"10086"},{"kind":"push","token":"device-1"},{"kind":"email","address":42}]',
  '[{"kind":',
];

for (const raw of rawBatches) {
  // 调用关系：raw -> parseBatch -> result -> 批次摘要或错误文字。
  const result = parseBatch(raw);
  if (result.ok) {
    const kinds = result.value.valid.map((item) => item.kind);
    console.log(`可发送：${kinds.join(",")}`);
    console.log(`丢弃数量：${result.value.rejectedCount}`);
  } else {
    console.log(`批次错误：${result.error}`);
  }
}
