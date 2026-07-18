type PaymentResult =
  | { kind: "success"; amount: number; receiptId?: string }
  | { kind: "declined"; reason: string }
  | { kind: "error"; message: string };

function assertNever(value: never): never {
  throw new Error("未处理的支付结果：" + JSON.stringify(value));
}

function describePayment(result: PaymentResult): string {
  switch (result.kind) {
    case "success": {
      const receipt = result.receiptId ?? "待生成";
      return "支付成功：" + result.amount + " 元，凭证：" + receipt;
    }
    case "declined":
      return "支付被拒绝：" + result.reason;
    case "error":
      return "支付错误：" + result.message;
    default:
      return assertNever(result);
  }
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
