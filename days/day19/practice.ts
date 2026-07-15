import { complete, equal } from "../../src/shared/check.js";

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false;
type Expect<T extends true> = T;
type Locale = "zh-CN" | "en";
type LocaleContract = Expect<Equal<Locale, "zh-CN" | "en">>;
void (0 as unknown as LocaleContract);

function acceptLocale(locale: Locale): Locale {
  return locale;
}
// @ts-expect-error “fr” must remain rejected by the public contract.
acceptLocale("fr");

export function normalizeAngle(angle: number): number {
  void angle;
  throw new Error("TODO: normalize to [0, 360)");
}

export function coordinateInBounds(lat: number, lng: number): boolean {
  // BUG: the geographic boundary itself is valid.
  return Math.abs(lat) < 90 && Math.abs(lng) < 180;
}

equal(normalizeAngle(-1), 359, "wraps negative angles");
equal(normalizeAngle(721), 1, "wraps multiple rotations");
equal(
  coordinateInBounds(90, 180),
  true,
  "includes positive coordinate boundaries",
);
equal(
  coordinateInBounds(-90, -180),
  true,
  "includes negative coordinate boundaries",
);
equal(coordinateInBounds(90.1, 0), false, "rejects out-of-range latitude");
complete("day19");
