type Channel = "email" | "sms" | "push";

type DeliveryEvent =
  | { status: "queued"; id: string; channel: Channel }
  | { status: "sent"; id: string; channel: Channel; deliveredAt: string }
  | { status: "retrying"; id: string; channel: Channel; retryAfterSeconds: number }
  | { status: "rejected"; id: string; channel: Channel; reason: string };

type DeliveryDecision = { text: string; shouldRetry: boolean };

function assertNever(value: never): never {
  throw new Error("未处理的投递事件：" + JSON.stringify(value));
}

function decideDelivery(event: DeliveryEvent): DeliveryDecision {
  // 每个分支同时返回展示文字和是否重试，调用处无需再判断 status。
  switch (event.status) {
    case "queued":
      return {
        text: `排队：${event.id} / ${event.channel}`,
        shouldRetry: false,
      };
    case "sent":
      return {
        text: `已发送：${event.id} / ${event.channel} / ${event.deliveredAt}`,
        shouldRetry: false,
      };
    case "retrying":
      return {
        text: `稍后重试：${event.id} / ${event.channel} / ${event.retryAfterSeconds} 秒`,
        shouldRetry: true,
      };
    case "rejected":
      return {
        text: `永久拒绝：${event.id} / ${event.channel} / ${event.reason}`,
        shouldRetry: false,
      };
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
  // 调用关系：event -> decideDelivery(event) -> decision。
  const decision = decideDelivery(event);
  // 调用关系：decision.text -> console.log；decision.shouldRetry -> retryCount。
  console.log(decision.text);
  if (decision.shouldRetry) {
    retryCount += 1;
  }
}

// 调用关系：循环累计的 retryCount -> 最终汇总输出。
console.log(`需要重试：${retryCount}`);
