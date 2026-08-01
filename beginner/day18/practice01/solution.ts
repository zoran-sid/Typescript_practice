interface SummaryProvider {
  summary(): string;
}

class StudyCounter implements SummaryProvider {
  private minutes = 0;

  constructor(public readonly topic: string) {}

  add(minutes: number): void {
    if (minutes > 0) {
      this.minutes += minutes;
    }
  }

  summary(): string {
    return `${this.topic}: ${this.minutes} minutes`;
  }
}

class Dashboard {
  constructor(private readonly provider: SummaryProvider) {}

  render(): string {
    // 调用关系：Dashboard -> provider.summary() -> 带前缀的面板文字。
    return `Dashboard | ${this.provider.summary()}`;
  }
}

class MessageFormatter {
  constructor(private readonly prefix: string) {}

  format = (message: string): string => {
    // 箭头函数字段保留当前实例的 this，脱离实例调用也能读取 prefix。
    return `${this.prefix} ${message}`;
  };
}

const types = new StudyCounter("TypeScript");
const modules = new StudyCounter("Modules");
// 调用关系：三次 add -> types 自己的 minutes；负数分支不更新。
types.add(30);
types.add(15);
types.add(-5);
modules.add(20);

const dashboard = new Dashboard(types);
const formatter = new MessageFormatter("[学习]");
const detachedFormat = formatter.format;

console.log(types.summary());
console.log(modules.summary());
console.log(dashboard.render());
// 调用关系："完成复习" -> detachedFormat -> 格式文字 -> console.log。
console.log(detachedFormat("完成复习"));
