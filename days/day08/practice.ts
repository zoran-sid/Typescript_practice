import { complete, equal } from "../../src/shared/check.js";

const locales = ["zh-CN", "en"] as const;
type Locale = (typeof locales)[number];

const localeLabels = {
  "zh-CN": "中文",
  en: "English",
} as const satisfies Record<Locale, string>;

const labSegments = {
  learning: "learning",
  build: "builds",
  security: "security",
} as const;
type LabType = keyof typeof labSegments;
type LabSegment = (typeof labSegments)[LabType];

export function labSegment(type: LabType): LabSegment {
  void type;
  throw new Error("TODO: safely index labSegments");
}

export function localeFromPath(path: string): Locale {
  // BUG: “content” and many slugs contain the letters “en”.
  return path.includes("en") ? "en" : "zh-CN";
}

equal(
  localeLabels.en,
  "English",
  "preserves literal values while checking the record",
);
equal(labSegment("build"), "builds", "indexes with keyof");
equal(
  localeFromPath("/zh-CN/content/"),
  "zh-CN",
  "uses a path segment, not a substring",
);
equal(localeFromPath("/en/lab/"), "en", "recognizes English prefix");
complete("day08");
