import { complete, equal } from "../../src/shared/check.js";

type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };
interface ValidationError {
  code: "empty" | "not-number" | "out-of-range";
  message: string;
}

export function parseRating(value: unknown): Result<number, ValidationError> {
  void value;
  throw new Error("TODO: normalize a 5- or 10-point rating");
}

export function errorMessage(error: unknown): string {
  // BUG: JavaScript may throw strings, numbers, or other values.
  return (error as Error).message;
}

const rating = parseRating("8");
equal(
  rating.ok ? rating.value : -1,
  4,
  "converts a 10-point rating to five points",
);
const invalid = parseRating(12);
equal(
  invalid.ok ? "unexpected" : invalid.error.code,
  "out-of-range",
  "returns a structured validation failure",
);
equal(parseRating("").ok, false, "rejects empty input");
equal(
  errorMessage(new Error("disk full")),
  "disk full",
  "reads Error messages",
);
equal(errorMessage("disk full"), "disk full", "handles non-Error throws");
complete("day12");
