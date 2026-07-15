import { complete, deepEqual, equal } from "../../src/shared/check.js";

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

export function deduplicate(entries: readonly SearchEntry[]): SearchEntry[] {
  // BUG: different collections are allowed to have the same slug.
  return [...new Map(entries.map((entry) => [entry.slug, entry])).values()];
}

export function buildSearchIndex(
  entries: readonly RawEntry[],
  locale: Locale,
): SearchEntry[] {
  void entries;
  void locale;
  void labSegments;
  throw new Error("TODO: implement the complete typed search pipeline");
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

const inputSnapshot = JSON.stringify(raw);
const index = buildSearchIndex(raw, "en");
equal(
  index.length,
  3,
  "keeps cross-collection slugs but excludes draft and other locale",
);
deepEqual(
  index.map((entry) => entry.title),
  ["Wallet Build", "Shushan Run", "Wallet Notes"],
  "sorts newest first",
);
equal(index[0]?.url, "/en/lab/builds/wallet", "maps a Lab build URL");
equal(
  index[1]?.url,
  "/en/map/shushan",
  "maps routes to the public map collection",
);
equal(JSON.stringify(raw), inputSnapshot, "does not mutate source entries");
complete("day21");
