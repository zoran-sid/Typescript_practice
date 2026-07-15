import { complete, deepEqual, equal } from "../../src/shared/check.js";

type Locale = "zh-CN" | "en";
interface ExternalEntry {
  title: string;
  locale: Locale;
  tags: string[];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function parseExternalEntry(value: unknown): ExternalEntry | undefined {
  void value;
  throw new Error("TODO: validate every required field");
}

export function unsafeTitle(value: unknown): string | undefined {
  // BUG: explicit any hides both the missing property and non-string title.
  return (value as any).title.trim();
}

const parsed = parseExternalEntry({
  title: "Route Story",
  locale: "en",
  tags: ["run", "map"],
});
deepEqual(
  parsed,
  { title: "Route Story", locale: "en", tags: ["run", "map"] },
  "accepts a valid external record",
);
equal(
  parseExternalEntry({ title: "Bad", locale: "fr", tags: [] }),
  undefined,
  "rejects an unsupported locale",
);
equal(
  parseExternalEntry({ title: "Bad", locale: "en", tags: [1] }),
  undefined,
  "rejects non-string tags",
);
equal(
  unsafeTitle({ title: 42 }),
  undefined,
  "does not trust a non-string title",
);
complete("day11");
