type SearchCallback = (query: string) => void;
function bindSearch(input: HTMLInputElement, onSearch: SearchCallback): void {
  // TODO 1：监听 input 事件，收窄 currentTarget 后把 trim 后的值交给回调。
}
interface JsonClient { get(url: string): Promise<unknown>; }
function isRecord(value: unknown): value is Record<string, unknown> {
  // TODO 2：检查非 null 对象。
  return false;
}
async function loadTitle(client: JsonClient): Promise<string | undefined> {
  const value = await client.get("/lesson");
  // TODO 3：验证响应对象与 title；坏数据返回 undefined。
  return undefined;
}
function parseDay(args: readonly string[]): number | undefined {
  // TODO 4：读取 --day 后一项，并验证为非负整数。
  return undefined;
}
const fakeClient: JsonClient = { async get(): Promise<unknown> { return { title: "Runtime boundaries" }; } };
console.log("Browser handler: TODO");
console.log(`Fetched title: ${(await loadTitle(fakeClient)) ?? "invalid"}`);
console.log(`CLI day: ${parseDay(["--day", "27"]) ?? "missing"}`);
