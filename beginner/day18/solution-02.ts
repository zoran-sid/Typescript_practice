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
    if (this.completed < this.total) this.completed += 1;
  }

  getSummary(): string {
    return `${this.course}: ${this.completed}/${this.total}`;
  }
}

const progress = new CourseProgress("TypeScript", 2);
progress.completeOne();
progress.completeOne();
progress.completeOne();
console.log(progress.getSummary());
