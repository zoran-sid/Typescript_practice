// 这是解题结构，不是完整答案。只有旁边明确写着 TODO 的空字符串、0、false、[] 等才是占位值，完成时要替换或删除。
type Channel = "email" | "sms" | "push";
type DeliveryEvent =
  | { status: "queued"; id: string; channel: Channel }
  | { status: "sent"; id: string; channel: Channel; deliveredAt: string }
  | { status: "retrying"; id: string; channel: Channel; retryAfterSeconds: number }
  | { status: "rejected"; id: string; channel: Channel; reason: string };
type DeliveryDecision = { text: string; shouldRetry: boolean };
function assertNever(value: never): never {
  // 这是穷尽检查的固定实现，不是本题核心答案。
  throw new Error("未处理的投递事件：" + JSON.stringify(value));
}
function decideDelivery(event: DeliveryEvent): DeliveryDecision {
  switch (event.status) {
    case "queued":
      // TODO：用当前 id、channel 生成排队文字并替换 text 的空字符串。
      // queued 在等第一次发送，不属于“再次发送”，所以 shouldRetry 的 false 是业务结果，不是占位。
      return { text: "", shouldRetry: false };
    case "sent":
      // TODO：读取 sent 分支的 deliveredAt，生成已发送文字并替换 text。
      // 已经发送成功，所以 shouldRetry 保持 false。
      return { text: "", shouldRetry: false };
    case "retrying":
      // TODO：读取 retryAfterSeconds 生成稍后重试文字并替换 text。
      // retrying 表示临时失败后需要再次发送，所以 shouldRetry 是 true。
      return { text: "", shouldRetry: true };
    case "rejected":
      // TODO：读取 reason 生成永久拒绝文字并替换 text。
      // rejected 是永久失败，不能再次发送，所以 shouldRetry 保持 false。
      return { text: "", shouldRetry: false };
    default:
      return assertNever(event);
  }
}
const events: DeliveryEvent[] = [
  { status: "queued", id: "msg-1", channel: "email" },
  { status: "sent", id: "msg-2", channel: "sms", deliveredAt: "10:30" },
  { status: "retrying", id: "msg-3", channel: "push", retryAfterSeconds: 30 },
  { status: "rejected", id: "msg-4", channel: "email", reason: "地址无效" },
];
let retryCount = 0;
for (const event of events) {
  // TODO 1：调用 decideDelivery(event)，用名为 decision 的局部变量接住整个返回对象。
  // TODO 2：输出 decision.text。
  // TODO 3：decision.shouldRetry 为 true 时增加 retryCount；不要重新判断 event.status。
}
// TODO：输出最终 retryCount。上面的 0 是真实初始计数，不是答案占位。
