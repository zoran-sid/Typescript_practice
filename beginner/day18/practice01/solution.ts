// 解题结构提示：本文件不是完整答案，请沿 TODO 自己补全。
interface SummaryProvider { summary(): string; }
class StudyCounter implements SummaryProvider {
  private minutes = 0;
  constructor(public readonly topic: string) {}
  add(minutes: number): void {
    // TODO：只接受正数，并更新当前实例的 this.minutes。
  }
  summary(): string {
    // TODO：组合当前实例的 topic 与 minutes。
    return "";
  }
}
class Dashboard {
  constructor(private readonly provider: SummaryProvider) {}
  render(): string {
    // TODO：通过接口调用 provider.summary()，不要依赖具体类。
    return "";
  }
}
class MessageFormatter {
  constructor(private readonly prefix: string) {}
  format = (message: string): string => {
    // TODO：使用箭头函数字段保留 this，并组合 prefix 与 message。
    return "";
  };
}
const types = new StudyCounter("TypeScript");
const modules = new StudyCounter("Modules");
types.add(30);
types.add(15);
types.add(-5);
modules.add(20);
const dashboard = new Dashboard(types);
const formatter = new MessageFormatter("[学习]");
const detachedFormat = formatter.format;
// TODO：完成方法后输出两个实例、面板与脱离实例后的格式化结果。
