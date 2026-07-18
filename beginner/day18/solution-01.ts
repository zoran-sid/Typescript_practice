class StudyTimer {
  private minutes = 0;

  constructor(public readonly topic: string) {}

  add(minutes: number): void {
    if (minutes > 0) this.minutes += minutes;
  }

  describe(): string {
    return `${this.topic}: ${this.minutes} minutes`;
  }
}

const timer = new StudyTimer("Functions");
timer.add(25);
timer.add(-5);
timer.add(20);
console.log(timer.describe());
