// 解题结构提示：天气仓库返回 unknown，验证后再进入判别联合。
type Weather = { city: string; temperature: number };
type State =
  | { status: "loading" }
  | { status: "success"; weather: Weather }
  | { status: "failure"; message: string };
interface WeatherRepository { load(): Promise<unknown>; }
function isRecord(value: unknown): value is Record<string, unknown> {
  // TODO 1：检查非 null 对象。
  return false;
}
function isWeather(value: unknown): value is Weather {
  // TODO 2：验证 city 与有限 temperature。
  return false;
}
async function loadWeather(repository: WeatherRepository): Promise<State> {
  const value = await repository.load();
  // TODO 3：用 isWeather 构造 success 或 failure。
  return { status: "failure", message: "TODO: 验证天气数据" };
}
function render(state: State): string[] {
  // TODO 4：用 switch 分别渲染 loading、success、failure。
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
