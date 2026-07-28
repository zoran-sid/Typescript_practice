// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type InputEventLike = { currentTarget: { value: string } | null };
function readQuery(event: InputEventLike): string {
  // TODO 1：读取当前 event.currentTarget；存在时对它的 value 调用 trim，
  // 为 null 时返回空字符串。下面的空字符串只是缺失分支的结果，不能忽略存在的输入。
  return "";
}
interface JsonClient { get(path: string): Promise<unknown>; }
type Lesson = { title: string; minutes: number };
function isRecord(value: unknown): value is Record<string, unknown> {
  // TODO 2：检查 value 不是 null 且 typeof 为 object。
  // true 承诺可读取对象字段，false 表示不通过；下面的 false 是全拒绝占位。
  return false;
}
async function loadLesson(client: JsonClient): Promise<Lesson | null> {
  const value = await client.get("/lesson");
  // TODO 3：验证 unknown value 是对象、title 是 string、minutes 是有限 number；
  // 全部通过时返回由这两个字段组成的 Lesson，失败时返回 null。
  // 下面的 null 目前连好数据也拒绝，完成时要补成功分支。
  return null;
}
type Options = { day: number; mode: "practice" | "example" };
function valueAfter(args: readonly string[], flag: string): string | undefined {
  // TODO 4：在当前 args 中定位 flag，并返回它后一项；
  // flag 不存在或已经是最后一项时返回 undefined。下面的 undefined 目前忽略了有效参数。
  return undefined;
}
function parseArgs(args: readonly string[]): Options {
  // TODO 5：用 valueAfter 分别读取 --day 和 --mode；day 只有转换后为非负整数才采用，
  // 否则用 0；mode 只有原值为 example 时采用 example，否则用 practice。
  // 下面的对象只是默认值，占位状态下不会处理 args 中的合法选项。
  return { day: 0, mode: "practice" };
}
console.log(`Query: ${readQuery({ currentTarget: { value: "  typescript  " } })}`);
console.log(`Missing: ${readQuery({ currentTarget: null }) || "empty"}`);
const good: JsonClient = { async get(): Promise<unknown> { return { title: "DOM", minutes: 35 }; } };
const bad: JsonClient = { async get(): Promise<unknown> { return { title: "Broken", minutes: "35" }; } };
console.log(`Valid: ${(await loadLesson(good))?.title ?? "invalid"}`);
console.log(`Invalid: ${(await loadLesson(bad)) === null ? "rejected" : "accepted"}`);
const options = parseArgs(["--day", "27", "--mode", "example"]);
console.log(`Options: ${options.day}/${options.mode}`);
// TODO 6：按精确输出调整调用处：好响应同时输出 title/minutes；
// options 分成 Day 与 Mode 两行；另把空参数传给 parseArgs，输出默认的 0/practice。
