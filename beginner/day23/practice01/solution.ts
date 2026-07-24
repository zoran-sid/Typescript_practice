// 解题结构提示：严格模式风险点已拆成独立函数，核心判断留给 TODO。
interface Preferences { theme?: "light" | "dark"; }
function findCourse(courses: readonly string[], keyword: string): string | undefined {
  // TODO 1：查找包含 keyword 的课程；保留“可能找不到”的返回类型。
  return undefined;
}
function showCourse(course: string | undefined): string {
  // TODO 2：显式区分 undefined 与找到课程两条分支。
  return "";
}
function showFirst(scores: readonly number[]): string {
  const first = scores[0];
  // TODO 3：先检查 first，再格式化；不要用非空断言。
  return "";
}
function clearTheme(preferences: Preferences): Preferences {
  // TODO 4：返回真正不包含 theme 键的新对象，而不是 theme: undefined。
  // 暂时返回原对象只是类型安全占位，此时 theme 仍然存在。
  return preferences;
}
function double(value: unknown): number | undefined {
  // TODO 5：先用 typeof 收窄 unknown，只有数字才能参与乘法。
  return undefined;
}
const courses = ["TypeScript", "Git"];
console.log(showCourse(findCourse(courses, "Type")));
console.log(showCourse(findCourse(courses, "Python")));
console.log(showFirst([88, 92]));
console.log(showFirst([]));
const cleared = clearTheme({ theme: "dark" });
console.log("theme" in cleared ? "主题字段: 仍然存在" : "主题字段: 不存在");
for (const value of [4, "四"] as const) {
  const result = double(value);
  console.log(result === undefined ? "无法计算" : `结果: ${result}`);
}
