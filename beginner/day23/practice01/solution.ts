interface Preferences { theme?: "light" | "dark"; }

function findCourse(courses: readonly string[], keyword: string): string | undefined {
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
  // 解构关系：theme 被单独取出，其余字段组成新对象并 return；原对象不变。
  const { theme: _removedTheme, ...rest } = preferences;
  return rest;
}

function double(value: unknown): number | undefined {
  return typeof value === "number" ? value * 2 : undefined;
}

const courses = ["TypeScript", "Git"];
// 调用关系：courses -> findCourse -> string | undefined -> showCourse -> 输出文字。
console.log(showCourse(findCourse(courses, "Type")));
console.log(showCourse(findCourse(courses, "Python")));
console.log(showFirst([88, 92]));
console.log(showFirst([]));

const cleared = clearTheme({ theme: "dark" });
console.log("theme" in cleared ? "主题字段: 仍然存在" : "主题字段: 不存在");

// 调用关系：循环把 number/string 依次交给 double，再按返回值决定输出。
for (const value of [4, "四"] as const) {
  const result = double(value);
  console.log(result === undefined ? "无法计算" : `结果: ${result}`);
}
