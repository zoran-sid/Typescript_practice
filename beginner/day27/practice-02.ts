interface JsonClient {
  get(path: string): Promise<unknown>;
}

type Lesson = { title: string; minutes: number };

async function loadLesson(client: JsonClient): Promise<Lesson | null> {
  // TODO：等待 client.get；真实检查 title 和 minutes，失败返回 null。
  void client;
  return null;
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
