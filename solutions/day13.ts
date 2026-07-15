import { complete, deepEqual, equal, rejects } from "../src/shared/check.js";

interface SearchEntry {
  title: string;
  url: string;
}
type Fetcher = (url: string) => Promise<Response>;
function isSearchEntry(value: unknown): value is SearchEntry {
  return (
    typeof value === "object" &&
    value !== null &&
    "title" in value &&
    typeof value.title === "string" &&
    "url" in value &&
    typeof value.url === "string"
  );
}
async function loadSearchEntries(fetcher: Fetcher): Promise<SearchEntry[]> {
  const response = await fetcher("/en/search-index.json");
  if (!response.ok)
    throw new Error(`Search request failed with HTTP ${response.status}`);
  const data: unknown = await response.json();
  if (!Array.isArray(data) || !data.every(isSearchEntry))
    throw new Error("Invalid search response");
  return data;
}
async function countEntries(entries: Promise<SearchEntry[]>): Promise<number> {
  return (await entries).length;
}
const ok: Fetcher = async () =>
  new Response(JSON.stringify([{ title: "Lab", url: "/en/lab/" }]));
const bad: Fetcher = async () => new Response("Unavailable", { status: 503 });
deepEqual(
  await loadSearchEntries(ok),
  [{ title: "Lab", url: "/en/lab/" }],
  "load",
);
await rejects(() => loadSearchEntries(bad), /503/, "status");
equal(
  await countEntries(Promise.resolve([{ title: "Lab", url: "/en/lab/" }])),
  1,
  "count",
);
complete("day13 solution");
