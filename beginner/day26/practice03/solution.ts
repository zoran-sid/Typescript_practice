// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type Weather = { city: string; temperature: number };
type State =
  | { status: "loading" }
  | { status: "success"; weather: Weather }
  | { status: "failure"; message: string };
interface WeatherRepository { load(): Promise<unknown>; }
function isRecord(value: unknown): value is Record<string, unknown> {
  // TODO 1：检查 value 不是 null 且 typeof 为 object。
  // true 承诺可按 Record 读取字段，false 表示检查失败；下面的 false 只是全拒绝占位。
  return false;
}
function isWeather(value: unknown): value is Weather {
  // TODO 2：先确认 value 是对象，再检查 city 是 string、temperature 是有限 number。
  // true 才承诺当前值是 Weather；下面的 false 会暂时拒绝正确天气数据。
  return false;
}
async function loadWeather(repository: WeatherRepository): Promise<State> {
  try {
    const value = await repository.load();
    // TODO 3：把 await 得到的 unknown value 交给 isWeather；
    // 通过时返回携带 weather 的 success，否则返回消息为“Weather data is invalid”的 failure。
    // 下面的 failure 只是尚未验证时的占位结果。
    return { status: "failure", message: "TODO: 验证天气数据" };
  } catch (error: unknown) {
    // TODO 4：仓库 Promise 拒绝时先用 instanceof Error 收窄 error；
    // 把可读 message 放进 failure，非 Error 值使用明确兜底消息。下面的失败对象是占位。
    return { status: "failure", message: "TODO: 处理天气仓库错误" };
  }
}
function render(state: State): string[] {
  // TODO 5：按 state.status 写完整 switch：loading 返回状态行；
  // success 还要读取 city/temperature；failure 还要读取 message。
  // 下面的 [] 没有渲染任何分支，是临时占位。
  return [];
}
class MemoryWeatherRepository implements WeatherRepository {
  constructor(private readonly value: unknown) {}
  async load(): Promise<unknown> { return Promise.resolve(this.value); }
}
for (const line of render({ status: "loading" })) console.log(line);
const success = await loadWeather(new MemoryWeatherRepository({ city: "Shanghai", temperature: 31 }));
for (const line of render(success)) console.log(line);
const failure = await loadWeather(new MemoryWeatherRepository({ city: "Shanghai", temperature: "31" }));
for (const line of render(failure)) console.log(line);
// TODO 6：再提供一个会拒绝 Promise 的仓库，确认 loadWeather 也把异步错误变成 failure。
