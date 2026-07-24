// 解题结构提示：事件、请求与 CLI 三种边界分开完成。
type InputEventLike = { currentTarget: { value: string } | null };
function readQuery(event: InputEventLike): string {
  // TODO 1：安全读取 currentTarget，清理空白；缺失时返回空字符串。
  return "";
}
interface JsonClient { get(path: string): Promise<unknown>; }
type Lesson = { title: string; minutes: number };
function isRecord(value: unknown): value is Record<string, unknown> {
  // TODO 2：排除 null 并检查 object。
  return false;
}
async function loadLesson(client: JsonClient): Promise<Lesson | null> {
  const value = await client.get("/lesson");
  // TODO 3：验证 title 与有限 minutes，再创建 Lesson；坏数据返回 null。
  return null;
}
type Options = { day: number; mode: "practice" | "example" };
function valueAfter(args: readonly string[], flag: string): string | undefined {
  // TODO 4：找到 flag 后读取下一项；标志或值缺失都返回 undefined。
  return undefined;
}
function parseArgs(args: readonly string[]): Options {
  // TODO 5：解析非负整数 day，并把 mode 限制为两个字面量。
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
