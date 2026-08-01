type DeliveryPair = readonly [channel: "email" | "sms", recipient: string];

function describeDelivery(pair: DeliveryPair): string {
  const [channel, recipient] = pair;
  return `${channel} -> ${recipient}`;
}

function invoke<Args extends unknown[], Result>(
  fn: (...args: Args) => Result,
  ...args: Args
): Result {
  return fn(...args);
}

function normalizeRecipients(value: string): string;
function normalizeRecipients(value: readonly string[]): string[];
function normalizeRecipients(value: string | readonly string[]): string | string[] {
  if (typeof value === "string") return value.trim().toLowerCase();
  return value.map((recipient) => recipient.trim().toLowerCase());
}

type BillingContext = { prefix: string };
function formatNotice(this: BillingContext, message: string): string {
  return `[${this.prefix}] ${message}`;
}

// 调用关系：固定二元组 -> describeDelivery -> 按位置解构 -> 渠道说明 -> 输出。
console.log(describeDelivery(["email", "learner@example.com"]));
// 调用关系：账单回调 + 3/80/24 -> invoke -> invoice -> 输出。
const invoice = invoke(
  (quantity: number, unitPrice: number, discount: number) => quantity * unitPrice - discount,
  3,
  80,
  24,
);
console.log(`Invoice: ${invoice}`);

// 调用关系：单个地址 / 地址数组 -> 对应重载 -> trim 与小写转换 -> 输出。
console.log(`Single: ${normalizeRecipients(" Learner@Example.com ")}`);
const batch = normalizeRecipients([" A@Example.com ", " B@Example.com "]);
console.log(`Batch: ${batch.join(", ")}`);

// 调用关系：call 的第一个参数提供 this.prefix，"paid" 作为 message 进入函数。
console.log(formatNotice.call({ prefix: "billing" }, "paid"));
