interface SummaryProvider {
  summary(): string;
}

class StudyCounter implements SummaryProvider {
  private minutes = 0;

  constructor(public readonly topic: string) {}

  add(minutes: number): void {
    if (minutes > 0) this.minutes += minutes;
  }

  summary(): string {
    return `${this.topic}: ${this.minutes} minutes`;
  }
}

class Dashboard {
  constructor(private readonly counter: SummaryProvider) {}

  render(): string {
    return `Dashboard | ${this.counter.summary()}`;
  }
}

const types = new StudyCounter("Types");
const modules = new StudyCounter("Modules");
types.add(30);
types.add(15);
modules.add(20);

console.log(types.summary());
console.log(modules.summary());
console.log(new Dashboard(types).render());
