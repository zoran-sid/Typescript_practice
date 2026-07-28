// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
interface SummaryProvider { summary(): string; }
class StudyCounter implements SummaryProvider {
  private minutes = 0;
  constructor(public readonly topic: string) {}
  add(minutes: number): void {
    // TODO：检查当前参数 minutes；只有 minutes > 0 时才累加到这个实例的 this.minutes，负数 -5 必须被忽略。
  }
  summary(): string {
    // TODO：读取当前实例的 this.topic 与 this.minutes，组成“主题: 分钟 minutes”并返回。
    // 下面的 "" 是临时占位，完成时要替换。
    return "";
  }
}
class Dashboard {
  constructor(private readonly provider: SummaryProvider) {}
  render(): string {
    // TODO：调用当前 provider.summary()，把返回文字接在“Dashboard | ”后面并返回；不要读取 StudyCounter 私有字段。
    // 下面的 "" 是临时占位，完成时要替换。
    return "";
  }
}
class MessageFormatter {
  constructor(private readonly prefix: string) {}
  format = (message: string): string => {
    // TODO：保持箭头函数字段写法，用 this.prefix 与当前 message 组成“前缀 消息”并返回。
    // 下面的 "" 是临时占位；不要改成会在 detachedFormat 中丢失 this 的普通方法。
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
// TODO：依次输出 types.summary()、modules.summary()、dashboard.render()，再把“完成复习”传给 detachedFormat 并输出其返回值。
