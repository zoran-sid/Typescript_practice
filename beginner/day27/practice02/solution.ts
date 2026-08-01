type Lesson = { title: string; minutes: number };

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object";
}

function parseLesson(value: unknown): Lesson | null {
  if (!isRecord(value)
    || typeof value.title !== "string"
    || typeof value.minutes !== "number"
    || !Number.isFinite(value.minutes)
    || value.minutes < 0) return null;
  return { title: value.title, minutes: value.minutes };
}

function valueAfter(args: readonly string[], flag: string): string | undefined {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : undefined;
}

function parseMinutesOverride(args: readonly string[]): number | undefined {
  const raw = valueAfter(args, "--minutes");
  if (raw === undefined || raw.trim() === "") return undefined;
  const minutes = Number(raw);
  return Number.isFinite(minutes) && Number.isInteger(minutes) && minutes >= 0 ? minutes : undefined;
}

function applyMinutesOverride(lesson: Lesson, minutes: number | undefined): Lesson {
  return minutes === undefined ? lesson : { ...lesson, minutes };
}

// 调用关系：API unknown -> parseLesson -> base -> CLI 参数解析 -> 不可变覆盖 -> 输出。
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
