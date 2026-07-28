// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
interface Preferences { theme?: "light" | "dark"; }
function findCourse(courses: readonly string[], keyword: string): string | undefined {
  // TODO 1：在当前 courses 中查找第一个包含 keyword 的课程名。
  // 找到时返回那一项，找不到时才返回 undefined；下面的 undefined 目前会让所有查找都失败。
  return undefined;
}
function showCourse(course: string | undefined): string {
  // TODO 2：course 是 findCourse 的结果；undefined 要变成“没有找到”，
  // 字符串要变成“找到: 课程名”。下面的空字符串只是临时返回值。
  return "";
}
function showFirst(scores: readonly number[]): string {
  const first = scores[0];
  // TODO 3：first 来自 scores[0]，类型为 number | undefined；undefined 返回“列表为空”，
  // 数字返回“第一项: 数字”。下面的空字符串不能替代这两个分支。
  return "";
}
function clearTheme(preferences: Preferences): Preferences {
  // TODO 4：从当前 preferences 创建新对象，并让新对象里真正没有 theme 这个键；
  // 不能写 theme: undefined，也不能修改原对象。直接返回 preferences 只是占位，此时键仍存在。
  return preferences;
}
function double(value: unknown): number | undefined {
  // TODO 5：先检查当前 value 的运行时类型；数字返回 value 的两倍，其他类型返回 undefined。
  // 下面的 undefined 只是非数字分支的正确结果，不能让数字分支也直接走到这里。
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
