// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
interface SummaryProvider { summary(): string; }
class StorageQuota implements SummaryProvider {
  private used = 0;
  constructor(
    public readonly name: string,
    private readonly limit: number,
  ) {}
  consume(gigabytes: number): boolean {
    // TODO：先检查 gigabytes > 0，再判断 this.used + gigabytes 没有超过 this.limit。
    // 两项都通过才更新 this.used 并返回 true；拒绝分支必须保持原状态。
    // 下面的 false 会拒绝所有请求，只是尚未实现规则时的占位。
    return false;
  }
  summary(): string {
    // TODO：读取当前实例的 name、used、limit，组成“名称：已用 used/limit GB”并返回。
    // 下面的 "" 是临时占位，完成时要替换。
    return "";
  }
}
class QuotaPanel {
  constructor(private readonly provider: SummaryProvider) {}
  render(): string {
    // TODO：只调用 provider.summary()，把结果接在“配额 | ”后返回；不要读取 StorageQuota 的私有字段。
    // 下面的 "" 是临时占位，完成时要替换。
    return "";
  }
}
const quota = new StorageQuota("团队盘", 100);
quota.consume(20);
quota.consume(10);
const oversizedAccepted = quota.consume(80);
const panel = new QuotaPanel(quota);
// TODO：输出 quota.summary()；根据 oversizedAccepted 生成“接受”或“拒绝”文字；
// 最后输出 panel.render()。第三次写入被拒绝后，摘要仍应保留前两次成功写入的状态。
