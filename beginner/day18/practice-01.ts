class StudyTimer {
  private minutes = 0;

  constructor(public readonly topic: string) {}

  add(minutes: number): void {
    // TODO：只累加正数。
    void minutes;
  }

  describe(): string {
    // TODO：返回“主题: N minutes”。
    return "not implemented";
  }
}

const timer = new StudyTimer("Functions");
timer.add(25);
timer.add(-5);
timer.add(20);
console.log(timer.describe());
