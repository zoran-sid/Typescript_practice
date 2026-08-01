type InputEventLike = { currentTarget: { value: string } | null };
function readQuery(event: InputEventLike): string {
  return event.currentTarget?.value.trim() ?? "";
}

interface JsonClient { get(path: string): Promise<unknown>; }
type Lesson = { title: string; minutes: number };
function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object";
}

async function loadLesson(client: JsonClient): Promise<Lesson | null> {
  const value = await client.get("/lesson");
  if (!isRecord(value)
    || typeof value.title !== "string"
    || typeof value.minutes !== "number"
    || !Number.isFinite(value.minutes)) return null;
  return { title: value.title, minutes: value.minutes };
}

type Options = { day: number; mode: "practice" | "example" };
function valueAfter(args: readonly string[], flag: string): string | undefined {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : undefined;
}

function parseArgs(args: readonly string[]): Options {
  const rawDay = valueAfter(args, "--day");
  const parsedDay = rawDay === undefined ? Number.NaN : Number(rawDay);
  const rawMode = valueAfter(args, "--mode");
  return {
    day: Number.isInteger(parsedDay) && parsedDay >= 0 ? parsedDay : 0,
    mode: rawMode === "example" ? "example" : "practice",
  };
}

console.log(`Query: ${readQuery({ currentTarget: { value: "  typescript  " } })}`);
console.log(`Missing: ${readQuery({ currentTarget: null }) || "empty"}`);
const good: JsonClient = { async get(): Promise<unknown> { return { title: "DOM", minutes: 35 }; } };
const bad: JsonClient = { async get(): Promise<unknown> { return { title: "Broken", minutes: "35" }; } };

// 调用关系：client -> await loadLesson -> Lesson | null -> 可选链/分支 -> 输出。
const validLesson = await loadLesson(good);
console.log(`Valid: ${validLesson ? `${validLesson.title}/${validLesson.minutes}` : "invalid"}`);
console.log(`Invalid: ${(await loadLesson(bad)) === null ? "rejected" : "accepted"}`);

const options = parseArgs(["--day", "27", "--mode", "example"]);
console.log(`Day: ${options.day}`);
console.log(`Mode: ${options.mode}`);
const defaults = parseArgs([]);
console.log(`Defaults: ${defaults.day}/${defaults.mode}`);
