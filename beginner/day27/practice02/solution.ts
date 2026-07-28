// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type Lesson = { title: string; minutes: number };
function isRecord(value: unknown): value is Record<string, unknown> {
  // TODO 1：检查 value 不是 null 且 typeof 为 object。
  // true 承诺可读取对象字段，false 表示检查失败；下面的 false 是全拒绝占位。
  return false;
}
function parseLesson(value: unknown): Lesson | null {
  // TODO 2：要求对象的 title 是 string，minutes 是有限非负 number；
  // 通过时返回 Lesson，失败时返回 null。下面的 null 目前也拒绝好响应。
  return null;
}
function valueAfter(args: readonly string[], flag: string): string | undefined {
  // TODO 3：找到 flag 的索引，返回后一项；缺失标记或缺少值时返回 undefined。
  return undefined;
}
function parseMinutesOverride(args: readonly string[]): number | undefined {
  // TODO 4：读取 --minutes 后的非空字符串，转换后只接受有限非负整数。
  // 非法或缺失返回 undefined；下面的 undefined 目前忽略合法的 "45"。
  return undefined;
}
function applyMinutesOverride(lesson: Lesson, minutes: number | undefined): Lesson {
  // TODO 5：minutes 为 undefined 时返回原 lesson；有数字时创建新对象并覆盖 minutes。
  // 不能直接修改 lesson。下面直接返回原对象只是尚未处理合法覆盖时的占位。
  void minutes;
  return lesson;
}
const base = parseLesson({ title: "Runtime boundaries", minutes: 35 });
if (base !== null) {
  const valid = applyMinutesOverride(base, parseMinutesOverride(["--minutes", "45"]));
  const invalid = applyMinutesOverride(base, parseMinutesOverride(["--minutes", "soon"]));
  console.log(`Base: ${base.title}/${base.minutes}`);
  console.log(`Override: ${valid.title}/${valid.minutes}`);
  console.log(`Invalid minutes: ${invalid.title}/${invalid.minutes}`);
}
const bad = parseLesson({ title: "Broken", minutes: "35" });
console.log(`Bad response: ${bad === null ? "rejected" : "accepted"}`);
