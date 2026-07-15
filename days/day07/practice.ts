import { complete, deepEqual, equal } from "../../src/shared/check.js";

interface SearchEntry {
  title: string;
  collection: "blog" | "lab" | "map";
  date: string;
}

export function groupBy<T, K extends keyof T>(
  items: readonly T[],
  key: K,
): Map<string, T[]> {
  void items;
  void key;
  throw new Error("TODO: group items while preserving T");
}

export function uniqueBy<T, K extends keyof T>(
  items: readonly T[],
  key: K,
): T[] {
  void key;
  // BUG: String(object) is usually "[object Object]", so unrelated entries collapse.
  return [...new Map(items.map((item) => [String(item), item])).values()];
}

const entries: SearchEntry[] = [
  { title: "TypeScript Lab", collection: "lab", date: "2026-07-15" },
  { title: "Route Story", collection: "map", date: "2026-07-14" },
  { title: "TypeScript Lab", collection: "lab", date: "2026-07-15" },
];

const grouped = groupBy(entries, "collection");
equal(grouped.get("lab")?.length, 2, "groups by a constrained key");
deepEqual(
  uniqueBy(entries, "title").map((entry) => entry.title),
  ["TypeScript Lab", "Route Story"],
  "deduplicates by the requested key",
);
complete("day07");
