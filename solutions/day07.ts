import { complete, deepEqual, equal } from "../src/shared/check.js";

function groupBy<T, K extends keyof T>(
  items: readonly T[],
  key: K,
): Map<string, T[]> {
  const result = new Map<string, T[]>();
  for (const item of items) {
    const groupKey = String(item[key]);
    const group = result.get(groupKey) ?? [];
    group.push(item);
    result.set(groupKey, group);
  }
  return result;
}
function uniqueBy<T, K extends keyof T>(items: readonly T[], key: K): T[] {
  return [...new Map(items.map((item) => [String(item[key]), item])).values()];
}
const entries = [
  { title: "TypeScript Lab", collection: "lab" },
  { title: "Route Story", collection: "map" },
  { title: "TypeScript Lab", collection: "lab" },
] as const;
equal(groupBy(entries, "collection").get("lab")?.length, 2, "group");
deepEqual(
  uniqueBy(entries, "title").map((entry) => entry.title),
  ["TypeScript Lab", "Route Story"],
  "unique",
);
complete("day07 solution");
