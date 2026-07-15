import { complete, equal } from "../../src/shared/check.js";

export function formatMetric(kind: "distance", value: number): string;
export function formatMetric(kind: "duration", value: number): string;
export function formatMetric(
  kind: "distance" | "duration",
  value: number,
): string {
  void kind;
  void value;
  throw new Error("TODO: implement both overload branches");
}

export function normalizeResultLimit(limit?: number): number {
  // BUG: zero is a valid request meaning “return no results”.
  return limit || 20;
}

export function fail(message: string): never {
  throw new Error(message);
}

equal(formatMetric("distance", 11_500), "11.5 km", "formats metres as km");
equal(formatMetric("duration", 114), "1:54", "formats seconds as m:ss");
equal(normalizeResultLimit(0), 0, "preserves an explicit zero");
equal(
  normalizeResultLimit(undefined),
  20,
  "uses the default only for missing input",
);

complete("day03");
