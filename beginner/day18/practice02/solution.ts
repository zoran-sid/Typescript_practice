// 解题结构提示：本文件不是完整答案，请沿 TODO 自己补全。
interface SummaryProvider { summary(): string; }
class StudyCounter implements SummaryProvider {
  private minutes = 0;
  constructor(public readonly topic: string) {}
  add(minutes: number): void {
    // TODO：只在 minutes 合法时更新当前实例状态。
  }
  summary(): string {
    // TODO：返回 topic 与累计分钟数。
    return "";
  }
}
class Dashboard {
  constructor(private readonly counter: SummaryProvider) {}
  render(): string {
    // TODO：只依赖 SummaryProvider 的公开能力。
    return "";
  }
}
const types = new StudyCounter("Types");
const modules = new StudyCounter("Modules");
types.add(30);
types.add(15);
modules.add(20);
// TODO：完成后输出两个独立实例与 Dashboard 结果。
