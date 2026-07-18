interface ProgressSummary {
  getSummary(): string;
}

class CourseProgress implements ProgressSummary {
  private completed = 0;

  constructor(
    public readonly course: string,
    private readonly total: number,
  ) {}

  completeOne(): void {
    // TODO：未达到 total 时再增加 completed。
  }

  getSummary(): string {
    // TODO：返回“课程: 已完成/总数”。
    return "not implemented";
  }
}

const progress = new CourseProgress("TypeScript", 2);
progress.completeOne();
progress.completeOne();
progress.completeOne();
console.log(progress.getSummary());
