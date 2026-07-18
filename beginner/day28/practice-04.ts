type CourseContext = { title: string; day: number };

function describe(this: CourseContext, prefix: string): string {
  // TODO：从 this 读取 title/day，并使用 prefix。
  void prefix;
  return "not implemented";
}

const context: CourseContext = { title: "Advanced functions", day: 28 };
console.log(describe.call(context, "Elective"));
