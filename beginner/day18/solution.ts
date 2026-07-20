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
    return `Dashboard | ${this.provider.summary()}`;
  }
}

class MessageFormatter {
  constructor(private readonly prefix: string) {}

  format = (message: string): string => {
    return `${this.prefix} ${message}`;
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

console.log(types.summary());
console.log(modules.summary());
console.log(dashboard.render());
console.log(detachedFormat("完成复习"));
