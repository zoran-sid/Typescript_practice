interface AuditSink {
  record(message: string): void;
}

class MemoryAuditSink implements AuditSink {
  private readonly entries: string[] = [];

  record(message: string): void {
    this.entries.push(message);
  }

  get count(): number {
    return this.entries.length;
  }

  last(): string | undefined {
    return this.entries.at(-1);
  }
}

class PaymentService {
  constructor(private readonly audit: AuditSink) {}

  pay(quantity: number, unitPrice: number): number {
    // 判断关系：先完成全部校验，失败时立即 throw，不能提前写审计记录。
    if (!Number.isInteger(quantity) || quantity <= 0) {
      throw new RangeError("quantity must be a positive integer");
    }
    if (!Number.isFinite(unitPrice) || unitPrice < 0) {
      throw new RangeError("unitPrice must be a finite non-negative number");
    }
    const total = quantity * unitPrice;
    this.audit.record(`paid ${quantity} x ${unitPrice}`);
    return total;
  }
}

const audit = new MemoryAuditSink();
const service = new PaymentService(audit);
// 调用关系：固定数量/单价 -> service.pay -> 校验 -> audit.record -> total -> 输出。
const total = service.pay(3, 8);
console.log(`Paid: ${total}`);
console.log(`Audit count: ${audit.count}`);
console.log(`Last audit: ${audit.last() ?? "none"}`);

// 调用关系：无效数量 -> pay 在 record 前抛错 -> catch 只接收 RangeError -> 审计数保持不变。
try {
  service.pay(0, 8);
  console.log("Invalid quantity: accepted");
} catch (error: unknown) {
  if (!(error instanceof RangeError)) throw error;
  console.log("Invalid quantity: rejected");
}
console.log(`Audit after failure: ${audit.count}`);
