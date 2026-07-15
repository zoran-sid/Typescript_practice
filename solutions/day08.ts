import { complete, equal } from "../src/shared/check.js";

const locales = ["zh-CN", "en"] as const;
type Locale = (typeof locales)[number];
const labSegments = {
  learning: "learning",
  build: "builds",
  security: "security",
} as const;
type LabType = keyof typeof labSegments;
type LabSegment = (typeof labSegments)[LabType];

function labSegment(type: LabType): LabSegment {
  return labSegments[type];
}
function localeFromPath(path: string): Locale {
  const segment = path.split("/").filter(Boolean)[0];
  return segment === "en" ? "en" : "zh-CN";
}
equal(labSegment("build"), "builds", "segment");
equal(localeFromPath("/zh-CN/content/"), "zh-CN", "Chinese");
equal(localeFromPath("/en/lab/"), "en", "English");
complete("day08 solution");
