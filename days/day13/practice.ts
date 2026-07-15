import { complete, deepEqual, equal, rejects } from "../../src/shared/check.js";

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

export async function loadSearchEntries(
  fetcher: Fetcher,
): Promise<SearchEntry[]> {
  void fetcher;
  throw new Error("TODO: fetch, check status, parse, and validate entries");
}

export async function countEntries(
  entries: Promise<SearchEntry[]>,
): Promise<number> {
  // BUG: a Promise is not the resolved array.
  const unresolved = entries as unknown as SearchEntry[];
  return unresolved.length;
}

const okFetcher: Fetcher = async () =>
  new Response(JSON.stringify([{ title: "Lab", url: "/en/lab/" }]), {
    status: 200,
  });
const failedFetcher: Fetcher = async () =>
  new Response("Unavailable", { status: 503 });

deepEqual(
  await loadSearchEntries(okFetcher),
  [{ title: "Lab", url: "/en/lab/" }],
  "loads validated data",
);
await rejects(
  () => loadSearchEntries(failedFetcher),
  /503/,
  "rejects an unsuccessful response",
);
equal(
  await countEntries(Promise.resolve([{ title: "Lab", url: "/en/lab/" }])),
  1,
  "awaits before reading length",
);
complete("day13");
