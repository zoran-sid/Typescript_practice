interface SummaryProvider {
  summary(): string;
}

class StorageQuota implements SummaryProvider {
  private used = 0;

  constructor(
    public readonly name: string,
    private readonly limit: number,
  ) {}

  consume(gigabytes: number): boolean {
    if (gigabytes <= 0 || this.used + gigabytes > this.limit) {
      // 拒绝时不修改 used，并把 false 交回调用处。
      return false;
    }
    this.used += gigabytes;
    return true;
  }

  summary(): string {
    return `${this.name}：已用 ${this.used}/${this.limit} GB`;
  }
}

class QuotaPanel {
  constructor(private readonly provider: SummaryProvider) {}

  render(): string {
    // 调用关系：QuotaPanel -> provider.summary() -> 带前缀的配额文字。
    return `配额 | ${this.provider.summary()}`;
  }
}

const quota = new StorageQuota("团队盘", 100);
// 调用关系：20、10、80 依次进入同一个 quota.consume，前两次更新状态。
quota.consume(20);
quota.consume(10);
const oversizedAccepted = quota.consume(80);
const panel = new QuotaPanel(quota);

console.log(quota.summary());
console.log(`超额写入：${oversizedAccepted ? "接受" : "拒绝"}`);
console.log(panel.render());
