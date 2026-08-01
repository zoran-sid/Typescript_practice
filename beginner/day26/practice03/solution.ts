type Weather = { city: string; temperature: number };
type State =
  | { status: "loading" }
  | { status: "success"; weather: Weather }
  | { status: "failure"; message: string };
interface WeatherRepository { load(): Promise<unknown>; }

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object";
}

function isWeather(value: unknown): value is Weather {
  return isRecord(value)
    && typeof value.city === "string"
    && typeof value.temperature === "number"
    && Number.isFinite(value.temperature);
}

async function loadWeather(repository: WeatherRepository): Promise<State> {
  try {
    const value = await repository.load();
    return isWeather(value)
      ? { status: "success", weather: value }
      : { status: "failure", message: "Weather data is invalid" };
  } catch (error: unknown) {
    return { status: "failure", message: error instanceof Error ? error.message : "Unknown error" };
  }
}

function render(state: State): string[] {
  switch (state.status) {
    case "loading": return ["State: loading"];
    case "failure": return ["State: failure", `Message: ${state.message}`];
    case "success": return [
      "State: success",
      `City: ${state.weather.city}`,
      `Temperature: ${state.weather.temperature}`,
    ];
  }
}

class MemoryWeatherRepository implements WeatherRepository {
  constructor(private readonly value: unknown, private readonly error?: Error) {}
  async load(): Promise<unknown> {
    if (this.error) throw this.error;
    return Promise.resolve(this.value);
  }
}

for (const line of render({ status: "loading" })) console.log(line);
// 调用关系：天气对象 -> repository -> loadWeather -> State -> render -> 输出。
const success = await loadWeather(new MemoryWeatherRepository({ city: "Shanghai", temperature: 31 }));
for (const line of render(success)) console.log(line);
const failure = await loadWeather(new MemoryWeatherRepository({ city: "Shanghai", temperature: "31" }));
for (const line of render(failure)) console.log(line);

// 额外演示拒绝路径；不打印，避免改变题目规定的精确输出。
const rejected = await loadWeather(new MemoryWeatherRepository(undefined, new Error("Weather service offline")));
if (rejected.status !== "failure") throw new Error("Expected rejected repository to fail");
