// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type Channel = "email" | "sms" | "push";
type DeliveryEvent =
  | { status: "queued"; id: string; channel: Channel }
  | { status: "sent"; id: string; channel: Channel; deliveredAt: string }
  | { status: "retrying"; id: string; channel: Channel; retryAfterSeconds: number }
  | { status: "rejected"; id: string; channel: Channel; reason: string };
type DeliveryDecision = { text: string; shouldRetry: boolean };
// TODO：删除 declare 并实现 assertNever；运行时意外到达时抛出包含当前值的错误。
// never 用来检查所有 DeliveryEvent 是否都有分支，新增状态却漏写 case 时应在调用处报错。
declare function assertNever(value: never): never;
function decideDelivery(event: DeliveryEvent): DeliveryDecision {
  switch (event.status) {
    case "queued":
      // TODO：用当前 id、channel 生成排队文字；尚未发送，不需要重试。
      return { text: "", shouldRetry: false };
    case "sent":
      // TODO：读取 sent 分支的 deliveredAt，生成已发送文字；不需要重试。
      return { text: "", shouldRetry: false };
    case "retrying":
      // TODO：读取 retryAfterSeconds 生成稍后重试文字，并把 shouldRetry 设为 true。
      // 下面的 false 只是未完成分支的占位，完成时必须替换。
      return { text: "", shouldRetry: false };
    case "rejected":
      // TODO：读取 reason 生成永久拒绝文字；永久失败不能计入重试。
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
  // TODO：把当前 event 交给 decideDelivery，输出 decision.text；
  // decision.shouldRetry 为 true 时增加 retryCount，不要在循环里重新判断 event.status。
}
// TODO：输出最终 retryCount。上面的 0 是真实初始计数，不是答案占位。
