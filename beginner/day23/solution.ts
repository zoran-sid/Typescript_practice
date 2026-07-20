interface Preferences {
  theme?: "light" | "dark";
}

function findCourse(
  courses: readonly string[],
  keyword: string,
): string | undefined {
  return courses.find((course) => course.includes(keyword));
}

function showCourse(course: string | undefined): string {
  return course === undefined ? "没有找到" : `找到: ${course}`;
}

function showFirst(scores: readonly number[]): string {
  const first = scores[0];
  return first === undefined ? "列表为空" : `第一项: ${first}`;
}

function clearTheme(preferences: Preferences): Preferences {
  const { theme: _removed, ...withoutTheme } = preferences;
  return withoutTheme;
}

function double(value: unknown): number | undefined {
  return typeof value === "number" ? value * 2 : undefined;
}

const courses = ["TypeScript", "Git"];
console.log(showCourse(findCourse(courses, "Type")));
console.log(showCourse(findCourse(courses, "Python")));
console.log(showFirst([88, 92]));
console.log(showFirst([]));

const cleared = clearTheme({ theme: "dark" });
console.log(
  "theme" in cleared ? "主题字段: 仍然存在" : "主题字段: 不存在",
);

for (const value of [4, "四"]) {
  const result = double(value);
  console.log(result === undefined ? "无法计算" : `结果: ${result}`);
}
