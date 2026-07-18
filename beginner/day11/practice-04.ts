type PaymentResult =
  | { kind: "success"; amount: number; receiptId?: string }
  | { kind: "declined"; reason: string }
  | { kind: "error"; message: string };

function describePayment(result: PaymentResult): string {
  if (result.kind === "success") {
    return "支付成功：" + result.amount + " 元";
  }
  return "支付尚未处理";
}

const results: PaymentResult[] = [
  { kind: "success", amount: 66, receiptId: "R-100" },
  { kind: "success", amount: 20 },
  { kind: "declined", reason: "余额不足" },
  { kind: "error", message: "服务暂不可用" },
];

for (const result of results) {
  console.log(describePayment(result));
}
