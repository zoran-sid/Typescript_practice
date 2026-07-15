import { complete, deepEqual, equal } from "../src/shared/check.js";

type Locale = "zh-CN" | "en";
type StandardCollection = "blog" | "research" | "projects" | "routes";
type LabType = "learning" | "build" | "security" | "architecture" | "note";
type RawEntry =
  | {
      kind: "standard";
      collection: StandardCollection;
      title: string;
      slug: string;
      date: string;
      locale: Locale;
      draft: boolean;
    }
  | {
      kind: "lab";
      type: LabType;
      title: string;
      slug: string;
      date: string;
      locale: Locale;
      draft: boolean;
    };
interface SearchEntry {
  title: string;
  collection: "blog" | "research" | "projects" | "map" | "lab";
  slug: string;
  url: string;
  date: string;
}
const labSegments = {
  learning: "learning",
  build: "builds",
  security: "security",
  architecture: "architecture",
  note: "notes",
} as const satisfies Record<LabType, string>;
function deduplicate(entries: readonly SearchEntry[]): SearchEntry[] {
  return [
    ...new Map(
      entries.map((entry) => [`${entry.collection}:${entry.slug}`, entry]),
    ).values(),
  ];
}
function buildSearchIndex(
  entries: readonly RawEntry[],
  locale: Locale,
): SearchEntry[] {
  const mapped = entries
    .filter((entry) => !entry.draft && entry.locale === locale)
    .map((entry): SearchEntry => {
      if (entry.kind === "lab")
        return {
          title: entry.title,
          collection: "lab",
          slug: entry.slug,
          url: `/${locale}/lab/${labSegments[entry.type]}/${entry.slug}`,
          date: entry.date,
        };
      const collection =
        entry.collection === "routes" ? "map" : entry.collection;
      return {
        title: entry.title,
        collection,
        slug: entry.slug,
        url: `/${locale}/${collection}/${entry.slug}`,
        date: entry.date,
      };
    });
  return deduplicate(mapped).sort((a, b) => b.date.localeCompare(a.date));
}
const raw: RawEntry[] = [
  {
    kind: "standard",
    collection: "blog",
    title: "Wallet Notes",
    slug: "wallet",
    date: "2026-07-10",
    locale: "en",
    draft: false,
  },
  {
    kind: "lab",
    type: "build",
    title: "Wallet Build",
    slug: "wallet",
    date: "2026-07-15",
    locale: "en",
    draft: false,
  },
  {
    kind: "standard",
    collection: "routes",
    title: "Shushan Run",
    slug: "shushan",
    date: "2026-07-14",
    locale: "en",
    draft: false,
  },
  {
    kind: "standard",
    collection: "blog",
    title: "Draft",
    slug: "draft",
    date: "2026-07-16",
    locale: "en",
    draft: true,
  },
  {
    kind: "standard",
    collection: "blog",
    title: "中文",
    slug: "zh",
    date: "2026-07-16",
    locale: "zh-CN",
    draft: false,
  },
];
const snapshot = JSON.stringify(raw);
const index = buildSearchIndex(raw, "en");
equal(index.length, 3, "count");
deepEqual(
  index.map((entry) => entry.title),
  ["Wallet Build", "Shushan Run", "Wallet Notes"],
  "order",
);
equal(index[0]?.url, "/en/lab/builds/wallet", "lab URL");
equal(index[1]?.url, "/en/map/shushan", "map URL");
equal(JSON.stringify(raw), snapshot, "immutable");
complete("day21 solution");
