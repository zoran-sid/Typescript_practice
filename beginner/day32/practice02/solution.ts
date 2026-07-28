// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
interface AuditSink {
  record(message: string): void;
}
class MemoryAuditSink implements AuditSink {
  private readonly entries: string[] = [];

  record(message: string): void {
    // TODO 1：把当前 message 加入 entries。空函数体目前会丢掉所有审计记录。
    void message;
  }

  get count(): number {
    // TODO 2：返回当前 entries 的真实长度；0 只是临时占位。
    return 0;
  }

  last(): string | undefined {
    // TODO 3：返回最后一条记录；没有记录时返回 undefined。
    // 下面的 undefined 目前忽略了已有记录。
    return undefined;
  }
}
class PaymentService {
  constructor(private readonly audit: AuditSink) {}

  pay(quantity: number, unitPrice: number): number {
    // TODO 4：先验证 quantity 是正整数，unitPrice 是有限非负数字；失败时抛 RangeError。
    // 通过后计算 total，记录“paid 数量 x 单价”，最后返回 total。
    // 下面的 0 没有使用输入，也没有记录，只是 number 占位。
    return 0;
  }
}
const audit = new MemoryAuditSink();
const service = new PaymentService(audit);
const total = service.pay(3, 8);
console.log(`Paid: ${total}`);
console.log(`Audit count: ${audit.count}`);
console.log(`Last audit: ${audit.last() ?? "none"}`);
try {
  service.pay(0, 8);
  console.log("Invalid quantity: accepted");
} catch (error: unknown) {
  // TODO 5：只有捕获到 RangeError 才输出 rejected；其他错误继续抛出，
  // 不能把实现 bug 也伪装成正确的输入拒绝。
  console.log(error instanceof RangeError ? "Invalid quantity: rejected" : "Invalid quantity: wrong error");
}
console.log(`Audit after failure: ${audit.count}`);
