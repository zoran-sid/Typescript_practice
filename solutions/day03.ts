import { complete, equal } from "../src/shared/check.js";

function formatMetric(kind: "distance", value: number): string;
function formatMetric(kind: "duration", value: number): string;
function formatMetric(kind: "distance" | "duration", value: number): string {
  if (kind === "distance") return `${Number((value / 1_000).toFixed(1))} km`;
  const rounded = Math.max(0, Math.round(value));
  return `${Math.floor(rounded / 60)}:${String(rounded % 60).padStart(2, "0")}`;
}

function normalizeResultLimit(limit?: number): number {
  return limit ?? 20;
}

equal(formatMetric("distance", 11_500), "11.5 km", "distance");
equal(formatMetric("duration", 114), "1:54", "duration");
equal(normalizeResultLimit(0), 0, "zero");
equal(normalizeResultLimit(), 20, "default");
complete("day03 solution");
