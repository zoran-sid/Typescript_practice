import { complete, deepEqual, equal } from "../src/shared/check.js";

type Locale = "zh-CN" | "en";
interface ExternalEntry {
  title: string;
  locale: Locale;
  tags: string[];
}
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function parseExternalEntry(value: unknown): ExternalEntry | undefined {
  if (!isRecord(value)) return undefined;
  if (typeof value.title !== "string") return undefined;
  if (value.locale !== "zh-CN" && value.locale !== "en") return undefined;
  if (
    !Array.isArray(value.tags) ||
    !value.tags.every((tag): tag is string => typeof tag === "string")
  )
    return undefined;
  return { title: value.title, locale: value.locale, tags: value.tags };
}
function unsafeTitle(value: unknown): string | undefined {
  return isRecord(value) && typeof value.title === "string"
    ? value.title.trim()
    : undefined;
}
deepEqual(
  parseExternalEntry({
    title: "Route Story",
    locale: "en",
    tags: ["run", "map"],
  }),
  { title: "Route Story", locale: "en", tags: ["run", "map"] },
  "parse",
);
equal(
  parseExternalEntry({ title: "Bad", locale: "fr", tags: [] }),
  undefined,
  "locale",
);
equal(unsafeTitle({ title: 42 }), undefined, "title");
complete("day11 solution");
