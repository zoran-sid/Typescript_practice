type SearchCallback = (query: string) => void;

function normalizeQuery(value: string): string {
  return value.trim();
}

function bindSearch(input: HTMLInputElement, onSearch: SearchCallback): void {
  input.addEventListener("input", (event) => {
    const target = event.currentTarget;
    if (target instanceof HTMLInputElement) {
      onSearch(normalizeQuery(target.value));
    }
  });
}

interface JsonClient {
  get(url: string): Promise<unknown>;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object";
}

async function loadTitle(client: JsonClient): Promise<string> {
  const value = await client.get("/lesson");
  if (!isRecord(value) || typeof value.title !== "string") {
    throw new Error("Invalid lesson response");
  }
  return value.title;
}

function parseDay(args: readonly string[]): number | undefined {
  const index = args.indexOf("--day");
  if (index < 0) return undefined;
  const raw = args[index + 1];
  if (raw === undefined || raw.trim() === "") return undefined;
  const day = Number(raw);
  return Number.isInteger(day) && day >= 0 ? day : undefined;
}

const fakeClient: JsonClient = {
  async get(): Promise<unknown> {
    return { title: "Runtime boundaries" };
  },
};

void bindSearch;
console.log(`Normalized query: ${normalizeQuery("  typed  ")}`);
console.log(`Fetched title: ${await loadTitle(fakeClient)}`);
console.log(`CLI day: ${parseDay(["--day", "27"]) ?? "missing"}`);
