import { complete, equal } from "../src/shared/check.js";

type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };
interface ValidationError {
  code: "empty" | "not-number" | "out-of-range";
  message: string;
}
function failure(
  code: ValidationError["code"],
  message: string,
): Result<never, ValidationError> {
  return { ok: false, error: { code, message } };
}
function parseRating(value: unknown): Result<number, ValidationError> {
  if (value === "" || value == null) return failure("empty", "Rating is empty");
  const numeric =
    typeof value === "number"
      ? value
      : typeof value === "string"
        ? Number(value)
        : Number.NaN;
  if (!Number.isFinite(numeric))
    return failure("not-number", "Rating is not numeric");
  if (numeric <= 0 || numeric > 10)
    return failure("out-of-range", "Rating must be within 0 and 10");
  return { ok: true, value: numeric > 5 ? numeric / 2 : numeric };
}
function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
const rating = parseRating("8");
equal(rating.ok ? rating.value : -1, 4, "rating");
const invalid = parseRating(12);
equal(invalid.ok ? "unexpected" : invalid.error.code, "out-of-range", "range");
equal(errorMessage("disk full"), "disk full", "unknown error");
complete("day12 solution");
