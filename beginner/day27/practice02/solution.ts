// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type SearchCallback = (query: string) => void;
function normalizeQuery(value: string): string {
  // TODO 1：去掉当前 value 两端的空格并返回新字符串；下面的空字符串只是 string 占位。
  return "";
}
function bindSearch(input: HTMLInputElement, onSearch: SearchCallback): void {
  // TODO 2：给当前 input 注册 input 事件；在处理函数中确认 currentTarget 是输入元素，
  // 再把它的 value 交给 normalizeQuery，并把返回的普通 string 交给 onSearch。
  // 这个浏览器适配器不在普通 Node 进程中调用。
}
interface JsonClient { get(url: string): Promise<unknown>; }
function isRecord(value: unknown): value is Record<string, unknown> {
  // TODO 3：检查 value 不是 null 且 typeof 为 object。
  // true 承诺可读取对象字段，false 表示检查失败；下面的 false 是全拒绝占位。
  return false;
}
async function loadTitle(client: JsonClient): Promise<string | undefined> {
  const value = await client.get("/lesson");
  // TODO 4：验证 await 得到的 unknown value 是对象且 title 是 string；
  // 通过时返回该 title，坏数据才返回 undefined。下面的 undefined 目前也拒绝了好响应。
  return undefined;
}
function parseDay(args: readonly string[]): number | undefined {
  // TODO 5：从当前 args 找到 --day 后一项，转成 number 后确认是非负整数；
  // 合法时返回数字，缺失或非法时返回 undefined。下面的 undefined 只是失败分支结果。
  return undefined;
}
const fakeClient: JsonClient = { async get(): Promise<unknown> { return { title: "Runtime boundaries" }; } };
// TODO 6：把固定输入 "  typed  " 交给 normalizeQuery，并让 query 接住结果；
// Node 只验证这段纯字符串逻辑，不伪造 HTMLInputElement 或声称浏览器事件已触发。
// 下面的空字符串表示 normalizeQuery 还没有返回结果，只是等待替换的占位值。
const query = "";
console.log(`Normalized query: ${query}`);
console.log(`Fetched title: ${(await loadTitle(fakeClient)) ?? "invalid"}`);
console.log(`CLI day: ${parseDay(["--day", "27"]) ?? "missing"}`);
