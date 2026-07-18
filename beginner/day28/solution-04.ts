type CourseContext = { title: string; day: number };

function describe(this: CourseContext, prefix: string): string {
  return `${prefix} Day ${this.day}: ${this.title}`;
}

const context: CourseContext = { title: "Advanced functions", day: 28 };
console.log(describe.call(context, "Elective"));
