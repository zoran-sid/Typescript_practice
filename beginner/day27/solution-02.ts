interface JsonClient {
  get(path: string): Promise<unknown>;
}

type Lesson = { title: string; minutes: number };

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object";
}

async function loadLesson(client: JsonClient): Promise<Lesson | null> {
  const value = await client.get("/lesson");
  if (
    !isRecord(value) ||
    typeof value.title !== "string" ||
    typeof value.minutes !== "number" ||
    !Number.isFinite(value.minutes)
  ) {
    return null;
  }
  return { title: value.title, minutes: value.minutes };
}

const good: JsonClient = {
  async get(): Promise<unknown> {
    return { title: "DOM", minutes: 35 };
  },
};
const bad: JsonClient = {
  async get(): Promise<unknown> {
    return { title: "Broken", minutes: "35" };
  },
};

const first = await loadLesson(good);
const second = await loadLesson(bad);
console.log(`Valid: ${first ? `${first.title}/${first.minutes}` : "invalid"}`);
console.log(`Invalid: ${second ? "accepted" : "rejected"}`);
